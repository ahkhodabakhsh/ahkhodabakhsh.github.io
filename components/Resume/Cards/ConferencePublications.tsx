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
import { faFeather } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const publications = [
    {
        publicationCitation:"Mohammadizadeh, K., Pourtakdoust, S.H., and Khodabakhsh, A.H. (2022) Design and construction of aeroelastic wing load reduction control system with smart material approach, ICIA 2022",
        DOI: null,
    },
    {
        publicationCitation:"Khodabakhsh, A.H. and Pourtakdoust, S.H.(2021) Nonlinear dynamic modeling using physics-informed deep neural networks, ICIA 2021",
        DOI: null,
    },
    {
        publicationCitation:"Khodabakhsh, A.H. and Pourtakdoust, S.H.(2020) Aeroelastic wing vibration control using smart materials and changes in equivalent structural properties, ICIA 2020",
        DOI: null,
    },

];

type Publication = {
    publicationCitation:string;
    DOI:String | null;
}

function PaperInfo({pub}:{pub:Publication}){
    return(
        <ListItem disablePadding>
            <ListItemButton href={pub.DOI===null ? "" : "https://www.doi.org/"+pub.DOI} sx={{ borderRadius:2, }}>
                <ListItemIcon>
                    <FontAwesomeIcon icon={faFeather}/>
                </ListItemIcon>
                <ListItemText
                    primary={
                        <Typography variant={cards.content.variant} color={cards.content.color}>
                            {pub.publicationCitation.split("Khodabakhsh, A.H.")[0]} <b>Khodabakhsh, A.H.</b> {pub.publicationCitation.split("Khodabakhsh, A.H.")[1]}
                        </Typography>}
                    // secondary={
                    //     <Typography variant={cards.content.variant} color={cards.content.color}>
                    //         DOI: {pub.DOI===null ? "NA" : pub.DOI}
                    //     </Typography>
                    // }
                />
            </ListItemButton>
        </ListItem>
    )
}

export default function ConferencePublications(){
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
                            Conference Papers
                        </Typography>
                        <List>
                            {publications.map((pub, idx)=>(
                                <PaperInfo pub={pub} key={"confpub"+idx}/>
                            ))
                            }
                        </List>
                    </CardContent>
                </Card>
            </motion.div>
        </ThemeProvider>
    )
}