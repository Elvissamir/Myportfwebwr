import { addDoc, collection, Firestore, Timestamp } from "firebase/firestore"
import { DBCollectionData, DBI } from "../DB/DBService"
import { db } from './init'

class FirebaseDBHandler implements DBI {
    db: Firestore

    constructor() {
        this.db = db
    }

    async save ({ document, data }: DBCollectionData) {
        try {
            await addDoc(collection(db, document), {
                ...data,
                created: Timestamp.now()
            })
            return true
        }
        catch (err) {
            console.log(err)
            return false
        }
    }
}

const FirebaseDB = new FirebaseDBHandler()

export default FirebaseDB