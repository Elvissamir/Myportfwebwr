import SkillsSection from "../sections/SkillsSection"

const Content = () => {
    const sectionList: JSX.Element[] = [
        <SkillsSection />,
    ]

    return (
        <div className="content-container">
            <main className="content">
                {sectionList.map((section, index) => 
                    section
                )}
            </main>
        </div>
    )
}

export default Content