import Title from "../Cards/Title";
import AboutMe from "../Cards/AboutMe";
import ContactInfo from "../Cards/ContactInfo";
import SocialMedia from "../Cards/SocialMedia";
export default function SidePanel(){
    return(
        <div id="resume-side-panel" className="flex flex-col w-3/12 h-full">
            <Title />
            <AboutMe />
            <ContactInfo />
            <SocialMedia />
        </div>
    )
}