import { motion, Variants } from "framer-motion"
import { ProjectData } from "../../../core/projects"
import ProjectCard from "./ProjectCard"

interface ProjectListProps {
    projectList: ProjectData[]
    handleSeeDetails: (index: number) => void
}

const ProjectList = ({ projectList, handleSeeDetails }: ProjectListProps) => {
    return (
        <motion.div className="project-list-container">
            <motion.div 
                layout
                initial={'start'}
                whileInView={'show'}
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.5 }}
                className="project-list">
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
            </motion.div>
        </motion.div>
    )
}

export default ProjectList