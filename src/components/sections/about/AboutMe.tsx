import AboutDropdown from "./AboutDropdown"
import AboutHeader from "./AboutHeader"

const AboutMe = () => {
    return (
        <div className="about-me-container">
            <div className="about-me">
                <div className="about-content">
                    <AboutHeader />
                    <AboutDropdown />
                </div>
            </div>
        </div>
    )
}

export default AboutMe