export default function Soal1() {
    return (
        <div className="min-h-screen relative flex flex-col items-center justify-center bg-[#1E1E2E] overflow-hidden">

            <div className="absolute top-0 left-0 bg-[#FAB387] w-30 h-30 sm:w-40 sm:h-40 flex items-center justify-center z-20">
                <div className="bg-[#CBA6f7] w-15 h-15 sm:w-30 sm:h-30 rounded-full"></div>
            </div>

            <div className="bg-black w-20 sm:w-32 h-full absolute left-0 z-10"></div>

            <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-20 sm:mt-10">
                <div className="bg-[#FAB387] w-28 h-28 sm:w-36 sm:h-36"></div>
                <div className="bg-[#FAB387] w-28 h-28 sm:w-36 sm:h-36"></div>
                <div className="bg-[#FAB387] w-28 h-28 sm:w-36 sm:h-36"></div>
            </div>

            <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 gap-4 mt-4 sm:mt-10">
                <div className="bg-[#FAB387] w-28 h-28 sm:w-36 sm:h-36"></div>
                <div className="bg-[#FAB387] w-28 h-28 sm:w-36 sm:h-36"></div>
            </div>

            <div className="flex items-center absolute top-0 justify-center bg-[#FAB387] w-16 h-16 sm:w-36 sm:h-36"></div>
            <div className="flex items-center absolute bottom-0 justify-center bg-[#FAB387] w-16 h-16 sm:w-36 sm:h-36"></div>

            <div className="absolute top-0 right-0 bg-[#FAB387] w-30 h-30 sm:w-60 sm:h-60"></div>
            <div className="absolute bottom-0 right-0 bg-[#FAB387] w-30 h-30 sm:w-60 sm:h-60"></div>
            <div className="absolute bottom-0 left-0 bg-[#FAB387] w-30 h-30 sm:w-60 sm:h-60 z-0"></div>
        </div>
    )
}
