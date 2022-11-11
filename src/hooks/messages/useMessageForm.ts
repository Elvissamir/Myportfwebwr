import {  useState, ChangeEvent } from 'react'
import useLoading from "../useLoading"
import useMessageData from "./useMessageData"
import MessageValidator from '../../validators/MessageValidator'
import { FormError } from '../../core/types'
import useHandleFormError from '../useHandleFormError'
import MessagesService from '../../services/Messages/MessagesService'

type SentState = 'failed' | 'success' | null

const useMessageForm = () => {
    const { messageData, setMessageData } = useMessageData()
    const { loading, startLoading, finishLoading } = useLoading()
    const [ errors, setErrors ] = useState<FormError>({})
    const { handleSingleError } = useHandleFormError({ errors, setErrors })
    const [ sentStatus, setSentStatus ] = useState<SentState>(null)

    const handleSendMessage = async () => {
        startLoading()
        const result = await MessagesService.save(messageData)
        finishLoading()

        if (result) return setSentStatus('success')

        setSentStatus('failed')
    }

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const nmessageData = {...messageData}
        let error = MessageValidator.checkValue(e.target.value)

        if (e.target.id === 'name')
            nmessageData.name = e.target.value
        else if (e.target.id === 'subject')
            nmessageData.subject = e.target.value
        else if (e.target.id === 'email')
            nmessageData.email = e.target.value
        else 
            nmessageData.content = e.target.value
        
        handleSingleError({ field: e.target.id, error })
        setMessageData(nmessageData)
    }

    return {
        loading,
        messageData,
        errors,
        sentStatus,
        handleSendMessage,
        handleChangeInput
    }
}

export default useMessageForm