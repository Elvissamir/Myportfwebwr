import sections from "../../../core/sections"
import AboutMe from "./AboutMe"
import Section from "../Section"

const AboutMeSection = () => {
    return (
        <Section
            title={sections.about.name}
            id={sections.about.id}
            description={''}
            content={ <AboutMe /> } />
    )
}

export default AboutMeSection