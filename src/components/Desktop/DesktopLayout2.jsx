import React from 'react';
import './DesktopLayout2.css';

const socialLinks = [
    { label: 'Trans Fat Free', colors: ['before:bg-[#365492]', 'after:bg-[#4a69ad]'] },
    { label: 'Cholesterol Free', colors: ['before:bg-[#097aa5]', 'after:bg-[#53b9e0]'] },
    { label: 'Gluten Free', colors: ['before:bg-[#b33a2b]', 'after:bg-[#e66a5a]'] },
    { label: 'Crafted with Care', colors: ['before:bg-[#d81c3f]', 'after:bg-[#e46880]'] },
];

const DesktopLayout2 = () => {
    return (
        <div className="min-h-screen bg-[#EAC8A6] flex items-center justify-center font-['Roboto_Condensed']">
            <ul className="flex flex-col items-center gap-4">
                {socialLinks.map((link, index) => (
                    <li key={index} className="relative group">
                        <a
                            href="#"
                            className={`w-[1000px] h-[120px] bg-[#F3E4D4] text-left pl-5 flex items-center transform rotate-[-20deg] skew-y-[22deg] shadow-[-20px_20px_10px_rgba(0,0,0,0.5)] relative transition-all duration-500 before-content after-content ${link.colors.join(' ')}`}
                        >
                            <span className="left-75 absolute font-bold text-[#6b3535] text-7xl transition-colors duration-500">
                                {link.label}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DesktopLayout2;
