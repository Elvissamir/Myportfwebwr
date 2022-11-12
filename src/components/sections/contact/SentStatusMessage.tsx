import { AnimatePresence, motion } from "framer-motion"
import { SentState } from "../../../hooks/messages/useMessageForm"
import SuccessMessage from "./SuccessMessage"

interface SentStatusMessageProps {
    sentStatus: SentState
}

const SentStatusMessage = ({ sentStatus }: SentStatusMessageProps) => {
    return (
        <div className="sent-status-container">
            <AnimatePresence>
                {sentStatus === 'success' && 
                    <motion.div
                        className="success-message-container">
                            <SuccessMessage />
                    </motion.div>
                }
                {sentStatus === 'failed' && <SuccessMessage />}
            </AnimatePresence>
        </div>
    )
}

export default SentStatusMessage