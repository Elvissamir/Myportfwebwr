import { DBI } from "../DB/DBService"
import FirebaseDB from "../Firebase/FirebaseDB"

interface MessageData {
    subject: string 
    author_name: string
    email: string 
    content: string 
}

interface MessageServiceI {
    save: (data: MessageData) => Promise<boolean>
}

class MessagesHandler implements MessageServiceI {
    collection: string 
    dbHandler: DBI

    constructor (db: DBI) {
        this.collection = 'messages'
        this.dbHandler = db
    }

    async save(data: MessageData) {
        const result = await this.dbHandler.save({
            document: this.collection,
            data
        })

        return result
    }
}

const MessagesService = new MessagesHandler(FirebaseDB)

export default MessagesService