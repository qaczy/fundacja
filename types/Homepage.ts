import { PortableTextBlock } from "sanity";

export type Homepage = {

	_id: string;

	_createdAt: Date;
// Hero
	title: string;

	description: PortableTextBlock[];

	link: object[];

	file: object[];

	image: string;

// General variables for whole website
	titleSite: string;

// Footer
	content: PortableTextBlock[];

	links: object[];

	linksSocial: object[];

}