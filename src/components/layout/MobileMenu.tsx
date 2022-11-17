import { AnimatePresence, motion } from "framer-motion"
import useHideOuterScroll from "../../hooks/useHideOuterScroll"
import ECLogo from "../ECLogo"
import Menu from "./Menu"

interface MobileMenuProps {
    showMobileMenu: boolean
}

const MobileMenu = ({ showMobileMenu }: MobileMenuProps) => {
    useHideOuterScroll({ hideScroll: showMobileMenu })

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
                            <div className="mobile-menu-logo">
                                <ECLogo />
                            </div>
                            <Menu />
                        </div>
                </motion.div>}
        </AnimatePresence>
    )
}

export default MobileMenu