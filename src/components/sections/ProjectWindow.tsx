import { motion, AnimatePresence } from "framer-motion"
import ProjectDetails from "./ProjectDetails"
import { ProjectData } from "./ProjectList"

interface ProjectWindowProps {
    show: boolean
    data: ProjectData | null
    closeWindow: () => void
}

const ProjectWindow = ({ show, data, closeWindow }: ProjectWindowProps) => {
    return (
        <AnimatePresence>
            { show && data && 
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="project-window-container">
                        <div className="project-window">
                            <div className="window-top">
                                <button 
                                    onClick={closeWindow} 
                                    className="close-btn">X</button>
                            </div>
                            <ProjectDetails data={data} />
                        </div>
                </motion.div>}
        </AnimatePresence>
    )
}

export default ProjectWindow