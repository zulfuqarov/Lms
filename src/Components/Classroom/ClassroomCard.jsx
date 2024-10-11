import React from 'react'
import ClassroomCardLogo from '../../assets/Img/ClassromCardLogo.svg'
import UserProfileLogo from "../../assets/Img/UserProfileLogo.svg"
const ClassroomCard = () => {
    return (
        <div className='h-[300px] flex flex-col justify-between rounded-[20px]  bg-white' style={{ boxShadow: "0px 4px 10px 0px #00000040" }}>
            <div className='w-full h-[166px] rounded-[20px] relative'>
                <img className='w-full h-full' src={ClassroomCardLogo} alt="" />
                <div className='w-[66px] absolute  right-[20px] bottom-[-30px]'>
                    <img className='w-full ' src={UserProfileLogo} alt="" />
                </div>
            </div>
            <div className='pl-[15px]'>
                <p className='font-bold'>Maths Department</p>
            </div>
            <div className='flex justify-center pb-[15px]'>
                <button className='bg-[#D9D9D970] hover:bg-[#BDCBFF] hover:text-white hover:border-white transition-all w-[262px] h-[42px] border border-black rounded-[10px]'>
                    Open Classroom
                </button>
            </div>
        </div>
    )
}

export default ClassroomCard
