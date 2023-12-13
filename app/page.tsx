"use client"
import LandingPage from "@/components/LandingPage/LandingPage"
import ParticlesBackground from "@/components/ParticlesBackground/ParticlesBackground"
import Resume from "@/components/Resume/Resume"
import { Container, Box } from "@mui/material";
import Image from "next/image";


const showLandingPage = false;

export default function Home() {
  return (
    <main>
      <Box id="background"
           className="relative overflow-hidden">
        <ParticlesBackground />
      </Box>
      <Container  id="background-overlay"
                  maxWidth={false}
                  sx={{
                      width:"100vw",
                      height:"100vh",
                      backdropFilter: "blur(.1px)",
                      // backgroundColor: "rgba(0,0,0,0.3)",
                      }}
                  disableGutters
                      >
        {showLandingPage ? <LandingPage /> : <Resume />}
      </Container>
      {/* Photo by <a href="https://unsplash.com/@vincentiu?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Vincentiu Solomon</a> on <a href="https://unsplash.com/photos/silhouette-photo-of-mountain-during-night-time-ln5drpv_ImI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> */}
    </main>
  )
}
