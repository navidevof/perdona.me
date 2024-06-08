"use client";
import React, { useRef, useState } from "react";

import JSConfetti from "js-confetti";
import Image from "next/image";
import iLoveUImg from "@/public/images/games/i-love-u.webp";

export default function Page() {
	const [isForgiven, setIsForgiven] = useState<boolean>(false);
	const $container = useRef<HTMLDivElement>(null);
	const $buttonYes = useRef<HTMLButtonElement>(null);
	const $buttonNo = useRef<HTMLButtonElement>(null);

	const words = [
		"¿De verdad?",
		"¿De verdad verdad?",
		"¿De veritas?",
		"¿Por qué eres así 😪?",
		"Haré lo que quieras",
	];

	const randomLocation = () => {
		if (!$buttonNo.current || !$buttonYes.current) return;

		const newScaleButtonNo = $buttonNo.current.style.scale
			? parseFloat($buttonNo.current.style.scale) - 0.1
			: 0.9;

		const newScaleButtonYes = $buttonYes.current.style.scale
			? parseFloat($buttonYes.current.style.scale) + 0.3
			: 1.3;

		$buttonNo.current.style.scale = newScaleButtonNo.toString();
		$buttonYes.current.style.scale = newScaleButtonYes.toString();
		$buttonNo.current.innerText =
			words[Math.floor(Math.random() * words.length)];
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
		<main className="min-h-screen flex justify-center items-center">
			<section
				ref={$container}
				className="flex flex-col gap-y-6 max-w-screen-lg w-10/12 text-center py-10 border z-0 border-black relative"
			>
				<h1 className="text-3xl font-bold">Se que cometí un error 💔</h1>
				{!isForgiven ? (
					<aside className="flex justify-center gap-x-5 items-center">
						<button
							ref={$buttonYes}
							onClick={forgive}
							className="button-primary !bg-green-500"
						>
							SI😒
						</button>
						<button
							onClick={randomLocation}
							ref={$buttonNo}
							className="button-primary"
						>
							NO🥶
						</button>
					</aside>
				) : (
					<aside className="flex flex-col">
						<p className="text-2xl md:text-3xl">
							¡Gracias! NO volverá a pasar. Te lo prometo
						</p>
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
