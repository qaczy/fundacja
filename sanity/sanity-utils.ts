import { createClient, groq } from "next-sanity";

export async function getProjects() {
	const client = createClient({
		projectId: 'uqi29s43',
		dataset: 'production',
		apiVersion: '2023-12-14',
	});


return client.fetch(
	groq`*[_type == "project"]{
		_id,
		_createdAt,
		_name,
		"slug": slug.current,
		"image": image.asset->url,
		url, 
		content
	}`
)
}
