import type { Metadata } from 'next'
import "@fontsource/inter"; 
import "@fontsource/roboto"; 
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { CssBaseline } from "@mui/material";

import Resume from "@/data/resume.json"
import Settings from "@/data/settings.json"
// import Navbar from "@/components/Navbar"

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
    <html lang="en" className="flex flex-1 w-full h-full">
      <body style={{ fontFamily: 'Inter, sans-serif' }} className="w-full h-full p-0">
        {children}
      </body>
    </html>
  )
}
