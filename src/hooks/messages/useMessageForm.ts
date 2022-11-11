import {  useState, ChangeEvent } from 'react'
import useLoading from "../useLoading"
import useMessageData from "./useMessageData"
import MessageValidator from '../../validators/MessageValidator'
import { FormError } from '../../core/types'

const useMessageForm = () => {
    const { messageData, setMessageData } = useMessageData()
    const { loading, startLoading, finishLoading } = useLoading()
    const [ disabled, setDisabled ] = useState(false)
    const [ errors, setErrors ] = useState<FormError>({})

    const handleSendMessage = async () => {
        if (disabled) return 
    }

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const nmessageData = {...messageData}

        if (e.target.id === 'name') 
            nmessageData.name = e.target.value
        else if (e.target.id === 'subject')
            nmessageData.subject = e.target.value
        else if (e.target.id === 'email')
            nmessageData.email = e.target.value
        else 
            nmessageData.content = e.target.value

        const formError = MessageValidator.valid(nmessageData)
        if (formError) {
            setDisabled(true)
            setErrors(formError)
        }
        else {
            setDisabled(false)
            setErrors({})
        }
        
        setMessageData(nmessageData)
    }

    return {
        loading,
        disabled,
        messageData,
        errors,
        handleSendMessage,
        handleChangeInput
    }
}

export default useMessageForm