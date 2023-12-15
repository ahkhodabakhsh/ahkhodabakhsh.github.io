import { Grid } from "@mui/material";
import EducationExperience from "../Cards/EducationExperience";
import Publications from "../Cards/Publications";
import Skills from "../Cards/Skills/Skills";
import Interests from "../Cards/Interests";
import TeachingExperience from "../Cards/TeachingExperience";
import Copyright from "../Cards/Copyright";
import ConferencePublications from "../Cards/ConferencePublications";
import Languages from "../Cards/Languages";


export default function MainPanel(){
    return(
        <Grid container direction="column" id="main-panel">
            <Grid item xs={12} id="main-panel-c1">
                <EducationExperience/>
            </Grid>
            <Grid item xs={12} id="main-panel-c2">
                <Publications/>
            </Grid>
            <Grid item xs={12} id="main-panel-c3">
                <Skills/>
            </Grid>
            <Grid item xs={12} id="main-panel-c4">
                <TeachingExperience/>
            </Grid>
            <Grid item xs={12} id="main-panel-c4">
                <ConferencePublications/>
            </Grid>
            {/* <Grid item xs={12} id="main-panel-c4">
                <Interests/>
            </Grid> */}
            <Grid item xs={12} id="main-panel-c4">
                <Languages/>
            </Grid>
            <Grid item xs={12} id="copyright">
                <Copyright/>
            </Grid>
        </Grid>
    )
}