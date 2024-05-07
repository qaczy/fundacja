import { createClient, groq } from "next-sanity";
import { Blog } from "@/types/Blog";
import { Page } from "@/types/Page"
import clientConfig from "./config/client-config";

export async function getBlogs(): Promise<Blog[]> {

	return createClient(clientConfig).fetch(
		groq`*[_type == "blog"]{
			_id,
			_createdAt,
			name,
			"slug": slug.current,
			"image": image.asset->url,
			intro, 
			content
		}`
	)
}

export async function getBlog(slug: string): Promise<Blog> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "blog" && slug.current == $slug][0]{
			_id,
			_createdAt,
			name,
			"slug": slug.current,
			"image": image.asset->url,
			intro, 
			content
		}`,
		{ slug }
	)
}

export async function getPages(): Promise<Page[]> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "page"]{
			_id,
			_createdAt,
			title,
			"slug": slug.current
		}`
	);
}
export async function getPage(slug: string): Promise<Page> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "page && slug.current == &slug][0]{
			_id,
			_createdAt,
			title,
			"slug": slug.current,
			content
		}`,
		{ slug }
	);
}