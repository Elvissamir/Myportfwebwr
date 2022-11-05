import links from "../../core/links"
import CogIcon from "../icons/CogIcon"
import GithubIcon from "../icons/GithubIcon"
import LinkedinIcon from "../icons/LinkedinIcon"
import MailIcon from "../icons/MailIcon"
import ReactIcon from "../icons/ReactIcon"
import WorldIcon from "../icons/WorldIcon"

const Footer = () => {
    return (
        <div className="footer-container">
            <footer className="footer">
                <p className="top-text text-md">My Social Networks:</p>
                <div className="email-container">
                    <MailIcon />
                    <p className="text-sm">elvissam.software@gmail.com</p>
                </div>
                <div className="social-networks-container">
                    <a className="footer-link" href={links.portfolio}>
                        <WorldIcon />
                    </a>
                    <a className="footer-link" href={links.github}>
                        <GithubIcon />
                    </a>
                    <a className="footer-link" href={links.linkedin}>
                        <LinkedinIcon />
                    </a>
                </div>
                <div className="details-container">
                    <div className="designed-text">
                        <p className="text-sm">Designed & Developed</p>
                    </div>
                    <p className="text-sm">by</p>
                    <p className="text-sm">Elvis Carrasco</p>
                </div>
                <div className="bottom">
                    <p className="text-xs">My web portfolio</p>
                    <div className="text-with-icon">
                        <p className="text-xs">Myportfweb 2022</p>
                        <ReactIcon />
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer