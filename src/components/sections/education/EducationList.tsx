import { motion, Variants } from "framer-motion"
import { imagesDir } from "../../../core/imagesDir"

interface EducationData {
    name: string
    imageUrl: string
    link: string
}

const EducationList = () => {
    const imageDir = `${imagesDir}Certificates/`

    const educationList: EducationData[] = [
        {name: 'HTML5', imageUrl: imageDir+'03html.png', link: 'http://coursera.org/verify/J27UJY2P9M9K'},
        {name: 'CSS', imageUrl: imageDir+'01css.png', link: 'http://coursera.org/verify/2NHCEW4VTSGR'},
        {name: 'Javascript', imageUrl: imageDir+'02js.png', link: 'http://coursera.org/verify/3PSJWWABDX72'},
        {name: 'Mobile Design', imageUrl: imageDir+'05styling.png', link: 'http://coursera.org/verify/S3QDRDEVRRW9'},
        {name: 'Git', imageUrl: imageDir+'04git.png', link: 'http://coursera.org/verify/DJ2RQAPH7Z48'},
        {name: 'Python Introduction', imageUrl: imageDir+'01py.png', link: 'http://coursera.org/verify/AH66XLUFPF5L'},
        {name: 'Python Data Structures', imageUrl: imageDir+'02py.png', link: 'http://coursera.org/verify/DSL4J4DP5Z3E'},
        {name: 'Python Databases', imageUrl: imageDir+'03py.png', link: 'http://coursera.org/verify/93KEAYK5GUED'},
        {name: 'Python Web Data', imageUrl: imageDir+'04py.png', link: 'http://coursera.org/verify/SEUQQ2RTH8YM'},
        {name: 'Python Conclusion', imageUrl: imageDir+'05py.jpg', link: 'http://coursera.org/verify/XZGEYJAFWZTG'},
    ]

    const courseVariants: Variants = {
        start: { opacity: 0 },
        show: { opacity: 1 }
    }

    return (
        <div className="education-list-container">
            <motion.ul 
                initial={'start'}
                whileInView={'show'}
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.25 }}
                className="education-list">
                    {educationList.map((course, index) => 
                        <motion.li 
                            variants={courseVariants}
                            className="course-details-container" 
                            key={index}>
                                <a href={course.link} className="course-details">
                                    <img className="course-image" src={course.imageUrl} alt={'course '+course.name}  width='350' height='180' />
                                    <div className="course-text-container">
                                        <span className="right-line"></span>
                                        <p className="course-text">{course.name}</p>
                                        <span className="left-line"></span>
                                    </div>
                                </a>
                        </motion.li>
                    )}
            </motion.ul>
        </div>
    )
}

export default EducationList