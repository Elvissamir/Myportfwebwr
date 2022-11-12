import { useEffect, useState } from "react"
import Fireworks from "@fireworks-js/react"
import { AnimatePresence, motion } from "framer-motion"
import SuccessWindowContent from "./SuccessWindowContent"

interface ContactSuccessWindowProps {
    show: boolean
    closeWindow: () => void
}

const ContactSuccessWindow = ({ show, closeWindow }: ContactSuccessWindowProps) => {
    const [activeFireworks, setActiveFireworks] = useState(true)

    useEffect(() => {
        
    }, [ activeFireworks ])

    return (
        <AnimatePresence>
            { show && 
                <motion.div className="success-window-container">
                    <Fireworks
                        className="fireworks-container"
                        options={{
                            rocketsPoint: {
                                min: 0,
                                max: 100
                            }
                        }} />
                    <div className="success-window">    
                        <SuccessWindowContent />
                    </div>
                </motion.div>}
        </AnimatePresence>
    )
}

export default ContactSuccessWindow