import resume from "@/data/resume.json";
import Card from '@mui/material/Card';
import { Grid } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from "@mui/material";
import { motion } from "framer-motion";
import { cards } from "@/components/GeneralStylings";
import ProgrammingSkill from "./Programming";
import SoftwareSkill from "./Software";
import DLFrameworkSkill from "./DLFrameworks";
import SpecialSkill from "./Special";

export default function Skills(){
    return(
        <ThemeProvider theme={cards.theme}>
            <motion.div
                whileHover={cards.motion.hover}
                whileTap={cards.motion.tap} className="w-full">
                <Card sx={cards.style}
                      className="w-full">
                    <CardContent className="w-full">
                        <Typography gutterBottom
                                    variant={cards.title.variant}
                                    component="div"
                                    color={cards.title.color}>
                            Skills
                        </Typography>
                        <Grid container spacing={0} className="w-full">
                            <Grid item xs={12} md={6} lg={3}>
                                <SoftwareSkill/>
                            </Grid>
                            <Grid item xs={12} md={6} lg={3}>
                                <ProgrammingSkill/>
                            </Grid>
                            <Grid item xs={12} md={6} lg={3}>
                                <SpecialSkill/>
                            </Grid>
                            <Grid item xs={12} md={6} lg={3}>
                                <DLFrameworkSkill/>
                            </Grid>
                            
                        </Grid>
                        
                        {/* <Typography variant={cards.content.variant} color={cards.content.color}>
                            Selected Reaserch Projects<br/><br/>
                            Conference Papers<br/><br/>
                            Language<br/><br/>
                            Research Interest
                            Scopus profile
                        </Typography> */}
                    </CardContent>
                </Card>
            </motion.div>
        </ThemeProvider>
    )
}