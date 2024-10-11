import React from 'react'

const CalendarCard = () => {
    return (
        <div className='bg-[#F7F3F3] mb-[25px] shadow-[0px_4px_4px_0px_#00000040] w-full h-[100px] flex justify-around items-center rounded-[10px]'>
            <div>
                <p className='text-[14px] text-black font-bold'>Final Exam</p>
                <p className='text-[14px] text-[#4E3D5FA3]'>Mathematics</p>
            </div>
            <div>
                <button className='bg-[#6D88CE69] text-[#2B59CE] text-[14px] hover:bg-[#BDCBFF] hover:text-white hover:border-white transition-all w-[200px] h-[42px] border border-black rounded-[10px]'>
                    1st Term
                </button>
            </div>
            <div>
                <p className='text-[14px] text-[#00000080]'>10 Questions <br />
                    100 points</p>
            </div>
            <div>
                <button className='bg-[#D9D9D970] hover:bg-[#BDCBFF] hover:text-white hover:border-white transition-all w-[200px] h-[42px] border border-black rounded-[10px]'>
                    Change Image
                </button>
            </div>
        </div>
    )
}

export default CalendarCard