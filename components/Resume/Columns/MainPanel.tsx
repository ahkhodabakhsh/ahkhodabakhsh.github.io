import EducationExperience from "../Cards/EducationExperience";
import Publications from "../Cards/Publications";
import Skills from "../Cards/Skills";
import Interests from "../Cards/Interests";
export default function MainPanel(){
    return(
        <div id="resume-main-body" className="flex flex-1 flex-col w-9/12 h-full">
            <EducationExperience />
            <Publications />
            <Skills />
            <Interests />
        </div>
    )
}