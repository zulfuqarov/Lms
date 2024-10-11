import React from 'react'

const LiblryCard = () => {
    return (
        <div>
            <div className='w-full h-[310px]'>
                <img className='w-full h-full' src="https://avatars.mds.yandex.net/i?id=4529133b4f9e78aec8e4c7421a512de8_l-5328515-images-thumbs&n=13" alt="" />
            </div>
            <div className='flex justify-between items-center pt-[10px]'>
                <p className='font-bold'>Chemistry</p>
                <button>
                    <i className="fa-solid fa-cloud-arrow-down text-blue-500"></i>
                </button>
            </div>
        </div>
    )
}

export default LiblryCard
