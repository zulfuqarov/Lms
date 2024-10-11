import React from 'react'
import { useLocation } from 'react-router-dom'

import NotificationLogo from "../assets/Img/NotificationLogo.svg"
import MiniMessageLogo from "../assets/Img/MiniMessageLogo.svg"
import UserProfileLogo from "../assets/Img/UserProfileLogo.svg"
const NavbarHeader = () => {
    const location = useLocation();
    return (
        <div className='pt-[30px] px-[25px] w-full flex justify-between items-end'>
            <div>
                <p className='font-bold text-[34px] pb-[10px]'>{location.pathname.split("/")[1]}</p>
                <div className="relative w-[400px]">
                    <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                    <input
                        className="w-full h-[40px] pl-10 rounded-[10px] border border-gray-300 focus:outline-none"
                        type="text"
                        placeholder="Search"
                    />
                </div>
            </div>
            <div className='flex'>
                <button>
                    <img className='pr-[20px]' src={NotificationLogo} alt="" />
                </button>
                <button>
                    <img src={MiniMessageLogo} alt="" />
                </button>
            </div>
            <div className='flex items-center'>
                <div className='w-[72px] h-[69px] pr-[20px]'>
                    <img className='w-full h-full' src={UserProfileLogo} alt="" />
                </div>
                <div>
                    <p className='text-[14px] font-bold'>Swetha shankaresh</p>
                    <p className='text-[12px] text-[#3E3E3E]'>Student</p>
                </div>
            </div>
        </div>
    )
}

export default NavbarHeader
