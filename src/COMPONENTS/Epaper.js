import React, { useEffect, useState } from "react";
import "../CSS/Epaper.scss";
import Navbar from "./Navbar";
import Box from "@mui/material/Box";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Epaper = () => {
  const navigate = useNavigate();

  const [age, setAge] = useState();
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [pdf, setPdf] = useState();
  const [size, setSize] = useState({});

  const fetchPageSize = async (e) => {
    let formdata = new FormData();
    formdata.append("pdf", pdf);
    try {
      const response = await axios.post(
        "http://174.138.101.222:5000/api/coordinate",
        formdata,
        {
          headers: {
            "Content-type": "multipart/form-date",
          },
        }
      );

      response.data.coordinates.forEach((item, index) => {
        setSize((prevSize) => ({
          ...prevSize,
          [index]: item[1],
        }));
      });
      // navigate("/EpaperPreview", {
      //   state: {
      //     pdf: pdf,
      //     sizes: size,
      //   },
      // });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (Object.keys(size).length > 0) {
      navigate("/EpaperPreview", {
        state: {
          pdf: pdf,
          sizes: size,
        },
      });
    }
  }, [size, navigate, pdf]);

  return (
    <>
      <div className="Epapermaincontainer">
        <div className="epaperbox1">
          <Navbar />
        </div>
        <div className="epaperbox2">
          <div className="epaperheader">
            <p className="epaperheading">
              {" "}
              <ArrowBackIcon onClick={() => navigate(-1)} className="pointer" />
              E-PAPER
            </p>
          </div>
          <Box
            component="div"
            sx={{
              mt: 15,
            }}
          >
            <Box
              component="grid"
              sx={{
                "& > :not(style)": { m: 3, width: "40ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="outlined-basic" label="NAME" variant="outlined" />
              <TextField id="outlined-basic" label="STATE" variant="outlined" />
              <TextField id="outlined-basic" label="CITY" variant="outlined" />
              <TextField
                id="outlined-basic"
                label="PROVINCE"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="ADD TAG"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="DATE OF PUBLICATION"
                variant="outlined"
              />

              <FormControl>
                <InputLabel id="demo-simple-select-helper-label">
                  CATEGORY
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={age}
                  label="CATEGORY"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel id="demo-simple-select-helper-label">
                  AGENCY NAME
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={age}
                  label="AGENCY NAME"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel id="demo-simple-select-helper-label">
                  NEWS PAPER
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={age}
                  label="NEWS PAPER"
                  onChange={handleChange}
                >
                  <MenuItem value={""}>None</MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <div className="bottom">
            <div className="inputpdf">
              <label htmlFor="inputSinglePdf" className="inputTaglabel">
                UPLOAD PDF <PictureAsPdfIcon className="pdficon" />
                <p className="pdftext">SINGLE PAGE PDF</p>
              </label>
              <input
                type="file"
                className="inputTag"
                id="inputSinglePdf"
                onChange={(e) => {
                  setPdf(e.target.files[0]);
                  setSize({});
                }}
              />
            </div>

            <div className="inputpdf">
              <label htmlFor="inputMultiPdf" className="inputTaglabel">
                UPLOAD PDF <PictureAsPdfIcon className="pdficon" />
                <p className="pdftext">MULTIPLE PAGE PDF</p>
              </label>

              <input
                type="file"
                className="inputTag"
                id="inputMultiPdf"
                onChange={(e) => {
                  setPdf(e.target.files[0]);
                  setSize({});
                }}
              />
            </div>
          </div>

          <button
            className="btn btn-primary btn-lg epaperbtn"
            onClick={() => fetchPageSize()}
          >
            Preview
          </button>
        </div>
      </div>
    </>
  );
};

export default Epaper;
