import AboutDropdown from "./AboutDropdown"
import AboutHeader from "./AboutHeader"
import AboutSoftware from "./AboutSoftware"

const AboutMe = () => {
    return (
        <div className="about-me-container">
            <div className="about-me">
                <div className="about-content">
                    <AboutHeader />
                    <AboutDropdown />
                    <AboutSoftware />
                </div>
            </div>
        </div>
    )
}

export default AboutMe