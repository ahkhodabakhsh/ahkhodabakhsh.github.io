
import SidePanel from "./Columns/SidePanel";
import MainPanel from "./Columns/MainPanel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
export default function IDCard() {
  return (
    <div id="resume" className="flex flex-1 h-full w-full">
        <SidePanel />
        <MainPanel />
    </div>

  );
}
