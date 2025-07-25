import React from 'react'

const MalaiKulfiFlavour = () => {
    return (
        <div className='relative w-full h-screen bg-[#FAEADE]'>
            <div className="absolute flex flex-col text-7xl font-[Antonio] text-center ml-16 bottom-60">
                <h1>Malai Kulfi</h1>
                <h1 className='bg-[#BE812D] border-4 py-2 px-3 border-amber-700 text-[#FAEADE] -rotate-3 mt-3'>Protein Sachet</h1>
            </div>
            <div className="absolute scale-75 flex items-center justify-center left-80 bottom-3">
                <img src="https://fitfeast.in/cdn/shop/files/malaikulfi_1.png?v=1752124889&width=823" alt="" />
            </div>

            <div className="flex absolute w-5xl left-1/2 bottom-5 transform -translate-x-1/2 py-5 bg-[#FDEBD2] rounded-full items-center justify-around border-8 border-[#E8DDCA]">
                {[
                    { label: 'Energy', value: '380.53 Kcal' },
                    { label: 'Protein', value: '40.0g' },
                    { label: 'Total Sugar', value: '1.54g' },
                    { label: 'Total Fat', value: '2.373g' },
                    { label: 'Carbohydrates', value: '49.8g' },
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
                <h1 className='text-2xl font-bold mb-5'>Why is having a chocolate sachet pure bliss?</h1>
                <p>The Chocolate Brownie Protein Shake isn't just delicious—it's super <br /> convenient! With its easy-to-carry sachet, you can enjoy 20g of <br /> protein anytime, anywhere. Just mix, sip, and fuel up—perfect for <br /> busy mornings, post-gym recovery, or when you're on the go.</p>
                <p>Overall health - contains eucalyptus honey and high quality ingredients</p>
                <div className="text-center mt-10 flex justify-center gap-10">
                    <div className="flex gap-5">
                        <div className="bg-[#FDEBD2] text-[#BE812D] border-2 border-[#BE812D] rounded-2xl px-2">
                            <p className=''>Pack of 7</p>
                            <p>₹686</p>
                        </div>
                        <div className="bg-[#FDEBD2] text-[#BE812D] border-2 border-[#BE812D] rounded-2xl px-2">
                            <p className=''>Pack of 21</p>
                            <p>₹1,767</p>
                        </div>
                    </div>
                    <button className='bg-[#1E2A47] text-[#FAEADE] text-xl px-10 py-2 rounded-full'>Add to Cart</button>
                </div>
            </div>

        </div>
    )
}

export default MalaiKulfiFlavour
