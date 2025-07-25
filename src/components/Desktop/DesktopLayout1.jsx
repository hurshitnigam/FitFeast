import React, { useState } from 'react';
import DesktopNav from './DesktopNav';
import { Link } from 'react-router-dom';
import { GrCart } from "react-icons/gr";
import { motion, AnimatePresence } from 'framer-motion';
motion
const DesktopLayout = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);

    return (
        <div className="relative flex h-screen w-full bg-[#F9E6D6] items-center">
            <nav className="w-full absolute flex top-0 justify-between">
                <div className="logo">
                    <img className="scale-75" src="/src/Images/fitfeast_logo-removebg-logo.png" alt="" />
                </div>
                <div className="p-2">
                    <i className="ri-equal-line text-3xl" onClick={() => setNavOpen(true)}></i>
                </div>
                <div className="p-5 flex items-center gap-7">
                    <Link to="/account">
                        <button className="bg-[#1B2A47] rounded-3xl px-3 py-1 text-lg text-[#F5D07D]" >Log In</button>
                    </Link>
                    <GrCart className='text-2xl mr-2 cursor-pointer' onClick={() => setCartOpen(!cartOpen)} />
                </div>
            </nav>

            <AnimatePresence>
                {cartOpen && (
                    <motion.div
                        initial={{ x: '100%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: '100%', opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute flex flex-col z-30 w-[20%] h-[80%] bg-white top-16 right-6 text-xl gap-2 p-4 shadow-xl rounded-lg"
                    >
                        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                animate={{ clipPath: 'inset(0 0% 0 0)' }}
                transition={{ duration: 2 }}
                className="absolute img-1 flex-1 flex justify-center left-80 rotate-[20deg]"
            >
                <img src="/src/Images/image1x1.png" alt="" />
            </motion.div>


            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 Header flex flex-col justify-center items-center text-[5rem] font-[Antonio] text-center">
                <h1 className="font-bold border-8 border-amber-600 bg-[#1B2A47] text-[#F5D07D] px-12 md:px-20 -rotate-6 mb-10">Fit Feast</h1>

                <motion.h1
                    className=""
                    initial={{ clipPath: 'inset(0 50% 0 50%)' }}
                    animate={{ clipPath: 'inset(0 0% 0 0%)' }}
                    transition={{ duration: 1.5 }}
                >Protein Never <br /> Tasted This Good
                </motion.h1>

                <Link to="/products">
                    <button className="text-2xl text-[#F5D07D] bg-[#1B2A47] py-2 px-4 rounded-full ">Shop Now</button>
                </Link>
            </div>

            <motion.div
                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                animate={{ clipPath: 'inset(0 0% 0 0)' }}
                transition={{ duration: 2 }}
                className="absolute img-2 flex-1 flex justify-center right-80 -rotate-[20deg]"
            >
                <img className="" src="/src/Images/image2x1.png" alt="" />
            </motion.div>



            <motion.div
                initial={{ x: "28rem", y: "-20rem", scale: 0.5 }}
                animate={{ x: "0rem", y: "8rem", rotate: 45 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute"
            >
                <img className="" src="/src/Images/Nutty_Brownie___A_Dessert_You_Can_Feel_Good_About___Love_brownies_but_want_something_healthier_-removebg-preview-split.png" alt="" />
            </motion.div>


            <motion.div
                initial={{ x: "28rem", y: "20rem", scale: 0.5 }}
                animate={{ x: "6rem", y: "-6rem", opacity: 1, rotate: 12 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute"
            >
                <img src="/src/Images/Snack_Smarter_with_FitFeast___Looking_for_a_guilt-free_snack_Meet_FitFeast_Cream___Onion_Protei-removebg-preview-split.png" alt="" />
            </motion.div>


            <motion.div
                initial={{ x: "28rem", y: "-20rem", scale: 0.5 }}
                animate={{ x: "65rem", y: "8rem", rotate: -45 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute"
            >
                <img src="/src/Images/Mocha_Boost___Your_Coffee-Chocolate_Fix____Love_coffee_and_chocolate_The_Mocha_Boost_Protein_Ba-removebg-preview-split.png" alt="" />
            </motion.div>


            <motion.div
                initial={{ x: "28rem", y: "20rem", scale: 0.5 }}
                animate={{ x: "75rem", y: "-6rem", opacity: 1, rotate: -12 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute"
            >
                <img src="/src/Images/Spice_Up_Your_Snack_Game___️Love_bold__fiery_flavors_Say_hello_to_FitFeast_Peri-Peri_Protein_Ch-removebg-preview-split.png" alt="" />
            </motion.div>

            <AnimatePresence>
                {navOpen && (
                    <motion.div
                        initial={{ y: '-100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '-100%' }}
                        transition={{ duration: 0.8 }}
                        className="fixed inset-0 z-50"
                    >
                        <DesktopNav setIsOpen={setNavOpen} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div >
    );
}

export default DesktopLayout;