import { motion, Variants } from "framer-motion"
import TechnoSquare from "../../TechnoSquare"

interface ProjectCardProps {
    title: string 
    subtitle: string 
    frontImage: string 
    githubUrl: string | null
    index: number
    seeDetails: (index: number) => void
}

const ProjectCard = ({ title, subtitle, frontImage, githubUrl, index, seeDetails }: ProjectCardProps) => {
    const cardVariants: Variants = {
        start: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: { bounce: 0 }
        }
    }

    return (
        <motion.div 
            variants={cardVariants}
            initial={'start'}
            animate='show'
            className="project-card-container">
                <TechnoSquare />
                <div 
                    className="project-card">
                        <div className="top">
                            <img className="project-front-image" src={frontImage} alt={title} width='280' height='180' />
                        </div>
                        <div className="project-info">
                            <div className="project-text-container">
                                <p className="project-title">{title}</p>
                                <p className="project-subtitle">{subtitle}</p>
                            </div>
                            <div className="project-btns">
                                { githubUrl && <a className="project-github-link" href={githubUrl}>Github</a> }
                                <button onClick={() => seeDetails(index)} className="action-btn">Details</button>
                            </div>
                        </div>
                </div>
        </motion.div>
    )
}

export default ProjectCard