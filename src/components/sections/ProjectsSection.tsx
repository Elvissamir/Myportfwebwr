import sections from "../../core/sections"
import ProjectList from "./ProjectList"
import Section from "./Section"

const ProjectsSection = () => {
    const description = "These are some of the projects I've developed:" 

    return (
        <Section 
            id={sections.projects.id} 
            title={sections.projects.name}
            description={description}
            content={<ProjectList />} />
    )
}

export default ProjectsSection