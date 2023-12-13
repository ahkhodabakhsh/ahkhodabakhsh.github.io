import resume from "@/data/resume.json";
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { cards } from "@/components/GeneralStylings";

export default function AboutMe(){
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
                            About Me
                        </Typography>
                        <Box component="section"sx={{ p:2 }}>
                            <Typography variant={cards.content.variant} color={cards.content.color}>
                                {resume.basics.description}
                            </Typography>
                            <Grid container direction="column" sx={{ pt:2 }}>
                                <Grid item xs={12}>
                                    <Button className="flex w-full items-center justify-center"
                                            sx={{ textTransform: 'none'}}
                                            variant="outlined"
                                            href="https://ahkhodabakhsh.github.io">
                                        <Typography component="div" variant={cards.content.variant} color={cards.content.color}>
                                            <FontAwesomeIcon icon={faHome} />
                                            <span className="mx-2">ahkhodabakhsh.github.io</span>
                                        </Typography>
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sx={{ marginTop:2, }}>
                                    <Button className="flex w-full items-center justify-center"
                                            sx={{ textTransform: 'none' }}
                                            variant="outlined"
                                            href="/">
                                        {/* <<TODO>> "Not implemented yet, will be available soon"*/}
                                        <Typography component="div" variant={cards.content.variant} color={cards.content.color}>
                                            <FontAwesomeIcon icon={faPaperclip} />
                                            <span className="mx-2">Curriculum vitae</span>
                                        </Typography>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </CardContent>
                </Card>
            </motion.div>
        </ThemeProvider>
    )
}