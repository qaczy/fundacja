const homepage = {
	name: 'home',
	title: 'Home',
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
            name: "image",
            title: "Zdjęcie",
            type: "image",
            options: { hotspot: true },
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string"
                }
            ]
        },
		{
			name: 'content',
			title: 'Treść',
			type: 'array',
			of: [{type: 'block'}]
		},
	],
};

export default homepage;