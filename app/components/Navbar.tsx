"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  // Toggle mobile navigation
  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-dark flex flex-row justify-between p-4 shadow-offset shadow-lg">
      {/* Logo */}
      <Link href="/" className="flex justify-start">
        <Image src={Logo} alt="Logo" width={50} height={50} />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex text-sm">
        <ul className="flex justify-end items-center space-x-4">
          <li>
            <Link
              href="/"
              className="text-primary hover:text-secondary duration-300 uppercase font-bold"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/dedicated-servers"
              className="text-primary hover:text-secondary duration-300 uppercase font-bold"
            >
              Dedicated Servers
            </Link>
          </li>
          <li>
            <Link
              href="/web-hosting"
              className="text-primary hover:text-secondary duration-300 uppercase font-bold"
            >
              Web Hosting
            </Link>
          </li>
          <li>
            <Link
              href="/vps"
              className="text-primary hover:text-secondary duration-300 uppercase font-bold"
            >
              VPS
            </Link>
          </li>
          <li>
            <Link
              href="/game-servers"
              className="text-primary hover:text-secondary duration-300 uppercase font-bold"
            >
              Game Servers
            </Link>
          </li>
          <button className="text-dark uppercase bg-primary hover:bg-secondary duration-300 font-bold px-4 py-2 rounded-lg">
            <Link href="/">Client Area</Link>
          </button>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Toggle Button */}
        <button
          onClick={toggleNav}
          className="text-primary uppercase px-4 py-4"
        >
          <AiOutlineMenu size={25} />
        </button>

        {/* Side Menu */}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[55%] h-screen bg-dark ease-in duration-500 p-2"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500 h-screen"
          }
        >
          <div className="flex w-full items-center justify-between">
            <Link href="/" onClick={() => setNav(false)}>
              <Image src={Logo} alt="Logo" width={50} height={50} />
            </Link>
            <div
              onClick={toggleNav}
              className="rounded-full text-[#fff] cursor-pointer ml-5 bg-offset hover:bg-primary duration-300 p-1 shadow-lg"
            >
              <AiOutlineClose size={25} />
            </div>
          </div>

          <nav>
            <ul className="uppercase text-sm">
              <li
                onClick={() => setNav(false)}
                className="pl-5 pt-8 text-sm cursor-pointer text-primary font-bold hover:text-secondary duration-300"
              >
                <Link href="/">Home</Link>
              </li>
              <li
                onClick={() => setNav(false)}
                className="pl-5 pt-8 text-primary font-bold text-sm cursor-pointer hover:text-secondary duration-300"
              >
                <Link href="/dedicated-servers">Dedicated Servers</Link>
              </li>
              <li
                onClick={() => setNav(false)}
                className="pl-5 pt-8 text-primary font-bold text-sm cursor-pointer hover:text-secondary duration-300"
              >
                <Link href="/web-hosting">Web Hosting</Link>
              </li>
              <li
                onClick={() => setNav(false)}
                className="pl-5 pt-8 text-primary font-bold text-sm cursor-pointer hover:text-secondary duration-300"
              >
                <Link href="/vps">VPS</Link>
              </li>
              <li
                onClick={() => setNav(false)}
                className="pl-5 pt-8 text-primary font-bold text-sm cursor-pointer hover:text-secondary duration-300"
              >
                <Link href="/game-servers">Game Servers</Link>
              </li>
              <li
                onClick={() => setNav(false)}
                className="text-dark text-center cursor-pointer uppercase bg-primary hover:bg-secondary duration-300 ml-5 mt-8 p-2 font-bold rounded-lg w-[35%]"
              >
                <Link href="/">Client Area</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
