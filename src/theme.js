import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 0,
      sm: 380,
      md: 834,
      lg: 1280,
      xl: 1440,
    },
  },
  spacing: 8,
  typography: {
    h2: {
      fontSize: 32,
      fontWeight: 700,
      marginTop: 78,
      lineHeight: "44px",
    },
    h3: {
      fontSize: 24,
      fontWeight: 500,
      marginBottom: 43,
      lineHeight: "44px",
    },
    h4: {
      fontSize: 20,
      fontWeight: 700,
      marginBottom: 20,
      lineHeight: "28px",
    },
  },

  overrides: {
    MuiRadio: {
      root: {
        color: "#ABABAB"
      },
      colorSecondary: {
        "&.Mui-checked" : {
          color: "#333333"
        }
      }
    },
    MuiTypography: {
      body1: {
        fontSize: 18,
        lineHeight: "26px",
      },
    },
    MuiFab: {
      secondary: {
        backgroundColor: "#8EA7FF",
        "&:hover": {
          backgroundColor: "#7291FF",
        },
      },
    },

    MuiButton: {
      root: {
        fontSize: 16,
      },
      contained: {
        color: "white",
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none",
        },
      },
      outlined: {
        padding: "6px 15px",
        "&:hover": {
          backgroundColor: "#F8F8F8",
        },
      },
    },

    MuiOutlinedInput: {
      root: {
        borderRadius: 10,
      },
    },

    MuiTooltip: {
      tooltip: {
        fontSize: "13px",
        backgroundColor: "#8EA7FF",
      },
      arrow: {
        color: "#8EA7FF",
      },
    },
    MuiPaper: {
      root: {
        color: "#333333"
      },
    },
  },
});

export default theme;
