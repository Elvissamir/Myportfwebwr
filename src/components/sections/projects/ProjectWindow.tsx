import { ProjectData } from "../../../core/projects"
import Window from "../../Window"
import ProjectDetails from "./ProjectDetails"

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