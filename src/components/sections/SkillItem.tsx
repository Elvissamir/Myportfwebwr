interface SkillItemProps {
    icon: JSX.Element
    name: string
}

const SkillItem = ({ name, icon }: SkillItemProps) => {
    return (
        <div className="skill-item-container">
            <div className="skill-item">
                <div className="icon-container">{icon}</div>
            </div>
        </div>
    )
}

export default SkillItem