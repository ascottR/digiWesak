import React, { useState } from "react";
import TempCard from "../components/TempCard";
import CardForm from "../components/CardForm";

export default function Landing() {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      image:
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTVkaTU1OGx3M3E4cWQyZm1sNTgwaGVqenpuMG50aHFod3Rtc3F4dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohzdLTLt7f1usGJfW/giphy.gif",
      name: "viber",
      desc: "This is a description for Card 1. It gives more details about the card.",
    },
    {
      image:
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3puaG1hcHRhZHd4djRlYXgxaXRucDAzYzE3bnFlMjdydnFlcXF4NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Sf53OQX1Gq66XuAGFa/giphy.gif",
      name: "Sompo",
      desc: "This is a description for Card 2. It gives more details about the card.",
    },
    {
      image:
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmh5c281dHlsZzBodDJ4eDc5aGxwdnd3eW93cGMybW5hamZveTQ5bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6v0Mf9ufb2tT4rXD2G/giphy.gif",
      name: "Acasia",
      desc: "This is a description for Card 3. It gives more details about the card.",
    },
  ];

  return (
    <div>
      <h1 className="text-center text-purple-950 text-2xl sm:text-3xl mt-8 font-bold">
        All Wesak Card Templates
      </h1>
      <section className="px-2 py-6 sm:px-4 sm:py-12 container mx-auto">
        <div className="flex flex-wrap justify-evenly">
          {cards.map((card, index) => (
            <TempCard
              key={index}
              img={card.image}
              title={card.name}
              description={card.desc}
              onSelect={() => setSelectedCard(card)}
            />
          ))}
        </div>
      </section>
      {selectedCard && (
        <CardForm card={selectedCard} onClose={() => setSelectedCard(null)} />
      )}
    </div>
  );
}
