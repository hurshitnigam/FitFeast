import React from 'react'

const AboutUs = () => {
    return (
        <div className="bg-[#1B2A47] w-full min-h-screen flex flex-col items-center justify-center py-10 px-2">
            <h1 className="text-4xl md:text-5xl text-center mb-6 font-bold text-[#F4D17F] drop-shadow">How FitFeast Was Born</h1>
            <div className="flex justify-center items-center mb-8 w-full">
                <img
                    src="https://startuparticle.com/wp-content/uploads/2025/03/fit-feast.jpg"
                    alt=""
                    className="rounded-2xl max-w-full max-h-[400px] shadow-2xl border-4 border-[#F4D17F]"
                />
            </div>
            <h2 className="text-2xl md:text-3xl text-center text-[#F4D17F] font-bold mb-6">A Journey from Struggle to Innovation</h2>
            <div className="backdrop-blur-md bg-white/10 rounded-2xl shadow-xl max-w-2xl w-full px-6 py-8 text-[#f9e6d6] text-lg md:text-xl space-y-4">
                <p>
                    When <span className="font-bold text-[#F4D17F]">Aditya Poddar</span> dropped from 90kg to 70kg in a year, he didn't just lose weight—he gained a deep understanding of why protein is essential. But as he dug deeper, he discovered a bigger problem:
                </p>
                <p className="bg-[#F4D17F]/20 rounded-lg px-3 py-2 font-semibold text-[#F4D17F] text-center">
                    3 out of 4 Indians are protein deficient.
                </p>
                <p>
                    Not because they don't care, but because protein snacks in the market were disappointing—either in taste, texture, or digestibility.
                </p>
                <ul className="list-disc list-inside pl-2 space-y-1">
                    <li><span className="font-bold text-[#F4D17F]">Taste</span> - A chalky aftertaste that made every bite unpleasant.</li>
                    <li><span className="font-bold text-[#F4D17F]">Texture</span> - Dry, unappetizing snacks that felt like a chore to eat.</li>
                    <li><span className="font-bold text-[#F4D17F]">Bloating</span> - Indigestion, discomfort, and that heavy, gassy feeling.</li>
                </ul>
                <p>
                    Determined to fix this, we teamed up with international food technologists to craft protein snacks that people would actually enjoy eating every day.
                </p>
                <ul className="list-disc list-inside pl-2 space-y-1">
                    <li>No more chalky aftertaste - just rich, indulgent flavours.</li>
                    <li>No more dry textures - smooth, creamy, and satisfying.</li>
                    <li>No more bloating - a proprietary blend designed for easy digestion.</li>
                </ul>
                <p className="italic text-[#F4D17F] font-semibold text-center">That's how FitFeast was born.</p>
                <p>
                    We redefined what healthy can taste like with products like <span className="font-bold">White Chocolate Peanut Butter</span>, <span className="font-bold">Mango Peanut Butter</span>, <span className="font-bold">Protein Bars</span>, <span className="font-bold">Malai Kulfi Protein Shakes</span>, and <span className="font-bold">India's highest protein content chips</span>.
                </p>
                <p>
                    Our commitment to tasty, high-quality protein led us to sign <span className="font-bold text-[#F4D17F]">Axar Patel</span> as our brand ambassador—and now, we're bringing our mission to the national stage on <span className="font-bold text-[#F4D17F]">Shark Tank India Season 4</span>.
                </p>
            </div>
        </div>
    )
}

export default AboutUs
