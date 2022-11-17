import { useState } from "react"
import sections from "../../../core/sections"
import ContactForm from "./ContactForm"
import Section from "../Section"
import useMessageForm from "../../../hooks/messages/useMessageForm"
import ContactSuccessWindow from "./ContactSuccessWindow"

const ContactMeSection = () => {
    const description = "I'm glad you're here! Please contact me on Linkedin, by email, or send me a message."
    const {
        messageData, 
        loading, 
        errors,
        sentStatus,
        handleChangeInput,
        handleSendMessage
    } = useMessageForm()

    const [ show, setShow ] = useState(false)

    const closeWindow = () => {
        setShow(false)
    }

    return (
        <>
            <ContactSuccessWindow show={show} closeWindow={closeWindow} />
            <Section
                title={sections.contact.name}
                id={sections.contact.id}
                description={description}
                content={<ContactForm
                    messageData={messageData}
                    loading={loading}
                    sentStatus={sentStatus}
                    errors={errors}
                    handleChangeInput={handleChangeInput}
                    handleSendMessage={handleSendMessage} />} />
        </>
    )
}

export default ContactMeSection