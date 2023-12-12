import resume from "@/data/resume.json";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from "@mui/material";
import { motion } from "framer-motion";
import { cards } from "@/components/GeneralStylings";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Grid } from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";

const teachingExp = [
    {
        position: "Teaching Assistant",
        institution: "Sharif University of Technology",
        startDate: "2017",
        endDate: "2021",
        title: "Flight Dynamics",
    },
    {
        position: "Teaching Assistant",
        institution: "Sharif University of Technology",
        startDate: "2021",
        endDate: "2021",
        title: "Flight Tests",
    },
    {
        position: "Teaching Assistant",
        institution: "Sharif University of Technology",
        startDate: "2013",
        endDate: "2013",
        title: "Automatic Control",
    },
    {
        position: "Instructor",
        institution: "Sharif University of Technology",
        startDate: "2015",
        endDate: "2015",
        title: "MATLAB Introductory Course",
    },
    {
        position: "Instructor",
        institution: "Sharif University of Technology",
        startDate: "2015",
        endDate: "2015",
        title: "C# Coding of Engineering Concepts",
    },
    {
        position: "Instructor",
        institution: "K.N.Toosi University of Technology",
        startDate: "2015",
        endDate: "2015",
        title: "Intro. to LabView control loop implementation",
    },
    {
        position: "Instructor",
        institution: "Space Systems Design Institute (KNTU)",
        startDate: "2015",
        endDate: "2015",
        title: "Intro. to LabView control loop implementation",
    },
    {
        position: "Instructor",
        institution: "Space Systems Design Institute (KNTU)",
        startDate: "2014",
        endDate: "2014",
        title: "MATLAB and SIMULINK",
    },
    {
        position: "Instructor",
        institution: "K.N.Toosi University of Technology",
        startDate: "2011",
        endDate: "2011",
        title: "MATLAB Introductory Course",
    },
    {
        position: "Instructor",
        institution: "Fajr Highschool",
        startDate: "2011",
        endDate: "2009",
        title: "Introductory Course to Astronomy and Astrophysics",
    },
];

type TeachingExp = {
    position: string;
    institution: string;
    startDate: string;
    endDate: string;
    title: string;
}

function TeachingExpContent({exp}:{exp:TeachingExp}){
    return(
        <ListItem disablePadding>
            <ListItemButton sx={{ borderRadius:2, }}>
                <ListItemIcon>
                    <FontAwesomeIcon icon={faComments}/>
                </ListItemIcon>
                <ListItemText
                    primary={
                        <Typography variant={cards.content.variant} color={cards.content.color}>
                            <b>{exp.position} ({exp.startDate}-{exp.endDate})</b>, {exp.title}
                        </Typography>
                    }
                    secondary={
                        <Typography variant={cards.content.variant} color={cards.content.color}>
                            {exp.institution}
                        </Typography>
                    }/>
            </ListItemButton>
        </ListItem>
    )
}

export default function TeachingExperience(){
    return(
        <ThemeProvider theme={cards.theme}>
            <motion.div
                whileHover={cards.motion.hover}
                whileTap={cards.motion.tap}>
                <Card
                    sx={cards.style}>
                    <CardContent>
                        <Typography gutterBottom
                                    variant={cards.title.variant}
                                    component="div"
                                    color={cards.title.color}>
                            Teaching Experience
                        </Typography>
                        <Grid container>
                            <Grid item xs={12} md={6}>
                                <List>
                                    {teachingExp.map((exp, idx)=>(
                                        (idx%2===0)?(<TeachingExpContent exp={exp} key={"eduexp"+idx}/>):(null)
                                    ))
                                    }
                                </List>
                            </Grid>
                            <Grid item xs={12} md={6}>
                            <List>
                                {teachingExp.map((exp, idx)=>(
                                    (idx%2===1)?(<TeachingExpContent exp={exp} key={"eduexp"+idx}/>):(null)
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