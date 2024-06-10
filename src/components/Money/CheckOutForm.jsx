import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../useAxiosSecure";
import { AuthContext } from "../AuthHere/AuthProvider";
import Loader from "../Loader";


const CheckOutForm = () => {
  const {person,loading} = useContext(AuthContext)
 
  console.log(person)
    const stripe = useStripe();
  const elements = useElements();
const axiosSecure = useAxiosSecure();
const [clientSec,setClientSec] = useState("")
const money = 24;
  useEffect(()=>{

   if(money > 0){
    axiosSecure.post('/create-payment-intent', {price : money})
    .then((res)=>{
      console.log(res.data.clientSecret)
      setClientSec(res.data.clientSecret)

    })
   }


  },[money])


  if(loading){
    return <Loader></Loader>
  }

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
     
      return;
    }

    
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
    
    } else {
        
      console.log('[PaymentMethod]', paymentMethod);
    }




    // confirm payment from ---> consfirm card payment doc
  const {paymentIntent , error : cError} = await stripe.confirmCardPayment(clientSec, {
    payment_method : {
      card : card,
      billing_details : {

        email : "ss@ss.com",
        name :  "Unknown"

      }
    }
  })

  if(cError){
    toast.success("SomeThing is Wrong!")
    console.log(cError)
  }
  else{
    toast.success(`Payment Done! Id : ${paymentIntent.id}`)
    console.log(paymentIntent.status)

    






  }




  };

  

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button disabled={!stripe || !clientSec} className="rounded-lg bg-blue-500 py-3 text-red-50 px-5 mt-3" type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
   
};

export default CheckOutForm;