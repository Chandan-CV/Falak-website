import { addDoc, collection } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../FirebaseConfig";
const xlsx = require('xlsx');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

const xlsxToJson = (filePath:string) => {
  const workbook = xlsx.readFile(filePath);
  const sheet = workbook.Sheets['Sheet1'];
  return xlsx.utils.sheet_to_json(sheet);
};

const jsonSheet = xlsxToJson('assets/Falak22Upload.xlsx');

jsonSheet.map(async (userData:any)=>{
    try{
        await addDoc(collection(db,'Users'),userData)
    }catch{
        res.send("oops error occured")
    }
})
res.send(jsonSheet)

}