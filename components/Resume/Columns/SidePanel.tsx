import Title from "../Cards/Title/Title";
import AboutMe from "../Cards/AboutMe";
import ContactInfo from "../Cards/ContactInfo";
import SocialMedia from "../Cards/SocialMedia";
import SocialProfiles from "../Cards/SocialProfiles";
import { Grid } from "@mui/material";

const demoMode = false;

export default function SidePanel(){
    return(
        <Grid   container
                direction="column"
                id="side-panel">
            <Grid item xs={12} id="sp-slot-1">
                {demoMode?(
                    <div className="w-full h-full bg-red-400 bg-opacity-40">sp1</div>
                ):(
                    <Title />
                )}
            </Grid>
            <Grid item xs={12} id="sp-slot-2">
                {demoMode?(
                    <div className="w-full h-full bg-green-400 bg-opacity-40">sp1</div>
                ):(
                    <AboutMe/>
                )}
            </Grid>
            <Grid item xs={12} id="sp-slot-3">
                {demoMode?(
                    <div className="w-full h-full bg-blue-400 bg-opacity-40">sp1</div>
                ):(
                    <ContactInfo />
                )}
            </Grid>
            <Grid item xs={12} id="sp-slot-4">
                {demoMode?(
                    <div className="w-full h-full bg-white-400 bg-opacity-40">sp1</div>
                ):(
                    <SocialProfiles/>
                )}
            </Grid>
            <Grid item xs={12} id="sp-slot-4">
                {demoMode?(
                    <div className="w-full h-full bg-white-400 bg-opacity-40">sp1</div>
                ):(
                    <SocialMedia/>
                )}
            </Grid>
        </Grid>        
    )
}