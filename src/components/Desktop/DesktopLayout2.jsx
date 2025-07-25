import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
motion
const DesktopLayoutSticky = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    });


    const opacity1 = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
    const opacity2 = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
    const opacity3 = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
    const opacity4 = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);


    return (
        <section ref={sectionRef} className="h-[400vh] relative bg-[#1B2A47]">
            <div className="sticky top-0 h-screen flex items-center justify-center">
                <div className="flex flex-col text-8xl uppercase font-[Antonio] font-bold text-center gap-10">
                    <motion.h1
                        style={{ opacity: opacity1, scaleX: scrollYProgress }}
                        className="origin-center bg-[#C88E64] text-[#FAEADE] border-4 border-[#FAEADE] p-4 rotate-3"
                    >
                        Trans Fat Free
                    </motion.h1>

                    <motion.h1
                        style={{ opacity: opacity2, scaleX: scrollYProgress }}
                        className="origin-center bg-[#DBCEC3] text-[#2C2C2D] border-4 border-[#DBCEC3] p-4 -rotate-3"
                    >
                        Cholesterol Free
                    </motion.h1>

                    <motion.h1
                        style={{ opacity: opacity3, scaleX: scrollYProgress }}
                        className="origin-center bg-[#7F3B2D] text-[#FAEADE] border-4 border-[#DBCEC3] p-4 rotate-3"
                    >
                        Gluten Free
                    </motion.h1>

                    <motion.h1
                        style={{ opacity: opacity4, scaleX: scrollYProgress }}
                        className="origin-center bg-[#FED775] text-[#2C2C2D] border-4 border-[#DBCEC3] p-4 -rotate-3"
                    >
                        Crafted with Care
                    </motion.h1>
                </div>
            </div>
        </section>
    );
};

export default DesktopLayoutSticky;
