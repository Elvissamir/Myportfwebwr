import ProjectCard from "./ProjectCard"
import { ProjectData } from "./ProjectsSection"

interface ProjectListProps {
    projectList: ProjectData[]
    handleSeeDetails: (index: number) => void
}

const ProjectList = ({ projectList, handleSeeDetails }: ProjectListProps) => {
    return (
        <>
            <div className="project-list-container">
                <div className="project-list">
                    {projectList.map((project, index) => 
                        <ProjectCard 
                            key={index}
                            index={index}
                            title={project.title}
                            subtitle={project.subtitle}
                            frontImage={project.frontImage}
                            githubUrl={project.githubUrl} 
                            seeDetails={handleSeeDetails}/>                
                    )}
                </div>
            </div>
        </>
    )
}

export default ProjectList