import React from 'react'

const UserInformations = () => {
    return (
        <div className='w-full'>
            <div className='w-full'>
                <div className='flex justify-between w-[500px] items-center'>
                    <p className='text-[20px] font-bold'>USER INFORMATION</p>
                    <button className='bg-[#D9D9D970] hover:bg-[#BDCBFF] hover:text-white hover:border-white transition-all w-[150px] h-[42px] border border-black rounded-[10px]'>
                        Edit
                    </button>
                </div>

                <div className='w-[650px] pt-[40px]'>
                    <div className='pb-[25px]'>
                        <label className='font-bold pb-[10px] inline-block' htmlFor="">Username</label>
                        <input className='w-full rounded-[10px] h-[50px] border border-[#555050] text-base px-4 py-2 placeholder-gray-500 focus:outline-none focus:border-blue-500' type="text" placeholder="Type here..." />
                    </div>
                    <div className='pb-[25px]'>
                        <label className='font-bold pb-[10px] inline-block' htmlFor="">Email address</label>
                        <input className='w-full rounded-[10px] h-[50px] border border-[#555050] text-base px-4 py-2 placeholder-gray-500 focus:outline-none focus:border-blue-500' type="email" placeholder="Type here..." />
                    </div>
                    <div className='pb-[25px]'>
                        <label className='font-bold pb-[10px] inline-block' htmlFor="">First name</label>
                        <input className='w-full rounded-[10px] h-[50px] border border-[#555050] text-base px-4 py-2 placeholder-gray-500 focus:outline-none focus:border-blue-500' type="text" placeholder="Type here..." />
                    </div>
                    <div className='pb-[25px]'>
                        <label className='font-bold pb-[10px] inline-block' htmlFor="">Last name</label>
                        <input className='w-full rounded-[10px] h-[50px] border border-[#555050] text-base px-4 py-2 placeholder-gray-500 focus:outline-none focus:border-blue-500' type="text" placeholder="Type here..." />
                    </div>
                </div>
            </div>

            <div className='pt-[20px]'>
                <div className='flex justify-between w-[500px] items-center'>
                    <p className='text-[20px] font-bold'>CONTACT INFORMATION</p>
                    <button className='bg-[#D9D9D970] hover:bg-[#BDCBFF] hover:text-white hover:border-white transition-all w-[150px] h-[42px] border border-black rounded-[10px]'>
                        Edit
                    </button>
                </div>
                <div className='w-[650px] pt-[20px]'>
                    <div className='w-full flex justify-between items-center'>
                        <div className='flex flex-col'>
                            <label className='font-bold pb-[10px] inline-block' htmlFor="">Address</label>
                            <input className='w-[350px] rounded-[10px] h-[50px] border border-[#555050] text-base px-4 py-2 placeholder-gray-500 focus:outline-none focus:border-blue-500' type="text" placeholder="Type here..." />
                        </div>
                        <div className='flex flex-col '>
                            <label className='font-bold pb-[10px] inline-block' htmlFor="">City</label>
                            <input className='w-[250px] rounded-[10px] h-[50px] border border-[#555050] text-base px-4 py-2 placeholder-gray-500 focus:outline-none focus:border-blue-500' type="text" placeholder="Type here..." />
                        </div>
                    </div>
                    <div className='w-[350px] flex justify-between items-center pt-[20px]'>
                        <div className='flex flex-col'>
                            <label className='font-bold pb-[10px] inline-block' htmlFor="">Country</label>
                            <input className='w-[125px] rounded-[10px] h-[50px] border border-[#555050] text-base px-4 py-2 placeholder-gray-500 focus:outline-none focus:border-blue-500' type="text" placeholder="Type here..." />
                        </div>
                        <div className='flex flex-col '>
                            <label className='font-bold pb-[10px] inline-block' htmlFor="">Postal code</label>
                            <input className='w-[125px] rounded-[10px] h-[50px] border border-[#555050] text-base px-4 py-2 placeholder-gray-500 focus:outline-none focus:border-blue-500' type="text" placeholder="Type here..." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserInformations
