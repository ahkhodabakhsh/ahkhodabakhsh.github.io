import { Grid } from "@mui/material";
import Education from "./Education";
import Experience from "./Experience";

export default function EducationExperience(){
    return(
        <Grid container id="edu-exp">
            <Grid item xs={12} md={6} id="edu-exp-c1">
                <Education/>
            </Grid>
            <Grid item xs={12} md={6} id="edu-exp-c2">
                <Experience/>
            </Grid>
        </Grid>
    )
}