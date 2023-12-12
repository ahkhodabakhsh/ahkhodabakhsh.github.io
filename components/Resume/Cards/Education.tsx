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
import { faUniversity } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const education = resume.education;
type Education = {
    institution: string;
    institutionURL: string;
    area: string;
    studyType: string;
    startDate: string;
    endDate: string;
    gpa: string;
    thesis: string;
    courses: string[];
};

function EduContent({edu}:{edu:Education;}){
    return(
        <ListItem disablePadding>
            <ListItemButton href={edu.institutionURL} sx={{ borderRadius:2, }}>
                <ListItemIcon>
                    <FontAwesomeIcon icon={faUniversity}/>
                </ListItemIcon>
                <ListItemText
                    primary={
                        <Typography variant={cards.content.variant} color={cards.content.color}>
                            <b>{edu.studyType} ,  {edu.institution}  ({edu.startDate}-{edu.endDate})</b>
                        </Typography>}
                    secondary={
                        <Typography variant={cards.content.variant} color={cards.content.color}>
                            {edu.area} <br/>
                            Thesis: <em>{edu.thesis}</em>
                        </Typography>
                    }
                />
            </ListItemButton>
        </ListItem>
    )
}

export default function Education(){
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
                            Education
                        </Typography>
                        <List>
                            {education.map((edu, idx)=>(
                                <EduContent edu={edu} key={"edu"+idx}/>
                            ))
                            }
                        </List>
                    </CardContent>
                </Card>
            </motion.div>
        </ThemeProvider>
    )
}