/** @format */

import Link from "next/link";
import "./globals.css";
import Image from "next/image";

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

					{/* Logo */}
					<Link href="/"
					className="text-4xl font-extrabold text-navy" role="link" aria-label="Nazwa Fundacji - strona główna"
					>
						Nazwa Fundacji
					</Link>
					{/* End of Logo */}

					{/* Navigation */}
					<nav className="w-2/5 flex justify-around" role="menubar" aria-label="Główne menu strony">
						<Link href="/" role="menuitem" className="text-xl content-center">O nas</Link>
						<Link href="/" role="menuitem" className="text-xl content-center">Aktualności</Link>
						<Link href="/" role="menuitem" className="text-xl content-center">Blog</Link>
						<Link href="/" role="menuitem" className="text-xl content-center">Kontakt</Link>
					</nav>
					{/* End of Navigation */}

					{/* Accesibility */}
					<section role="accessibility" aria-label="Narzędzia dostępności" className="flex">
						{/* Accesibility - Changing font size */}
						<div className="flex justify-center">
							<button role="font-size" className="text-2xl px-3 mx-1 border-l-dark-blue border-2">A</button>
							<button role="font-size" className="text-3xl px-2.5 mx-1 border-l-dark-blue border-2">A</button>
							<button role="font-size" className="text-4xl px-2 mx-1 border-l-dark-blue border-2">A</button>
						</div>
						{/* End of Accesibility - Changing font size */}

						{/* Accesibility - Changing contrast */}
						<div className="flex justify-center ml-3">
							<button role="contrast" className="text-2xl px-2 mx-1 font-bold border-dark-blue border-2">
								<Image
									src="/contrast-black.svg"
									alt="Kontrast strony normalny"
									width={24}
									height={24}
									priority
								/>
							</button>
							<button role="contrast" className="text-2xl px-2 mx-1 font-bold bg-acc-yellow border-dark-blue border-2">
								<Image
									src="/contrast-black.svg"
									alt="Kontrast strony zółty czarny"
									width={24}
									height={24}
									priority
								/>
							</button>
							<button role="contrast" className="text-2xl px-2 mx-1  border-dark-blue border-2 bg-acc-blue text-white ">
								<Image
									src="/contrast-yellow.svg"
									alt="Kontrast strony niebieski zółty"
									width={24}
									height={24}
									priority
								/>
							</button>
						</div>
						{/* End of Accesibility - Changing contrast */}
					</section>
					{/* End of Accesibility */}

				</header>

				<main className="max-w-5xl mx-auto py-20">{children}</main>

			</body>
		</html>
	);
}
