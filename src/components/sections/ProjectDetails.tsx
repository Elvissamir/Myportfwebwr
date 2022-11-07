import { ProjectData } from "./ProjectList"

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
            <p className="details">{data.description}</p>
            <div className="stack-container">
                <p className="stack-text">Technologies used: </p>
                <ul className="stack-list">
                    {data.stack.map((item, index) => 
                        <li className="stack-item" key={index}>{item}</li>   
                    )}
                </ul>
            </div>
            <div className="images-list">
                {data.images.map((image, index) => 
                    <img className="image" src={image} alt={data.title+' '+index} />
                )}
            </div>
            <a className="check-btn" target="__blank" href={data.githubUrl} >Github</a>
        </div>
    )
}

export default ProjectDetails