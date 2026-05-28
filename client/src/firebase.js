import { initializeApp } from "firebase/app"

import { getFirestore } from "firebase/firestore"

const firebaseConfig = {

  apiKey: "AIzaSyB_t3W6J4ApLJ94OcohV7KY_K8Zzm7MdLs",

  authDomain: "stockvision-ai-a7e55.firebaseapp.com",

  projectId: "stockvision-ai-a7e55",

  storageBucket: "stockvision-ai-a7e55.firebasestorage.app",

  messagingSenderId: "484036779644",

  appId: "1:484036779644:web:d0100eaa05e807994673f9"

}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

export default app