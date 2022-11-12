import { errorMessages, FormError, FormFieldError } from "../core/types"
import { MessageData } from "../services/Messages/MessagesService"

interface MessageValidatorI {
    checkValue: (value: string) => null | FormFieldError 
    checkMessage: (message: MessageData) => FormError | null 
}

class MessageValidatorC implements MessageValidatorI {
    checkValue(value: string) {
        let error: FormFieldError | null = null

        if (value.length === 0) 
            error = { message: errorMessages.empty}

        else if (value.length < 3) 
            error = { message: errorMessages.moreThan}

        return error
    }

    checkMessage(message: MessageData) {
        let formErrors: FormError | null = null

        for (let key in message) {
            const error = this.checkValue(message[key as keyof typeof message])
            if (error) {
                formErrors = { [key]: error }
                break
            }
        }

        return formErrors
    }
}

const MessageValidator = new MessageValidatorC()

export default MessageValidator