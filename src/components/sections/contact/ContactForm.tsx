import useMessageForm from "../../../hooks/messages/useMessageForm"

const ContactForm = () => {
    const {
        messageData, 
        loading, 
        disabled,
        handleChangeInput,
        handleSendMessage
    } = useMessageForm()

    return (
        <div className="contact-form-container">
            <form className="contact-form">
                <div className="form-field">
                    <label className="input-label" htmlFor="subject">Subject</label>
                    <input 
                        onChange={handleChangeInput} 
                        className="input-text" 
                        id="subject" 
                        type="text" />
                </div>
                
                <div className="form-field">
                    <label className="input-label" htmlFor="email">Email</label>
                    <input 
                        onChange={handleChangeInput}
                        className="input-text" 
                        id="email" 
                        type="email" />
                </div>
                <div className="form-field">
                    <label className="input-label" htmlFor="message">Message</label>
                    <textarea 
                        onChange={handleChangeInput}
                        className="input-area" 
                        id="message" />
                </div>
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