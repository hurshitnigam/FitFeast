import React from 'react'

const ProteinBars = () => {
    return (
        <div className='relative w-full h-screen bg-[#FAEADE]'>
            <div className="absolute flex flex-col text-7xl font-[Antonio] text-center ml-16 bottom-60">
                <h1>Mocha & Nutty</h1>
                <h1 className='bg-[#BE812D] border-4 py-2 px-3 border-amber-700 text-[#FAEADE] -rotate-3 mt-3'>Protein Bars</h1>
            </div>
            <div className="absolute scale-75 flex items-center justify-center left-80 bottom-3 rotate-90">
                <img src="https://fitfeast.in/cdn/shop/files/Mocha_and_Nutty.png?v=1752125542&width=823" alt="" />
            </div>

            <div className="flex absolute w-5xl left-1/2 bottom-5 transform -translate-x-1/2 py-5 bg-[#FDEBD2] rounded-full items-center justify-around border-8 border-[#E8DDCA]">
                {[
                    { label: 'Energy', value: '6220.78 kcal' },
                    { label: 'Protein', value: '12.49 g' },
                    { label: 'Fiber', value: '2.52 g' },
                    { label: 'Total Fat', value: '10.14 g' },
                    { label: 'Carbohydrates', value: '19.89 g' },
                ].map((item, idx, arr) => (
                    <React.Fragment key={item.label}>
                        <div className="flex flex-col gap-2 text-center text-[#865720]">
                            <h3 className='text-base'>{item.label}</h3>
                            <h3 className='text-3xl font-medium'>{item.value}</h3>
                        </div>
                        {idx < arr.length - 1 && (
                            <div className="h-20 w-0.5 bg-amber-950 "></div>
                        )}
                    </React.Fragment>
                ))}
            </div>

            <div className="absolute text-lg right-0 top-1/4 p-4 h-fit">
                <h1 className='text-2xl font-bold mb-5'>Two flavors. One perfect box.</h1>
                <p>Why pick one when you can enjoy both?<br />Mocha Boost brings the coffee-chocolate combo you crave, while <br /> Nutty Brownie hits that fudgy, dessert-like sweet spot</p>
                <p>Each bar packs 12g of whey protein, no added sugar, and zero <br /> artificial junk — making it your go-to snack for workouts, <br /> workdays, or whenever hunger hits.</p>
                <p>Tasty, clean, and always satisfying.</p>
                <div className="text-center mt-10 flex justify-center gap-10">
                    <div className="flex gap-5">
                        <div className="bg-[#FDEBD2] text-[#BE812D] border-2 border-[#BE812D] rounded-2xl px-2">
                            <p className=''>Pack of 12</p>
                            <p>₹1,242</p>
                        </div>
                        <div className="bg-[#FDEBD2] text-[#BE812D] border-2 border-[#BE812D] rounded-2xl px-2">
                            <p className=''>Pack of 18</p>
                            <p>₹1,765</p>
                        </div>
                    </div>
                    <button className='bg-[#1E2A47] text-[#FAEADE] text-xl px-10 py-2 rounded-full'>Add to Cart</button>
                </div>
            </div>

        </div>
    )
}

export default ProteinBars
