import Hero from "@/components/home/Hero";
import SectionHowDoesItWork from "@/components/home/SectionHowDoesItWork";
import SectionMiniGames from "@/components/home/SectionMiniGames";

export default function Home() {
	return (
		<>
			<main className="flex flex-col lg:gap-y-32 gap-y-20 pb-10 lg:pb-20">
				<Hero />
				<SectionMiniGames />
				<SectionHowDoesItWork />
			</main>
		</>
	);
}
