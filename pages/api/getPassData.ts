import { doc, getDoc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../FirebaseConfig";

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    const passName = req.query.passName?req.query.passName.toString():"";
    const docRef = doc(db, "Passes", passName);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        res.status(200).json({data:docSnap.data()})
    }else{
        res.status(400).json({message:"oops no such document exists"})
    }
}