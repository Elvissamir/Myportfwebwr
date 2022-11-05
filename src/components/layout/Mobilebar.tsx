import GithubIcon from "../icons/GithubIcon"
import MobilebarBtn from "./MobilebarBtn"

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
                <div className="right">
                    <p className="text">My Github</p>
                    <GithubIcon />
                </div>
            </div>
        </div>
    )
}

export default Mobilebar