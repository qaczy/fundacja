import { kMaxLength } from "buffer";
import { title } from "process";

const page = {
	name: 'page',
	title: 'Strony',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Tytuł',
			type: 'string',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			}
		},
		{
			name: 'content',
			title: 'Treść',
			type: 'array',
			of: [{type: 'block'}]
		},
	],
};

export default page;