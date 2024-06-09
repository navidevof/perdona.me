import React from "react";
import MINI_GAMES from "@/data/mini-games";
import CardMiniGame from "@/components/common/CardMiniGame";

export default function page() {
	return (
		<main className="flex flex-col lg:gap-y-32 gap-y-20 py-10 lg:pb-20">
			<section className="flex flex-col gap-y-8 max-w-screen-lg mx-auto w-10/12">
				<h2 className="font-bold text-2xl">Minijuegos de Perdón</h2>
				<aside className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-screen-lg gap-8 mx-auto w-full">
					{MINI_GAMES.map((game, idx) => (
						<CardMiniGame key={idx} {...game} />
					))}
				</aside>
			</section>
		</main>
	);
}
