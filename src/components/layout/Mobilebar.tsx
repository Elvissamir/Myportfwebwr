import GithubIcon from "../icons/GithubIcon"
import MobilebarBtn from "./MobilebarBtn"
import links from '../../core/links'

interface MobilebarProps {
    showMobileMenu: boolean
    toggleMobileMenu: () => void
}

const Mobilebar = ({ showMobileMenu, toggleMobileMenu }: MobilebarProps) => {
    return (
        <div className="mobilebar-container">
            <div className="mobilebar">
                <div className="left">
                    <MobilebarBtn 
                        showMobileMenu={showMobileMenu} 
                        toggleMobileMenu={toggleMobileMenu} />
                </div>
                <div className="center-line"></div>
                <a className="right" href={links.github} rel="noreferrer" target='_blank'>
                    <p className="text">My Github</p>
                    <GithubIcon />
                </a>
            </div>
        </div>
    )
}

export default Mobilebar