import { doc, DocumentData, getDoc, SnapshotOptions } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../FirebaseConfig";

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    const eventName = req.query.eventName?req.query.eventName.toString():"";
    const docRef = doc(db, "Events", eventName);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        res.send(docSnap.data())
    }else{
        res.status(400).json({message:"oops no such document exists"})
    }
}