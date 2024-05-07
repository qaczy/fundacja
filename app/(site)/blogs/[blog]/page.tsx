import { getBlog } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
type Props = {
	params: {blog: string}
}

export default async function Blog({params}: Props) {
	
	const slug = params.blog;

	const blog = await getBlog(slug);
	
	return (
		
	<div className="max-w-3xl mx-auto py-20">

		{/* image */}
		<Image
			src={blog.image}
			alt={blog.name}
			width={768}
			height={100}
			className=" object-contain rounded-t-lg"
		/> 
		{/* end of image */}

		<header className="flex justify-center">
			<h1 className="text-7xl font-extrabold text-navy mt-10">{blog.name}</h1>
		</header>

		{/* content */}
		<div className="text-grey text-lg mt-14">
			<PortableText value={blog.intro}></PortableText>
		</div>
		<div className="text-grey text-lg mt-5">
			<PortableText value={blog.content}></PortableText>
		</div>
		{/* end of content */}
		
	</div>
	);

}