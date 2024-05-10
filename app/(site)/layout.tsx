/** @format */

import "../globals.css";
import Link from "next/link";
import Image from "next/image";
import { getPages } from "@/sanity/sanity-utils";

export const metadata = {
	title: "Fundacja",
	description: "Opis",
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {

	// get all pages
	const pages = await getPages();

	return (
		<html lang="en">
			<body className="bg-white">

				<header className="p-4 flex justify-between content-center ">

					{/* Logo */}
					<Link
						href="/"
						className="text-4xl font-extrabold text-navy"
						role="link"
						aria-label="Nazwa Fundacji - strona główna"
					>
						Nazwa Fundacji
					</Link>
					{/* End of Logo */}

					{/* Navigation */}
					<nav
						className="w-2/5 flex justify-around"
						role="menubar"
						aria-label="Główne menu strony"
					>
						<Link
							href="/blog"
							role="menuitem"
							className="text-xl content-center menuitem"
						>
							Blog
						</Link>
						{pages.map((page) => (
							<Link
								key={page._id}
								href={`/${page.slug}`}
								role="menuitem"
								className="text-xl content-center menuitem"
							>
								{page.title}
							</Link>
						))}
					</nav>
					{/* End of Navigation */}

					{/* Accesibility */}
					<section
						role="accessibility"
						aria-label="Narzędzia dostępności"
						className="flex"
					>
						{/* Accesibility - Changing font size */}
						<div className="flex justify-center">
							<button
								role="font-size"
								className="text-2xl px-3 mx-1 border-l-dark-blue border-2"
							>
								A
							</button>
							<button
								role="font-size"
								className="text-3xl px-2.5 mx-1 border-l-dark-blue border-2"
							>
								A
							</button>
							<button
								role="font-size"
								className="text-4xl px-2 mx-1 border-l-dark-blue border-2"
							>
								A
							</button>
						</div>
						{/* End of Accesibility - Changing font size */}

						{/* Accesibility - Changing contrast */}
						<div className="flex justify-center ml-3">
							<button
								role="contrast"
								className="text-2xl px-2 mx-1 font-bold border-dark-blue border-2"
							>
								<Image
									src="/contrast-black.svg"
									alt="Kontrast strony normalny"
									width={24}
									height={24}
									priority
								/>
							</button>
							<button
								role="contrast"
								className="text-2xl px-2 mx-1 font-bold bg-acc-yellow border-dark-blue border-2"
							>
								<Image
									src="/contrast-black.svg"
									alt="Kontrast strony zółty czarny"
									width={24}
									height={24}
									priority
								/>
							</button>
							<button
								role="contrast"
								className="text-2xl px-2 mx-1  border-dark-blue border-2 bg-acc-blue text-white "
							>
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
					<Image
						src="/decore.svg"
						alt="Element dekoracyjny"
						className="absolute top-0 right-0 -z-50"
						width={768}
						height={100}
						priority
					/>
				</header>

				<main className="max-w-6xl mx-auto pt-5 pb-20">{children}</main>

			</body>
			<footer className="pt-20 relative">
				<div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
					<div className="md:flex md:justify-between">
						<div className="mb-6 md:mb-0">
							{/* Logo */}
							<Link
								href="/"
								className="text-4xl font-extrabold text-navy mb-2 flex"
								role="link"
								aria-label="Nazwa Fundacji - strona główna"
							>
								Nazwa Fundacji
							</Link>
							
							<Link
								href="mailto:"
								className="text-lg font-semibold text-light-navy my-5"
								role="link"
								aria-label="Nazwa Fundacji - strona główna"
							>
								<span className="flex my-1"> fundacja@fundacja.pl</span>

							</Link>
							<Link
								href="tel:"
								className="text-lg font-semibold text-light-navy my-5"
								role="link"
								aria-label="Nazwa Fundacji - strona główna"
							>
								<span className="flex my-1"> tel. 601 701 801</span>

							</Link>
							<Link
								href="/"
								className="text-lg font-semibold text-light-navy flex flex-col"
								role="link"
								aria-label="Nazwa Fundacji - strona główna"
							>
								<span className="block">ul. Sezamkowa 21/37</span>
								<span className="block">Warszawa 20-370</span>
							</Link>
							{/* End of Logo */}
						</div>
						<div className="grid grid-cols-2 gap-6 sm:gap-6 sm:grid-cols-2">
							<div>
								<h2 className="mb-4 text-md font-semibold text-gray-900 uppercase text-navy">
									Menu
								</h2>
								<ul className="text-light-navy font-medium">
									<li className="mb-2">
										<a
											href="/o-nas"
											className="hover:underline"
										>
											O nas
										</a>
									</li>
									<li className="mb-2">
										<a
											href="/blog"
											className="hover:underline"
										>
											Blog
										</a>
									</li>
									<li>
										<a
											href="/kontakt"
											className="hover:underline"
										>
											Kontakt
										</a>
									</li>
								</ul>
							</div>
							<div>
								<h2 className="mb-4 text-md font-semibold text-gray-900 uppercase text-navy">
									Social media
								</h2>
								<ul className="text-light-navy font-medium">
									<li className="mb-2">
										<a
											href=""
											className="hover:underline "
										>
											Instagram
										</a>
									</li>
									<li className="mb-2">
										<a
											href=""
											className="hover:underline"
										>
											Facebook
										</a>
									</li>
								</ul>
							</div>
							{/* <div>
								<h2 className="mb-4 text-md font-semibold text-gray-900 uppercase  text-navy">
									Fundacja
								</h2>
								<ul className="text-light-navy font-medium">
									<li className="mb-2">
										ul. Sezamkowa 21/37
									</li>
									<li className="mb-2">
										Warszawa 21-370
									</li>
								</ul>
							</div> */}
						</div>
					</div>
					<hr className="my-6 border-gray-200 sm:mx-auto border-gray-700 lg:my-8" />
					<div className="sm:flex sm:items-center sm:justify-between">
						<span className="text-sm text-gray-500 sm:text-center text-gray-400">
							© 2024{" "}
							<a
								href="/"
								className="hover:underline"
							>
								Nazwa Fundacji
							</a>
							. Wszelkie prawa zastrzeżone.
						</span>
					</div>
				</div>
				<Image
						src="/Decore-footer.svg"
						alt="Element dekoracyjny"
						className="absolute bottom-0 left-0 right-0 mx-auto -z-50"
						width={2000}
						height={100}
						priority
					/>
			</footer>
		</html>
	);
}
