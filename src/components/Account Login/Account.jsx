import { FaUser, FaLock } from "react-icons/fa";

const Account = () => {

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F2D5C0] via-[#f9e6d6] to-[#fce1cd]">
            <div className="backdrop-blur-md bg-white/60 rounded-3xl shadow-2xl p-6 md:p-10 w-full max-w-md flex flex-col items-center mx-4">
                <h1 className="text-3xl md:text-5xl font-bold text-[#523122] mb-6 md:mb-8 tracking-wide text-center">Login</h1>
                <form className="w-full">
                    <div className="relative mb-4 md:mb-6">
                        <input
                            type="text"
                            placeholder="Username"
                            required
                            className="w-full py-3 pl-12 pr-4 rounded-xl border border-[#e3d5be] focus:outline-none focus:ring-2 focus:ring-amber-400 text-base md:text-lg bg-white/80"
                        />
                        <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a26833] text-lg md:text-xl" />
                    </div>
                    <div className="relative mb-3 md:mb-4">
                        <input
                            type="password"
                            placeholder="Password"
                            required
                            className="w-full py-3 pl-12 pr-4 rounded-xl border border-[#e3d5be] focus:outline-none focus:ring-2 focus:ring-amber-400 text-base md:text-lg bg-white/80"
                        />
                        <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a26833] text-lg md:text-xl" />
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 md:mb-6 text-[#523122] text-xs md:text-sm gap-2 md:gap-0">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="accent-amber-600" />
                            Remember me
                        </label>
                        <a href="#" className="hover:underline hover:text-amber-600 transition text-right">Forgot Password?</a>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl shadow transition text-base md:text-lg"
                    >
                        Login
                    </button>
                </form>
                <div className="mt-6 md:mt-8 text-[#523122] text-center text-sm md:text-base">
                    <p>
                        Don't have an account?{" "}
                        <a href="#" className="text-amber-600 font-semibold hover:underline">Register</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Account
