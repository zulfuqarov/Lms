import React from 'react'

const IntegrationCard = ({ Img, Name }) => {
    return (
        <button className='bg-[#E8E1E1] group flex flex-col justify-center items-center p-4 rounded-lg transition duration-300 ease-in-out transform hover:bg-[#D6CFCF] hover:scale-105 hover:shadow-lg'>
            <div className='w-[95px] h-[80px]'>
                <img className='w-full h-full' src={Img} alt="" />
            </div>
            <p className='text-[24px] leading-[34px] pt-[40px] transition duration-300 ease-in-out group-hover:text-[#FF6347]'>
                {Name}
            </p>
        </button>

    )
}

export default IntegrationCard