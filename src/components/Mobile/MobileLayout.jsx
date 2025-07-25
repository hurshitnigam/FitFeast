import React, { useState } from 'react'
import MobileNav from './MobileNav'
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
motion
const MobileLayout = () => {

    const [navOpen, SetNavOpen] = useState(false)

    return (
        <div>
            <div className="relative flex flex-col w-full h-screen bg-[#F9E6D6] overflow-hidden">

                <nav className="flex items-center justify-between h-20 px-6 pt-4">
                    <img
                        src="/Images/fitfeast_logo-removebg-logo.png"
                        alt="FitFeast"
                        className="object-contain w-[120px] block"
                    />

                    <i className="ri-equal-line text-lg" onClick={() => SetNavOpen(true)}></i>

                    <Link to="/account">
                    <button className="bg-white text-black font-bold py-2 px-6 rounded-2xl shadow">
                        Log in
                    </button>
                </Link>
            </nav>

            <main className="relative flex flex-col mt-10 items-center justify-center text-center">

                <div className="rotate-[-6deg] mb-2">
                    <span className="inline-block bg-[#A26833] text-[#FCE1CD] border-4 border-amber-600 px-8 py-2 text-4xl font-bold">
                        Fit Feast
                    </span>
                </div>

                <h1 className="text-4xl font-[Antonio] leading-tight">Protein Never</h1>
                <h2 className="text-4xl font-[Antonio] leading-tight mb-4">Tasted This Good</h2>

                <p className="max-w-md px-4 text-lg text-[#6B4F27] mb-6">
                    FitFeast makes protein-packed foods that are tasty, convenient, and functional. Why?
                    Because protein matters—for everyone.
                </p>

                <button className="bg-amber-400 hover:bg-amber-500 text-[#A26833] font-bold py-2 px-5 rounded-full text-xl shadow">
                    Shop Now
                </button>

                <div className="absolute scale-75 top-72 left-56 transform -translate-x-56 -translate-y-16 -rotate-12">
                    <img
                        src="/Images/image1x1.png"
                        alt=""
                        className=""
                    />
                </div>
                <div className="absolute scale-75 top-72 left-56 transform -translate-x-2 -translate-y-16 rotate-12">
                    <img
                        src="/Images/image2x1.png"
                        alt=""
                        className=""
                    />
                </div>
            </main>
            <AnimatePresence>
                {navOpen && (
                    <motion.div
                        initial={{ y: '100%'}}
                        animate={{ y: 0}}
                        exit={{ y: '-100%'}}
                        transition={{ duration: 2}}
                        className="fixed inset-0 z-50"
                    >
                        <MobileNav setIsOpen={SetNavOpen} />

                    </motion.div>           
                )}
            </AnimatePresence>
        </div>

        </div >
    )
}

export default MobileLayout
