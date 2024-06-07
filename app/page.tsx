import Hero from "@/components/home/Hero";
import SectionMiniGames from "@/components/home/SectionMiniGames";

export default function Home() {
	return (
		<>
			<main className="flex flex-col py-10">
				<Hero />
				<SectionMiniGames />
			</main>
		</>
	);
}
