import sections from "../../../core/sections"
import ContactMeForm from "./ContactMeForm"
import Section from "../Section"

const ContactMeSection = () => {
    const description = "Hey, I'm glad your're here!. Contact me by linkedin, email or send me a message."

    return (
        <Section
            title={sections.contact.name}
            id={sections.contact.id}
            description={description}
            content={<ContactMeForm />} />
    )
}

export default ContactMeSection