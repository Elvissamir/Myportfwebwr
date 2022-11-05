import sections from "../../core/sections"
import SkillsGraph from "../SkillsGraph"
import Section from "./Section"

const SkillsSection = () => {
    const description = 'These are some of the programming languages, tools and frameworks I use:'

    return (
        <Section 
            id={sections.skills.id}
            title={sections.skills.name}
            description={description}
            content={<SkillsGraph />} />
    )
}

export default SkillsSection