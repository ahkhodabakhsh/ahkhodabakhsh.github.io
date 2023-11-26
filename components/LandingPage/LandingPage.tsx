import "@fontsource/reem-kufi";
import "./LandingPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub,
         faTwitter,
         faTelegram,
         faGoogle,
         faLinkedin,
         faResearchgate,
         faOrcid } from "@fortawesome/free-brands-svg-icons";

const iconSize = "4x";


export default function LandingPage()
{
    return (
        <>
            <div className="intro">Amir H. Khodabakhsh</div>
            <div className="subtitle">Aeronautics, Deep Learning, Stochastic Processes</div>
            <div className="subtitle">Multi-Disciplinary Optimization, Nonlinear Control</div>
            <div className="tagline">This is just a landing page, wait for more!</div>
            
            <div className="icons-social">
                <a target="_blank"
                   href="https://github.com/ahkhodabakhsh">
                    <FontAwesomeIcon icon={faGithub} 
                                     className="icons-social"
                                     size={iconSize}
                                     aria-hidden="true"
                                     title="Github" />
                    <span className="sr-only">Github</span>
                </a>
                <a target="_blank"
                   href="https://www.linkedin.com/in/ahkhodabakhsh/">
                    <FontAwesomeIcon icon={faLinkedin}
                                     className="icons-social"
                                     size={iconSize}
                                     aria-hidden="true"
                                     title="LinkedIn" />
                    <span className="sr-only">LinkedIn</span>
                </a>
                <a target="_blank"
                   href="https://x.com">
                    <FontAwesomeIcon icon={faTwitter}
                                     className="icons-social"
                                     size={iconSize}
                                     aria-hidden="true"
                                     title="Twitter" />
                    <span className="sr-only">Twitter</span>
                </a>
                <a target="_blank"
                   href="https://scholar.google.com/citations?user=nxlkkTgAAAAJ&hl=en&oi=ao">
                    <FontAwesomeIcon icon={faGoogle}
                                     className="icons-social"
                                     size={iconSize}
                                     aria-hidden="true"
                                     title="Google Scholar" />
                    <span className="sr-only">Google Scholar</span>
                </a>
                <a target="_blank"
                   href="https://www.researchgate.net/profile/Amir-Khodabakhsh-5">
                    <FontAwesomeIcon icon={faResearchgate}
                                     className="icons-social"
                                     size={iconSize}
                                     aria-hidden="true"
                                     title="ResearchGate" />
                    <span className="sr-only">Research Gate</span>
                </a>
                <a target="_blank"
                   href="https://orcid.org/0000-0002-0457-8673">
                    <FontAwesomeIcon icon={faOrcid}
                                     className="icons-social"
                                     size={iconSize}
                                     aria-hidden="true"
                                     title="ORCiD" />
                    <span className="sr-only">ORCiD</span>
                </a>
                <a target="_blank"
                   href="https://t.me/AHKH0">
                    <FontAwesomeIcon icon={faTelegram}
                                     className="icons-social"
                                     size={iconSize}
                                     aria-hidden="true"
                                     title="Telegram" />
                    <span className="sr-only">Telegram</span>
                </a>
                
            </div>
        </>
    )
}