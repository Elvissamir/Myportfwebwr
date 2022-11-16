import { motion, Transition, Variant, Variants } from "framer-motion"
import FirebaseIcon from "../../icons/FirebaseIcon"
import GitIcon from "../../icons/GitIcon"
import GoogleMapIcon from "../../icons/GoogleMapIcon"
import JavascriptIcon from "../../icons/JavascriptIcon"
import MongoIcon from "../../icons/MongoIcon"
import NodeJsIcon from "../../icons/NodeJsIcon"
import ReactIcon from "../../icons/ReactIcon"
import SassIcon from "../../icons/SassIcon"
import TypescriptIcon from "../../icons/TypescriptIcon"
import SkillItem from "./SkillItem"

const SkillsGraph = () => {
    const itemVariants: Variants = {
        start: {
            opacity: 0,
            x: '-300%'
        },
        show: {
            opacity: [0, 1], 
            x: 0,
            transition: { bounce: 0 }
        }
    }

    return (
        <div className="skill-graph-container">
            <motion.div 
                layout
                initial='start'
                whileInView='show'
                transition={{ staggerChildren: 0.25 }}
                className="skill-graph">
                    <div className="skill-row">
                        <motion.span 
                            variants={itemVariants}>
                                <SkillItem name="Javascript" icon={<JavascriptIcon />} />
                        </motion.span>
                    </div>
                    <div className="skill-row">
                        <motion.span 
                            variants={itemVariants}>
                                <SkillItem name="Typescript" icon={<TypescriptIcon />} />
                        </motion.span>
                        <div className="space"></div>
                        <motion.span 
                            variants={itemVariants}>
                                <SkillItem name="React" icon={<ReactIcon />} />
                        </motion.span>
                    </div>
                    <div className="skill-row">
                        <motion.span 
                            variants={itemVariants}>
                                <SkillItem name="Node" icon={<NodeJsIcon />} />
                        </motion.span>
                        <div className="space"></div>
                        <motion.span 
                            variants={itemVariants}>
                                <SkillItem name="MongoDB" icon={<MongoIcon />} />
                        </motion.span>
                        <div className="space"></div>
                        <motion.span 
                            variants={itemVariants}>
                                <SkillItem name="Firebase Auth" icon={<FirebaseIcon />} />
                        </motion.span>
                    </div>
                    <div className="skill-row">
                        <motion.span 
                            variants={itemVariants}>
                                <SkillItem name="Google Maps" icon={<GoogleMapIcon />} />
                        </motion.span>
                        <div className="space"></div>
                        <motion.span 
                            variants={itemVariants}>
                                <SkillItem name="Sass" icon={<SassIcon />} />
                        </motion.span>
                    </div>
                    <div className="skill-row">
                        <motion.span 
                            variants={itemVariants}>
                                <SkillItem name="Git" icon={<GitIcon />} />
                        </motion.span>
                    </div>
            </motion.div>
        </div>
    )
}

export default SkillsGraph