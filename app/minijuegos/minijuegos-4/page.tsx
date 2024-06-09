"use client";
import React, { useRef, useState } from "react";

import JSConfetti from "js-confetti";
import Image from "next/image";
import iLoveUImg from "@/public/images/games/i-love-u.webp";

export default function Page() {
	const [isForgiven, setIsForgiven] = useState<boolean>(false);
	const [isHoverButton, setIsHoverButton] = useState<boolean>(false);

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
			<section className="flex flex-col gap-y-6 max-w-screen-lg w-10/12 text-center py-10 border z-0 border-black relative">
				<h1 className="text-3xl font-bold">¿Me puedes perdonar? 🥺</h1>
				{!isForgiven ? (
					<aside className="flex justify-center gap-x-5 items-center">
						<button onClick={forgive} className="button-primary !bg-green-500">
							¡Si!
						</button>
						{!isHoverButton ? (
							<button
								onMouseEnter={() => setIsHoverButton(true)}
								className="button-primary transition-all z-10"
							>
								NO👊
							</button>
						) : (
							<button
								onClick={forgive}
								onMouseLeave={() => setIsHoverButton(false)}
								className="button-primary !bg-green-500"
							>
								¡Si!
							</button>
						)}
					</aside>
				) : (
					<aside className="flex flex-col">
						<p className="text-2xl md:text-3xl">
							¡Muchas gracias! No volverá a pasar 😓
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
