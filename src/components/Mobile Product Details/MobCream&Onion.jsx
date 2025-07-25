import React from 'react'

const MobCreamOnion = () => {
    return (
        <div className="w-full min-h-screen bg-[#FAEADE] px-4 py-10 flex flex-col items-center justify-start gap-8">

            <div className="text-center font-[Antonio]">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Cream & Onion</h1>
                <h1 className="bg-[#BE812D] border-4 border-amber-700 text-[#FAEADE] mt-3 py-2 px-4 inline-block -rotate-3 text-2xl sm:text-3xl md:text-4xl">
                    Protein Chips
                </h1>
            </div>

            <div className="flex justify-center">
                <img
                    className="w-[80%] max-w-sm md:max-w-lg"
                    src="https://fitfeast.in/cdn/shop/files/CreamAndOnion1.png?v=1752126036&width=823"
                    alt="White Chocolate Peanut Butter"
                />
            </div>

            <div className="w-full max-w-6xl bg-[#FDEBD2] border-8 border-[#E8DDCA] rounded-2xl py-4 px-2 flex flex-wrap justify-around gap-4">
                {[
                    { label: 'Energy', value: '617.3kcal' },
                    { label: 'Protein', value: '20.32g' },
                    { label: 'Fiber', value: '5.51g' },
                    { label: 'Total Fat', value: '45.45g' },
                    { label: 'Carbohydrates', value: '31.85g' },
                ].map((item) => (
                    <div key={item.label} className="flex flex-col text-center text-[#865720] min-w-[100px]">
                        <h3 className="text-base">{item.label}</h3>
                        <h3 className="text-xl font-medium">{item.value}</h3>
                    </div>
                ))}
            </div>

            <div className="w-full max-w-2xl text-[#1E2A47] text-center space-y-4 px-2">
                <h2 className="text-2xl font-bold">Crafted for Guilt Free Indulgence</h2>
                <p>
                    Stress and cravings often lead us to junk foods. A typical packet of <br /> chips/namkeen contains empty calories filled with palm oil which <br /> can derail your health and fitness.
                </p>
                <p>
                    <strong>FitFeast Protein Chips support :</strong>
                </p>
                <ul className="list-disc text-left pl-6 space-y-1">
                    <li>Protein intake - 16g protein per bag</li>
                    <li>Food cravings - same delicious taste as regular nachos, we bet you on this</li>
                    <li>Overall health - made with high quality ingredients</li>
                </ul>

                <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 mt-8">
                    <div className="flex gap-5">
                        <div className="text-center bg-[#FDEBD2] text-[#BE812D] border-2 border-[#BE812D] px-4 py-1 rounded-2xl">
                            <p>Pack of 12</p>
                            <p className="mt-1 font-semibold text-lg">₹999</p>
                        </div>
                        <div className="text-center bg-[#FDEBD2] text-[#BE812D] border-2 border-[#BE812D] px-4 py-1 rounded-2xl">
                            <p>Pack of 18</p>
                            <p className="mt-1 font-semibold text-lg">₹1,399</p>
                        </div>
                    </div>

                    <button className='bg-[#1E2A47] text-[#FAEADE] text-lg px-8 py-2 rounded-full mt-4 md:mt-0'>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MobCreamOnion
