import Image from "next/image";
import Link from "next/link";
import Hero from "../public/images/hero.png";
import Card from "./components/Card";
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
        <h1 className="left-[10%] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl absolute max-w-[50%] top-24 sm:top-28 bg-gradient-to-r from-primary to-secondary bg-clip-text font-bold text-transparent p-4 md:p-10">
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
            {/* TODO: Add Client Area Link */}
            <Link href="/">
              <Button content="Client Area" />
            </Link>
          </div>
        </ul>
        <Image src={Hero} alt="Hero Image" className="w-full" />
      </section>
      {/* Advantages */}
      <section className="mt-10 mb-5">
        <h1 className="text-xl font-bold flex justify-center items-center">
          Why Choose Helvera?
        </h1>
        <div className="flex justify-center items-center">
          <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 m-18">
            <Panel
              title="SSD Storage"
              content="We make sure to equip all of our Servers with SSD Technology. It is also available for selection with our Dedicated Servers, making sure that you get the best performance."
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
              title="Need Support?"
              content="We offer Ticket, Phone and Live Support with all packages. This will make sure that any queries you have will be taken care of by our support team."
            >
              <FaHandHoldingMedical size={40} />
            </Panel>
            <Panel
              title="Simple Management"
              content="All of our Servers run on simple control panels allowing you to navigate your system with ease. You can easily check our Knowledge Base if you are unsure on anything."
            >
              <MdManageAccounts size={40} />
            </Panel>
          </div>
        </div>
      </section>
      {/* Services */}
      <section id="services" className="mt-10 mb-5 mx-24">
        <div className="flex justify-center items-center">
          <div className="grid lg:grid-cols-4 grid-cols-1">
            <Card
              title="Game Servers"
              content="High quality game servers for a variety of games."
            >
              <Link href="/game-servers">
                <Button content="View Pricing" />
              </Link>
            </Card>
            <Card
              title="Virtual Private Servers"
              content="Looking for an affordable, yet powerful virtual machine?"
            >
              <Link href="/vps">
                <Button content="View Pricing" />
              </Link>
            </Card>
            <Card
              title="Dedicated Servers"
              content="High performing, multipurpose dedicated servers."
            >
              <Link href="/dedicated-servers">
                <Button content="View Pricing" />
              </Link>
            </Card>
            <Card
              title="Web Hosting"
              content="A fast and reliable place to host your beautiful website!"
            >
              <Link href="/web-hosting">
                <Button content="View Pricing" />
              </Link>
            </Card>
          </div>
        </div>
      </section>
      {/* Partners and Vendors */}
      <section className="mt-10 mb-5"></section>
    </>
  );
}
