import { AnimatePresence, motion } from "framer-motion"
import { SentState } from "../../../hooks/messages/useMessageForm"
import FailedMessage from "./FailedMessage"
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
                        initial={{ x: '-100%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: '-100%', opacity: 0 }}
                        transition={{ bounce: 0 }}
                        className="success-message-container">
                            <SuccessMessage />
                    </motion.div>
                }
                {sentStatus === 'failed' && 
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ bounce: 0 }}
                        className="failed-message-container">
                            <FailedMessage />
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}

export default SentStatusMessage