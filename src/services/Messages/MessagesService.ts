import { DBI } from "../DB/DBService"
import FirebaseDB from "../Firebase/FirebaseDB"

export interface MessageData {
    subject: string 
    name: string
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
        return await this.dbHandler.save({
            document: this.collection,
            data
        })
    }
}

const MessagesService = new MessagesHandler(FirebaseDB)

export default MessagesService