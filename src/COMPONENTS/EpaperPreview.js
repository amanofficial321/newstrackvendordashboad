import React, { useEffect, useRef, useState } from "react";
import "../CSS/EpaperPreview.scss";
import { Viewer, Worker, SpecialZoomLevel } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const EpaperPreview = () => {
  const location = useLocation();
  // console.log(location);
  const data = location.state?.pdf;

  const [viewPdf, setViewPdf] = useState(null);
  const page = useRef(0);
  const orgHeight = location.state.sizes[0];
  // console.log(orgHeight, "height");
  const [myHeight, setMyHeight] = useState(0);
  const zoom = useRef(0);
  const [button, setButton] = useState(false);

  {
    let reader = new FileReader();
    reader.readAsDataURL(data);
    reader.onload = (e) => {
      setViewPdf(e.target.result);
    };
  }

  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const handlePageChange = (e: PageChangeEvent) => {
    // console.log("Page no.", e.currentPage);
    page.current = e.currentPage;
  };

  const handleZoom = (e: ZoomEvent) => {
    console.log(`Zoom to ${e.scale}`);
    zoom.current = e.scale;
  };

  const handleDocumentLoad = (e: DocumentLoadEvent) => {
    console.log(`File Rendered Successfully`);
    var element = document.querySelector(".rpv-core__page-layer--single");
    var rect = element.getBoundingClientRect();
    // console.log(rect);
    setMyHeight(rect.height);

    zoom.current = rect.height / orgHeight;
    setOffsetX(rect.x);
    setOffsetY(0);
  };

  const startX = useRef(0);
  const startY = useRef(0);
  const endX = useRef(null);
  const endY = useRef(null);

  const handleMouseDown = (event) => {
    const { clientX, clientY } = event;
    console.log(event.target.offsetParent.offsetLeft);
    setOffsetX(event.target.offsetParent.offsetLeft);
    if (button !== true) {
      endX.current = null;
      endY.current = null;
      startX.current = clientX;
      startY.current = clientY;
    } else return;
  };
  const [finalCo, setFinalCo] = useState({
    minX: 0,
    minY: 0,
    maxX: 0,
    maxY: 0,
  });

  const handleMouseUp = (event) => {
    const { clientX, clientY } = event;

    if (button === true) {
      return;
    }
    endX.current = clientX;
    endY.current = clientY;

    if (offsetY >= 0) {
      // console.log(offsetY);
      // console.log("x-y start", startX - offsetX, startY - offsetY);
      // console.log("x-y end", clientX - offsetX, clientY - offsetY);
      setFinalCo({
        minX: (startX.current - offsetX) / zoom.current,
        minY: (startY.current - offsetY) / zoom.current,
        maxX: (clientX - offsetX) / zoom.current,
        maxY: (clientY - offsetY) / zoom.current,
      });
      if (startX.current !== clientX && startY.current !== clientY) {
        setButton(true);
      }
    } else {
      return;
    }
  };
  const [extractedData, setExtractedData] = useState(null);

  const fetchData = async (e) => {
    e.stopPropagation();
    setExtractedData(null);
    startX.current = null;
    startY.current = null;
    endX.current = null;
    endY.current = null;
    setButton(false);
    var formData = new FormData();
    console.log(finalCo);
    console.log(page.current);
    formData.append("pdf", data);
    try {
      const response = await axios.post(
        `http://174.138.101.222:5000/api/extract?x_min=${Math.round(
          finalCo.minX
        )}&x_max=${Math.round(finalCo.maxX)}&y_min=${Math.round(
          finalCo.minY
        )}&y_max=${Math.round(finalCo.maxY)}&page_number=${page.current}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
      setExtractedData(response.data);
    } catch (error) {
      console.log(error);
      alert();
    }
  };

  const getSelectionStyles = () => {
    if (startX.current && startY.current && endX.current && endY.current) {
      const left = Math.min(startX.current, endX.current);
      const top = Math.min(startY.current, endY.current);
      const width = Math.abs(startX.current - endX.current);
      const height = Math.abs(startY.current - endY.current);

      return {
        position: "absolute",
        left: left + "px",
        top: top + "px",
        width: width + "px",
        height: height + "px",
        border: "2px solid blue",
        backgroundColor: "rgba(0, 0, 255, 0.1)",
        pointerEvents: "none",
      };
    } else {
      return {};
    }
  };

  const font = "bhaskar";

  return (
    <div className="home-container">
      <div
        className="pdf-container"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
          {viewPdf && (
            <>
              <Viewer
                initialPage={0}
                fileUrl={viewPdf}
                defaultScale={SpecialZoomLevel.PageFit}
                onPageChange={handlePageChange}
                onZoom={handleZoom}
                onDocumentLoad={handleDocumentLoad}
              />
              {button && (
                <button
                  onClick={fetchData}
                  style={{ position: "absolute", top: "20%", right: "30%" }}
                >
                  Fetch Data
                </button>
              )}
            </>
          )}
        </Worker>
      </div>

      <div style={getSelectionStyles()}></div>
      {/* <div className="preview-div">
        {extractedData ? (
          extractedData.output_content2.map((data) => {
            return (
              <p className="para" style={{ fontFamily: font }}>
                {data[1]}
              </p>
            );
          })
        ) : (
          <CircularProgress className="circularProgress" color="inherit" />
        )}
        {extractedData && (
          <img src={`http://174.138.101.222:5000${extractedData?.image}`} />
        )}
      </div> */}
      <div className="preview-div">
        {extractedData ? (
          <>
            {extractedData.output_content2.map((data) => (
              <p className="para" style={{ fontFamily: font }}>
                {data[1]}
              </p>
            ))}
            {/* <img src={`http://174.138.101.222:5000${extractedData?.image}`} /> */}
            <img
              src={`http://174.138.101.222:5000${
                extractedData?.image
              }?timestamp=${Date.now()}`}
            />
          </>
        ) : (
          <CircularProgress className="circularProgress" color="inherit" />
        )}
      </div>
    </div>
  );
};

export default EpaperPreview;
