import resume from "@/data/resume.json";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from "@mui/material";
import { motion } from "framer-motion";
import { cards } from "@/components/GeneralStylings";
import { Grid } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { faThumbTack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const specialCourses = [
    {
        title:"Reliability and Probabilistic Modeling",
    },
    {
        title:"Nonlinear Filters",
    },
    {
        title:"Nonlinear Control",
    },
    {
        title:"Advanced Flight Dynamics and Control",
    },
    {
        title:"Deterministic and Stochastic Optimal Control",
    },
    {
        title:"System Identification",
    },
    {
        title:"Nonlinear Vibrations",
    },
    
    {
        title:"Gradient-Based and Heuristic Optimization",
    },
];

type SpecialCourses = {
    title:string;
}

function SpecialCourseInfo({course}:{course:SpecialCourses}){
    return(
        <ListItem disablePadding>
            <ListItemButton sx={{ borderRadius:2, }}>
                <ListItemIcon>
                    <FontAwesomeIcon icon={faThumbTack}/>
                </ListItemIcon>
                <ListItemText
                    primary={
                        <Typography variant={cards.content.variant} color={cards.content.color}>
                            {course.title}
                        </Typography>}
                />
            </ListItemButton>
        </ListItem>
    )
}

export default function SpecialCourses(){
    return(
        <ThemeProvider theme={cards.theme}>
            <motion.div
                whileHover={cards.motion.hover}
                whileTap={cards.motion.tap}>
                <Card sx={cards.style}>
                    <CardContent className="w-full">
                        <Typography gutterBottom
                                    variant={cards.title.variant}
                                    component="div"
                                    color={cards.title.color}>
                            Selected Special Courses
                        </Typography>
                        <Grid container>
                            <Grid item xs={12} md={6}>
                                <List>
                                    {specialCourses.map((course, idx)=>(
                                        (idx%2===0)?(<SpecialCourseInfo course={course} key={"course"+idx}/>):(null)
                                    ))
                                    }
                                </List>
                            </Grid>
                            <Grid item xs={12} md={6}>
                            <List>
                                {specialCourses.map((course, idx)=>(
                                    (idx%2===1)?(<SpecialCourseInfo course={course} key={"course"+idx}/>):(null)
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