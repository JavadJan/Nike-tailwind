import { reviews } from "@constants"
import ReviewCard from "./ReviewCard"

const CustomerReviews = () => {
  return (
    <section className="max-container flex flex-col gap-10 max-lg:flex-col">
      <div className="flex  justify-center items-center flex-col gap-5">
        <h1 className="text-4xl font-palanquin font-bold">
          what our <span className="text-coral-red">Customers</span> say?
        </h1>
        <p className="text-slate-gray text-info max-w-[750px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reiciendis suscipit molestiae architecto vitae voluptatum, quia maiores fugit aut, laborum aspernatur atque minus iure nostrum quibusdam ullam quos nulla? Ratione?</p>
      </div>
      <div className="flex justify-evenly max-lg:flex-col">
        {reviews.map((review) => {
          return <ReviewCard {...review} />
        })}
      </div>
    </section>
  )
}

export default CustomerReviews