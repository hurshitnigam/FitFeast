import React from 'react';
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const MobileFooter = () => {
    return (
        <footer className="w-full bg-[#1B2A47] text-[#F4D17F] px-6 py-10 text-sm font-light">
            <div className="flex flex-col gap-6">

                <div>
                    <img className='w-[150px] mb-2' src="https://fitfeast.in/cdn/shop/files/Untitled_design_6.png?v=1733818458&width=280" alt="FitFeast Logo" />
                    <p className="text-[#F4D17F]/80">FitFeast Is A Registered Trademark Of Fitship Private Limited.</p>
                </div>

                <div className="flex justify-between">
                    <div>
                        <h3 className="font-bold text-base mb-2">IMPORTANT LINKS</h3>
                        <p>Track Order</p>
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                        <p>Refund & Returns Policy</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-base mb-2">SITE NAVIGATION</h3>
                        <p>Story</p>
                        <p>Blogs</p>
                        <p>Contact Us</p>
                    </div>
                </div>

                <div>
                    <h3 className="font-bold text-base mb-2">CONTACT</h3>
                    <p>ST 720, DLF Star Tower, NH-8, Gurgaon - 122001</p>
                    <p>Contact@Fitfeast.In</p>
                    <p>+91 83683 51228</p>
                </div>

                <div className="flex justify-center gap-4 text-xl mt-6">
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaInstagram /></a>
                </div>

                <p className="text-center mt-6 text-xs text-[#F4D17F]/70">© 2025 FitFeast All Rights Reserved.</p>

            </div>
        </footer>
    )
}

export default MobileFooter;
