import { Grid } from "@mui/material";
import SidePanel from "./Columns/SidePanel";
import MainPanel from "./Columns/MainPanel";

const demoMode = false;

const sxObj = {
  width:"100vw",
  height:"100vh",
  // backdropFilter: "blur(5px)",
  padding:3,
  }

export default function Resume() {
  
  return (
    <Grid container spacing={0} id="resume-main" sx={sxObj}>
      <Grid item xs={12} md={3} id="resume-c1">
        {demoMode ? (
          <div className="w-full h-full bg-red-400 bg-opacity-40">rmt1</div>
        ):(
          <SidePanel />
        )}
      </Grid>
      <Grid item xs={12} md={9} id="resume-c2" sx={{paddingLeft:{sm:0, md:10.5, lg:3}}}>
        {demoMode ? (
          <div className="w-full h-full bg-blue-400 bg-opacity-40">rmt2</div>
        ):(
          <MainPanel />
        )}
      </Grid>
    </Grid>
  );
}
