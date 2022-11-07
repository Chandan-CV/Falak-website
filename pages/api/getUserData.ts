import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../FirebaseConfig";
import { collection, addDoc, getDoc, getDocs, DocumentData, SnapshotOptions, doc } from "firebase/firestore";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
var data: ((options?: SnapshotOptions | undefined) => DocumentData)[] = [];
const docRef = doc(db, "Users", "6DhXaJDq08qzRzbub2rC");
const docSnap = await getDoc(docRef);
if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    res.send(docSnap.data())
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    res.send("oops something went wrong")
  }
}
