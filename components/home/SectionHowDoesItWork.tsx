import Image from "next/image";
import howDoesItWorkImg from "@/public/images/home/who-does-it-work/image.svg";

export default function SectionHowDoesItWork() {
	return (
		<section
			id="como-funciona"
			className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-screen-xl w-10/12 mx-auto items-center justify-center"
		>
			<Image
				src={howDoesItWorkImg}
				alt="Personas en un campo"
				className="max-w-60 lg:max-w-sm w-full mx-auto"
			/>
			<header className="w-full mx-auto flex flex-col gap-y-2">
				<h2 className="text-2xl md:text-4xl text-white font-bold text-center">
					¿Cómo Funciona?
				</h2>
				<p className="text-center text-white">
					Descubre la magia detrás de nuestros juegos interactivos diseñados
					para añadir un toque de humor y ternura a tu relación. Cada juego está
					pensado para crear momentos únicos y divertidos con tu pareja,
					ayudándote a pedir perdón de una manera especial. Aprende cómo
					nuestros juegos funcionan y cómo pueden ayudarte a ganar ese tan
					esperado 'Sí'.
				</p>
			</header>
		</section>
	);
}
