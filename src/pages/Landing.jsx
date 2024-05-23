import React, { useState } from "react";
import TempCard from "../components/TempCard";
import CardForm from "../components/CardForm";

export default function Landing() {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      image:
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTVkaTU1OGx3M3E4cWQyZm1sNTgwaGVqenpuMG50aHFod3Rtc3F4dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohzdLTLt7f1usGJfW/giphy.gif",
      name: "© Viber",
      desc: "This is a gif uploaded on giphy by Viber on 2017.",
    },
    {
      image:
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3puaG1hcHRhZHd4djRlYXgxaXRucDAzYzE3bnFlMjdydnFlcXF4NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Sf53OQX1Gq66XuAGFa/giphy.gif",
      name: "© Sompo Sg",
      desc: "This is a gif uploaded on giphy by Sompo Singapore on 2021.",
    },
    {
      image:
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWt2bDYybmk3bHUyaWRzbGNwMXRuMm1rZ2tiZDdqNmNoNmpwZ2V3MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1R9JHL8qdAuBHMCMJ8/giphy.gif",
      name: "AI",
      desc: "This is a © free image and created as a gif using a generative ai , gif maker.",
      credits: "ascott",
    },
    {
      image: "https://c.tenor.com/9RKWGb7GOzIAAAAC/tenor.gif",
      name: "© Tenor 1",
      desc: "This is a gif uploaded on Tenor",
      credits: "ascott",
    },
    {
      image: "https://c.tenor.com/Hkgn9vhNxYkAAAAC/tenor.gif",
      name: "© Tenor 2",
      desc: "This is a gif uploaded on Tenor",
      credits: "ascott",
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
