import React from 'react';
import { motion } from 'framer-motion';
motion
const reviews = [
    {
        name: 'Anupam Mittal (Shark)',
        quote: 'These are good. Protein content is impressive. Products are far better than other brands out there.',
        designation: 'Founder & CEO @ People Group',
        image: 'https://fitfeast.in/cdn/shop/files/Anupam_Photo.png?v=1741760560'
    },
    {
        name: 'Viraj Bahl (Shark)',
        quote: 'Bohot acha taste hai saare products ka. Aapki technical knowledge about food science is very impressive.',
        designation: 'Founder & MD, VRB Consumer',
        image: 'https://m.economictimes.com/thumb/msid-116959430,width-1200,height-900,resizemode-4,imgsize-24178/vikash-bahl.jpg'
    },
    {
        name: 'Nikhil Singh',
        quote: 'Finally, chips I dont feel bad about eating! The Peri Peri flavor is amazing, and it\'s hard to believe they are baked and high in protein.',
        designation: '(Verified Buyer)',
        image: 'https://fitfeast.in/cdn/shop/files/7_185a4df0-d233-4496-bc77-b8872ee73496.png?v=1733815115'
    },
];

const MobileLayout3 = () => {
    return (
        <div className="w-full bg-amber-50 text-black">

            <div className="flex flex-col md:flex-row p-6 items-center">
                <img src="/src/Images/peanutbutter.png" alt="Peanut Butter" className="w-full md:w-1/2" />
                <div className="md:w-1/2 mt-6 md:mt-0 md:ml-10">
                    <h1 className="text-3xl font-extrabold mb-4">FitFeast's Trust</h1>
                    <p className="text-base mb-4">For years, Protein snacks as well as supplements have been low on quality and high on gimmicks. At FitFeast, we obsess over taste and work with the world's top food technologists to craft flavours you'll actually crave. Every batch undergoes rigorous lab testing to ensure label accuracy, shelf life, and safety.</p>
                    <p className="text-base mb-4">When you choose FitFeast, you’re choosing clean, delicious, and truly effective protein—because you deserve the best.</p>
                    <button className="text-base bg-[#1B2A47] text-[#F4D17F] px-6 py-2 rounded-xl">Learn More</button>
                </div>
            </div>

            <div className="flex flex-col md:flex-row p-6 items-center">
                <div className="md:w-1/2 md:mr-10">
                    <h1 className="text-3xl font-extrabold mb-4">Your Daily Protein, Sorted - AM to PM</h1>
                    <p className="text-base mb-4">Protein is the foundation of a strong, healthy body but 3 in 4 Indians still don't get enough protein. That's where FitFeast comes in.</p>
                    <p className="text-base mb-4">Start your day with White Chocolate Peanut Butter, power through the evening with a Malai Kulfi Protein Shake, and end the night with a Brownie Protein Bar. An AM-to-PM protein fix that's tasty, satisfying, and packed with nutrition—because eating right should never feel like a chore.</p>
                </div>
                <img src="/src/Images/image-2.png" alt="Protein Products" className="w-full md:w-1/2" />
            </div>

            <div className="py-10 bg-[#F3E4D4] overflow-hidden">
                <h1 className="text-3xl font-extrabold text-center mb-10">Honest Reviews</h1>
                <motion.div
                    className="flex gap-6 w-max"
                    animate={{ x: ['0%', '-100%'] }}
                    transition={{ repeat: Infinity, duration:50, ease: "linear" }}
                >
                    {reviews.concat(reviews).map((review, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-[300px] h-[500px] bg-[#28668F] rounded-2xl flex flex-col items-center p-6 text-white"
                        >
                            <div className="rounded-full w-[150px] h-[150px] overflow-hidden">
                                <img
                                    className="w-full h-full object-cover"
                                    src={review.image}
                                    alt={review.name}
                                />
                            </div>
                            <p className="text-base mt-6 text-center">{review.quote}</p>
                            <p className="text-base mt-4 text-yellow-400 font-bold">{review.name}</p>
                            <p className="text-sm mt-2">{review.designation}</p>
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="grid grid-cols-2 gap-6 p-6">
                {[
                    { icon: 'https://fitfeast.in/cdn/shop/files/rupee-1.png?v=1713354211', title: 'Cash On Delivery', subtitle: 'Available PAN India' },
                    { icon: 'https://fitfeast.in/cdn/shop/files/truck-1.png?v=1713354212', title: 'Secure Payment', subtitle: 'We got your back' },
                    { icon: 'https://fitfeast.in/cdn/shop/files/rupee-1.png?v=1713354211', title: 'Exclusive Discount', subtitle: 'Pay via many online modes' },
                    { icon: 'https://fitfeast.in/cdn/shop/files/truck-1.png?v=1713354212', title: 'Fast Delivery', subtitle: 'Pay less, have more' },
                ].map((item, index) => (
                    <div key={index} className="flex flex-col items-center gap-4">
                        <div className=" w-[60px] rounded-full bg-[#1B2A47] flex items-center justify-center">
                            <img src={item.icon} alt="" className="" />
                        </div>
                        <div>
                            <p className="font-bold text-base text-center">{item.title}</p>
                            <p className="text-sm text-center">{item.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MobileLayout3;
