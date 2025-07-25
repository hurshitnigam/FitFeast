import React, { useState } from 'react';

const menuItems = [
    { name: 'Products' },
    { name: 'Offers' },
    { name: 'Coming Soon' },
    { name: 'Track Order' },
    { name: 'About Us' },
];

const MobileNav = ({ setIsOpen }) => {
    const [hovered, setHovered] = useState(null);

    return (
        <div className="fixed inset-0 z-50 bg-[#eed0b9] flex flex-col">

            <div className="relative flex items-center justify-center p-10">
                <img
                    src="/Images/fitfeast_logo-removebg-logo.png"
                    alt="logo"
                />
                <div
                    onClick={() => setIsOpen(false)}
                    className="w-[30px] h-[30px] rounded-full bg-amber-50 absolute top-6 right-6 flex items-center justify-center cursor-pointer"
                >
                    <i className="ri-close-large-fill text-sm text-[#523122]"></i>
                </div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center">
                <div className="uppercase text-5xl font-[Antonio] font-bold text-[#523122] space-y-4">
                    {menuItems.map((item, index) => (
                        <h2
                            key={index}
                            onMouseEnter={() => setHovered(index)}
                            onMouseLeave={() => setHovered(null)}
                            className={`cursor-pointer transition-opacity duration-300 ${hovered === null || hovered === index ? 'opacity-100' : 'opacity-20'
                                }`}
                        >
                            {item.name}
                        </h2>
                    ))}
                </div>
            </div>

            <div className="flex justify-center gap-5 pb-8">
                <a href="#">Instagram</a>
                <a href="#">Facebook</a>
            </div>
        </div>
    )
};

export default MobileNav;
