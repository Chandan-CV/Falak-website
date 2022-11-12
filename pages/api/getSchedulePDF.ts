import { doc, getDoc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../FirebaseConfig";

export default async function handler(req:NextApiRequest, res:NextApiResponse){
    const docRef = doc(db, "Misc", "schedule");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        res.status(200).send(docSnap.data())
      } else {
        res.status(400).json({message:"oops something went wrong"})
      }
}