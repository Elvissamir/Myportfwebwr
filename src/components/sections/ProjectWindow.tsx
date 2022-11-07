interface ProjectWindowProps {
    title: string 
    subtitle: string 
    images: string[]
    stack: JSX.Element[]
    description: string 
    githubLink: string
}

const ProjectWindow = ({ title, subtitle, description, images, stack, githubLink }: ProjectWindowProps) => {
    return (
        <div className="project-window-container">
            <div className="project-window">
                <div className="top">
                    <p className="title">{title}</p>
                    <p className="subtitle">{subtitle}</p>
                </div>
                <p className="description">{description}</p>
                <div className="stack-container">
                    <p className="stack-text">Technologies used: </p>
                    <ul className="stack-list">
                        {stack.map((item, index) => 
                            <li className="stack-item" key={index}>{item}</li>   
                        )}
                    </ul>
                </div>
                <button className="check-btn">Github</button>
            </div>
        </div>
    )
}

export default ProjectWindow