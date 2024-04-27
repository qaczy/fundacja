/** @format */

import Link from "next/link";
import "./globals.css";

export const metadata = {
	title: "Fundacja",
	description: "Opis",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="bg-beige">
				<header className="p-4 flex justify-between content-center">
					<Link href="/"
					className="text-4xl font-extrabold text-navy"
					>
						Nazwa Fundacji
					</Link>
					<nav className="w-2/5 flex justify-around mr-5">
						<Link href="/" className="text-xl">O nas</Link>
						<Link href="/" className="text-xl">Aktualności</Link>
						<Link href="/" className="text-xl">Blog</Link>
						<Link href="/" className="text-xl">Kontakt</Link>
					</nav>
				</header>
				<main className="max-w-5xl mx-auto py-20">{children}</main>
			</body>
		</html>
	);
}
