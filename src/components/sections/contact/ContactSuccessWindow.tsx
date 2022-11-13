import Fireworks from "@fireworks-js/react"
import { AnimatePresence, motion } from "framer-motion"
import SuccessWindowContent from "./SuccessWindowContent"

interface ContactSuccessWindowProps {
    show: boolean
    closeWindow: () => void
}

const ContactSuccessWindow = ({ show, closeWindow }: ContactSuccessWindowProps) => {
    return (
        <AnimatePresence>
            { show && 
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="success-window-container">
                        <Fireworks
                            className="fireworks-container"
                            options={{
                                rocketsPoint: {
                                    min: 0,
                                    max: 100
                                }
                            }} />
                        <div className="success-window">    
                            <div className="top">
                                <button 
                                    onClick={closeWindow} 
                                    className="close-btn">X</button>
                            </div>
                            <SuccessWindowContent />
                        </div>
                </motion.div>}
        </AnimatePresence>
    )
}

export default ContactSuccessWindow