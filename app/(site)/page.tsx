import { getBlogs } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {

	const blogs = await getBlogs();  

	return (

	<div >
		{/* Hero section */}
		<section className="hero flex justify-between items-center">
			<div className="">
				
				<h1 className="w-[320px] text-8xl font-extrabold text-navy pb-14">Fundacja Nazwa Fundacji</h1>
				<p className="pb-10 text-light-navy font-medium">Krótki opis o fundacji, jaki powinien się tu znajdować. Ciekawy, zwięzły i nie za długi. Poniżej link do kontaktu oraz do jakiejś kluczowej podstrony lub pliku. Tak by odwiedzający mógł łatwo dotrzeć do celu.</p>
				
				<div className="flex justify-between">
					<button className="p-5 bg-yellow border border-yellow text-white font-medium rounded-lg shadow-lg mb-5 hover:shadow-xl hover:bg-white hover:text-yellow ease-in-out duration-300">Skontaktuj się z nami</button> 
					<button className="p-5 bg-orange border border-orange text-white font-medium rounded-lg shadow-lg mb-5 hover:shadow-xl hover:bg-white hover:text-orange ease-in-out duration-300">Pobierz informacje</button> 
				</div>

			</div>
			
			<Image
				src="/hero.png"
				alt="Zdjęcie labradora - Fundacja Nazwa Fundacji"
				width={650}
				height={100}
				priority
			/>

		</section>
		{/* End of Hero section */}

		{/* Blog Section */}
		<section className="blog-spotlight mt-24 ">
			
			<h3 className="text-light-navy text-lg font-bold text-center uppercase mb-3">Bądź na bieżąco!</h3>
			
			<h2 className="font-bold text-navy text-5xl text-center">Blog</h2>
			
			<div className="grid grid-cols-3 gap-8 mt-20">
				{blogs.map((blog) => (
					
					<div key={blog._id} className="rounded-3xl shadow-light-grey shadow-md bg-white hover:shadow-xl ease-in-out duration-300">
						
						{blog.image && (
						<Image
							src={blog.image}
							alt={blog.name}
							width={365}
							height={100}
							className="object-cover rounded-t-3xl bg-dark-beige"
						/> 
						)}
						<div className="font-bold text-navy text-center text-xl px-5 py-2 mt-3">{blog.name}</div>
						<div className="px-5 pt-3 pb-5 text-justify"><PortableText value={blog.intro}></PortableText></div>

					</div>
				
				))}
			</div>

		</section>
		{/* End of Blog section */}
	
	</div>

	);
}