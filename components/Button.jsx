import Image from "next/image"

const Button = ({ label, icon }) => {
    return (
        <button className='px-5 border-2 flex justify-center items-center gap-3 rounded-md py-2 bg-coral-red text-white'>{label}
            <Image src={icon} width={30} height={20} />
        </button>
    )
}

export default Button