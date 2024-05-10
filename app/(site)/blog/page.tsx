import { getBlogs } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from 'next/image';
import Link from 'next/link';
export default async function BlogPage() {

	const blogs = await getBlogs();  

	return ( 
	<div>

{/* Blog Section */}
<section className="blog-spotlight mt-24 ">
			
<h3 className="text-light-navy text-lg font-bold text-center uppercase mb-3">Bądź na bieżąco!</h3>

<h2 className="font-bold text-navy text-7xl text-center">Blog</h2>

<div className="grid grid-cols-3 gap-8 mt-20">
	{blogs.map((blog) => (
		
		<Link 
			href={`/blog/${blog.slug}`} 
			key={blog._id} 
			className="rounded-3xl shadow-light-grey shadow-md bg-white hover:shadow-xl ease-in-out duration-300"
		>
			
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

		</Link>
	
	))}
</div>

</section>
{/* End of Blog section */}
</div>

	)
};