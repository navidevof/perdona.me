import React from "react";
import CardMiniGame from "@/components/common/CardMiniGame";

export default function SectionMiniGames() {
	const GAMES = [
		{
			title: "¡Por Favor, Perdóname!",
			description:
				'Este divertido y tierno mini juego está diseñado para derretir corazones. Tu misión es conseguir el perdón de tu pareja al presionar el botón "Sí". Pero cuidado, el botón "NO" no se dejará presionar fácilmente y escapará cada vez que intentes alcanzarlo.',
			link: "/minijuegos-1",
		},
		{
			title: "¡El Juego del Perdón!",
			description:
				'Este mini juego romántico y divertido te invita a ganar el perdón de tu pareja de una manera muy especial. Cada vez que intentas presionar el botón "NO", este se hace más pequeño, mientras que el botón "Sí" se hace más grande. ¡Cuánto más intentas decir "NO", más evidente se vuelve que la respuesta correcta es "Sí"!',
			link: "/minijuegos-2",
		},
		{
			title: "¡El Juego del Perdón!",
			description:
				'Este mini juego romántico y divertido te invita a ganar el perdón de tu pareja de una manera muy especial. Cada vez que intentas presionar el botón "NO", este se hace más pequeño, mientras que el botón "Sí" se hace más grande. ¡Cuánto más intentas decir "NO", más evidente se vuelve que la respuesta correcta es "Sí"!',
			link: "/minijuegos-2",
		},
	];

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
				{GAMES.map((game, idx) => (
					<CardMiniGame key={idx} {...game} />
				))}
			</aside>
		</section>
	);
}
