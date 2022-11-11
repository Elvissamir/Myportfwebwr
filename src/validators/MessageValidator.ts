import { errorMessages, FormError } from "../core/types"
import { MessageData } from "../services/Messages/MessagesService"

interface MessageValidatorI {
    valid: (message: MessageData) => null | FormError
}

class MessageValidatorC implements MessageValidatorI {
    valid(message: MessageData) {
        for (let key in message) {
            let error: null | FormError = null
            const result = this.checkValue(message[key as keyof typeof message])
            
            if (result) {
                error = {}
                error[key] = { message: result }
                return error
            }
        }

        return null
    }

    private checkValue(value: string) {
        if (value.length === 0) 
            return errorMessages.empty

        if (value.length < 3) 
            return errorMessages.moreThan

        return null
    }
}

const MessageValidator = new MessageValidatorC()

export default MessageValidator