import { getBlog } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
type Props = {
	params: {blog: string}
}

export default async function Blog({params}: Props) {
	
	const slug = params.blog;

	const blog = await getBlog(slug);
	
	return (
		<div>
			<Link 
				href="/blog"
				className="inline-flex justify-center items-center bg-beige px-3 py-1 rounded-xl shadow-sm hover:shadow duration-150 relative group"> 
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000" className="w-6 h-6 mr-3 inline-block translate-x-1 relative transition duration-150 ease-in-out group-hover:transition group-hover:duration-150 group-hover:ease-in-out group-hover:-translate-x-0">
					<path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
					</svg>
				<span className="text-xl">
					Powrót do bloga
				</span>
			</Link>
		
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
			<Link 
				href="/blog"
				className="inline-flex justify-center items-center bg-beige px-3 py-1 rounded-xl shadow-sm hover:shadow duration-150 relative group"> 
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000" className="w-6 h-6 mr-3 inline-block translate-x-1 relative transition duration-150 ease-in-out group-hover:transition group-hover:duration-150 group-hover:ease-in-out group-hover:-translate-x-0">
					<path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
					</svg>
				<span className="text-xl">
					Powrót do bloga
				</span>
			</Link>
		</div>
	);

}