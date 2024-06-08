"use client";
import React, { useRef, useState } from "react";

import JSConfetti from "js-confetti";
import Image from "next/image";
import iLoveUImg from "@/public/images/games/i-love-u.webp";

export default function Page() {
	const [isForgiven, setIsForgiven] = useState<boolean>(false);
	const $container = useRef<HTMLDivElement>(null);
	const $button = useRef<HTMLButtonElement>(null);

	const randomLocation = () => {
		if (!$button.current || !$container.current) return;

		$button.current.style.position = "absolute";

		const containerHeight = $container.current.clientHeight;
		const containerWidth = $container.current.clientWidth;
		const buttonHeight = $button.current.clientHeight;
		const buttonWidth = $button.current.clientWidth;

		const randomY = Math.random() * (containerHeight - buttonHeight);
		const randomX = Math.random() * (containerWidth - buttonWidth);

		$button.current.style.left = `${randomX}px`;
		$button.current.style.top = `${randomY}px`;
	};

	const forgive = () => {
		try {
			const jsConfetti = new JSConfetti();
			jsConfetti.addConfetti();
			setIsForgiven(true);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<main className="h-[100dvh] flex justify-center items-center">
			<section
				ref={$container}
				className="flex flex-col gap-y-6 max-w-screen-lg w-10/12 text-center py-10 border z-0 border-black relative"
			>
				<h1 className="text-3xl font-bold">¡Por Favor, Perdóname! 🥺</h1>
				{!isForgiven ? (
					<aside className="flex justify-center gap-x-5 items-center">
						<button onClick={forgive} className="button-primary !bg-green-500">
							¡Si!
						</button>
						<button
							onMouseEnter={randomLocation}
							onClick={randomLocation}
							ref={$button}
							className="button-primary transition-all z-10"
						>
							NO👊
						</button>
					</aside>
				) : (
					<aside className="flex flex-col">
						<p className="text-2xl md:text-3xl">Si!! Eres el amor de mi vida</p>
						<Image
							src={iLoveUImg}
							alt="Gracias, te amo!"
							width={300}
							height={300}
							placeholder="blur"
							loading="lazy"
							className="mx-auto max-w-48 mt-2"
						/>
					</aside>
				)}
			</section>
		</main>
	);
}
