import resume from "@/data/resume.json";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from "@mui/material";
import { motion } from "framer-motion";
import { cards } from "@/components/GeneralStylings";

export default function Copyright(){
    const year = new Date().getFullYear();
    return(
        <ThemeProvider theme={cards.theme}>
            <motion.div
                whileHover={cards.motion.hover}
                whileTap={cards.motion.tap}>
                <Card sx={{
                        ...cards.style,
                        minHeight: '40px',
                        height: '45px',
                        justifyContent: "end",
                    }}>
                    <CardContent>
                        <Typography variant={cards.content.variant}
                                    component="div"
                                    color={cards.content.color}
                                    >
                            &copy; {year} Amir H. Khodabakhsh, All rights reserved.
                        </Typography>
                    </CardContent>
                </Card>
            </motion.div>
        </ThemeProvider>
    )
}