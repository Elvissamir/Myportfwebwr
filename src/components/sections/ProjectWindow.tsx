import Window from "../Window"
import ProjectDetails from "./ProjectDetails"
import { ProjectData } from "./ProjectsSection"

interface ProjectWindowProps {
    show: boolean
    data: ProjectData
    closeWindow: () => void
}

const ProjectWindow = ({ show, data, closeWindow }: ProjectWindowProps) => {
    return (
        <Window 
            content={<ProjectDetails data={data} />} 
            show={show} 
            closeWindow={closeWindow} />
    )
}

export default ProjectWindow