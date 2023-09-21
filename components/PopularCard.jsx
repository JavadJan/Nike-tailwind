import { star } from "@public/assets/icons"
import Image from "next/image"

const PopularCard = ({ imgURL, name, price }) => {
    return (
        <div className="flex flex-col gap-3">
            <div className="p-3 bg-card bg-cover bg-center rounded-lg">
                <Image

                    src={imgURL} width={200} height={130}
                />
            </div>
            <div className="flex flex-col gap-3">
                <p className="flex gap-2 items-center"><Image src={star} width={20} height={20} alt="rate" />(4.5)</p>
                <p className="mt-2 text-2xl loading-normal font-semibold">{name}</p>
                <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">{price}</p>
            </div>
        </div>
    )
}

export default PopularCard