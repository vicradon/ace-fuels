import { createTheme } from "@mui/material/styles";
import { pxToRem } from "../utils/pxToRem";

const theme = createTheme({
  typography: {
    fontFamily: ["Baloo Tamma 2", "cursive"].join(","),
    fontWeightBold: 700,
    fontWeightMedium: 500,
    fontWeightRegular: 400,
    h1: {
      fontSize: pxToRem(36),
      color: "#000",
    },
    h2: {
      fontSize: pxToRem(32),
      color: "#000",
    },
    h3: {
      fontSize: pxToRem(29),
      color: "#000",
    },
    h4: {
      fontSize: pxToRem(26),
      color: "#000",
    },
    h5: {
      fontSize: pxToRem(23),
      color: "#000",
    },
    subtitle1: {
      fontSize: pxToRem(18),
    },
    subtitle2: {
      fontSize: pxToRem(16),
    },
    body1: {
      fontSize: pxToRem(14),
    },
    body2: {
      fontSize: pxToRem(13),
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },
  },
});

export default theme;
