import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import "@fontsource/inter"; 
import "@fontsource/roboto"; 
// import "@fontawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import Resume from "@/data/resume.json";
import Settings from "@/data/settings.json";
import Image from "next/image";

import './globals.css'

export const metadata: Metadata = {
  title: Resume.basics.name + " | " + "Home Page",
  description: Resume.basics.description,
  authors: [{ name: Resume.basics.name, url: Resume.basics.url }],
  keywords: Resume.basics.keywords,
  themeColor: Settings.colors.primary
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ 
                     fontFamily: 'Roboto, sans-serif',
                     backgroundColor: "black",
                     backgroundImage: "url('/BG-Tuned-Blur-ds.jpg')",
                     backgroundSize: "cover",
                     backgroundRepeat: "no-repeat",
                     backgroundAttachment: "fixed",
                    //  filter: "blur(5px)",
                     }}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
