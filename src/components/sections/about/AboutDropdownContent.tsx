import { AnimatePresence, motion } from "framer-motion"
import { DropdownItem } from "./AboutDropdown"

interface AboutDropdownContentProps {
    activeIndex: number | null
    dropdownItem: DropdownItem
    index: number 
}

const AboutDropdownContent = ({ activeIndex, dropdownItem, index }: AboutDropdownContentProps) => {
    return (
        <AnimatePresence mode="wait">
            {activeIndex === index && 
                <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ bounce: 0, duration: 0.15 }}
                    className="about-dropdown-content">
                        <div className="details">
                            {dropdownItem.content}
                        </div>
                </motion.div>}
        </AnimatePresence>
    )
}

export default AboutDropdownContent