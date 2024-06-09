import React from "react";
import CardMiniGame from "@/components/common/CardMiniGame";
import MINI_GAMES from "@/data/mini-games";
import Link from "next/link";

export default function SectionMiniGames() {
	return (
		<section id="minijuegos" className="flex flex-col gap-y-8">
			<header className="w-10/12 mx-auto flex flex-col gap-y-2">
				<h2 className="text-2xl md:text-4xl text-white font-bold text-center">
					Minijuegos para pedir perdón
				</h2>
				<p className="text-center text-white">
					Elige entre una variedad de minijuegos divertidos y creativos para
					pedir perdón a tu pareja.
				</p>
			</header>
			<aside className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-screen-lg gap-8 mx-auto w-10/12">
				{MINI_GAMES.slice(0, 3).map((game, idx) => (
					<CardMiniGame key={idx} {...game} />
				))}
			</aside>
			<Link href="/minijuegos" className="button-secondary mx-auto">
				Ver más
			</Link>
		</section>
	);
}
