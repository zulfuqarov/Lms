import React from 'react'
import LiblryCard from '../Components/Liblry/LiblryCard'

const Liblry = () => {
    return (
        <div className='px-[10px] w-full h-[100%] pt-[20px]'>
            <div className="bg-white rounded-[10px] min-h-[760px] p-5 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <LiblryCard />
                <LiblryCard />
                <LiblryCard />
                <LiblryCard />
                <LiblryCard />
                <LiblryCard />
                <LiblryCard />
            </div>
        </div>
    )
}

export default Liblry
