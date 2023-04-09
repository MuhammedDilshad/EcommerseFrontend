import React, { useState } from "react";
import { productDetails } from "../../Assist/Assist";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { WiMoonAltNew } from "react-icons/wi";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useNavigate } from "react-router-dom";
import Select from "@mui/material/Select";

import "./ProductDetails.css";
import ProDiscription from "../ProDiscription/ProDiscription";

const ProductDetails = ({ id }) => {
  const [age, setAge] = useState("");
  const navigate = useNavigate();
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const data = productDetails.find((id) => id === id);

  return (
    <div>
      <div className="productDetails">
        <div className="secOne">
          <img className="singleImge" src={data.ImageOne} alt="" />
        </div>
        <div className="details">
          <h4 className="details">HOME/SHOP/WOMEN/SHOP</h4>
          <h1>{data.Name}</h1>
          <div>
            {[...Array(4)].map(() => (
              <AiFillStar style={{ color: "red" }} />
            ))}
            <AiOutlineStar style={{}} />
          </div>
          <h1>${data.Price}</h1>
          <p>{data.para}</p>
          <div>
            <Box sx={{ minWidth: 120 }}>
              <FormControl className="modalis">
                <InputLabel id="demo-simple-select-label">
                  Select Size
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Small S</MenuItem>
                  <MenuItem value={20}>Medium M</MenuItem>
                  <MenuItem value={30}>Large L</MenuItem>
                  <MenuItem value={30}>Xtra Large XL</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>

          <button
            className="crtBtn"
            onClick={() => navigate(`/Cart/${data.dataId}`)}
          >
            ADD TO CART
          </button>
          <p>Category:{data.Category}</p>
          <p>Tags:Modern,Design,cotton</p>
          <div>
            {[...Array(5)].map(() => (
              <WiMoonAltNew style={{ color: "gray", width: "20px" }} />
            ))}
          </div>
        </div>
      </div>
      <ProDiscription />
    </div>
  );
};

export default ProductDetails;
