import resume from "@/data/resume.json";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from "@mui/material";
import { motion } from "framer-motion";
import { cards } from "@/components/GeneralStylings";
import Grid from '@mui/material/Grid';
import Devider from '@mui/material/Divider';
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
        keyKnowledge: "Deep Learning, Probability Density Distribution Time-Evolution, Fokker-Planck-Kolmogorov Equation, Monte Carlo Simulation, Model Predictive Control (MPC), Stochastic Differential Equation (SDE), Piezoelectric Benders",
    },
    {
        title:"Nonlinear dynamics modeling using Physics-Informed Neural Networks (PINNs).",
        keyKnowledge: "Physics-Informed Neural Networks, Deep Learning, Nonlinear Dynamics, Adaptive Sampling, Sensitivity Analysis, Surrogate Modeling",
    },
    {
        title:"Developed a software framework for Multidisciplinary Design Optimization (MDO), focusing on aircraft reliability.",
        keyKnowledge: "Multidisciplinary Design Optimization (MDO), Surrogate Modeling (Gaussion Process Regression), Reliability Analysis, Uncertainty Quantification, Monte Carlo Simulation",
    },
    {
        title:"Executed the design and implementation of a simulator for attitude determination and controlling satellite attitude. ",
        keyKnowledge: "Bayesian Inference, Nonlinear Filter (UKF and Particle Filter), Sliding-Mode Controller, OpenCV",
    },
    
    {
        title:"Implemented scheduling and control of a Stewart platform motion",
        keyKnowledge: "ROS, Model Predictive Control, Hardware-in-the-Loop (HIL), Radial Basis Function (RBF)",
    },
    {
        title:"Developed and implemented Nonlinear Aircraft Flight Simulator Technology (NAFST) ",
        keyKnowledge: "Model-Based Design, Auto-Code Generation, Aerodynamics, Flight Dynamics",
    },
    {
        title:"Conducted conceptual design, analysis, and detailed design of a Pneumatic Actuator",
        keyKnowledge: "Fluid Dynamics, Computer-Aided Design",
    },
    {
        title:"Implemented an advanced satellite simulator",
        keyKnowledge: "Model-Based Design, Systems Modeling Language (SysML), Real-Time Simulation, Hardware-in-the-Loop (HIL), Processor-in-the-Loop (PIL), Software-in-the-Loop (SIL), Rapid Control Prototyping (RCP)",
    },
    {
        title:"Optimized the design of a sub-scale supersonic wind tunnel as part of research experiences.",
        keyKnowledge: "Multi-Objective Optimization, Genetic Algorithm, Computational Fluid Dynamics, Aerodynamics, Wind Tunnel Design",
    },
    {
        title:"Conceptualized and executed the construction of a reduced-scale supersonic wind tunnel.",
        keyKnowledge: "Computer-Aided Design, Computational Fluid Dynamics, Aerodynamics, Wind Tunnel Design, Rapid Prototyping, Wire Cutting",
    },
];

type ResearchProject = {
    title:string;
    keyKnowledge:string | null;
}

function ProjectInfo({project}:{project:ResearchProject}){
    return(
        <ListItem disablePadding>
            <ListItemButton sx={{ borderRadius:2, minHeight:"190px"}}>
                <ListItemIcon>
                    <FontAwesomeIcon icon={faFlask}/>
                </ListItemIcon>
                <ListItemText
                    primary={
                        <Typography variant={cards.content.variant} color={cards.content.color}>
                            <b>{project.title}</b>
                        </Typography>
                    }
                    secondaryTypographyProps={{component:'div'}}
                    secondary={
                        <Grid container>
                            <Grid item xs={3}>
                                <Typography variant={cards.content.variant} color={cards.content.color}>
                                    <br /><b>Key Concepts </b>
                                </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography variant={cards.content.variant} color={cards.content.color}>
                                    <br />{project.keyKnowledge}
                                </Typography>
                            </Grid>
                        </Grid>
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
                                        (idx%2===0)?(
                                            <div key={"prjinfo"+idx}>
                                                <ProjectInfo project={prj}/>
                                                <Devider sx={{ mt:2, mb:2, }}/>
                                            </div>
                                            ):(null)
                                    ))
                                    }
                                </List>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <List>
                                    {projects.map((prj, idx)=>(
                                        (idx%2===1)?(
                                            <div key={"prjinfo"+idx}>
                                                <ProjectInfo project={prj}/>
                                                <Devider sx={{ mt:2, mb:2, }}/>
                                            </div>
                                            ):(null)
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