import Link from "next/link";
import GameCard from "../components/GameCard";
import FAQ from "../components/FAQ";

export default function GameServers() {
  return (
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
  );
}
