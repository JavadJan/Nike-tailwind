import Image from 'next/image'
import React from 'react'

const CardShoe = ({ shoe, setUrl }) => {
    return (
        <section
        onClick={()=>setUrl(shoe.bigShoe)}
         className='border-slate-300 bg-card cursor-pointer p-4 hover:ring-1 ring-coral-red'>
            <Image src={shoe.bigShoe} width={150} height={160} />
        </section>
    )
}

export default CardShoe