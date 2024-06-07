"use client";

import Link from "next/link";
import React, { useState } from "react";
import IconCopy from "../icons/IconCopy";
import IconCheck from "../icons/IconCheck";

interface Props {
	title: string;
	description: string;
	link: string;
}

export default function CardMiniGame({ title, description, link }: Props) {
	const [isCopy, setIsCopy] = useState<boolean>(false);

	const copy = (link: string) => {
		if (isCopy) return;
		navigator.clipboard.writeText(
			`${window.location.href.substring(
				0,
				window.location.href.length - 1
			)}${link}`
		);
		setIsCopy(true);
	};

	return (
		<div className="rounded-md flex flex-col shadow-lg shadow-custom-red-1/50 overflow-clip">
			<div className="flex flex-col bg-custom-dark-1 px-6 py-4">
				<strong className="text-lg">{title}</strong>
				<p className="line-clamp-4 mt-1">{description}</p>
				<footer className="flex gap-x-2 items-center">
					<Link href={link} className="button-secondary mt-3 text-sm">
						Ver
					</Link>
					<button
						onClick={() => copy(link)}
						className="button-secondary mt-3 text-sm flex items-center justify-center gap-x-2"
					>
						{!isCopy ? (
							<IconCopy className="size-4" />
						) : (
							<IconCheck className="size-4 text-green-500" />
						)}
						Copiar link
					</button>
				</footer>
			</div>
		</div>
	);
}
