import {  useState, ChangeEvent, useEffect } from 'react'
import useLoading from "../useLoading"
import useMessageData from "./useMessageData"
import MessageValidator from '../../validators/MessageValidator'
import { FormError } from '../../core/types'
import useHandleFormError from '../useHandleFormError'
import MessagesService from '../../services/Messages/MessagesService'

export type SentState = 'failed' | 'success' | null

const useMessageForm = () => {
    const { initialData, messageData, setMessageData } = useMessageData()
    const { loading, startLoading, finishLoading } = useLoading()
    const [ errors, setErrors ] = useState<FormError>({})
    const { handleSingleError } = useHandleFormError({ errors, setErrors })
    const [ sentStatus, setSentStatus ] = useState<SentState>(null)

    useEffect(() => {
        const timer = setInterval(() => {
            setSentStatus(null)
        }, 2500)

        return () => clearInterval(timer)
    }, [ sentStatus ])

    const checkBeforeSending = () => {
        const formErrors = MessageValidator.checkMessage(messageData)
        if (formErrors) {
            setErrors(formErrors)
            return false
        }

        return true
    }

    const handleSendMessage = async () => {
        if (!checkBeforeSending()) return 

        startLoading()
        const result = await MessagesService.save(messageData)
        finishLoading()

        if (result) {
            setMessageData({...initialData})
            return setSentStatus('success')
        }

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