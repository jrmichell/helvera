"use client";

import Image from "next/image";
import { useState } from "react"; // Import useState to manage the selected game image
import { useEffect } from "react"; // Import useEffect to load the selected game image

type Game = string;

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

  const [selectedGame, setSelectedGame] = useState<Game | null>(null); // Store the selected game name
  const [gameImage, setGameImage] = useState<any>(null); // Store the selected game image

  // Load the selected game image when the game changes
  useEffect(() => {
    if (game) {
      const normalizedGame = gameAliases[game.toLowerCase()] || game; // Use the alias if available
      setSelectedGame(normalizedGame);

      // Dynamically import the game image based on the selected game
      const imageFilename = gameImageFilenames[normalizedGame]; // Get the image filename for the selected game
      import(`../../public/images/${imageFilename}`) // Import the image
        .then((image) => {
          // Set the image
          console.log("Image Loaded for:", normalizedGame);
          setGameImage(image.default);
        })
        .catch((error) => {
          // Log an error if the image fails to load
          console.error("Error loading image:", error);
        });
    }
  }, [game]); // Only run this effect when the game changes

  return (
    <div className="flex justify-center items-center">
      {/* Display the selected game image and name */}
      {selectedGame && (
        <div className="m-4 shadow-lg rounded-lg border hover:scale-105 duration-300">
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
