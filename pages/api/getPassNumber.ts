import { collection, getCountFromServer, query, where } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../FirebaseConfig";

export default async function handler(req: NextApiRequest, res:NextApiResponse) {
    const pass = req.query.pass
    const coll = collection(db,"Users")
    const q = query(coll, where('pass','==',pass))
    const snapshot = await getCountFromServer(q);
    res.send(snapshot.data())
}