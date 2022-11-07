import sections from "../../core/sections"
import ContactMeForm from "./ContactMeForm"
import Section from "./Section"

const ContactMeSection = () => {
    const description = ""

    return (
        <Section
            title={sections.contactMe.name}
            id={sections.contactMe.id}
            description={description}
            content={<ContactMeForm />} />
    )
}

export default ContactMeSection