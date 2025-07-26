import React, { useState } from 'react';
import DesktopNav from './DesktopNav';
import { Link } from 'react-router-dom';
import { GrCart } from "react-icons/gr";
import DrawOutlineButton from '../../blocks/DrawOutlineButton'
import AccountButton from '../../blocks/AccountButton'
import Particles from '../../blocks/Backgrounds/Particles/Particles';
import TextPressure from '../../blocks/TextAnimations/TextPressure/TextPressure';
import { motion, AnimatePresence } from 'framer-motion';
motion
const DesktopLayout = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);

    return (
        <div className="relative flex h-screen overflow-hidden bg-[#F9E6D6] items-center">

            <div style={{ width: '100%', height: '100%', position: 'absolute', backgroundColor: '#F9E6D6' }}>
                <Particles
                    particleColors={['#7B4019', '#D96F32']}
                    particleCount={800}
                    particleSpread={20}
                    speed={0.5}
                    particleBaseSize={400}
                    moveParticlesOnHover={false}
                    alphaParticles={false}
                    disableRotation={true}
                />
            </div>

            <nav className="w-full absolute flex top-0 justify-between">
                <div className="logo">
                    <img className="scale-75" src="/Images/fitfeast_logo-removebg-logo.png" alt="" />
                </div>
                <div className="p-2">
                    <i className="ri-equal-line text-3xl" onClick={() => setNavOpen(true)}></i>
                </div>
                <div className="p-5 flex items-center gap-7">
                    <Link to="/account">
                        <AccountButton>Log In</AccountButton>
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
                <img src="/Images/image1x1.png" alt="" />
            </motion.div>


            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 Header flex flex-col justify-center items-center text-[5rem] font-[Antonio] text-center">
                <h1 className="font-bold border-8 border-amber-600 bg-[#1B2A47] text-[#F5D07D] px-12 md:px-20 -rotate-6 mb-10">Fit Feast</h1>

                <motion.div
                    initial={{ clipPath: 'inset(0 50% 0 50%)' }}
                    animate={{ clipPath: 'inset(0 0% 0 0%)' }}
                    transition={{ duration: 1.5 }}
                    className="mb-10 bg-[#F9E6D6] p-5"
                >
                    <div style={{ position: 'relative', height: '' }}>
                        <TextPressure
                            text="Protein-Never"
                            flex={true}
                            alpha={false}
                            stroke={false}
                            width={true}
                            weight={false}
                            italic={false}
                            textColor="#1B2A47"
                            strokeColor="#F5D07D"
                            minFontSize={75}
                        />
                    </div>
                </motion.div>
                <motion.div
                    initial={{ clipPath: 'inset(0 50% 0 50%)' }}
                    animate={{ clipPath: 'inset(0 0% 0 0%)' }}
                    transition={{ duration: 1.5 }}
                    className="font-bold bg-[#F9E6D6]"
                >
                    <div style={{ position: 'relative', height: '' }}>
                        <TextPressure
                            text="Tasted - This - Good"
                            flex={true}
                            alpha={false}
                            stroke={false}
                            width={true}
                            weight={false}
                            italic={false}
                            textColor="#1B2A47"
                            strokeColor="#F5D07D"
                            minFontSize={75}
                        />
                    </div>
                </motion.div>


                <Link to="/products">
                    <DrawOutlineButton>Shop Now</DrawOutlineButton>
                </Link>
            </div>

            <motion.div
                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                animate={{ clipPath: 'inset(0 0% 0 0)' }}
                transition={{ duration: 2 }}
                className="absolute img-2 flex-1 flex justify-center right-80 -rotate-[20deg]"
            >
                <img className="" src="/Images/image2x1.png" alt="" />
            </motion.div>



            <motion.div
                initial={{ x: "28rem", y: "-20rem", scale: 0.5 }}
                animate={{ x: "0rem", y: "8rem", rotate: 395 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="absolute scale-135"
            >
                <img className="" src="/Images/Nutty_Brownie___A_Dessert_You_Can_Feel_Good_About___Love_brownies_but_want_something_healthier_-removebg-preview-split.png" alt="" />
            </motion.div>


            <motion.div
                initial={{ x: "28rem", y: "20rem", scale: 0.5 }}
                animate={{ x: "4rem", y: "-5rem", opacity: 1, rotate: 375 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="absolute scale-150"
            >
                <img src="/Images/Snack_Smarter_with_FitFeast___Looking_for_a_guilt-free_snack_Meet_FitFeast_Cream___Onion_Protei-removebg-preview-split.png" alt="" />
            </motion.div>


            <motion.div
                initial={{ x: "28rem", y: "-20rem", scale: 0.5 }}
                animate={{ x: "50rem", y: "8rem", rotate: 315 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="absolute scale-135"
            >
                <img src="/Images/Mocha_Boost___Your_Coffee-Chocolate_Fix____Love_coffee_and_chocolate_The_Mocha_Boost_Protein_Ba-removebg-preview-split.png" alt="" />
            </motion.div>


            <motion.div
                initial={{ x: "28rem", y: "20rem", scale: 0.5 }}
                animate={{ x: "48rem", y: "-5rem", opacity: 1, rotate: 348 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="absolute scale-150"
            >
                <img src="/Images/Spice_Up_Your_Snack_Game___️Love_bold__fiery_flavors_Say_hello_to_FitFeast_Peri-Peri_Protein_Ch-removebg-preview-split.png" alt="" />
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