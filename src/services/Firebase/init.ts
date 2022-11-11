import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import firebaseConfig from "./config"

const firebaseapp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseapp)

export {
    db
}