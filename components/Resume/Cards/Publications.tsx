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
        publicationCitation:"Khodabakhsh, A.H. and Pourtakdoust, S.H., 2024. Solution of FPK equation for stochastic dynamics subjected to additive Gaussian noise via deep learning approach. Structural Safety, 106, p.102399.",
        DOI: "10.1016/j.strusafe.2023.102399",
    },
    {
        publicationCitation:"Pourtakdoust, S.H. and Khodabakhsh, A.H., 2022. A deep learning approach for the solution of probability density evolution of stochastic systems. Structural Safety, 99, p.102256.",
        DOI: "10.1016/j.strusafe.2022.102256",
    },
    {
        publicationCitation:"Pourtakdoust, S.H. and Khodabakhsh, A.H., 2023. Reliability-based multidisciplinary design optimization of an aeroelastic unpowered guided aerial vehicle. Proceedings of the Institution of Mechanical Engineers, Part G: Journal of Aerospace Engineering, p.09544100231198160. ",
        DOI: "10.1177/09544100231198160",
    },
    {
        publicationCitation:"Pourtakdoust, S.H. and Khodabakhsh, A.H., 2023. Modeling and Simulation of Nonlinear Dynamics Using Physics-Informed Deep Neural Networks. Technology in Aerospace Engineering, 6(4), pp.25-36.",
        DOI: "10.22034/jtae.2023.6.4.3",
    },
    {
        publicationCitation:"Khodabakhsh, A.H., Pourtakdoust, S.H., 2024. A Deep Learning Approach to Model Predictive Gust Load Alleviation for A Compliant Wing Subjected to Atmospheric Turbulence, Journal of Guidance, Control, and Dynamics [Under Review]",
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
                    secondary={
                        <Typography variant={cards.content.variant} color={cards.content.color}>
                            DOI: {pub.DOI===null ? "NA" : pub.DOI}
                        </Typography>
                    }
                />
            </ListItemButton>
        </ListItem>
    )
}

export default function Publications(){
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
                            Journal Publications
                        </Typography>
                        <List>
                            {publications.map((pub, idx)=>(
                                <PaperInfo pub={pub} key={"pub"+idx}/>
                            ))
                            }
                        </List>
                    </CardContent>
                </Card>
            </motion.div>
        </ThemeProvider>
    )
}