import React from 'react'

const MobButterscotch = () => {
    return (
        <div className="w-full min-h-screen bg-[#FAEADE] px-4 py-10 flex flex-col items-center justify-start gap-8">

            <div className="text-center font-[Antonio]">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Butterscotch</h1>
                <h1 className="bg-[#BE812D] border-4 border-amber-700 text-[#FAEADE] mt-3 py-2 px-4 inline-block -rotate-3 text-2xl sm:text-3xl md:text-4xl">
                    Peanut Butter
                </h1>
            </div>

            <div className="flex justify-center">
                <img
                    className="w-[80%] max-w-sm md:max-w-lg"
                    src="https://fitfeast.in/cdn/shop/files/butterscotch_f4337d53-d9f2-4447-a199-829009e09469.png?v=1752126462&width=823"
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
                <h2 className="text-2xl font-bold">Why FitFeast Peanut Butter</h2>
                <p>
                    Let's face it, we love junk. A typical “healthy dessert” contains unhealthy oils and a lot of sugar
                    which can cause an insulin spike and derail our health.
                </p>
                <p>
                    <strong>FitFeast White Chocolate Peanut Butter supports:</strong>
                </p>
                <ul className="list-disc text-left pl-6 space-y-1">
                    <li>Sugar cravings - same delicious taste as chocolate spreads</li>
                    <li>Protein intake - 20g protein per 100g</li>
                    <li>Overall health - contains eucalyptus honey and high-quality ingredients</li>
                </ul>

                <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 mt-8">
                    <div className="flex gap-5">
                        <div className="text-center bg-[#FDEBD2] text-[#BE812D] border-2 border-[#BE812D] px-4 py-1 rounded-2xl">
                            <p>Pack of 1</p>
                            <p className="mt-1 font-semibold text-lg">₹359</p>
                        </div>
                        <div className="text-center bg-[#FDEBD2] text-[#BE812D] border-2 border-[#BE812D] px-4 py-1 rounded-2xl">
                            <p>Pack of 2</p>
                            <p className="mt-1 font-semibold text-lg">₹638</p>
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

export default MobButterscotch
