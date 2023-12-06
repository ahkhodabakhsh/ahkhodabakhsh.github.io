import Education from "./Education";
import Experience from "./Experience";

export default function EducationExperience(){
    return(
        <div id="education-and-experiences" className="flex flex-1 flex-row w-full">
            <Education/>
            <Experience/>
        </div>
    )
}