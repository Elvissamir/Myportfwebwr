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
    const calcDelay = (i: number) => {
        return i * 0.25
    }

    const itemVariants: Variants = {
        start: {
            opacity: 0,
            x: '-200%'
        },
        show: {
            opacity: [0, 1], 
            x: 0,
        }
    }

    const itemTransition = (i: number) => {
        const transition: Transition = {
            delay: calcDelay(i),
            bounce: 0
        }

        return transition
    }

    return (
        <div className="skill-graph-container">
            <motion.div 
                layout
                className="skill-graph">
                    <div className="skill-row">
                        <motion.span 
                            variants={itemVariants}
                            initial='start'
                            animate='show'
                            transition={itemTransition(0)}>
                                <SkillItem name="Javascript" icon={<JavascriptIcon />} />
                        </motion.span>
                    </div>
                    <div className="skill-row">
                        <motion.span 
                            variants={itemVariants}
                            initial='start'
                            animate='show'
                            transition={itemTransition(1)}>
                                <SkillItem name="Typescript" icon={<TypescriptIcon />} />
                        </motion.span>
                        <div className="space"></div>
                        <motion.span 
                            variants={itemVariants}
                            initial='start'
                            animate='show'
                            transition={itemTransition(2)}>
                                <SkillItem name="React" icon={<ReactIcon />} />
                        </motion.span>
                    </div>
                    <div className="skill-row">
                        <motion.span 
                            variants={itemVariants}
                            initial='start'
                            animate='show'
                            transition={itemTransition(3)}>
                                <SkillItem name="Node" icon={<NodeJsIcon />} />
                        </motion.span>
                        <div className="space"></div>
                        <motion.span 
                            variants={itemVariants}
                            initial='start'
                            animate='show'
                            transition={itemTransition(4)}>
                                <SkillItem name="MongoDB" icon={<MongoIcon />} />
                        </motion.span>
                        <div className="space"></div>
                        <motion.span 
                            variants={itemVariants}
                            initial='start'
                            animate='show'
                            transition={itemTransition(5)}>
                                <SkillItem name="Firebase Auth" icon={<FirebaseIcon />} />
                        </motion.span>
                    </div>
                    <div className="skill-row">
                        <motion.span 
                            variants={itemVariants}
                            initial='start'
                            animate='show'
                            transition={itemTransition(6)}>
                                <SkillItem name="Google Maps" icon={<GoogleMapIcon />} />
                        </motion.span>
                        <div className="space"></div>
                        <motion.span 
                            variants={itemVariants}
                            initial='start'
                            animate='show'
                            transition={itemTransition(7)}>
                                <SkillItem name="Sass" icon={<SassIcon />} />
                        </motion.span>
                    </div>
                    <div className="skill-row">
                        <motion.span 
                            variants={itemVariants}
                            initial='start'
                            animate='show'
                            transition={itemTransition(8)}>
                                <SkillItem name="Git" icon={<GitIcon />} />
                        </motion.span>
                    </div>
            </motion.div>
        </div>
    )
}

export default SkillsGraph