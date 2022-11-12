import { useState } from 'react'
import { MessageData } from '../../services/Messages/MessagesService'

const initialData: MessageData = {
    name: '',
    subject: '',
    email: '',
    content: ''
}

const useMessageData = () => {
    const [messageData, setMessageData] = useState<MessageData>({...initialData})

    return {
        initialData,
        messageData, 
        setMessageData
    }
}

export default useMessageData