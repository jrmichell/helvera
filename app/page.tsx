import Image from "next/image";
import Hero from "../public/images/hero.webp";
import Card from "./components/Card";
import Panel from "./components/Panel";
import { FaServer, FaHandHoldingMedical } from "react-icons/fa";
import { AiFillFolderOpen } from "react-icons/ai";
import { MdManageAccounts } from "react-icons/md";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      {/* TODO: Finish Hero */}
      <section>
        <Image src={Hero} alt="Hero Image" className="w-full" />
      </section>
      {/* Services */}
      {/* TODO: Add Services */}
      <section className="mt-5"></section>
      {/* Advantages */}
      <section className="mt-10 mb-5">
        <h1 className="text-xl font-bold flex justify-center items-center">
          Why Choose Helvera?
        </h1>
        <div className="flex justify-center items-center">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
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
      {/* Features */}
      <section className="mt-10 mb-5">
        <div className="flex justify-center items-center">
          <div className="grid md:grid-cols-3 grid-cols-1">
            <Link href="/dedicated-servers">
              <Card
                title="Dedicated Servers"
                content="High performing, multipurpose dedicated servers."
              >
                <button className="bg-primary text-white font-bold p-4 m-5 rounded-xl text-[#fff]">
                  View Pricing
                </button>
              </Card>
            </Link>
            <Link href="/vps">
              <Card
                title="Virtual Private Servers"
                content="Looking for an affordable, yet powerful virtual machine?"
              >
                <button className="bg-primary text-white font-bold p-4 m-5 rounded-xl text-[#fff]">
                  View Pricing
                </button>
              </Card>
            </Link>
            <Link href="/web-hosting">
              <Card
                title="Web Hosting"
                content="A fast and reliable place to host your beautiful website!"
              >
                <button className="bg-primary text-white font-bold p-4 m-5 rounded-xl text-[#fff]">
                  View Pricing
                </button>
              </Card>
            </Link>
          </div>
        </div>
      </section>
      {/* Partners and Vendors */}
      {/* TODO: Add Partners and Vendors */}
      <section className="mt-10 mb-5">
        {/* <h1 className="text-xl font-bold flex justify-center items-center"> */}
        {/*   Partners and Vendors */}
        {/* </h1> */}
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-2 md:grid-cols-6 sm:grid-cols-3"></div>
        </div>
      </section>
    </div>
  );
}
