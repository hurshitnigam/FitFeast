import React from 'react';

const DesktopLayout3 = () => {
    return (
        <div className="w-full py-30 px-20 bg-amber-50 text-black">
            <div className="flex">
                <img src="src/Images/peanutbutter.png" alt="" />
                <div className="w-[75%] ml-7 mt-10">
                    <h1 className="text-4xl font-extrabold p-5">FitFeast's Trust</h1>
                    <p className="text-lg p-5">
                        For years, Protein snacks as well as supplements have been low on quality and high on gimmicks. At FitFeast, we obsess over taste and work with the world's top food technologists to craft flavours you'll actually crave. Every batch undergoes rigorous lab testing to ensure label accuracy, shelf life, and safety.
                    </p>
                    <p className="text-lg p-5">
                        When you choose FitFeast, you’re choosing clean, delicious, and truly effective protein—because you deserve the best.
                    </p>
                    <button className="text-base bg-[#1B2A47] text-[#F4D17F] ml-7 mt-6 px-6 py-1 rounded-xl">Learn More</button>
                </div>
            </div>

            <div className="flex mt-30">
                <div className="w-[75%] ml-7 mt-10">
                    <h1 className="text-4xl font-extrabold p-5">Your Daily Protein, Sorted - AM to PM</h1>
                    <p className="text-lg p-5">
                        Protein is the foundation of a strong, healthy body but 3 in 4 Indians still don't get enough protein. That's where FitFeast comes in.
                    </p>
                    <p className="text-lg p-5">
                        Start your day with White Chocolate Peanut Butter, power through the evening with a Malai Kulfi Protein Shake, and end the night with a Brownie Protein Bar. An AM-to-PM protein fix that's tasty, satisfying, and packed with nutrition—because eating right should never feel like a chore.
                    </p>
                </div>
                <img src="/src/Images/image-2.png" alt="" />
            </div>

            <div className="py-18">
                <h1 className="text-4xl font-extrabold text-center">Honest Reviews</h1>
                <div className="flex justify-center mt-20 gap-5 text-white">
                    <div className="flex flex-col items-center p-12 h-[550px] w-[350px] rounded-2xl bg-[#28668F]">
                        <div className="rounded-full w-[180px] h-[180px] overflow-hidden">
                            <img
                                className="w-full h-full object-cover"
                                src="https://m.economictimes.com/thumb/msid-116959430,width-1200,height-900,resizemode-4,imgsize-24178/vikash-bahl.jpg"
                                alt=""
                            />
                        </div>
                        <div className="mt-10 text-center">
                            <p className="text-base">Bohot acha taste hai saare products ka. Aapki technical knowledge about food science is very impressive.</p>
                            <p className="text-base mt-4 text-yellow-400 font-bold">Viraj Bahl (Shark) as quoted on ST India</p>
                            <p className="text-base mt-4">Founder & Managing Director, VRB Consumer</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-12 h-[510px] w-[350px] rounded-2xl bg-[#28668F]">
                        <div className="rounded-full w-[180px] h-[180px] overflow-hidden">
                            <img
                                className="w-full h-full object-cover"
                                src="https://fitfeast.in/cdn/shop/files/7_185a4df0-d233-4496-bc77-b8872ee73496.png?v=1733815115"
                                alt=""
                            />
                        </div>
                        <div className="mt-10 text-center">
                            <p className="text-base">Finally, chips I don't feel bad about eating! The Peri Peri flavor is amazing, and it's hard to believe they're baked and high in protein.</p>
                            <p className="text-base mt-4 text-yellow-400 font-bold">Nikhil Singh</p>
                            <p className="text-base mt-4">(Verified Buyer)</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-12 h-[520px] w-[350px] rounded-2xl bg-[#28668F]">
                        <div className="rounded-full w-[180px] h-[180px] overflow-hidden">
                            <img
                                className="w-full h-full object-cover"
                                src="https://fitfeast.in/cdn/shop/files/Anupam_Photo.png?v=1741760560"
                                alt=""
                            />
                        </div>
                        <div className="mt-10 text-center">
                            <p className="text-base">These are good. Protein content is impressive. Products are far better than other brands out there. </p>
                            <p className="text-base mt-4 text-yellow-400 font-bold">Anupam Mittal (Shark) as quoted on ST India</p>
                            <p className="text-base mt-4">Founder & CEO @ People Group</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-12 h-[490px] w-[350px] rounded-2xl bg-[#28668F]">
                        <div className="rounded-full w-[180px] h-[180px] overflow-hidden">
                            <img
                                className="w-full h-full object-cover"
                                src="https://fitfeast.in/cdn/shop/files/1593112002442.webp?v=1713356899"
                                alt=""
                            />
                        </div>
                        <div className="mt-10 text-center">
                            <p className="text-base">As a dietician, I appreciate FitFeast's honesty and quality – a brand I trust and recommend.</p>
                            <p className="text-base mt-4 text-yellow-400 font-bold">Dr. Yashodha</p>
                            <p className="text-base mt-4">(Certified Dietician, 20y of Exp)</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center gap-5 bg-amber-50">

                <div className="flex items-center gap-3 w-64">
                    <div className="w-[65px] flex items-center justify-center rounded-full bg-[#1B2A47]">
                        <img src="https://fitfeast.in/cdn/shop/files/rupee-1.png?v=1713354211" alt="Cash on Delivery"/>
                    </div>
                    <div>
                        <p className="text-lg font-bold">Cash on Delivery</p>
                        <p className="text-sm font-light">Available PAN India</p>
                    </div>
                </div>

                <div className="flex items-center gap-3 w-64">
                    <div className="w-[65px] flex items-center justify-center rounded-full bg-[#1B2A47]">
                        <img src="https://fitfeast.in/cdn/shop/files/truck-1.png?v=1713354212" alt="Secure Payment"/>
                    </div>
                    <div>
                        <p className="text-lg font-bold">Secure Payment</p>
                        <p className="text-sm font-light">We got your back</p>
                    </div>
                </div>

                <div className="flex items-center gap-3 w-64">
                    <div className="w-[65px] flex items-center justify-center rounded-full bg-[#1B2A47]">
                        <img src="https://fitfeast.in/cdn/shop/files/rupee-1.png?v=1713354211" alt="Exclusive Discount"/>
                    </div>
                    <div>
                        <p className="text-lg font-bold">Exclusive Discount</p>
                        <p className="text-sm font-light">Pay via many online modes</p>
                    </div>
                </div>

                <div className="flex items-center gap-3 w-64">
                    <div className="w-[65px] flex items-center justify-center rounded-full bg-[#1B2A47]">
                        <img src="https://fitfeast.in/cdn/shop/files/truck-1.png?v=1713354212" alt="Fast Delivery"/>
                    </div>
                    <div>
                        <p className="text-lg font-bold">Fast Delivery</p>
                        <p className="text-sm font-light">Pay less, have more</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DesktopLayout3;
