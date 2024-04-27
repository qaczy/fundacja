import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
type Props = {
	params: {project: string}
}

export default async function Project({params}: Props) {
	
	const slug = params.project;

	const project = await getProject(slug);
	
	return (
		
	<div className="max-w-3xl mx-auto py-20">

		{/* image */}
		<Image
			src={project.image}
			alt={project.name}
			width={768}
			height={100}
			className=" object-contain rounded-t-lg"
		/> 
		{/* end of image */}

		<header className="flex justify-center">
			<h1 className="text-7xl font-extrabold text-navy">{project.name}</h1>
		</header>

		{/* content */}
		<div className="text-grey text-lg mt-5"><PortableText value={project.content}></PortableText></div>
		{/* end of content */}
		
	</div>
	);

}