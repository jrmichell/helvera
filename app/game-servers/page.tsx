import Link from "next/link";
import Image from "next/image";
import GameCard from "../components/GameCard";
import FAQ from "../components/FAQ";
import Button from "../components/Button";
import { FaCheck } from "react-icons/fa6";
import Hero from "../../public/images/hero-game.png";

export default function GameServers() {
  return (
    <div>
      <section>
        {/* Hero Section */}
        <Image src={Hero} alt="Game Server Hosting" className="w-screen" />
        <div className="left-[10%] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl absolute max-w-[50%] top-24 bg-gradient-to-r from-primary to-secondary bg-clip-text font-bold text-transparent p-4 md:p-10">
          <h1>Helvera Game</h1>
          <h1>Server Hosting</h1>
        </div>
        <ul className="left-[10%] absolute z-1 top-52 max-w-[50%] text-white mt-4 p-8 md:p-16 text-xl hidden 2xl:block">
          <div className="flex gap-2">
            <FaCheck size={25} />
            <li>Multiple Locations Available</li>
          </div>
          <div className="flex gap-2">
            <FaCheck size={25} />
            <li>DDoS-Protected Hosting</li>
          </div>
          <div className="flex gap-2">
            <FaCheck size={25} />
            <li>Fast and Friendly Support</li>
          </div>
          <div className="flex gap-2">
            <FaCheck size={25} />
            <li>Lag-Free Gaming Experience</li>
          </div>
          <div className="flex gap-2">
            <FaCheck size={25} />
            <li>Instant Server Setup</li>
          </div>
          <div className="mt-4">
            <Link href="/">
              <Button content="Client Area" />
            </Link>
          </div>
        </ul>
      </section>
      <div className="flex flex-col justify-center items-center mt-8">
        <h1 className="text-3xl font-bold flex justify-center items-center mb-4">
          Game Servers
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-4">
          <Link href="/game-servers/minecraft-server-hosting">
            <GameCard game="Minecraft" />
          </Link>
          <Link href="/game-servers/cs2-server-hosting">
            <GameCard game="CS2" />
          </Link>
          <Link href="/game-servers/rust-server-hosting">
            <GameCard game="Rust" />
          </Link>
          <Link href="/game-servers/gmod-server-hosting">
            <GameCard game="Garry's Mod" />
          </Link>
        </div>
        <div className="p-6 border rounded-lg flex mb-4 text-center text-sm sm:text-md">
          <div className="">
            Looking for a server for a game we don't host?&nbsp;
          </div>
          <span className="text-primary hover:underline">
            {/* TODO: Redirect to General Enquires page */}
            <Link href="/">Contact us.</Link>
          </span>
        </div>
        {/* FAQ */}
        <h1 className="text-xl font-bold flex justify-center items-center mt-10 mb-2">
          Frequently Asked Questions
        </h1>
        <FAQ
          question="Placeholder number juan"
          answer="this is a random fucking answer that no one will ever see... ever"
        />
        <FAQ
          question="Placeholder number does"
          answer="this is a random fucking answer that no one will ever see... ever"
        />
        <FAQ
          question="Placeholder number trees"
          answer="this is a random fucking answer that no one will ever see... ever"
        />
        <FAQ
          question="Placeholder number quarter"
          answer="this is a random fucking answer that no one will ever see... ever"
        />
      </div>
    </div>
  );
}
