import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Button from "@mui/material/Button";
import CardComponent from "../../components/Card";
import Typography from "@mui/material/Typography";
import productData from "../../data";
import CloseIcon from "@mui/icons-material/Close";
import TuneIcon from "@mui/icons-material/Tune";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  Box,
} from "@mui/material";

function Home() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobileView = windowDimensions.width <= 768;
  return (
    <div className=" overflow-hidden">
      <Navbar />
      <div className="w-full p-4 lg:px-16 py-4">
        <div className="px-4 w-full flex gap-10 mb-4">
          <div className=" w-1/2 lg:w-52 relative rounded-md">
          <div className="absolute top-2 right-2 p-1 bg-white rounded-full">
          <FavoriteBorderIcon />
          </div>
            <img
              src="/22831.jpg"
              alt="category-image"
              className="w-full h-48 object-cover rounded-md"
            />
          </div>
          <div className="flex flex-col items-start gap-2 w-1/2 lg:w-2/3">
            <div className="flex gap-2 items-center">
              <p>efratul</p>
              <p>(224)</p>
            </div>
            {isMobileView ? (
              <Typography
                variant="body2"
                className="w-64 ext-justify md:truncate"
                sx={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  maxWidth: "60%",
                }}
              >
                Prow scuttle parrel provost Sail ho shrouds spirits boom
                mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's
                rutters.
              </Typography>
            ) : (
              <Typography
                variant="body2"
                className="lg:w-52 w-40 text-justify "
              >
                Prow scuttle parrel provost Sail ho shrouds spirits boom
                mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's
                rutters.
              </Typography>
            )}
            <div>
              <Typography variant="h6">USD 19.00</Typography>
              <Typography
                variant="body2"
                className="text-sm rounded-full bg-green-600 w-32 text-center"
              >
                FREE shipping
              </Typography>
            </div>
            <Button
              variant="outlined"
              sx={{
                width: 150,
                borderRadius: 20,
                color: "black",
                borderColor: "black",
              }}
            >
              Shop this item
            </Button>
          </div>
        </div>

        <hr />

        {isMobileView ? (
          <div className="w-full p-2 flex relative mb-10">
            <div className="w-10 h-10 border-2 border-gray-950 rounded-full p-2 self-end absolute right-2 top-2">
              <TuneIcon />
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <div className="w-full">
              <div className="flex gap-4 items-center justify-between">
                <Button
                  variant="outlined"
                  sx={{
                    width: 150,
                    borderRadius: 20,
                    color: "black",
                    borderColor: "black",
                  }}
                >
                  All Filters
                </Button>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    356 results, with Ads
                  </Typography>
                  <FormControl
                    sx={{
                      m: 1,
                      minWidth: 250,
                      borderRadius: "50px",
                      border: "1px solid #ccc",
                    }}
                    size="small"
                  >
                    <InputLabel
                      id="demo-select-small-label"
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "12px",
                        transform: "translateY(-50%)",
                        backgroundColor: "white",
                        px: 1,
                        borderRadius: "50px",
                        zIndex: 1,
                      }}
                    >
                      Sort by
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      defaultValue="Most relevant"
                      sx={{
                        borderRadius: "50px",
                        "& .MuiSelect-select": {
                          borderRadius: "50px",
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderRadius: "50px",
                        },
                        position: "relative",
                        "& .MuiSelect-icon": {
                          right: "12px",
                        },
                        borderColor: "black",
                        paddingLeft: 9,
                      }}
                      input={<OutlinedInput label="Sort by" />}
                      variant="outlined"
                      displayEmpty
                    >
                      <MenuItem value="Most relevant">Most relevant</MenuItem>
                      <MenuItem value="Price: low to high">
                        Price: low to high
                      </MenuItem>
                      <MenuItem value="Price: high to low">
                        Price: high to low
                      </MenuItem>
                      <MenuItem value="Top reviews">Top reviews</MenuItem>
                      <MenuItem value="Newest">Newest</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
            </div>
            <div className="rounded-full px-4 py-2 bg-gray-300 flex gap-1 items-center w-36 text-black">
              Etsy's Picks
              <CloseIcon />
            </div>
          </div>
        )}

        {isMobileView ? (
          <div className="px-4   flex gap-1 items-center w-36 text-black">
            Etsy's Picks
            <CloseIcon />
          </div>
        ) : (
          <div className="w-full flex items-center justify-between mt-4">
            <Typography>Etsy's Picks</Typography>
            <Button
              variant="outlined"
              sx={{
                width: 120,
                borderRadius: 20,
                color: "black",
                borderColor: "black",
              }}
            >
              See More
            </Button>
          </div>
        )}

        <div className="w-full grid grid-cols-2 lg:grid-cols-6  gap-4 mt-4">
          {productData.products.map((data) => (
            <CardComponent key={data?.product?.id} data={data?.product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
