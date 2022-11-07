import { doc, DocumentData, getDoc, SnapshotOptions, where } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../FirebaseConfig";

const Razorpay = require("razorpay");
const shortid = require("shortid");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const passName = req.query.passName?req.query.passName.toString():"";
    const docRef = doc(db, "Passes", 'prices');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        const data = docSnap.data();
        const amount = data[passName];
        const razorpay = new Razorpay({
            key_id: process.env.RAZORPAY_KEY,
            key_secret: process.env.RAZORPAY_SECRET,
        });
        console.log(passName);
        // Create an order -> generate the OrderID -> Send it to the Front-end
        const payment_capture = 1;
        const currency = "INR";
        const options = {
            amount: (amount * 100).toString(),
            currency,
            receipt: shortid.generate(),
            payment_capture,
        };
        
        try {
            const response = await razorpay.orders.create(options);
            res.status(200).json({
                id: response.id,
                currency: response.currency,
                amount: response.amount,
            });
    } catch (err) {
        console.log(err);
      res.status(400).json(err);
    }
    } 
    else {
      console.log("No such document!");
      res.status(400).json({message:"oops no such document"});
    }
  } else {
    // Handle any other HTTP method
  }
}
