import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
motion
const lines = [
    "Trans Fat Free",
    "Cholesterol Free",
    "Gluten Free",
    "Crafted with Care",
    "Sustainable"
];

const MobileLayout2 = () => {
    const refs = useRef([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const middle = window.innerHeight / 2;
            let closest = 0;
            let minDist = Infinity;
            refs.current.forEach((ref, i) => {
                if (ref) {
                    const rect = ref.getBoundingClientRect();
                    const dist = Math.abs(rect.top + rect.height / 2 - middle);
                    if (dist < minDist) {
                        minDist = dist;
                        closest = i;
                    }
                }
            });
            setActiveIndex(closest);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="w-full min-h-[150vh] bg-[#1B2A47] flex items-center justify-center tracking-tight">
            <div className="text-5xl md:text-9xl text-center flex flex-col gap-8 uppercase w-full overflow-hidden">
                {lines.map((line, i) => (
                    <motion.h3
                        key={i}
                        ref={el => refs.current[i] = el}
                        initial={{ opacity: 0.2, scale: 0.95 }}
                        animate={{
                            opacity: activeIndex === i ? 1 : 0.2,
                            scale: activeIndex === i ? 1.05 : 0.95,
                            color: activeIndex === i ? '#F4D17F' : '#F4D17F55'
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        {line}
                    </motion.h3>
                ))}
            </div>
        </div>
    );
};

export default MobileLayout2;
