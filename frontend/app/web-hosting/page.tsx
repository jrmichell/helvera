import Image from "next/image";
import Link from "next/link";
import Card from "../components/Card";
import Button from "../components/Button";
import Panel from "../components/Panel";
import FAQ from "../components/FAQ";
import { FaCheck, FaHandHoldingMedical, FaServer } from "react-icons/fa6";
import { AiFillFolderOpen } from "react-icons/ai";
import { MdManageAccounts } from "react-icons/md";
import Hero from "../../public/images/hero-vps.png";

export default function WebHosting() {
  return (
    <div>
      <section>
        {/* Hero Section */}
        <Image src={Hero} alt="VPS Hosting" className="w-screen" />
        <div className="left-[10%] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl absolute max-w-[50%] top-24 bg-gradient-to-r from-primary to-secondary bg-clip-text font-bold text-transparent p-4 md:p-10">
          <h1>Helvera Web</h1>
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
            <li>Low-Latency, Global Network</li>
          </div>
          <div className="flex gap-2">
            <FaCheck size={25} />
            <li>Instant Setup</li>
          </div>
          <div className="mt-4">
            <Link href="/">
              <Button content="Client Area" />
            </Link>
          </div>
        </ul>
      </section>
      {/* Services */}
      <section>
        <h1 className="font-bold text-center text-4xl mt-10 mb-5">
          Affordable Web Hosting
        </h1>
        <div className="flex justify-center items-center">
          <div className="grid lg:grid-cols-3 grid-cols-1">
            <Card title="Basic">
              <div className="flex flex-col justify-center items-center">
                <p className="text-dark text-lg mt-2">5 Mail Accounts</p>
                <p className="text-dark text-lg mt-2">2 Hosted Domains</p>
                <p className="text-dark text-lg mt-2">2 TB Bandwidth</p>
                <p className="text-dark text-lg mt-2">3 GB SSD Storage Space</p>
                <h1 className="text-4xl text-primary mt-6">
                  &pound;2.00 <span className="text-gray-500 text-xl">/mo</span>
                </h1>
              </div>
              <div className="mt-2">
                <button className="bg-gray-600 hover:bg-gray-400 font-bold duration-300 p-4 m-5 rounded-xl text-white">
                  Coming Soon
                </button>
              </div>
            </Card>
            <Card title="Pro">
              <div className="flex flex-col justify-center items-center">
                <p className="text-dark text-lg mt-2">20 Mail Accounts</p>
                <p className="text-dark text-lg mt-2">5 Hosted Domains</p>
                <p className="text-dark text-lg mt-2">5 TB Bandwidth</p>
                <p className="text-dark text-lg mt-2">
                  10 GB SSD Storage Space
                </p>
                <h1 className="text-4xl text-primary mt-6">
                  &pound;5.00 <span className="text-gray-500 text-xl">/mo</span>
                </h1>
              </div>
              <div className="mt-2">
                <button className="bg-gray-600 hover:bg-gray-400 font-bold duration-300 p-4 m-5 rounded-xl text-white">
                  Coming Soon
                </button>
              </div>
            </Card>
            <Card title="Enterprise">
              <div className="flex flex-col justify-center items-center">
                <p className="text-dark text-lg mt-2">50 Mail Accounts</p>
                <p className="text-dark text-lg mt-2">15 Hosted Domains</p>
                <p className="text-dark text-lg mt-2">Unmetered Bandwidth</p>
                <p className="text-dark text-lg mt-2">
                  35 GB SSD Storage Space
                </p>
                <h1 className="text-4xl text-primary mt-6">
                  &pound;8
                  <span className="text-gray-500 text-xl">/mo</span>
                </h1>
              </div>
              <div className="mt-2">
                <button className="bg-gray-600 hover:bg-gray-400 font-bold duration-300 p-4 m-5 rounded-xl text-white">
                  Coming Soon
                </button>
              </div>
            </Card>
          </div>
        </div>
      </section>
      {/* Advantages */}
      <section>
        <div className="flex justify-center items-center">
          <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1">
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
      {/* FAQ
      <section className="mb-10">
        <h1 className="text-xl font-bold flex justify-center items-center mt-10 mb-2">
          Frequently Asked Questions
        </h1>
        <FAQ
          question="Placeholder"
          answer="this is a random fucking answer that no one will ever see... ever"
        />
        <FAQ
          question="Placeholder"
          answer="this is a random fucking answer that no one will ever see... ever"
        />
        <FAQ
          question="Placeholder"
          answer="this is a random fucking answer that no one will ever see... ever"
        />
        <FAQ
          question="Placeholder"
          answer="this is a random fucking answer that no one will ever see... ever"
        />
      </section> */}
    </div>
  );
}
