"use client"

import ExpandableCards from "@/components/custom/ExpandableCards/expandable-cards";
import { PokemonData } from "@/lib/PokemonData";

const POKEMON_TYPE_COLORS: Record<string, string> = {
  Fire: "bg-gradient-to-br from-red-400 to-red-600",
  Water: "bg-gradient-to-br from-blue-400 to-blue-600",
  Grass: "bg-gradient-to-br from-green-400 to-green-600",
  Electric: "bg-gradient-to-br from-yellow-400 to-yellow-600",
  Poison: "bg-gradient-to-br from-purple-600 to-purple-800",
  Normal: "bg-gradient-to-br from-gray-600 to-gray-800",
};

function getPokemonCardClassName(p: { type: string }) {
  const primaryType = p.type.split("/")[0];
  return POKEMON_TYPE_COLORS[primaryType] ?? "bg-gradient-to-br from-gray-400 to-gray-600";
}

function getPokemonDetailSections() {
  return {
    attributes: [
      { label: "Height", value: "0.7 m" },
      { label: "Weight", value: "6.9 kg" },
    ],
    stats: { hp: 45, attack: 49, defense: 49, speed: 45 },
    statsMax: 100,
  };
}

export default function ExpandableCardsDemo() {
  return (
    <ExpandableCards
      items={PokemonData}
      getItemId={(p) => p.id}
      getTitle={(p) => p.name}
      getSubtitle={(p) => `#${String(p.id).padStart(3, "0")}`}
      getImage={(p) => p.image}
      getTags={(p) => p.type.split("/").map((t) => t.trim())}
      getCardClassName={getPokemonCardClassName}
      getDetailSections={getPokemonDetailSections}
      containerClassName="bg-neutral-950 w-full h-full flex flex-col items-center justify-center p-4"
      cardsGridClassName="flex gap-4 flex-wrap justify-center"
      cardWrapperClassName="w-48 h-64"
    />
  );
}
