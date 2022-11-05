interface SkillItemProps {
    icon: JSX.Element
    name: string
}

const SkillItem = ({ name, icon }: SkillItemProps) => {
    return (
        <div className="skill-item-container">
            <div className="skill-item">
                <div className="icon-name-container">
                    <p className="name">{name}</p>
                </div>
                <div className="icon-container">{icon}</div>
            </div>
        </div>
    )
}

export default SkillItem