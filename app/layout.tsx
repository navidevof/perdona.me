import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import AdSense from "@/components/scripts/AdSense";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Perdona.me - Juegos divertidos para pedir perdón a tu pareja",
	description:
		"Con Perdona.me, usa minijuegos para que tu pareja te perdone de manera divertida y efectiva. ¡Repara tu relación!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<head>
				<meta
					name="google-adsense-account"
					content={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_PID as string}
				></meta>
				<AdSense pId={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_PID as string} />
			</head>
			<body className={montserrat.className}>{children}</body>
		</html>
	);
}
