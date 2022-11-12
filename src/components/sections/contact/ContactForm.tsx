import { ChangeEvent } from 'react'
import { FormError } from "../../../core/types"
import { SentState } from '../../../hooks/messages/useMessageForm'
import { MessageData } from "../../../services/Messages/MessagesService"
import FormField from "../../FormField"
import SendMessageBtn from "./SendMessageBtn"
import SentStatusMessage from "./SentStatusMessage"

interface ContactFormProps {
    messageData: MessageData
    loading: boolean 
    sentStatus: SentState
    errors: FormError
    handleChangeInput: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    handleSendMessage: () => void
}

const ContactForm = ({ messageData, loading, sentStatus, errors, handleChangeInput, handleSendMessage }: ContactFormProps) => {
    return (
        <div className="contact-form-container">
            <form className="contact-form">
                <FormField 
                    id="name"
                    label="Your name" 
                    error={errors['name']? errors['name'] : null}
                    value={messageData.name}
                    inputType='input-text'
                    disabled={loading}
                    onChange={handleChangeInput}/>
                <FormField 
                    id="subject"
                    label="Subject" 
                    error={errors['subject']? errors['subject'] : null}
                    value={messageData.subject}
                    inputType='input-text'
                    disabled={loading}
                    onChange={handleChangeInput}/>
                <FormField 
                    id="email"
                    label="Email" 
                    error={errors['email']? errors['email'] : null}
                    value={messageData.email}
                    inputType='input-text'
                    disabled={loading}
                    onChange={handleChangeInput}/>
                <FormField 
                    id="content"
                    label="Message" 
                    error={errors['content']? errors['content'] : null}
                    value={messageData.content}
                    inputType='textarea'
                    disabled={loading}
                    onChange={handleChangeInput}/>
                <div className="control-btns">
                    <SentStatusMessage sentStatus={sentStatus} />
                    <SendMessageBtn 
                        text="Send" 
                        loading={loading}
                        disabled={Object.keys(errors).length > 0 || sentStatus === 'success'}
                        sendMessage={handleSendMessage}/>
                </div>
            </form>
        </div>
    )
}

export default ContactForm