import React from 'react';
import { Link } from "react-router-dom";
import { cart,  sizelogo } from '../assets/index';
import { useSelector } from 'react-redux';



const Header = () => {
  const productData = useSelector((state) => state.fashion.productData);
  const userInfo = useSelector((state) => state.fashion.userInfo);
  console.log(userInfo);
  return (
    <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50'>
        <div className="max-w-screen-xl h-full m-auto flex items-center justify-between">  
            <Link to ="/">
              <div>
                <img className="w-25" src={sizelogo} alt='sizelogo'/>
              </div>
            </Link>
            
            <div className="flex items-center gap-7">
            <ul className="flex items-center gap-7">
                
            </ul>
            <Link to="/cart">
            <div className="relative">
            <img className="w-6" src={cart} alt="cart"/>
            <span className="absolute w-6 top-2 left-0 text-sm flex items-center justify-center">{productData.length}</span>
            </div></Link>
            <Link to="/login">
            <img className="w-8 h-8 rounded-full" 
            src={
              userInfo?userInfo.image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgJMFsyQlqFwvHOYF0fEijnJjaNRsNDBfi1Q&usqp=CAU"
            } 
            alt="userlogo"/>
            </Link>
            {userInfo && <p className="text-base font-semibold underline underline-offset-2">{userInfo.name}</p>}
            </div>
        </div>
    </div>
  )
}

export default Header;
