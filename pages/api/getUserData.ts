import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../FirebaseConfig";
import { collection, addDoc, getDoc, getDocs, DocumentData, SnapshotOptions, doc, query, where } from "firebase/firestore";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
const email = req.query.email;
const q = query(collection(db,'Users'),where('email','==',email))
const querySnapshot = await getDocs(q);
var data:any=[];
console.log("this is actually working yo")
querySnapshot.forEach((doc)=>{
  console.log(doc.data())
  data.push(doc.data())
})
if(data.length>0){
  res.status(200).json(data[0])
}
else{
  res.status(400).json({message:"oops document not found"})
}
}
