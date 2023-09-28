import Button from "./Button"

const Subscribe = () => {
  return (
    <section id="contact-us" className="flex flex-col items-center justify-center gap-10">
      <h3 className="capitalize text-4xl font-palanquin font-bold">sign up for <span className="text-coral-red">update</span> & newsletter</h3>
      <div className="border border-slate-gray lg:max-w-[40%] w-full flex flex-row items-center justify-between max-sm:gap-2 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="Subscribe@gmail.com"
        className=""/>
        <div className="border-red-500 max-sm:justify-end items-center max-sm:full">
          <button className="bg-coral-red text-white px-4 py-2 rounded-full">Sign Up</button>
        </div>
      </div>
    </section>
  )
}

export default Subscribe