const ContactForm = () => {
    return (
        <div className="contact-form-container">
            <form className="contact-form">
                <div className="form-field">
                    <label className="input-label" htmlFor="subject">Subject</label>
                    <input className="input-text" id="subject" type="text" />
                </div>
                <div className="form-field">
                    <label className="input-label" htmlFor="name">Your Name</label>
                    <input className="input-text" id="name" type="text" />
                </div>
                <div className="form-field">
                    <label className="input-label" htmlFor="email">Email</label>
                    <input className="input-text" id="email" type="text" />
                </div>
                <div className="form-field">
                    <label className="input-label" htmlFor="message">Message</label>
                    <textarea className="input-area" id="message" />
                </div>
                <div className="control-btns">
                    <button className="action-btn">Send</button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm