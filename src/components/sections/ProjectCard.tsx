interface ProjectCardProps {
    title: string 
    subtitle: string 
    frontImage: string 
    githubUrl: string 
    index: number
    seeDetails: (index: number) => void
}

const ProjectCard = ({ title, subtitle, frontImage, githubUrl, index, seeDetails }: ProjectCardProps) => {
    return (
        <div className="project-card-container">
            <div className="project-card">
                <div className="top">
                    <img className="project-front-image" src={frontImage} alt="project image" width='280' height='180' />
                </div>
                <div className="project-info">
                    <div className="project-text-container">
                        <p className="project-title">{title}</p>
                        <p className="project-subtitle">{subtitle}</p>
                    </div>
                    <div className="project-btns">
                        <a className="project-github-link" href={githubUrl}>Github</a>
                        <button onClick={() => seeDetails(index)} className="project-details-btn">Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard