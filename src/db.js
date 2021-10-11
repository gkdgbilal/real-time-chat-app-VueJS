import "firebase/database";
import { initializeApp } from "firebase/app";

const config = {
    apiKey: "Your API KEY",
    authDomain: "Your API KEY",
    projectId: "Your API KEY",
    storageBucket: "Your API KEYm",
    messagingSenderId: "Your API KEY",
    appId: "Your API KEY"
}

const db = initializeApp(config);
export default db;