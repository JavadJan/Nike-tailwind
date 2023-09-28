import Image from 'next/image'
import React from 'react'

const ServiceCard = ({ label, imgURL, subtext }) => {
    return (
        <div className='h-[300px] ring-gray-200 shadow-3xl flex flex-col p-4 justify-evenly'>
            <div className='flex items-center justify-center h-11 w-11 rounded-full bg-coral-red'>
            <Image src={imgURL} width={30} height={30} alt={label} />
            </div>
            <h2 className='text-bold text-[35px]'>{label}</h2>
            <p className="text-slate-gray">{subtext}</p>
        </div>
    )
}

export default ServiceCard