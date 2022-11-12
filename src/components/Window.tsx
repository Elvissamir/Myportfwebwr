import { motion, AnimatePresence } from "framer-motion"

interface WindowProps {
    show: boolean
    content: JSX.Element
    closeWindow: () => void
}

const Window = ({ show, content, closeWindow}: WindowProps) => {
    return (
        <AnimatePresence>
            { show && 
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    id='window-container'
                    className="window-container">
                        <div className="window">
                            <div className="window-top">
                                <button 
                                    onClick={closeWindow} 
                                    className="close-btn">X</button>
                            </div>
                            {content}
                        </div>
                </motion.div>}
        </AnimatePresence>
    )
}

export default Window