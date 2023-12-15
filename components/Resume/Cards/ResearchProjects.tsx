import resume from "@/data/resume.json";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from "@mui/material";
import { motion } from "framer-motion";
import { cards } from "@/components/GeneralStylings";
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { faFlask } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const projects = [
    {
        title:"Conceptualized and designed the smart wing idea for Gust Load Alleviation.",
    },
    {
        title:"Developed a software framework for Multidisciplinary Design Optimization (MDO), focusing on aircraft reliability.",
    },
    {
        title:"Executed the design and implementation of a simulator for controlling satellite attitude. ",
    },
    {
        title:"Optimized the design of a sub-scale supersonic wind tunnel as part of research experiences.",
    },
    {
        title:"Conceptualized and executed the construction of a reduced-scale supersonic wind tunnel.",
    },
    {
        title:"Implemented scheduling and control of a Stewart platform motion",
    },
    {
        title:"Developed and implemented Aircraft Flight Simulator Technology (AFST) ",
    },
    {
        title:"Conducted conceptual design, analysis, and detailed design of a Pneumatic Actuator",
    },
    {
        title:"Implemented an advanced satellite simulator",
    },

];

type ResearchProject = {
    title:string;
    // supervisor:string | null;
}

function ProjectInfo({project}:{project:ResearchProject}){
    return(
        <ListItem disablePadding>
            <ListItemButton sx={{ borderRadius:2, }}>
                <ListItemIcon>
                    <FontAwesomeIcon icon={faFlask}/>
                </ListItemIcon>
                <ListItemText
                    primary={
                        <Typography variant={cards.content.variant} color={cards.content.color}>
                            {project.title}
                        </Typography>
                    }
                />
            </ListItemButton>
        </ListItem>
    )
}

export default function ResearchProjects(){
    return(
        <ThemeProvider theme={cards.theme}>
            <motion.div
                whileHover={cards.motion.hover}
                whileTap={cards.motion.tap}>
                <Card sx={cards.style}>
                    <CardContent>
                        <Typography gutterBottom
                                    variant={cards.title.variant}
                                    component="div"
                                    color={cards.title.color}>
                            Selected Research Projects
                        </Typography>
                        <Grid container>
                        <Grid item xs={12} md={6}>
                                <List>
                                    {projects.map((prj, idx)=>(
                                        (idx%2===0)?(<ProjectInfo project={prj} key={"prj"+idx}/>):(null)
                                    ))
                                    }
                                </List>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <List>
                                    {projects.map((prj, idx)=>(
                                        (idx%2===1)?(<ProjectInfo project={prj} key={"prj"+idx}/>):(null)
                                    ))
                                    }
                                </List>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </motion.div>
        </ThemeProvider>
    )
}