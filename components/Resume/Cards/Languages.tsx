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
import { faComment } from "@fortawesome/free-solid-svg-icons";

const languages = [
    {language: 'English', level: 'Fluent'},
    {language: 'Persian', level: 'Fluent'},
    {language:  'French', level:  'Basic'},
    {language: 'Spanish', level:  'Basic'},
];
type LanguageSkill = {
    language: string;
    level: string;
};

function LangSkillContent({skill}:{skill:LanguageSkill}){
    return(
        <ListItem disablePadding>
            <ListItemButton sx={{ borderRadius:2, }}>
                <ListItemIcon>
                    <FontAwesomeIcon icon={faComment}/>
                </ListItemIcon>
                <ListItemText
                    primary={
                        <Typography variant={cards.content.variant} color={cards.content.color}>
                            <b>{skill.language}</b>, {skill.level}
                        </Typography>
                    }
                    />
            </ListItemButton>
        </ListItem>
    )
}

export default function Languages(){
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
                            Languages
                        </Typography>
                        <Grid container>
                            <Grid item xs={12} md={6}>
                                <List>
                                    {languages.map((lang, idx)=>(
                                        (idx%2===0)?(<LangSkillContent skill={lang} key={"lang"+idx}/>):(null)
                                    ))
                                    }
                                </List>
                            </Grid>
                            <Grid item xs={12} md={6}>
                            <List>
                                {languages.map((lang, idx)=>(
                                    (idx%2===1)?(<LangSkillContent skill={lang} key={"lang"+idx}/>):(null)
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