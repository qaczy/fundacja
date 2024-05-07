import { PortableTextBlock } from "@sanity/types";

export type Blog = {
	
	_id: string;

	_createdAt: Date;

	name: string;

	slug: string;

	image: string;
	
	intro: PortableTextBlock[];

	content: PortableTextBlock[];

}