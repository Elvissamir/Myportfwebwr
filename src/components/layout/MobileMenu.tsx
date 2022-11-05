import { AnimatePresence, motion } from "framer-motion"
import Menu from "./Menu"

interface MobileMenuProps {
    showMobileMenu: boolean
}

const MobileMenu = ({ showMobileMenu }: MobileMenuProps) => {
    return (
        <AnimatePresence>
            {showMobileMenu && 
                <motion.div 
                    initial={{ x: '-100%' }}
                    animate={{ x: '0' }}
                    exit={{ x: '-100%' }}
                    transition={{ bounce: 0 }}
                    className="mobile-menu-container">
                        <div className="mobile-menu">
                            <Menu />
                        </div>
                </motion.div>}
        </AnimatePresence>
    )
}

export default MobileMenu