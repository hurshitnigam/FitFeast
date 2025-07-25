import React from 'react'

const DesktopFooter = () => {
  return (
    <div className="flex justify-center gap-20 py-20 bg-[#1B2A47]">
        <div className="footer1 text-[#F9E6D6]">
            <h1 className="text-2xl mb-6 font-semibold text-amber-400">Fit Feast</h1>
            <p>Feast Is A Registered <br /> Trademark of Fitship Private <br /> Limited.</p>
        </div>
        <div className="footer2 text-[#F9E6D6]">
            <h1 className="text-2xl font-lg font-semibold text-amber-400 mb-6">IMPORTANT LINKS</h1>
            <p className="text-base mb-4">Track Order</p>
            <p className="text-base mb-4">Privacy Policy</p>
            <p className="text-base mb-4">Terms & Conditions</p>
            <p>Refund & Return Policy</p>
        </div>
        <div className="footer-3 text-[#F9E6D6]">
            <h1 className="text-2xl font-lg font-semibold text-amber-400 mb-6">SITE NAVIGATION</h1>
            <p className="text-base mb-4">Story</p>
            <p className="text-base mb-4">Blogs</p>
            <p>Contact Us</p>
        </div>
        <div className="footer-4 text-[#F9E6D6]">
            <h1 className="text-2xl font-lg font-semibold text-amber-400 mb-6">CONTACT</h1>
            <p className="text-base mb-4">ST 720, DLF Star Tower, NH-8,<br />Gurgaon - 122001</p>
            <p className="text-base mb-4">Contact@Fitfeast.in</p>
            <p>+91 83683 51228</p>
        </div>

    </div>
  )
}

export default DesktopFooter
