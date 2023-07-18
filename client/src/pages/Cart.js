import React from 'react'
import { useSelector } from 'react-redux';
import Cartitem from '../components/Cartitem';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios";

const Cart = () => {
  const productData = useSelector((state) => state.fashion.productData);
  const userInfo = useSelector((state)=> state.fashion.userInfo);
  const [totalAmt, setTotalAmt] = useState(" ");
  const [payNow, setPayNow] = useState(false);

  useEffect(()=>{
    let price = 0;
    productData.map((item)=> {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  }, [productData]);
  const handleCheckout=()=> {
    if(userInfo){
      setPayNow(true);
    } else {
      toast.error("Please sign in to checkout");
    }
  };

  const payment = async(token)=>{
    await axios.post("http://localhost:8000/pay", {
      amount: totalAmt * 100,
      token: token,
    })
  }
  return (
    <div className="max-w-screen-xl mx-auto py-20 flex">
      <Cartitem />
      <div className="w-1/3 bg-gray-100 py-6 px-4">
        <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
          <h2 className=" text-2xl font-medium">Cart Total</h2>
          <p className="flex items-center gap-4 text-base">
            subtotal{" "}
            <span className="font-bold text-lg">$ {totalAmt}</span>
          </p>
          <p className="flex items-start gap-4 text-base">
            shipping {" "}
            <span> bla bla bla</span>
          </p>
        </div>
        <p className="font-semibold flex justify-between mt-6">
          Total <span className="text-xl font-bold">$ {totalAmt}</span>
        </p>
        <button onClick={handleCheckout} className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300">Proceed to checkout</button>
        {
          payNow && <div className="w-full mt-6 flex items-center justify-center">
            <StripeCheckout
            stripeKey="pk_test_51NTc1GHHhm5m620pVxETfabwHyi4DngB2xJ7gj2fdkhPyOHQccOclWfAgno4cMcw3uBoJD1JjPtXBlpaikXG6FHv00H3r5Ljti"
            name="Fashion Store"
            amount={totalAmt * 100}
            label="Pay to fashion"
            description={`Your payment amount is $${totalAmt}`}
            token={payment}
            email={userInfo.email} 
            />
          </div>
        }
        
      </div>
      <ToastContainer 
         position="top-left"
         autoClose={2000}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         draggable
         pauseOnHover
         theme="dark"
        />
    </div>
  )
}

export default Cart;