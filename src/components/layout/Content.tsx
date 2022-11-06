import SkillsSection from "../sections/SkillsSection"

const Content = () => {
    const sectionList: JSX.Element[] = [
        <SkillsSection />,
    ]

    return (
        <div className="content-container">
            <main className="content">
                {sectionList.map((section, index) => 
                    <div className="content-section x-container" key={index}>
                        {section}
                    </div>
                )}
            </main>
        </div>
    )
}

export default Content