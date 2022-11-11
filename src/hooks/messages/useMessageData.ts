import { useState } from 'react'
import { MessageData } from '../../services/Messages/MessagesService'

const useMessageData = () => {
    const [messageData, setMessageData] = useState<MessageData>({
        author_name: '',
        subject: '',
        email: '',
        content: ''
    })

    return {
        messageData, 
        setMessageData
    }
}

export default useMessageData