import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, animate } from 'framer-motion';
motion

const ProductImage = ({ src, alt, imgWidth, imgHeight, imagePosition }) => {

    return (
        <div className={`absolute ${imagePosition}`}>
            <img
                src={src}
                alt={alt}
                style={{ width: imgWidth, height: imgHeight }}
                className="object-contain"
            />
        </div>
    );
};

const ProductsPage = () => {
    const scrollRef = useRef(null);
    const x = useMotionValue(0);
    const sectionRef = useRef(null);
    const horizontalRef = useRef(null);
    const scrollX = useMotionValue(0);

    useEffect(() => {
        const section = sectionRef.current;
        const horizontal = horizontalRef.current;
        const totalScroll = horizontal.scrollWidth - window.innerWidth;
        const sectionHeight = section.offsetHeight;
        const start = section.offsetTop;
        const end = start + sectionHeight;

        const onScroll = () => {
            const scrollPos = window.scrollY;

            if (scrollPos >= start && scrollPos <= end - window.innerHeight) {
                const scrollProgress = (scrollPos - start) / (sectionHeight - window.innerHeight);
                const translateX = -scrollProgress * totalScroll;
                scrollX.set(translateX);
            }
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [scrollX]);

    const productData = [
        {
            id: 1, name: 'White Chocolate',
            color: 'bg-gradient-to-r from-[#FED16A] via-[#FEFFC4] to-[#FED16A]',
            image: 'https://fitfeast.in/cdn/shop/files/WhiteChocolate_99a0b865-f874-437a-b0ab-d7ff56fd4136.png?v=1752126412&width=360',
            imgWidth: '', imgHeight: '700px',
            imagePosition: 'bottom-5',
            textPosition: 'bottom-6 left-32',
            textBgColor: 'bg-[#8F582E]',
            textColor: 'text-[#FEE9A5]',
            textPadding: 'px-6 py-1'
        },
        {
            id: 2, name: 'Cookie Fudge',
            color: 'bg-gradient-to-r from-[#7B4019] via-[#FFEEA9] to-[#7B4019]',
            image: 'https://fitfeast.in/cdn/shop/files/COOKIESFUDGE.png?v=1752126621&width=360',
            imgWidth: '', imgHeight: '700px',
            imagePosition: 'bottom-2',
            textPosition: 'bottom-8 left-46',
            textBgColor: 'bg-[#FEE9A5]',
            textColor: 'text-[#8F582E]',
            textPadding: 'px-6 py-1'
        },
        {
            id: 3, name: 'Butterscotch',
            color: 'bg-gradient-to-r from-[#FFCC00] via-[#FFEEA9] to-[#FFCC00]',
            image: 'https://fitfeast.in/cdn/shop/files/butterscotch_f4337d53-d9f2-4447-a199-829009e09469.png?v=1752126462&width=360',
            imgWidth: '', imgHeight: '700px',
            imagePosition: 'bottom-3',
            textPosition: 'bottom-6 left-46',
            textBgColor: 'bg-[#8F582E]',
            textColor: 'text-[#FEE9A5]',
            textPadding: 'px-6 py-1'
        },
        {
            id: 4, name: 'Cream & Onion',
            color: 'bg-gradient-to-r from-[#78C841] via-[#B4E50D] to-[#78C841]',
            image: 'https://fitfeast.in/cdn/shop/files/CreamAndOnion1.png?v=1752126036&width=360',
            imgWidth: '', imgHeight: '550px',
            imagePosition: 'bottom-10 left-10',
            textPosition: 'bottom-8 left-37',
            textBgColor: 'bg-[#2D5E3A]',
            textColor: 'text-[#95D632]',
            textPadding: 'px-6 py-1'
        },
        {
            id: 5, name: 'Peri Peri',
            color: 'bg-gradient-to-r from-[#FF6F3C] via-[#B4E50D] to-[#FF6F3C]',
            image: 'https://fitfeast.in/cdn/shop/files/PERIPERI1_503413d8-674f-496a-87b0-2ca6ec25a4b5.png?v=1752125734&width=823',
            imgWidth: '', imgHeight: '550px',
            imagePosition: 'bottom-8 left-14',
            textPosition: 'bottom-8 left-56',
            textBgColor: 'bg-[#A1342D]',
            textColor: 'text-[#FEE9A5]',
            textPadding: 'px-6 py-1'
        },
        {
            id: 6, name: 'Chocolate Flavour',
            color: 'bg-gradient-to-r from-[#B13BFF] via-[#FEC5F6] to-[#B13BFF]',
            image: 'https://fitfeast.in/cdn/shop/files/ChocolateSHAKE.png?v=1752125138&width=823',
            imgWidth: '', imgHeight: '800px',
            imagePosition: 'bottom-0',
            textPosition: 'bottom-8 left-32',
            textBgColor: 'bg-[#753EA0]',
            textColor: 'text-[#FCC2F6]',
            textPadding: 'px-6 py-1'
        },
        {
            id: 7, name: 'Malai Kulfi Flavour',
            color: 'bg-gradient-to-r from-[#FF6F3C] via-[#FFF2C2] to-[#FF6F3C]',
            image: 'https://fitfeast.in/cdn/shop/files/malaikulfi_1.png?v=1752124889&width=823',
            imgWidth: '', imgHeight: '800px',
            imagePosition: 'bottom-0',
            textPosition: 'bottom-8 left-28',
            textBgColor: 'bg-[#E85A26]',
            textColor: 'text-[#FEE9A5]',
            textPadding: 'px-6 py-1'
        },
        {
            id: 8, name: 'Protein Bars',
            color: 'bg-gradient-to-r from-[#DDCBAD] to-[#6F302A]',
            image: 'https://fitfeast.in/cdn/shop/files/Mocha_and_Nutty.png?v=1752125542&width=823',
            imgWidth: '', imgHeight: '700px',
            imagePosition: 'bottom-3 rotate-90',
            textPosition: 'bottom-8 left-46',
            textBgColor: 'bg-[#8F582E]',
            textColor: 'text-[#FEE9A5]',
            textPadding: 'px-6 py-1'
        },
    ];

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        const handleWheel = (e) => {
            const delta = e.deltaY;

            const containerWidth = container.offsetWidth;
            const scrollWidth = container.scrollWidth;

            const maxScroll = -(scrollWidth - containerWidth);
            let newX = x.get() - delta;


            if (newX > maxScroll && newX < 0) {
                e.preventDefault();
                animate(x, newX, { duration: 1, ease: 'easeOut' });
            }
        };

        container.addEventListener('wheel', handleWheel, { passive: false });
        return () => container.removeEventListener('wheel', handleWheel);
    }, [x]);


    return (
        <section ref={sectionRef} className="relative h-[300vh] bg-[#FAEADE]">

            <div className="sticky top-0 h-screen overflow-hidden">

                <motion.div ref={horizontalRef} style={{ x: scrollX }} className="flex items-center flex-nowrap gap-10 min-h-screen w-max px-10">

                    <div className="font-bold flex flex-col items-start justify-center min-h-screen
                    p-10 ml-58 text-9xl font-[Antonio]">
                        <div className="flex flex-col items-center gap-2 -tracking-normal text-[#523122] font-bold">
                            <h1 className="">We Have 8</h1>
                            <h1 className="bg-[#A26833] text-[#FAEADE] p-3 border-4 border-[#FAEADE] -rotate-3">Freaking</h1>
                            <h1 className="">Delicious Flavours</h1>
                        </div>
                    </div>

                    {productData.map((product) => (
                        <Link to={`/product${product.id}`} key={product.id}>
                            <motion.div
                                className={`relative w-[650px] h-[500px] ${product.color} rounded-xl shadow-xl -rotate-6`}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                <ProductImage
                                    src={product.image}
                                    alt={product.name}
                                    imgWidth={product.imgWidth}
                                    imgHeight={product.imgHeight}
                                    imagePosition={product.imagePosition}
                                />
                                <h2 className={`uppercase rounded-3xl absolute ${product.textPosition} ${product.textBgColor} ${product.textColor} ${product.textPadding} text-4xl font-medium`}>
                                    {product.name}
                                </h2>
                            </motion.div>
                        </Link>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ProductsPage;
