import { footerLinks, socialMedia } from "@constants"
import { copyrightSign } from "@public/assets/icons"
import { footerLogo } from "@public/assets/images"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap  max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <Image src={footerLogo} width={150} height={46} />
          </a>
          <p className="text-white font-palanquin leading-8 mt-8 sm:max-w-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat soluta obcaecati, omnis veniam recusandae numquam quasi inventore molestiae ex nobis </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div className="flex items-center justify-center bg-white rounded-full h-12 w-12 gap-5 mt-8" key={icon.alt}>
                <Image src={icon.src} alt={icon.alt} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((links) => (
            <div key={links.title}>
              <h3 className="text-white-400 font-montserrat text-2xl">{links.title}</h3>
              {links.links.map((item) => { return <a className="text-white-400 mt-4 flex flex-col hover:text-slate-gray mb-3" href={`${item.link}`}>{item.name}</a> }
              )}

            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:justify-center">
            <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
              <Image src={copyrightSign} alt="copy" width={20} height={20} className="rounded-full m-0"/> <p className="">Copyrights. All rights reserved.</p>
            </div>
            <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer