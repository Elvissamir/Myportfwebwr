import sections from "../../../core/sections"
import EducationList from "./EducationList"
import Section from "../Section"

const EducationSection = () => {
    const description = "These are some of the courses I've completed:"

    return (
        <Section 
            id={sections.education.id}
            title={sections.education.name}
            description={description}
            content={ <EducationList /> } />
    )
}

export default EducationSection