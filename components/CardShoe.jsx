import Image from 'next/image'
import React from 'react'

const CardShoe = ({ shoe, setUrl, url }) => {
    return (
        <section
            onClick={() => setUrl(shoe.bigShoe)}
            className={`${shoe.bigShoe === url ? 'ring-1 ring-coral-red bg-slate-400 rounded-xl p-4' : 'bg-slate-400 cursor-pointer rounded-xl p-2'} `}>
            <Image src={shoe.bigShoe} width={127} height={160} />
        </section>
    )
}

export default CardShoe