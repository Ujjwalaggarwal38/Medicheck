export const Button = ({text}) => {
    return (
        <button
            className="relative px-10 ml-2 py-1.5 rounded-xl font-semibold text-white 
           bg-gradient-to-r from-[#1270CC] to-[#004282] 
           shadow-lg hover:shadow-2xl
           transition-all duration-300 ease-out
           hover:scale-105 overflow-hidden group"
        >
            <span className="relative z-10">{text}</span>

            {/* Shine Effect */}
            <span
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent
             translate-x-[-100%] group-hover:translate-x-[100%]
             transition-transform duration-700 ease-out"
            />
        </button>
    )
};


