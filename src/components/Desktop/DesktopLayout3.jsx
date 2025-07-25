import React from 'react';

const DesktopLayout3 = () => {
    return (
        <div className="w-full py-30 px-20 bg-amber-50 text-black">
            <div className="flex">
                <img src="/Images/peanutbutter.png" alt="" />
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
                <img src="/Images/image-2.png" alt="" />
            </div>


            <div className="h-fit flex flex-col py-20 gap-20">
                <div className="">
                    <h1 className="text-4xl font-extrabold text-center">Honest Reviews</h1>
                </div>
                <div className="flex items-start justify-center font-sans gap-10">
                    <div className="relative w-[300px] h-[200px] group cursor-pointer perspective">
                        <div className="absolute inset-0 bg-blue-600 flex items-center justify-center transition-transform duration-700 group-hover:translate-y-0 translate-y-[0px] z-10">
                            <img src="/Images/Screenshot 2025-07-25 222708.png" alt="" />
                        </div>
                        <div className="absolute inset-0 bg-white p-5 flex flex-col items-center justify-center shadow-xl transition-transform duration-700 group-hover:translate-y-50 translate-y-[0px]">
                            <h3 className="text-center text-xl font-semibold text-gray-700 mb-2">Viraj Bahl (Shark) as quoted on ST India</h3>
                            <p className="text-center text-gray-600 text-lg">Bohot acha taste hai saare products ka. Aapki technical knowledge about food science is very impressive.</p>
                        </div>
                    </div>
                    <div className="relative w-[300px] h-[200px] group cursor-pointer perspective">

                        <div className="absolute inset-0 bg-blue-600 flex items-center justify-center transition-transform duration-700 group-hover:translate-y-0 translate-y-[0px] z-10">
                            <img src="/Images/Screenshot 2025-07-25 223358.png" alt="" />
                        </div>

                        <div className="absolute inset-0 bg-white p-5 flex flex-col items-center justify-center shadow-xl transition-transform duration-700 group-hover:translate-y-50 translate-y-[0px]">
                            <h3 className="text-center text-xl font-semibold text-gray-700 mb-2">Nikhil Singh</h3>
                            <p className="text-center text-gray-600 text-lg">Finally, chips I don’t feel bad about eating! The Peri Peri flavor is amazing, and it’s hard to believe they’re baked and high in protein.</p>
                        </div>
                    </div>
                    <div className="relative w-[300px] h-[200px] group cursor-pointer perspective">

                        <div className="absolute inset-0 bg-blue-600 flex items-center justify-center transition-transform duration-700 group-hover:translate-y-0 translate-y-[0px] z-10">
                            <img src="/Images/Screenshot 2025-07-25 223420.png" alt="" />
                        </div>

                        <div className="absolute inset-0 bg-white p-5 flex flex-col items-center justify-center shadow-xl transition-transform duration-700 group-hover:translate-y-50 translate-y-[0px]">
                            <h3 className="text-center text-xl font-semibold text-gray-700 mb-2">Anupam Mittal (Shark) as quoted on ST India</h3>
                            <p className="text-center text-gray-600 text-lg">These are good. Protein content is impressive. Products are far better than other brands out there.</p>
                        </div>
                    </div>
                    <div className="relative w-[300px] h-[200px] group cursor-pointer perspective">

                        <div className="absolute inset-0 bg-blue-600 flex items-center justify-center transition-transform duration-700 group-hover:translate-y-0 translate-y-[0px] z-10">
                            <img src="/Images/Screenshot 2025-07-25 223434.png" alt="" />
                        </div>

                        <div className="absolute inset-0 bg-white p-5 flex flex-col items-center justify-center shadow-xl transition-transform duration-700 group-hover:translate-y-50 translate-y-[0px]">
                            <h3 className="text-center text-xl font-semibold text-gray-700 mb-2">Dr. Yashodha</h3>
                            <p className="text-center text-gray-600 text-lg">As a dietician, I appreciate FitFeast's honesty and quality – a brand I trust and recommend.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center mt-50 justify-center gap-6 bg-amber-50">

                <div className="flex items-center w-64 gap-3">
                    <div className="w-[65px] flex items-center justify-center rounded-full bg-[#1B2A47]">
                        <img src="https://fitfeast.in/cdn/shop/files/rupee-1.png?v=1713354211" alt="Cash on Delivery" />
                    </div>
                    <div>
                        <p className="text-lg font-bold">Cash on Delivery</p>
                        <p className="text-sm font-light">Available PAN India</p>
                    </div>
                </div>

                <div className="flex items-center gap-3 w-64">
                    <div className="w-[65px] flex items-center justify-center rounded-full bg-[#1B2A47]">
                        <img src="https://fitfeast.in/cdn/shop/files/truck-1.png?v=1713354212" alt="Secure Payment" />
                    </div>
                    <div>
                        <p className="text-lg font-bold">Secure Payment</p>
                        <p className="text-sm font-light">We got your back</p>
                    </div>
                </div>

                <div className="flex items-center gap-3 w-64">
                    <div className="w-[65px] flex items-center justify-center rounded-full bg-[#1B2A47]">
                        <img src="https://fitfeast.in/cdn/shop/files/rupee-1.png?v=1713354211" alt="Exclusive Discount" />
                    </div>
                    <div>
                        <p className="text-lg font-bold">Exclusive Discount</p>
                        <p className="text-sm font-light">Pay via many online modes</p>
                    </div>
                </div>

                <div className="flex items-center gap-3 w-64">
                    <div className="w-[65px] flex items-center justify-center rounded-full bg-[#1B2A47]">
                        <img src="https://fitfeast.in/cdn/shop/files/truck-1.png?v=1713354212" alt="Fast Delivery" />
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
