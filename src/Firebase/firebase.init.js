import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.cofig"

const firebaseInit = () =>{
    initializeApp(firebaseConfig)
}

export default firebaseInit;