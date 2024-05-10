import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
	params: { slug: string }
}

export default async function Page({ params }: Props) {
	const page = await getPage(params.slug);
	
	return ( 
		<div>
			
			{/* image */}
			<Image
				src={page.image}
				alt={page.title}
				width={1000}
				height={100}
				className="object-cover rounded-t-3xl bg-dark-beige mt-10 w-full"
			/>
			{/* end of image */}

			{/* title */}
			<h1 className="font-extrabold text-8xl text-navy my-10">
				{page.title}
			</h1>
			{/* end of title */}

			{/* content */}
			<div className="text-xl text-light-navy">
				<PortableText value={page.content} />
			</div>
			{/* end of content */}
			
		</div>
	)
}