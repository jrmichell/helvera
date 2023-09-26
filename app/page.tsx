import Image from "next/image";
import Link from "next/link";
import Hero from "../public/images/hero.webp";
import Card from "./components/Card";
import Panel from "./components/Panel";
import Button from "./components/Button";
import { FaServer, FaHandHoldingMedical } from "react-icons/fa";
import { AiFillFolderOpen } from "react-icons/ai";
import { MdManageAccounts } from "react-icons/md";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <Image src={Hero} alt="Hero Image" className="w-full" />
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl absolute max-w-[50%] top-0 bg-gradient-to-r from-primary to-secondary bg-clip-text font-bold text-transparent p-4 md:p-10">
          The home of blazing fast, high quality, affordable hosting solutions.
        </h1>
      </section>
      {/* Services */}
      <section className="mt-5"></section>
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
      {/* Features */}
      <section className="mt-10 mb-5">
        <div className="flex justify-center items-center">
          <div className="grid lg:grid-cols-3 grid-cols-1">
            <Card
              title="Dedicated Servers"
              content="High performing, multipurpose dedicated servers."
            >
              <Link href="/dedicated-servers">
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
