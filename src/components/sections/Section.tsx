import { motion, Variants } from "framer-motion"

interface SectionProps {
    id: string 
    title: string
    description: string | null
    content: JSX.Element | JSX.Element[]
}

const Section = ({ id, title, description, content}: SectionProps) => {

    const sectionVariants: Variants = {
        start: {
            opacity: 0,
            y: 200
        },
        show: {
            opacity: 1,
            y: 0
        }
    }

    return (
        <div id={id} className="section-container">
            <motion.section 
                variants={sectionVariants}
                initial='start'
                whileInView='show'
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="section">
                    <div className="section-top">
                        <div className="title-container">
                            <div className="title-text">
                                <p className="title">
                                    {title}
                                </p>
                                <div className="title-underline"></div>
                            </div>
                        </div>
                        { description && <div className="description">{description}</div>}
                    </div>
                    <div className="content">
                        {content}
                    </div>
            </motion.section>
        </div>
    )
}

export default Section