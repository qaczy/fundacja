import { getProjects } from "@/sanity/sanity-utils";
import Image from 'next/image';

export default async function Home() {

	const projects = await getProjects();  

	return (

	<div >

		<h1 className="w-[320px] text-7xl font-extrabold text-navy">Fundacja Nazwa Fundacji</h1>
		
		<section className="blog-spotlight mt-24 ">
			<h3 className="text-light-navy font-bold text-center uppercase">Bądź na bieżąco!</h3>
			<h2 className="font-bold text-navy text-3xl text-center uppercase">Blog</h2>
			<div className="mt-5 grid grid-cols-3 gap-8">
				{projects.map((project) => (
					
					<div key={project._id} className="rounded-lg shadow-light-grey shadow-md bg-white">
						
						{project.image && (
						<Image
							src={project.image}
							alt={project.name}
							width={340}
							height={100}
							className="object-cover rounded-t-lg bg-dark-beige"
						/> 
						)}
						<div className="font-bold text-center text-xl p-3">{project.name}</div>
					</div>
				
				))}
			</div>
		</section>

	
	</div>

	);
}