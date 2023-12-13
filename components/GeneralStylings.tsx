// General Stylings
import { createTheme } from "@mui/material";
import { TypographyProps } from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type SizeProp = React.ComponentProps<typeof FontAwesomeIcon>['size'];
type Variant = TypographyProps['variant'];

const selectedTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const titleObj:{variant:Variant, color:string} = {
  variant: 'h6',
  color:"primary.main",
};

const contentObj:{variant:Variant, color:string} = {
  variant: 'body2',
  color: "text-primary",
};

const iconSizeObj:{inLine:SizeProp, standAlone:SizeProp} = {
  inLine:"lg", // "xs" | "sm" | "md" | "lg" | "`x`l" | undefined;
  standAlone: "2x", // "xs" | "sm" | "md" | "lg" | "`x`l" | undefined;
};

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
  title: titleObj,
  content: contentObj,
  motion:{
    hover:{
      scale:1.03,
    },
    tap:{
      scale:1.02
    }
  },
  theme: selectedTheme,
  linkHoverAnim:{
    transition: { duration: 0.1 },
    scale: 1.1,
    rotate: [0, 5, -5, 5, -5, 0],
    color: "rgb(255, 146, 9)",
  },
  iconSize: iconSizeObj,
};



  


