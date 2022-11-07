import { ProjectData } from "./ProjectsSection"

interface ProjectDetailsProps {
    data: ProjectData
}

const ProjectDetails = ({ data }: ProjectDetailsProps) => {
    return (
        <div className="project-details">
            <div className="top">
                <p className="title">{data.title}</p>
                <p className="subtitle">{data.subtitle}</p>
            </div>
            <div className="description-container">
                <div className="point">
                    <p className="text-description">Description:</p>
                </div>
                <p className="details">{data.description}</p>
            </div>
            <div className="stack-container">
                <div className="point">
                    <p className="stack-text">Technologies used: </p>
                </div>
                <ul className="stack-list">
                    {data.stack.map((item, index) => 
                        <li className="stack-item" key={index}>
                            {item}
                        </li>   
                    )}
                </ul>
            </div>
            <div className="images-container">
                <div className="point">
                    <p className="images-text">Pictures: </p>
                </div>
                <div className="images-list">
                    {data.images.map((image, index) => 
                        <img className="image" src={image} width='280' height='180' alt={data.title+' '+index} key={index} />
                    )}
                </div>
            </div>
            <a className="check-btn" target="__blank" href={data.githubUrl} >Github</a>
        </div>
    )
}

export default ProjectDetails