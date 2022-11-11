import useMessageForm from "../../../hooks/messages/useMessageForm"
import FormField from "../../FormField"

const ContactForm = () => {
    const {
        messageData, 
        loading, 
        disabled,
        errors,
        handleChangeInput,
        handleSendMessage
    } = useMessageForm()

    return (
        <div className="contact-form-container">
            <form className="contact-form">
                <FormField 
                    id="name"
                    label="Your name" 
                    error={errors['name']? errors['name'] : null}
                    inputType='input-text'
                    disabled={disabled || loading}
                    onChange={handleChangeInput}/>
                <FormField 
                    id="subject"
                    label="Subject" 
                    error={errors['subject']? errors['subject'] : null}
                    inputType='input-text'
                    disabled={disabled || loading}
                    onChange={handleChangeInput}/>
                <FormField 
                    id="email"
                    label="Email" 
                    error={errors['email']? errors['email'] : null}
                    inputType='input-text'
                    disabled={disabled || loading}
                    onChange={handleChangeInput}/>
                <FormField 
                    id="content"
                    label="Message" 
                    error={errors['content']? errors['content'] : null}
                    inputType='textarea'
                    disabled={disabled || loading}
                    onChange={handleChangeInput}/>
                <div className="control-btns">
                    <button 
                        className="action-btn"
                        disabled={disabled || loading} 
                        type="button">Send</button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm