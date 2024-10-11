import React from 'react'

const UserPP = () => {
    return (
        <div className='flex flex-col   items-center pr-[50px]'>
            <div className='w-[148px] rounded-[50%]'>
                <img className='w-full rounded-[50%]' src="https://cdn.thingiverse.com/assets/0e/a9/fb/80/7f/585e4bcdcb11b227491c3396.png" alt="" />
            </div>
            <div className='pt-[30px]'>
                <button className='bg-[#D9D9D970] hover:bg-[#BDCBFF] hover:text-white hover:border-white transition-all w-[200px] h-[42px] border border-black rounded-[10px]'>
                    Change Image
                </button>
            </div>
        </div>
    )
}

export default UserPP
