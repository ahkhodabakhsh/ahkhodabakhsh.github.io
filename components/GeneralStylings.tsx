// General Stylings
import { createTheme } from "@mui/material";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const cards = {
  style:{
    background:"linear-gradient(180deg, rgba(0,0,10,0.7) 0%, rgba(0,0,0,0.3) 60%)",
    boxShadow:'none',
    minHeight: '110px',
    display: 'flex',
    backdropFilter: "blur(10px)",
    borderRadius: 3,
    margin:1,
  },
  title:{
    variant:"h6",
    color:"primary.main",
  },
  content:{
    variant:"body2",
    color: "text-primary",
  },
  motion:{
    hover:{
      scale:1.03,
    },
    tap:{
      scale:1.02
    }
  },
  theme: darkTheme,
  linkHoverAnim:{
    transition: { duration: 0.1 },
    scale: 1.1,
    rotate: [0, 5, -5, 5, -5, 0],
    color: "rgb(255, 146, 9)",
  },
  iconSize: {
    inLine:"lg", // "xs" | "sm" | "md" | "lg" | "`x`l" | undefined;
    standAlone: "2x", // "xs" | "sm" | "md" | "lg" | "`x`l" | undefined;
  },
};



  


