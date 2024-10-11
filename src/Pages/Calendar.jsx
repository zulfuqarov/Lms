import React from 'react'
import CalendarCard from '../Components/Calendar/CalendarCard'

const Calendar = () => {
    return (
        <div className='px-[10px] w-full h-[100%] pt-[20px]'>
            <div className="bg-white rounded-[10px] h-[760px] flex justify-between p-6">
                <div className='w-full h-full overflow-y-auto'>
                    <p className='text-[20] font-bold pb-[20px]'>Exams</p>
                    <CalendarCard />
                    <CalendarCard />
                    <CalendarCard />
                    <CalendarCard />
                    <CalendarCard />
                    <CalendarCard />
                </div>
            </div>
        </div>
    )
}

export default Calendar