import Image from "next/image"
import PopularCard from "./PopularCard"
import { star } from "@public/assets/icons"
import { products } from "@constants"

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <header>
        <h1 className="text-[45px] font-palanquin font-bold">Our <span className="text-coral-red">popular</span> products</h1>
        <p className="mt-4 text-gray-400 max-sm:whitespace-wrap">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quo eligendi
          <br />
          eveniet aperiam maiores possimus ex deserunt assumenda ducimus!
        </p>
      </header>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product) => {
          return <PopularCard key={product.name} imgURL={product.imgURL}
            name={product.name}
            price={product.price} />
        })}
      </div>
    </section>
  )
}

export default PopularProducts