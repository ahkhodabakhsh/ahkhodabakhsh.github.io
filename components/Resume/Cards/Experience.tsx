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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";

const teachingExp = [
    {
        position: "Senior Research Assistant - Dep. of Flight Dynamics and Control",
        institution: "Sharif University of Technology",
        startDate: "2016",
        endDate: "2023",
        topics: "Aeroservoelasticity, Stochastic Process Analysis and Control",
    },
    {
        position: "Research Assistant - Dep. of Flight Dynamics and Control",
        institution: "Sharif University of Technology",
        startDate: "2014",
        endDate: "2016",
        topics: "Multidisciplinary Design Optimization (MDO), Uncertainty Quantification",
    },
    {
        position: "Research Assistant - Space Systems Design Institute (SSDI)",
        institution: "K.N.Toosi University of Technology",
        startDate: "2016",
        endDate: "2011",
        topics: "Automatic Control Systems Design and Implementation, Multidisciplinary Design Optimization (MDO)",
    },
];

type ResearchExp = {
    position: string;
    institution: string;
    startDate: string;
    endDate: string;
    topics: string;
}

function TeachingExpContent({exp}:{exp:ResearchExp}){
    return(
        <ListItem disablePadding>
            <ListItemButton sx={{ borderRadius:2, }}>
                <ListItemIcon>
                    <FontAwesomeIcon icon={faShieldHalved}/>
                </ListItemIcon>
                <ListItemText
                    primary={
                        <Typography variant={cards.content.variant} color={cards.content.color}>
                            <b>({exp.startDate}-{exp.endDate}) {exp.position} </b>, {exp.institution}<br/>
                            Topics: <em>{exp.topics}</em>
                        </Typography>
                    }/>
            </ListItemButton>
        </ListItem>
    )
}

export default function Experience(){
    return(
        <ThemeProvider theme={cards.theme}>
            <motion.div
                whileHover={cards.motion.hover}
                whileTap={cards.motion.tap}>
                <Card
                    sx={{...cards.style,
                            minHeight:"440px"}}>
                    <CardContent>
                        <Typography gutterBottom
                                    variant={cards.title.variant}
                                    component="div"
                                    color={cards.title.color}>
                            Research Experience
                        </Typography>
                        <List>
                            {teachingExp.map((exp, idx)=>(
                                <TeachingExpContent exp={exp} key={"eduexp"+idx}/>
                            ))
                            }
                        </List>
                    </CardContent>
                </Card>
            </motion.div>
        </ThemeProvider>
    )
}