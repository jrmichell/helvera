import Image from "next/image";
import Link from "next/link";
import Hero from "../public/images/hero.png";
import HomeCard from "./components/HomeCard";
import Panel from "./components/Panel";
import Button from "./components/Button";
import { FaServer, FaHandHoldingMedical } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { AiFillFolderOpen } from "react-icons/ai";
import { MdManageAccounts } from "react-icons/md";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section>
        <h1 className="left-[10%] text-md xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl absolute max-w-[50%] top-24 sm:top-28 bg-gradient-to-r from-primary to-secondary bg-clip-text font-bold text-transparent p-4 md:p-10">
          The home of blazing fast, high quality, affordable hosting solutions.
        </h1>
        <ul className="left-[10%] absolute z-1 top-64 max-w-[50%] text-white md:p-16 text-lg hidden 2xl:block">
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
          <div className="mt-1">
            <Link href="/">
              <Button content="Client Area" />
            </Link>
          </div>
        </ul>
        <Image src={Hero} alt="Hero Image" className="w-full" />
      </section>
      {/* Advantages */}
      <section className="m-10">
        <h1 className="text-xl font-bold flex justify-center items-center">
          Why Choose Helvera?
        </h1>
        <div className="flex justify-center items-center mt-8">
          <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 mb-4 gap-12">
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
      {/* Services */}
      <section id="services" className="m-10">
        <div className="flex justify-center">
          <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-12 m-8">
            <HomeCard
              title="Game Servers"
              content="High quality game servers for a variety of games."
            >
              <Link href="/game-servers">
                <Button content="View Pricing" />
              </Link>
            </HomeCard>
            <HomeCard
              title="Virtual Private Servers"
              content="Looking for an affordable, yet powerful virtual machine?"
            >
              <Link href="/vps">
                <Button content="View Pricing" />
              </Link>
            </HomeCard>
            <HomeCard
              title="Dedicated Servers"
              content="High performing, multipurpose dedicated servers."
            >
              <Link href="/dedicated-servers">
                <Button content="View Pricing" />
              </Link>
            </HomeCard>
            <HomeCard
              title="Web Hosting"
              content="A fast and reliable place to host your beautiful website!"
            >
              <Link href="/web-hosting">
                <Button content="View Pricing" />
              </Link>
            </HomeCard>
          </div>
        </div>
      </section>
    </>
  );
}
