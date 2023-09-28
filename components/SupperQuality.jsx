import { shoe8 } from "@public/assets/images"
import Image from "next/image"
import Button from "./Button"

const SupperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between  items-center gap-10 w-full max-container lg:mt-4 max-sm:mt-4 max-lg:flex-col">
      <div className="flex-1">
        <h1 className="text-4xl font-palanquin leading-[82px] font-bold max-lg:text-1xl max-md:flex-col max-sm:text-[42px] max-sm:leading-[50px] max-sm:whitespace-normal">
          We provide Your <span className="text-coral-red">Super <br />Quality </span>
          Shoes
        </h1>

        <p className="text-slate-gray my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sit, mollitia et ad enim eos repudiandae. Ad assumenda minus quasi aliquid dicta dolorum, totam commodi sapiente officia pariatur, iusto rerum.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores deserunt placeat voluptate id sed
        </p>

        <Button label='View Details' />
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Image src={shoe8} width={510} height={570} className="object-contain" />
      </div>
    </section>
  )
}

export default SupperQuality