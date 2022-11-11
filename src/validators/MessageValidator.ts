import { errorMessages, FormError, FormFieldError } from "../core/types"

interface MessageValidatorI {
    checkValue: (value: string) => null | FormFieldError 
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
}

const MessageValidator = new MessageValidatorC()

export default MessageValidator