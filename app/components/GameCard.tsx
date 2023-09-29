"use client";

import Image from "next/image";
import { useState } from "react"; // Import useState to manage the selected game image
import { useEffect } from "react";

type Game = string;
type className = string;

export default function GameCard({ game }: { game: Game }) {
  const gameAliases: { [key: string]: string } = {
    gmod: "Garry's Mod", // Map "gmod" to "Garry's Mod"
  };
  // Define a mapping for game names to image filenames
  const gameImageFilenames: { [key: string]: string } = {
    Minecraft: "minecraft.jpg",
    "Garry's Mod": "gmod.jpg",
    Rust: "rust.jpg",
    CS2: "cs2.jpg",
  };

  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [gameImage, setGameImage] = useState<any>(null);

  useEffect(() => {
    if (game) {
      const normalizedGame = gameAliases[game.toLowerCase()] || game; // Use the alias if available
      setSelectedGame(normalizedGame);

      // Dynamically import the game image based on the selected game
      const imageFilename = gameImageFilenames[normalizedGame] || "default.jpg"; // Use "default.jpg" if no image found
      import(`../../public/images/${imageFilename}`)
        .then((image) => {
          console.log("Image Loaded for:", normalizedGame);
          setGameImage(image.default);
        })
        .catch((error) => {
          console.error("Error loading image:", error);
        });
    }
  }, [game]);

  return (
    <div className="flex justify-center items-center">
      {selectedGame && (
        <div className="m-4 hover:shadow-primary shadow-lg rounded-lg border hover:scale-105 duration-300">
          {gameImage && (
            <Image
              src={gameImage}
              alt={selectedGame}
              width={240}
              height={120}
              className="rounded-t-lg"
            />
          )}
          <h1 className="p-4 text-center">{selectedGame}</h1>
        </div>
      )}
    </div>
  );
}
