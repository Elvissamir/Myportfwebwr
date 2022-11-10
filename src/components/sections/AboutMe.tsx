import AboutDropdown from "./AboutDropdown"
import AboutPhoto from "./AboutPhoto"

const AboutMe = () => {
    return (
        <div className="about-me-container">
            <div className="about-me">
                <div className="about-content">
                    <AboutPhoto />
                    
                    <AboutDropdown />
                </div>
            </div>
        </div>
    )
}

export default AboutMe