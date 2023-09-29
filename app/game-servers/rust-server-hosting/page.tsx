import Image from "next/image";
import RustImg from "../../../public/images/rustservers.png";
import { FaCheck } from "react-icons/fa6";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { BiMap, BiSliderAlt } from "react-icons/bi";
import Button from "../../components/Button";
import Link from "next/link";
import Panel from "../../components/Panel";
import Card from "../../components/Card";
import FAQ from "../../components/FAQ";
import GameCard from "../../components/GameCard";

export default function GameServers() {
  return (
    <div>
      {/* Hero Section */}
      <section>
        <Image src={RustImg} alt="CS2 Server Hosting" className="w-screen" />
        <div className="left-[10%] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl absolute max-w-[50%] top-24 bg-gradient-to-r from-primary to-secondary bg-clip-text font-bold text-transparent p-4 md:p-10">
          <h1>Rust</h1>
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
            <Link href="/game-servers">
              <Button content="Order Now" />
            </Link>
          </div>
        </ul>
      </section>
      {/* Features */}
      <section>
        <div className="flex justify-center items-center">
          <div className="grid xl:grid-cols-3 grid-cols-1 m-18">
            <Panel
              title="High Performance"
              content="Our servers are powered by the latest AMD Ryzen processors and
            blazing-fast NVMe SSDs. We also use the latest DDR4 RAM for maximum
            performance."
            >
              <BsFillRocketTakeoffFill size={50} />
            </Panel>
            <Panel
              title="Advaned GCP"
              content="Our advanced Game Control Panel is designed to provide you with the best possible experience. You can easily upload maps, add plugins, and much more!"
            >
              <BiSliderAlt size={50} />
            </Panel>
            <Panel
              title="Multiple Locations"
              content="We have multiple locations available for you to choose from. This allows you to choose the location that is closest to you, ensuring that you have the best possible experience."
            >
              <BiMap size={50} />
            </Panel>
          </div>
        </div>
      </section>
      {/* Pricing */}
      <section className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <Card title="Standard">
            <div className="flex flex-col justify-center items-center">
              <p className="text-gray-600 text-center text-sm mb-4 max-w-[75%]">
                The ideal package for a small community.
              </p>
              <p className="text-dark text-lg mt-2">50 Slots</p>
              <p className="text-dark text-lg mt-2">45GB SSD Storage</p>
              <p className="text-dark text-lg mt-2">1Gbps Network</p>
              <p className="text-dark text-lg mt-2">Unmetered Traffic</p>
              <p className="text-dark text-lg mt-2">Instant Setup</p>
              <h1 className="text-4xl text-primary mt-6">
                &pound;19.99 <span className="text-gray-500 text-xl">/mo</span>
              </h1>
              <div className="mt-2">
                <Link href="/game-servers">
                  <Button content="Order Now" />
                </Link>
              </div>
            </div>
          </Card>
          <Card title="Community">
            <div className="flex flex-col justify-center items-center">
              <p className="text-gray-600 text-center text-sm mb-4 max-w-[75%]">
                Recommended for a medium-sized community.
              </p>
              <p className="text-dark text-lg mt-2">100 Slots</p>
              <p className="text-dark text-lg mt-2">60GB SSD Storage</p>
              <p className="text-dark text-lg mt-2">1Gbps Network</p>
              <p className="text-dark text-lg mt-2">Unmetered Traffic</p>
              <p className="text-dark text-lg mt-2">Instant Setup</p>
              <h1 className="text-4xl text-primary mt-6">
                &pound;39.99 <span className="text-gray-500 text-xl">/mo</span>
              </h1>
              <div className="mt-2">
                <Link href="/game-servers">
                  <Button content="Order Now" />
                </Link>
              </div>
            </div>
          </Card>
          <Card title="Enhanced">
            <div className="flex flex-col justify-center items-center">
              <p className="text-gray-600 text-center text-sm mb-4 max-w-[75%]">
                The perfect package for a large community.
              </p>
              <p className="text-dark text-lg mt-2">250 Slots</p>
              <p className="text-dark text-lg mt-2">75GB SSD Storage</p>
              <p className="text-dark text-lg mt-2">1Gbps Network</p>
              <p className="text-dark text-lg mt-2">Unmetered Traffic</p>
              <p className="text-dark text-lg mt-2">Instant Setup</p>
              <h1 className="text-4xl text-primary mt-6">
                &pound;65.99 <span className="text-gray-500 text-xl">/mo</span>
              </h1>
              <div className="mt-2">
                <Link href="/game-servers">
                  <Button content="Order Now" />
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>
      {/* FAQ */}
      <section>
        <h1 className="text-xl font-bold flex justify-center items-center mt-10 mb-5">
          Frequently Asked Questions
        </h1>
        <FAQ
          question="What is Rust?"
          answer="Rust is a popular multiplayer online survival video game developed by Facepunch Studios. In Rust, players find themselves in a harsh open-world environment where they must gather resources, build shelter, and form alliances with other players to survive. The game is known for its unforgiving gameplay, as players must contend with both environmental hazards and potential threats from other players."
        />
        <FAQ
          question="How do I join a Rust server?"
          answer="Once you've purchased a Rust game server from us, it will be instantly activated and begin downloading all required files and updates to your game server. Once this is done, you will see the server connection information in our Game Control Panel. To join the server, you can simply copy the command, launch Rust, open your console and paste the command!"
        />
        <FAQ
          question="How much does a Rust server cost?"
          answer="We offer Rust servers from &pound;19.99 per month! You can see find our packages and pricing above!"
        />
        <FAQ
          question="What can I do with my Rust server?"
          answer="With your Rust server, you are in full control. You can upload maps, add plugins, modify game modes, execute server commands and configs, manage your files via Secure FTP, etc. You can play competitive matches, practice grenades and retakes, there is no limit! We are constantly enhancing our services to ensure the smoothest, most optimal experience. As soon as something new becomes available you will have access!"
        />
      </section>
      {/* Other Games */}
      <section>
        <h1 className="text-xl font-bold flex justify-center items-center mt-10 mb-5">
          Other Games We Host
        </h1>
        <div className="flex justify-center items-center mb-8">
          <Link href="/game-servers/minecraft-server-hosting">
            <GameCard game="Minecraft" />
          </Link>
          <Link href="/game-servers/gmod-server-hosting">
            <GameCard game="Garry's Mod" />
          </Link>
          <Link href="/game-servers/cs2-server-hosting">
            <GameCard game="CS2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
