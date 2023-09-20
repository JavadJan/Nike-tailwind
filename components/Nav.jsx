"use client"
import Image from "next/image"
import { headerLogo } from "@public/assets/images"
import { navLinks } from "@constants"
import Link from "next/link"
import { hamburger } from "@public/assets/icons"
import { times } from "@public/assets/icons"
import { useState } from "react"

const Nav = () => {
  const [dropDown, setDropDown] = useState(false)
  return (
    <header className="padding-x py-8 w-full z-10 absolute">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <Image src={headerLogo} width={130} height={29} alt="logo" />
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => {
            return (<li key={item.label}>
              <a className="font-montserrat leading-normal text-slate-gray"
                href={item.href}>{item.label}</a>
            </li>)
          }
          )}
        </ul>
        <span
          onClick={() => setDropDown(false)}
          className={`max-lg:${dropDown ? "block animate" : "hidden"} hidden cursor-pointer z-40 duration-500 ease-in delay-300 `}><Image src={times} width={30} height={30} alt="times" /></span>
        {/* elem will be display as block when the screen will be smaller than 1024px larger than will be hide */}
        {!dropDown && <div className={`max-lg:block hidden cursor-pointer animate duration-500 ease-in delay-300 `}
          onClick={() => setDropDown(true)}
        >
          <Image src={hamburger} width={30} height={30} alt="hamburger list" />
        </div>}
        <div className={`absolute flex right-[60px] top-[80px] duration-500 ease-in delay-300 bg-slate-300 px-10 py-3 max-lg:${dropDown ? "block animate" : "hidden"} hidden z-index max-sm:full_menu`}>

          <ul className="max-sm:flex flex-col items-center 
          text-lg gap-4">
            {
              navLinks.map((item) => {
                return (
                  <li className="full_menu_element"
                    key={item.label}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Nav