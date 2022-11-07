import sections from "../../core/sections"
import Section from "./Section"

const AboutMeSection = () => {
    const description = "'I'm a passionate software developer and systems engineering student (I'll graduate this year, 2022). My goal is to help you design and develop quality systems that solve real problems and make a difference. In my opinion, good practices and testing are an integral component of the software development process, no matter how big or small the project is. I enjoy learning new things, working out, listening to music, and cooking. Alright, I look forward to hearing from you and working together. "

    return (
        <Section
            title={sections.aboutMe.name}
            id={sections.aboutMe.id}
            description={description}
            content={ <p></p> } />
    )
}

export default AboutMeSection