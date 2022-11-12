import Window from "../../Window"
import SuccessWindowContent from "./SuccessWindowContent"

interface ContactSuccessWindowProps {
    show: boolean
    closeWindow: () => void
}

const ContactSuccessWindow = ({ show, closeWindow }: ContactSuccessWindowProps) => {
    return (
        <Window 
            content={<SuccessWindowContent />} 
            show={show} 
            closeWindow={closeWindow} />
    )
}

export default ContactSuccessWindow