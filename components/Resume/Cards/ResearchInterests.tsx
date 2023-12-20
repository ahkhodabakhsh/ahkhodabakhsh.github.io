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

const interests = [
    {
        researchArea:"Nonlinear Stochastic Dynamics Analysis and Control",
    },
    {
        researchArea:"Deep Learning and Artificial Intelligence",
    },
    {
        researchArea:"Probabilistic Machine Learning and Bayesian Inference"
    },
    {
        researchArea:"Reinforcement Learning",
    },
    {
        researchArea:"Multidisciplinary Design Optimization (MDO)",
    },
    {
        researchArea:"Robotics and Autonomous Systems",
    },
    {
        researchArea:"Nonlinear Model Predictive Control (NMPC)",
    },
];

type ResearchInterests = {
    researchArea:string;
}

function ResearchInterestInfo({interest}:{interest:ResearchInterests}){
    return(
        <ListItem disablePadding>
            <ListItemButton sx={{ borderRadius:2, }}>
                <ListItemIcon>
                    <FontAwesomeIcon icon={faThumbTack}/>
                </ListItemIcon>
                <ListItemText
                    primary={
                        <Typography variant={cards.content.variant} color={cards.content.color}>
                            {interest.researchArea}
                        </Typography>}
                />
            </ListItemButton>
        </ListItem>
    )
}

export default function ResearchInterests(){
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
                            Research Areas of Interest
                        </Typography>
                        <Grid container>
                            <Grid item xs={12} md={6}>
                                <List>
                                    {interests.map((intr, idx)=>(
                                        (idx%2===0)?(<ResearchInterestInfo interest={intr} key={"reintr"+idx}/>):(null)
                                    ))
                                    }
                                </List>
                            </Grid>
                            <Grid item xs={12} md={6}>
                            <List>
                                {interests.map((intr, idx)=>(
                                    (idx%2===1)?(<ResearchInterestInfo interest={intr} key={"reintr"+idx}/>):(null)
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