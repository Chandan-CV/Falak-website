import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../FirebaseConfig";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const body = req.body;
    await addDoc(collection(db,'Users'),{
        body
    })
}