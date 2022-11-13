import AboutMeSection from "../sections/about/AboutMeSection"
import ChallengesSection from "../sections/challenges/ChallengesSection"
import ContactMeSection from "../sections/contact/ContactMeSection"
import EducationSection from "../sections/education/EducationSection"
import HireMeBanner from "../sections/HireMe"
import ProjectsSection from "../sections/projects/ProjectsSection"
import SkillsSection from "../sections/skills/SkillsSection"
import Wall from "../sections/wall/Wall"

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
        <div className="content-container">
            <main className="content">
                {sectionList.map((section, index) => 
                    <div 
                        className={ index === 3 || index === 0? "content-section full-container" : "content-section x-container"} 
                        key={index}>
                            {section}
                    </div>
                )}
            </main>
        </div>
    )
}

export default Content