import React from 'react'

const WhiteChocolatePeanutButter = () => {

  return (
    <div className='relative w-full h-screen bg-[#FAEADE]'>
      <div className="absolute flex flex-col text-7xl font-[Antonio] text-center ml-16 bottom-60">
        <h1>White Chocolate</h1>
        <h1 className='bg-[#BE812D] border-4 py-2 border-amber-700 text-[#FAEADE] -rotate-3 mt-3'>Peanut Butter</h1>
      </div>
      <div className="absolute scale-75 flex items-center justify-center left-80 bottom-3">
        <img src="https://fitfeast.in/cdn/shop/files/WhiteChocolate_99a0b865-f874-437a-b0ab-d7ff56fd4136.png?v=1752126412&width=823" alt="" />
      </div>

      <div className="flex absolute w-5xl left-1/2 bottom-5 transform -translate-x-1/2 py-5 bg-[#FDEBD2] rounded-full items-center justify-around border-8 border-[#E8DDCA]">
        {[
          { label: 'Energy', value: '617.3kcal' },
          { label: 'Protein', value: '20.32g' },
          { label: 'Fiber', value: '5.51g' },
          { label: 'Total Fat', value: '45.45g' },
          { label: 'Carbohydrates', value: '31.85g' },
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
        <h1 className='text-2xl font-bold mb-5'>Why FitFeast Peanut Butter</h1>
        <p>Let's face it, we love junk. A typical “healthy dessert” contains <br /> unhealthy oils and a lot of sugar which can cause an insulin spike <br /> and derail our health. FitFeast White Chocolate Peanut Butter supports :</p>
        <p>Sugar cravings - same delicious taste as chocolate spreads,<br /> we bet you on this</p>
        <p>Protein intake - 20g protein per 100g</p>
        <p>Overall health - contains eucalyptus honey and high quality ingredients</p>
        <div className="text-center mt-10 flex justify-center gap-10">
          <div className="flex gap-5">
            <div className="bg-[#FDEBD2] text-[#BE812D] border-2 border-[#BE812D] rounded-2xl px-2">
              <p className=''>Pack of 1</p>
              <p>₹323</p>
            </div>
            <div className="bg-[#FDEBD2] text-[#BE812D] border-2 border-[#BE812D] rounded-2xl px-2">
              <p className=''>Pack of 2</p>
              <p>₹610</p>
            </div>
          </div>
          <button className='bg-[#1E2A47] text-[#FAEADE] text-xl px-10 py-2 rounded-full'>Add to Cart</button>
        </div>
      </div>

    </div>
  )
}

export default WhiteChocolatePeanutButter
