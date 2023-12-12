import Avatar from "./Avatar"
import resume from "@/data/resume.json";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from "@mui/material";
import { motion } from "framer-motion";
import { cards } from "@/components/GeneralStylings";

export default function Title(){
    return(
        <ThemeProvider theme={cards.theme}>
            <motion.div
                whileHover={cards.motion.hover}
                whileTap={cards.motion.tap}>
                <Card sx={cards.style}>
                    <CardMedia sx={{ justifyContent:'center',
                                    alignItems:'center',
                                    padding: 2 }}
                            title="ahkhodabakhsh"
                    >
                        <Avatar/>
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom
                                    variant={cards.title.variant}
                                    component="div"
                                    color={cards.title.color}>
                            {resume.basics.name}
                        </Typography>
                        <Typography variant={cards.content.variant} color={cards.content.color}>
                            {resume.basics.label}
                        </Typography>
                    </CardContent>
                </Card>
            </motion.div>
        </ThemeProvider>
    )
}