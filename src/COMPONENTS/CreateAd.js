import React, { useState } from "react";
import Navbar from "./Navbar";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

const CreateAd = () => {
  let initialValue = {
    type_of_ad: "",
    value_of_ad: "",
  };
  const [values, setValues] = useState(initialValue);
  console.log(values);

  const handleInputChange = (e) => {
    const { name } = e.target;
    console.log(e.target);
  };
  return (
    <div className="maindashboard">
      <div className="navbarbox">
        <Navbar />
      </div>
      <div className="dashbox d-flex flex-column ">
        <p className="dashboardtext text-uppercase">Create Advertisement</p>
        <h4 className="mx-2 mb-3" style={{ fontFamily: "initial" }}>
          {" "}
          Select Type of Ad
        </h4>
        <FormControl className="mx-2">
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            // defaultValue="Image"
            name="radio-buttons-group"
            row
            onChange={(e) =>
              setValues({ ...values, type_of_ad: e.target.value })
            }
          >
            <FormControlLabel value="Image" control={<Radio />} label="Image" />
            <FormControlLabel
              value="Script"
              control={<Radio />}
              label="Script"
            />
            <FormControlLabel value="Text" control={<Radio />} label="Text" />
          </RadioGroup>
        </FormControl>
        {values.type_of_ad === "Image" && (
          <TextField
            id="outlined-basic"
            variant="outlined"
            type="file"
            className="mx-2"
            sx={{ width: "400px" }}
            hiddenLabel="Image"
            value={values.value_of_ad}
            name="Image"
            onChange={handleInputChange}
          />
        )}
        {values.type_of_ad === "Script" && (
          <TextField
            id="outlined-basic"
            className="mx-2"
            multiline
            label="Script"
            variant="outlined"
            sx={{ width: "400px" }}
            name="Script"
            value={values.value_of_ad}
            onChange={handleInputChange}
          />
        )}
        {values.type_of_ad === "Text" && (
          <TextField
            id="outlined-basic"
            className="mx-2"
            multiline
            label="Text"
            variant="outlined"
            sx={{ width: "400px" }}
            name="Text"
            value={values.value_of_ad}
            onChange={handleInputChange}
          />
        )}
        <Button
          style={{ backgroundColor: "red", width: "200px" }}
          variant="contained"
          className="mx-2 mt-4"
        >
          Create Ad
        </Button>
      </div>
    </div>
  );
};

export default CreateAd;
