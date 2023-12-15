import resume from "@/data/resume.json";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from "@mui/material";
import { motion } from "framer-motion";
import { cards } from "@/components/GeneralStylings";
import { faGithub,
         faTwitter,
         faLinkedin,
         faResearchgate, } from "@fortawesome/free-brands-svg-icons";
import { faUniversity } from "@fortawesome/free-solid-svg-icons";
import { SocialIcon } from "@/components/Resume/Cards/SocialProfiles";

export default function SocialMedia(){
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
                            Social
                        </Typography>
                        <SocialIcon href="https://github.com/ahkhodabakhsh"
                                    icon={faGithub}
                                    title="Github"/>
                        <SocialIcon href="https://www.linkedin.com/in/ahkhodabakhsh/"
                                    icon={faLinkedin}
                                    title="LinkedIn"/>
                        <SocialIcon href="https://www.researchgate.net/profile/Amir-Khodabakhsh-5"
                                    icon={faResearchgate}
                                    title="ResearchGate"/>
                        <SocialIcon href="https://sharif.academia.edu/AHKhodabakhsh"
                                    icon={faUniversity}
                                    title="Academia"/>
                        <SocialIcon href="https://x.com/ahkhodabakhsh"
                                    icon={faTwitter}
                                    title="Twitter"/>
                    </CardContent>
                </Card>
            </motion.div>
        </ThemeProvider>
    )
}