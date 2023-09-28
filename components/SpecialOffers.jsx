import { arrowRight } from "@public/assets/icons"
import Button from "./Button"
import Image from "next/image"
import { offer } from "@public/assets/images"

const SpecialOffers = () => {
  return (
    <section className="max-container flex flex-wrap items-center justify-center gap-10 max-xl:flex-col">
      <div className="flex-1 flex flex-col gap-10">
        <h1 className="capitalize text-3xl font-bold">our <span className="text-coral-red">special</span> offers</h1>
        <p className="font-montserrat leading-7">
          Shoes are not just footwear; they're a fashion statement, offering style and comfort in one. From sneakers to boots, they cater to diverse tastes and activities. Choosing the right pair is essential for both looks and well-being.
          <br />
          <br />
          Comfort is a paramount factor when it comes to choosing the right pair of shoes. Well-designed shoes incorporate cushioning, arch support, and breathable materials to ensure that your feet feel
        </p>
        <div className="flex gap-5">
          <Button label='Shop Now' icon={arrowRight} />
          <button className="ring-1 border-slate-gray rounded-full px-4 py-2">Learn More</button>
        </div>
      </div>
      <div className="flex-1 flex justify-start items-start">
        <Image className="object-contain w-full" src={offer} width={773} height={683} />
      </div>
    </section>
  )
}

export default SpecialOffers