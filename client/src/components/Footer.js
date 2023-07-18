import React from 'react'
import { finallogo } from '../assets';

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
        <div className="max-w-screen-xl mx-auto grid grid-cols-4">
            {/* ============LogoIcon Start here =========  */}
            <div>
                <img src={finallogo} alt="finallogo"/>
                <p className="text-white text-sm tracking-wide">fashion</p>
            </div>
            {/* ============LogoIcon End here =========  */}
            {/* ============LocateUs Start here =========  */}
            <div>
                <h2 className="text-2xl font-semibold text-white mb-4"> Locate Us</h2>
                <div className="text-base flex flex-col gap-2">
                    <p>New Baneshwor, Kathmandu</p>
                    <p>9812345667</p>
                    <p>fashion@gmail.com</p>
                </div>
            </div>
            {/* ============LocateUs End here =========  */}
        </div>
      
    </div>
  )
}

export default Footer;
