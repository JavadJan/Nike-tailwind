import { star } from '@public/assets/icons'
import Image from 'next/image'
import React from 'react'

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
    return (
        <div className='flex justify-center mt-8 items-center flex-col'>
            <Image src={imgURL}
                alt='customers'
                className='rounded-full object-cover w-[120px] h-[120px]' />
            <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>

            <div className='flex gap-2 mt-4'>
                <Image src={star} width={24} height={24} alt='rating'/>
                <p className='text-xl font-montserrat text-slate-gray'>({rating})</p>
            </div>
            <h3 className='mt-1 font-palanquin text-3xl text-center font-bold'>{customerName}</h3>
        </div>
    )
}

export default ReviewCard