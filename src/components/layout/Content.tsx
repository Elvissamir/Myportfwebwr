import AboutMeSection from "../sections/AboutMeSection"
import ChallengesSection from "../sections/ChallengesSection"
import ContactMeSection from "../sections/ContactMeSection"
import EducationSection from "../sections/EducationSection"
import HireMeBanner from "../sections/HireMe"
import ProjectsSection from "../sections/ProjectsSection"
import SkillsSection from "../sections/SkillsSection"
import Wall from "../sections/Wall"
import Window from "../Window"

const Content = () => {
    const sectionList: JSX.Element[] = [
        <Wall />,
        <SkillsSection />,
        <ProjectsSection />,
        <HireMeBanner />,
        <EducationSection />,
        <ChallengesSection />,
        <AboutMeSection />,
        <ContactMeSection />
    ]

    return (
        <>
            <div className="content-container">
                <main className="content">
                    {sectionList.map((section, index) => 
                        <div className="content-section x-container" key={index}>
                            {section}
                        </div>
                    )}
                </main>
            </div>
        </>
    )
}

export default Content