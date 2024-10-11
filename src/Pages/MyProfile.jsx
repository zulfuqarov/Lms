import React from 'react'
import UserInformations from '../Components/My-Profile/UserInformations'
import UserPP from '../Components/My-Profile/UserPP'

const MyProfile = () => {
    return (
        <div className='px-[10px] w-full h-[100%] pt-[20px]'>
            <div className="bg-white rounded-[10px] min-h-[760px] flex justify-between p-6">
               <UserInformations/>
               <UserPP/>
            </div>
        </div>
    )
}

export default MyProfile
