// import React from "react";
// import Navbar from "../../components/Navbar";
// import Button from "@mui/material/Button";
// import CardComponent from "../../components/Card";
// import Typography from "@mui/material/Typography";
// import productData from "../../data";
// import CloseIcon from "@mui/icons-material/Close";
// import {
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   OutlinedInput,
//   Box,
// } from "@mui/material";

// function Home() {
//   return (
//     <div>
//       <Navbar />
//       <div className=" px-16 py-4 ">
//         <div className="flex  items-center gap-4 mb-4">
//           <div>
//             <img src="/22831.jpg" alt="category image" className="w-48 h-48" />
//           </div>
//           <div className="flex flex-col gap-2">
//             <div className="flex gap-2 items-center">
//               <p>efratul</p>
//               <p>(2424)</p>
//             </div>
//             <p className="w-[600px] text-justify">
//               Prow scuttle parrel provost Sail ho shrouds spirits boom
//               mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's
//               rutters.
//             </p>

//             <div>
//               <p>USD 19.00</p>
//               <p className="text-sm rounded-full bg-green-600 w-32 text-center">
//                 FREE shipping
//               </p>
//             </div>
//             <Button
//               variant="outlined"
//               sx={{
//                 width: 150,
//                 borderRadius: 20,
//                 color: "black",
//                 borderColor: "black",
//               }}
//             >
//               Shop this item
//             </Button>
//           </div>
//         </div>
//         <hr />
//         <div className="flex flex-col gap-2">
//           <div className="w-full">
//             <div className="flex gap-4 items-center justify-between">
//               <Button
//                 variant="outlined"
//                 sx={{
//                   width: 150,
//                   borderRadius: 20,
//                   color: "black",
//                   borderColor: "black",
//                 }}
//               >
//                 All Filters
//               </Button>
//               <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
//                 <Typography variant="body2" color="text.secondary">
//                   356 results,with Ads
//                 </Typography>
//                 <FormControl
//                   sx={{
//                     m: 1,
//                     minWidth: 250,
//                     borderRadius: "50px",
//                     border: "1px solid #ccc",
//                   }}
//                   size="small"
//                 >
//                   <InputLabel
//                     id="demo-select-small-label"
//                     sx={{
//                       position: "absolute",
//                       top: "50%",
//                       left: "12px",
//                       transform: "translateY(-50%)",
//                       backgroundColor: "white",
//                       px: 1,
//                       borderRadius: "50px",
//                       zIndex: 1,
//                     }}
//                   >
//                     Sort by
//                   </InputLabel>
//                   <Select
//                     labelId="demo-select-small-label"
//                     id="demo-select-small"
//                     defaultValue="Most relevant"
//                     sx={{
//                       borderRadius: "50px",
//                       "& .MuiSelect-select": {
//                         borderRadius: "50px",
//                       },
//                       "& .MuiOutlinedInput-notchedOutline": {
//                         borderRadius: "50px",
//                       },
//                       position: "relative",
//                       "& .MuiSelect-icon": {
//                         right: "12px",
//                       },
//                       borderColor: "black",
//                       paddingLeft: 9,
//                     }}
//                     input={<OutlinedInput label="Sort by" />}
//                     variant="outlined"
//                     displayEmpty
//                   >
//                     <MenuItem value="Most relevant">Most relevant</MenuItem>
//                     <MenuItem value="Price: low to high">
//                       Price: low to high
//                     </MenuItem>
//                     <MenuItem value="Price: high to low">
//                       Price: high to low
//                     </MenuItem>
//                     <MenuItem value="Top reviews">Top reviews</MenuItem>
//                     <MenuItem value="Newest">Newest</MenuItem>
//                   </Select>
//                 </FormControl>
//               </Box>
//             </div>
//           </div>
//           <div className="rounded-full px-4 py-2 bg-gray-300 flex gap-1 items-center w-36 text-black">
//             Easy's Picks
//             <CloseIcon sx={{}} />
//           </div>
//         </div>

//         <div className="w-full flex items-center justify-between mt-4">
//           <Typography>Easy's Picks</Typography>
//           <Button
//             variant="outlined"
//             sx={{
//               width: 120,
//               borderRadius: 20,
//               color: "black",
//               borderColor: "black",
//             }}
//           >
//             See More
//           </Button>
//         </div>

//         <div className="w-full grid grid-cols-4 mt-4">
//           {productData.products.map((data) => (
//             <CardComponent key={data?.product?.id} data={data?.product} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;


import React from "react";
import Navbar from "../../components/Navbar";
import Button from "@mui/material/Button";
import CardComponent from "../../components/Card";
import Typography from "@mui/material/Typography";
import productData from "../../data";
import CloseIcon from "@mui/icons-material/Close";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  Box,
} from "@mui/material";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="px-16 py-4">
        <div className="flex items-center gap-4 mb-4">
          <div>
            <img src="/22831.jpg" alt="category image" className="w-48 h-48" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <p>efratul</p>
              <p>(224)</p>
            </div>
            <Typography variant="body2" className="w-[600px] text-justify">
              Prow scuttle parrel provost Sail ho shrouds spirits boom
              mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's
              rutters.
            </Typography>
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

        <div className="w-full grid grid-cols-6 gap-4 mt-4">
          {productData.products.map((data) => (
            <CardComponent key={data?.product?.id} data={data?.product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
