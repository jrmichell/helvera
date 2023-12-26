import Link from "next/link";
import Image from "next/image";
import GameCard from "../components/GameCard";
import Button from "../components/Button";
import { FaCheck, FaHandHoldingMedical, FaServer } from "react-icons/fa6";
import Hero from "../../public/images/hero-game.png";
import { AiFillFolderOpen } from "react-icons/ai";
import { MdManageAccounts } from "react-icons/md";
import Panel from "../components/Panel";

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
      {/* Games Section */}
      <section>
        <div className="flex flex-col justify-center items-center mt-8">
          <h1 className="text-3xl font-bold flex justify-center items-center mb-4">
            Game Servers
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
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
          <div className="p-4 border rounded-lg flex mb-4 text-center text-xs sm:text-md">
            <div className="">
              Looking for a server for a game we don't host?&nbsp;
            </div>
            <span className="text-primary hover:underline">
              <Link href="/">Contact us.</Link>
            </span>
          </div>
        </div>
      </section>
      {/* Advantages */}
      <section className="mt-10 mb-5">
        <h1 className="text-xl font-bold flex justify-center items-center">
          Why Choose Helvera?
        </h1>
        <div className="flex justify-center items-center">
          <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 m-18 gap-8">
            <Panel
              title="Blazing-Fast Hardware"
              content="We make sure to equip all of our Servers with the latest technology, making sure that you always get the best performance possible with your server."
            >
              <FaServer size={40} />
            </Panel>
            <Panel
              title="Full Access"
              content="No matter on the service we make sure to give you full access of your server, this will allow you to make the most out of your purchase without having any issues."
            >
              <AiFillFolderOpen size={40} />
            </Panel>
            <Panel
              title="Dedicated Support"
              content="We offer Ticket and Live Chat Support with all packages as standard. This will make sure that any queries you have will be taken care of by our support team."
            >
              <FaHandHoldingMedical size={40} />
            </Panel>
            <Panel
              title="Simple Management"
              content="All of our services run on simple control panels allowing you to navigate your system with ease. You can easily check our Knowledgebase if you are unsure on anything."
            >
              <MdManageAccounts size={40} />
            </Panel>
          </div>
        </div>
      </section>
    </div>
  );
}
