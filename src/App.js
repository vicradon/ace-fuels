import { Typography, Box } from "@mui/material";
import Navbar from "./components/Navbar";

import Carousel from "components/Carousel";

import { pxToRem } from "utils/pxToRem";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Box mb={5}>
        <Carousel />
      </Box>
    </div>
  );
}

export default App;
