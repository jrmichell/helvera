import Image from "next/image";
import Link from "next/link";
import UK from "../../public/images/UK.png";
import Hero from "../../public/images/hero-dedicated.png";
import ServerCard from "../components/ServerCard";
import Panel from "../components/Panel";
import Button from "../components/Button";
import FAQ from "../components/FAQ";
import { AiFillFolderOpen } from "react-icons/ai";
import { FaServer, FaHandHoldingMedical, FaCheck } from "react-icons/fa6";
import { MdManageAccounts } from "react-icons/md";

export default function DediServers() {
  return (
    <div>
      <section>
        {/* Hero Section */}
        <Image src={Hero} alt="Game Server Hosting" className="w-screen" />
        <div className="left-[10%] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl absolute max-w-[50%] top-24 bg-gradient-to-r from-primary to-secondary bg-clip-text font-bold text-transparent p-4 md:p-10">
          <h1>Helvera Dedicated</h1>
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
            <li>Full Root Access</li>
          </div>
          <div className="flex gap-2">
            <FaCheck size={25} />
            <li>Fast Server Setup</li>
          </div>
          <div className="mt-4">
            <Link href="https://my.helvera.co.uk">
              <Button content="Client Area" />
            </Link>
          </div>
        </ul>
      </section>
      {/* London Servers */}
      <div className="flex flex-col my-10">
        <div className="flex flex-col justify-center items-center">
          <Image src={UK} alt="UK Flag" width={50} />
          <h2 className="flex justify-center items-center font-bold text-primary text-center text-xl mt-2 mb-10">
            United Kindgom Servers
          </h2>
        </div>
        <div className="mx-auto w-[75%]">
          <ServerCard />
        </div>
        <div className="flex justify-center items-center">
          <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 m-18">
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
      </div>
      {/* FAQ */}
      <section className="mb-10">
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
      </section>
    </div>
  );
}
