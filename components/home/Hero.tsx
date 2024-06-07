import Image from "next/image";
import bgSvg from "@/public/images/home/hero/bg.svg";
import Link from "next/link";

export default function Hero() {
	return (
		<section className="flex py-10 md:min-h-screen justify-center items-center">
			<aside className="w-10/12 grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-screen-xl mx-auto items-center justify-center">
				<div className="flex flex-col gap-y-3 w-full">
					<h1 className="text-3xl md:text-5xl text-white font-bold">
						Pide perdón de una manera divertida
					</h1>
					<p className="text-white">
						Perdona.me es una aplicación que te permite jugar minijuegos
						divertidos para pedir perdón a tu pareja de una manera efectiva y
						memorable.
					</p>
					<aside className="flex items-center sm:flex-row flex-col gap-3">
						<Link href="#games" className="!w-full sm:!w-fit button-primary">
							Jugar ahora
						</Link>
						<button className="!w-full sm:!w-fit button-secondary">
							¿Como funciona?
						</button>
					</aside>
				</div>
				<Image
					src={bgSvg}
					className="w-full max-w-md lg:max-w-xl mx-auto"
					alt="Fondo de personas con corazones"
				/>
			</aside>
		</section>
	);
}
