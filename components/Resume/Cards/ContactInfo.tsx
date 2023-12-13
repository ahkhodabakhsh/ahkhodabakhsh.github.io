import resume from "@/data/resume.json";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { motion } from "framer-motion";
import { createTheme, ThemeProvider } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faSkype, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { cards } from "@/components/GeneralStylings";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';



function Contact({href, icon, text}:{href:string, icon:any, text:string}){
    return(
        <ListItem disablePadding>
            <motion.div whileHover={cards.linkHoverAnim} style={{paddingLeft:10, width:"100%"}}>
                <ListItemButton href={href} sx={{ borderRadius:2, width:"100%" }}>
                    <ListItemIcon className="flex justify-center">
                        <FontAwesomeIcon icon={icon}
                                         size={cards.iconSize.inLine}/>
                    </ListItemIcon>
                    <ListItemText className="pr-10" primary={
                        <Typography variant={cards.content.variant}
                                    color={cards.content.color}>
                            {text}
                        </Typography>
                    }/>
                </ListItemButton>
            </motion.div>
        </ListItem>
    )
}

export default function ContactInfo(){
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
                            Contact
                        </Typography>

                        <List>
                            <Contact href="https://join.skype.com/invite/OiDAcveMp2uC"
                                     icon={faSkype}
                                     text="Skype"/>
                            <Contact href="https://t.me/AHKH0"
                                     icon={faTelegram}
                                     text="Telegram"/>
                            <Contact href="mailto:a.h.khodabakhsh@gmail.com"
                                     icon={faGoogle}
                                     text="Gmail"/>
                            <Contact href="mailto:khodabakhsh@ae.sharif.edu"
                                     icon={faEnvelope}
                                     text="khodabakhsh@ae.sharif.edu"/>
                        </List>
                    </CardContent>
                </Card>
            </motion.div>
        </ThemeProvider>
    )
}