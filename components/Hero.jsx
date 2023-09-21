"use client"
import { arrowRight } from "@public/assets/icons"
import Button from "./Button"
import { shoes, statistics } from "@constants"
import { bigShoe1 } from "@public/assets/images"
import Image from "next/image"
import CardShoe from "./CardShoe"
import { useState } from "react"
const Hero = () => {
    const [url, setUrl] = useState(bigShoe1)
    return (
        <section className="w-full min-h-screen max-lg:flex-col flex justify-center gap-10 max-container">
            <div className="relative lg:w-3/6 xl:w-2/5 flex flex-col justify-center pl-12 items-start w-full max-xl:padding-x pt-28 max-sm:border-3">
                <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
                <h1 className="mt-10 z-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
                    <span className="lg:bg-white  lg:whitespace-nowrap relative z-10 pr-10">The new Arrival</span>
                    <br />
                    <span className="text-red-600 inline-block mt-3">Nike</span>
                    Shoes
                </h1>
                <p className="font-montserrat text-slate-gray leading-8 mt-6 mb-14 sm:max-w-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto aperiam iusto ex.</p>
                <Button label="Shop Now" icon={arrowRight} />

                <div className="flex gap-16 justify-start items-start flex-wrap mt-20 w-full">
                    {statistics.map((item) => {
                        return <div key={item.label}>
                            <p className="text-4xl font-montserrat font-bold">{item.value}</p>
                            <p className="leading-7 font-montserrat text-slate-gray">{item.label}</p>
                        </div>
                    })}
                </div>

            </div>

            {/* image part */}
            <div className="relative flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
                <Image src={url} width={610} height={500}
                    className="object-contain" />
                <div className="absolute flex gap-10 bottom-[-60px] z-40  max-sm:gap-5 px-3">
                    {shoes.map((shoe) => {
                        return <CardShoe shoe={shoe} setUrl={setUrl} url={url} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default Hero