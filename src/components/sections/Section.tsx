interface SectionProps {
    id: string 
    title: string
    description: string 
    content: JSX.Element | JSX.Element[]
}

const Section = ({ id, title, description, content}: SectionProps) => {
    return (
        <div className="section-container">
            <section id={id} className="section">
                <div className="title-container">
                    <p className="title">{title}</p>
                    <div className="title-underline"></div>
                </div>
                <div className="description">{description}</div>
                <div className="content">
                    {content}
                </div>
            </section>
        </div>
    )
}

export default Section