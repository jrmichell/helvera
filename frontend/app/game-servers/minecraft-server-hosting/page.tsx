"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import MinecraftImg from "../../../public/images/minecraft-server.png";
import { FaCheck } from "react-icons/fa";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { BiMap, BiSliderAlt } from "react-icons/bi";
import Button from "../../components/Button";
import Panel from "../../components/Panel";
import FAQ from "../../components/FAQ";
import GameCard from "../../components/GameCard";
import Slider from "../../components/Slider";
import Card from "../../components/Card";

export default function GameServers() {
  // Define the state
  const [modPackSelection, setModPackSelection] = useState("vanilla"); // Set a default value
  const [playersValue, setPlayersValue] = useState(30); // Set a default value
  const [modsValue, setModsValue] = useState(0); // Set a default value
  const [recommendation, setRecommendation] = useState({
    price: "7.50",
    ram: "3GB RAM",
  });

  // Update the recommendation when the mod pack selection or the number of players changes
  useEffect(() => {
    updateRecommendation();
  }, [modPackSelection, playersValue, modsValue]);

  // Define the function to update the recommendation
  const updateRecommendation = () => {
    let newRecommendation = { price: "", ram: "" };

    // This switch statement is used to determine the recommendation based on the mod pack selection and the number of players
    switch (modPackSelection) {
      case "modded":
        if (playersValue <= 50) {
          newRecommendation = { price: "10.00", ram: "4GB RAM" };
        } else if (playersValue <= 80) {
          newRecommendation = { price: "15.00", ram: "6GB RAM" };
        } else if (playersValue <= 100) {
          newRecommendation = { price: "20.00", ram: "8GB RAM" };
        } else if (playersValue <= 150) {
          newRecommendation = { price: "30.00", ram: "12GB RAM" };
        } else if (playersValue <= 200) {
          newRecommendation = { price: "40.00", ram: "16GB RAM" };
        }
        break;
      case "vanilla":
        if (playersValue <= 10) {
          newRecommendation = { price: "3.75", ram: "1.5GB RAM" };
        } else if (playersValue <= 20) {
          newRecommendation = { price: "5.00", ram: "2GB RAM" };
        } else if (playersValue <= 30) {
          newRecommendation = { price: "7.50", ram: "3GB RAM" };
        } else if (playersValue <= 50) {
          newRecommendation = { price: "10.00", ram: "4GB RAM" };
        } else if (playersValue <= 80) {
          newRecommendation = { price: "15.00", ram: "6GB RAM" };
        } else if (playersValue <= 100) {
          newRecommendation = { price: "20.00", ram: "8GB RAM" };
        } else if (playersValue <= 150) {
          newRecommendation = { price: "30.00", ram: "12GB RAM" };
        } else if (playersValue <= 200) {
          newRecommendation = { price: "40.00", ram: "16GB RAM" };
        }
        break;
      case "spigot":
        if (playersValue <= 10) {
          newRecommendation = { price: "3.75", ram: "1.5GB RAM" };
        } else if (playersValue <= 20) {
          newRecommendation = { price: "5.00", ram: "2GB RAM" };
        } else if (playersValue <= 30) {
          newRecommendation = { price: "7.50", ram: "3GB RAM" };
        } else if (playersValue <= 50) {
          newRecommendation = { price: "10.00", ram: "4GB RAM" };
        } else if (playersValue <= 80) {
          newRecommendation = { price: "15.00", ram: "6GB RAM" };
        } else if (playersValue <= 100) {
          newRecommendation = { price: "20.00", ram: "8GB RAM" };
        } else if (playersValue <= 150) {
          newRecommendation = { price: "30.00", ram: "12GB RAM" };
        } else if (playersValue <= 200) {
          newRecommendation = { price: "40.00", ram: "16GB RAM" };
        }
        break;
      case "other":
        if (playersValue <= 10) {
          newRecommendation = { price: "3.75", ram: "1.5GB RAM" };
        } else if (playersValue <= 20) {
          newRecommendation = { price: "5.00", ram: "2GB RAM" };
        } else if (playersValue <= 30) {
          newRecommendation = { price: "7.50", ram: "3GB RAM" };
        } else if (playersValue <= 50) {
          newRecommendation = { price: "10.00", ram: "4GB RAM" };
        } else if (playersValue <= 80) {
          newRecommendation = { price: "15.00", ram: "6GB RAM" };
        } else if (playersValue <= 100) {
          newRecommendation = { price: "20.00", ram: "8GB RAM" };
        } else if (playersValue <= 150) {
          newRecommendation = { price: "30.00", ram: "12GB RAM" };
        } else if (playersValue <= 200) {
          newRecommendation = { price: "40.00", ram: "16GB RAM" };
        }
        break;
      default:
        newRecommendation = recommendation;
    }

    setRecommendation(newRecommendation);
  };

  // Define the other event handlers
  const handleModPackChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value;
    setModPackSelection(selectedOption);
  };

  const handlePlayersSliderChange = (value: number) => {
    setPlayersValue(value);
  };

  const handleModsSliderChange = (value: number) => {
    setModsValue(value);
  };

  return (
    <div>
      {/* Hero Section */}
      <section>
        <Image
          src={MinecraftImg}
          alt="CS2 Server Hosting"
          className="w-screen"
        />
        <div className="left-[10%] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl absolute max-w-[50%] top-24 bg-gradient-to-r from-primary to-secondary bg-clip-text font-bold text-transparent p-4 md:p-10">
          <h1>Minecraft: Java Edition</h1>
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
              <Button content="Order Now" />
            </Link>
          </div>
        </ul>
      </section>
      {/* Features */}
      <section>
        <div className="flex justify-center items-center">
          <div className="grid lg:grid-cols-3 grid-cols-1 m-18 gap-8">
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
      <section className="flex flex-col justify-center items-center">
        <h1 className="text-primary text-center text-4xl font-bold m-12">
          Minecraft Server Caluclator
        </h1>
        <div className="flex lg:flex-row flex-col justify-center items-center sm:px-20 py-8 shadow-md border rounded-xl">
          <div className="flex flex-col">
            <div>
              <div className="flex flex-col items-center justify-center">
                <div>
                  <p className="text-lg font-bold m-2 text-center">
                    What mod pack are you trying to play?
                  </p>
                  <div className="flex">
                    <select
                      className="bg-gray-100 border rounded-xl w-full focus:outline-none m-2 text-center"
                      onChange={handleModPackChange}
                      value={modPackSelection}
                    >
                      <option value="vanilla">Vanilla Minecraft</option>
                      <option value="spigot">Spigot/Paper</option>
                      <option value="modded">Forge Modpack</option>
                      <option value="other">Other</option>
                    </select>
                    {modPackSelection === "modded" && (
                      <select className="bg-gray-100 border rounded-xl w-full focus:outline-none m-2 text-center">
                        <option value="curseforge">CurseForge</option>
                        <option value="atlauncher">ATLauncher</option>
                        <option value="technic">Technic</option>
                        <option value="ftb">FTB</option>
                        <option value="other">Other</option>
                      </select>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center p-4">
              <Slider
                min={10}
                max={200}
                step={10}
                initialValue={playersValue}
                description="How many players do you want to be able to have?"
                onChange={handlePlayersSliderChange}
              />
              <Slider
                min={0}
                max={75}
                step={5}
                initialValue={modsValue}
                description="How many mods/plugins do you want to be able to have?"
                onChange={handleModsSliderChange}
              />
            </div>
          </div>
          <div className="flex m-12">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-primary text-center text-2xl font-bold m-2">
                Our Recommendation
              </h1>
              <p className="text-dark text-lg mt-2">Unlimited Slots</p>
              <p className="text-dark text-lg mt-2">{recommendation.ram}</p>
              <p className="text-dark text-lg mt-2">50GB SSD Storage</p>
              <p className="text-dark text-lg mt-2">Instant Setup</p>
              <h1 className="text-4xl text-primary mt-6">
                &pound;{recommendation.price}
                <span className="text-gray-500 text-xl">/mo</span>
              </h1>
              <div className="mt-2">
                <Link href="/">
                  <Button content="Order Now" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <h1 className="font-bold text-center text-4xl mt-10 mb-5">
          Most Popular Plans
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <Card title="Iron">
            <div className="flex flex-col justify-center items-center">
              <p className="text-dark text-lg mt-2">20 Slots</p>
              <p className="text-dark text-lg mt-2">2GB RAM</p>
              <p className="text-dark text-lg mt-2">50GB SSD Storage</p>
              <p className="text-dark text-lg mt-2">1Gbps Network</p>
              <p className="text-dark text-lg mt-2">Unmetered Traffic</p>
              <p className="text-dark text-lg mt-2">Instant Setup</p>
              <h1 className="text-4xl text-primary mt-6">
                &pound;5.00 <span className="text-gray-500 text-xl">/mo</span>
              </h1>
              <div className="mt-2">
                <Link href="/">
                  <Button content="Order Now" />
                </Link>
              </div>
            </div>
          </Card>
          <Card title="Emerald">
            <div className="flex flex-col justify-center items-center">
              <p className="text-dark text-lg mt-2">80 Slots</p>
              <p className="text-dark text-lg mt-2">6GB RAM</p>
              <p className="text-dark text-lg mt-2">50GB SSD Storage</p>
              <p className="text-dark text-lg mt-2">1Gbps Network</p>
              <p className="text-dark text-lg mt-2">Unmetered Traffic</p>
              <p className="text-dark text-lg mt-2">Instant Setup</p>
              <h1 className="text-4xl text-primary mt-6">
                &pound;15.00 <span className="text-gray-500 text-xl">/mo</span>
              </h1>
              <div className="mt-2">
                <Link href="/">
                  <Button content="Order Now" />
                </Link>
              </div>
            </div>
          </Card>
          <Card title="TNT">
            <div className="flex flex-col justify-center items-center">
              <p className="text-dark text-lg mt-2">200 Slots</p>
              <p className="text-dark text-lg mt-2">16GB RAM</p>
              <p className="text-dark text-lg mt-2">50GB SSD Storage</p>
              <p className="text-dark text-lg mt-2">1Gbps Network</p>
              <p className="text-dark text-lg mt-2">Unmetered Traffic</p>
              <p className="text-dark text-lg mt-2">Instant Setup</p>
              <h1 className="text-4xl text-primary mt-6">
                &pound;40.00 <span className="text-gray-500 text-xl">/mo</span>
              </h1>
              <div className="mt-2">
                <Link href="/">
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
          question="What is Minecraft: Java Edition?"
          answer="Minecraft: Java Edition is a popular sandbox video game that allows players to explore, build, and survive in a blocky, open-world environment. It offers a creative and adventure-driven experience, where players can mine resources, craft tools and structures, and interact with a variety of creatures. The game's block-based graphics give it a distinctive, pixelated aesthetic. Minecraft is available on various platforms and has a strong emphasis on creativity and player-driven content, making it a versatile and engaging gaming experience."
        />
        <FAQ
          question="How do I join a Minecraft: Java Edition server?"
          answer="Once you've purchased a Minecraft: Java Edition game server from us, it will be instantly activated and begin downloading all required files and updates to your game server. Once this is done, you will see the server connection information in our Game Control Panel. To join the server, you can simply copy the IP address, launch Minecraft: Java Edition, go to the Multiplayer menu and add the server!"
        />
        <FAQ
          question="How much does a Minecraft: Java Edition server cost?"
          answer="We offer Minecraft: Java Edition servers from &pound;3.75 per month! You can see find our packages and pricing above!"
        />
        <FAQ
          question="What can I do with my Minecraft: Java Edition server?"
          answer="With your Minecraft: Java Edition server, you are in full control. You can upload maps, add plugins, modify game modes, execute server commands and configs, manage your files via Secure FTP, etc. There is no limit! We are constantly enhancing our services to ensure the smoothest, most optimal experience. As soon as something new becomes available you will have access!"
        />
      </section>
      {/* Other Games */}
      <section>
        <h1 className="text-xl font-bold flex justify-center items-center mt-10 mb-5">
          Other Games We Host
        </h1>
        <div className="flex justify-center items-center mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-3">
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
        </div>
      </section>
    </div>
  );
}
