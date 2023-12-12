import resume from "@/data/resume.json";
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { cards } from "@/components/GeneralStylings";
import { faOrcid,
         faGoogleScholar, } from "@fortawesome/free-brands-svg-icons";

export function SocialIcon({href, icon, title}:{href:string, icon:any, title:string}){
    return(
        <IconButton href={href}
                    target="_blank"
                    aria-label={title}
                    title={title}>
            <motion.span whileHover={{
                ...cards.linkHoverAnim,
                scale: 1.2 * cards.linkHoverAnim.scale,
                rotate: cards.linkHoverAnim.rotate.map(x => x*2),
                transition: { duration: 5 * cards.linkHoverAnim.transition.duration },
            }}>            
                <FontAwesomeIcon icon={icon}
                                className="icons-social"
                                size={cards.iconSize.inLine}
                                aria-hidden="true" />
                <span className="sr-only">{title}</span>
            </motion.span>
        </IconButton>
    )
}

export default function SocialProfiles(){
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
                            Profiles
                        </Typography>

                        <SocialIcon href="https://scholar.google.com/citations?user=nxlkkTgAAAAJ&hl=en&oi=ao"
                                    icon={faGoogleScholar}
                                    title="Google Scholar"/>
                        <SocialIcon href="https://orcid.org/0000-0002-0457-8673"
                                    icon={faOrcid}
                                    title="ORCiD"/>                        
                    </CardContent>
                </Card>
            </motion.div>
        </ThemeProvider>
    )
}