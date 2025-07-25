import React, { useState } from 'react';

const menuItems = [
    { name: 'Products', image: '/public/Images/fitfeast_in-AmtoPmfinal.jpg' },
    { name: 'Offers', image: '/public/Images/Offers.jpg' },
    { name: 'Coming Soon', video: '/public/Videos/comingsoon.mp4' },
    { name: 'Track Order', image: 'https://d4pmlgzenkweq.cloudfront.net/lfty9450i4rggxh9j7lt4x1qdxf5' },
    { name: 'About Us', image: 'https://fitfeast.in/cdn/shop/files/IMG_4109_2_copy.jpg?v=1741780063' },
];

const DesktopNav = ({ setIsOpen }) => {
    const [hovered, setHovered] = useState(null);

    const hoveredItem = hovered !== null ? menuItems[hovered] : null;

    return (
        <div className="fixed inset-0 z-50 bg-[#eed0b9]">
            <div className="absolute -top-7 ml-5 z-20">
                <img src="/public/Images/fitfeast_logo-removebg-preview.png" alt="logo" />
            </div>
            <div
                onClick={() => setIsOpen(false)}
                className="w-[50px] h-[50px] rounded-full bg-amber-50 absolute top-6 left-1/2 transform -translate-x-1/2 z-20 flex items-center justify-center cursor-pointer"
            >
                <i className="ri-close-large-fill text-xl text-[#523122]"></i>
            </div>
            <div className="flex h-full">
                <div className="w-1/2 flex items-center justify-center relative">
                    <div className="uppercase text-7xl font-[Antonio] font-bold text-[#523122] space-y-4 relative">
                        {menuItems.map((item, index) => (
                            <h2
                                key={index}
                                onMouseEnter={() => setHovered(index)}
                                onMouseLeave={() => setHovered(null)}
                                className={`cursor-pointer transition-opacity duration-300 ${hovered === null || hovered === index ? 'opacity-100' : 'opacity-20'}`}
                            >
                                {item.name}
                            </h2>
                        ))}
                        <div className="absolute flex ml-10 gap-5 text-base normal-case">
                            <a href="https://www.instagram.com/fitfeast.in/?hl=en">Instagram</a>
                            <a href="https://www.facebook.com/fitfeasthealth/">Facebook</a>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 h-full flex items-center justify-center relative">
                    {hoveredItem && hoveredItem.video ? (
                        <video
                            src={hoveredItem.video}
                            autoPlay
                            muted
                            loop
                            className="w-full h-full object-contain transition-all duration-500"
                        />
                    ) : (
                        <img
                            className="w-full h-full object-contain transition-all duration-500"
                            src={
                                hoveredItem
                                    ? hoveredItem.image
                                    : 'https://img-cdn.publive.online/fit-in/1200x675/indianstartupnews/media/media_files/2025/07/03/shark-tank-india-featured-fitfeast-2025-07-03-15-29-04.png'
                            }
                            alt="preview"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default DesktopNav;
