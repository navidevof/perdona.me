"use client";

import Image from "next/image";

import bonk1Img from "@/public/images/games/bonk/bonk-1.webp";
import bonk2Img from "@/public/images/games/bonk/bonk-2.webp";
import { useRef, useState } from "react";

export default function page() {
	const $imageBonk1 = useRef<HTMLImageElement>(null);
	const $imageBonk2 = useRef<HTMLImageElement>(null);
	const $textContainer = useRef<HTMLDivElement>(null);

	const [counter, setCounter] = useState<number>(0);

	const hitAnim = () => {
		if (!$imageBonk1.current || !$imageBonk2.current || !$textContainer.current)
			return;

		$imageBonk1.current.style.opacity = "0";
		$imageBonk2.current.style.opacity = "1";

		setCounter((value) => value + 1);

		setTimeout(() => {
			$imageBonk1.current!.style.opacity = "1";
			$imageBonk2.current!.style.opacity = "0";
		}, 100);

		if (counter > 50 && counter < 100) {
			$textContainer.current.style.opacity = "1";
			$textContainer.current.style.transform = "translateY(0)";
		} else if (counter > 100) {
			$textContainer.current.innerText = "Menos mal es un muñeco y no soy yo.";
		}
	};

	return (
		<main className="h-[100dvh] flex justify-center items-center">
			<section className="flex flex-col gap-y-6 max-w-screen-lg w-10/12 text-center py-10 border z-0 border-black relative">
				<h1 className="text-3xl font-bold">Desestresate, me lo merezco 😬</h1>
				<aside className="flex flex-col relative mx-auto w-full">
					<div className="aspect-[300/180] size-full min-w-72 max-w-screen-sm max-h-96 mx-auto relative">
						<Image
							ref={$imageBonk1}
							src={bonk1Img}
							placeholder="blur"
							alt="Meme Bonk antes de pegar"
							className="size-full absolute -left-5 top-0 object-cover z-0 opacity-100"
						/>
						<Image
							ref={$imageBonk2}
							src={bonk2Img}
							placeholder="blur"
							alt="Meme Bonk antes de pegar"
							className="size-full absolute -left-5 top-0 object-cover z-10 opacity-0"
						/>
					</div>
					<div
						ref={$textContainer}
						className="absolute left-0 w-full text-center -top-4 text-custom-red-1 transition duration-500 opacity-0 translate-y-12"
					>
						Por favor, detente 😪
					</div>
					<div className="-translate-y-10 flex flex-col gap-y-2">
						<span>
							Golpes <b>{counter}</b>
						</span>
					</div>
					<button onClick={hitAnim} className="button-primary mx-auto">
						¡Pegar!
					</button>
				</aside>
			</section>
		</main>
	);
}
