import Router from 'next/router'


const initializeRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";

    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };

    document.body.appendChild(script);
  });
};

const makePayment = async (
  passName: string | string[] | undefined,
  name: string | null | undefined,
  email: string | null | undefined,
  phone: number | undefined,
  callBackFunction: () => void
) => {
  const res = await initializeRazorpay();
  if (!res) {
    alert("Razorpay SDK Failed to load");
    return;
  }

  // Make API call to the serverless API
  const data = await fetch(`/api/razorpay?passName=${passName}`, {
    method: "POST",
  }).then((t) => t.json());
  console.log(data);
  var options = {
    key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
    name: "Falak 2022",
    currency: data.currency,
    amount: data.amount,
    order_id: data.id,
    image: "https://manuarora.in/logo.png",
    handler: async function (response: {
      razorpay_payment_id: any;
      razorpay_order_id: any;
      razorpay_signature: any;
    }) {
      // Validate payment at server - using webhooks is a better idea.
      const registerUser = await fetch("/api/RegisterUser", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          paymentID: response.razorpay_payment_id,
          orderID: response.razorpay_order_id,
          signature: response.razorpay_signature,
          pass: passName,
        }),
      });
      Router.push('/')
    },
    prefill: {
      name: name,
      email: email,
      contact: phone,
    },
  };

  const paymentObject = new (window as any).Razorpay(options);
  paymentObject.open();
};


export { makePayment };
