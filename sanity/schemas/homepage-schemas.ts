const homepage = {
	name: 'homepage',
	title: 'Home',
	type: 'document',
	groups: [
		{
			name: 'general',
			title: 'Ogólne',
			
			default: true,
		},
		{
			name: 'hero',
			title: 'Hero',
		},
		{
			name: 'footer',
			title: 'Stopka',
		}
	],
	// Hero on homepage
	fields: [
		
		{
			name: 'title',
			title: 'Tytuł',
			type: 'string',
			group: 'hero'
		},
		{
			name: 'description',
			title: 'Treść',
			type: 'array',
			of: [{type: 'block'}],
			group: 'hero'
		},
		{
			name: 'linkHero',
			title: 'Pierwszy button',
			type: 'object',
			group: 'hero',
				fields: [
					{
						name: 'link',
						title: 'Nazwa linku',
						type: 'string',
					},
					{
						name: 'url',
						title: 'URL Linku',
						type: 'url',
					}
				],
		},
		{
			title: 'fileHero',
			name: 'Plik',
			type: 'file',
			group: 'hero',
			fields: [
				{
					name: 'fileDescHero',
					type: 'string',
					title: 'Tytuł przycisku'
				},
			]
		},
		{
            name: "image",
            title: "Zdjęcie",
            type: "image",
			group: 'hero',
            options: { hotspot: true },
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string"
                }
            ]
        },
		// General variables for whole website
		{
			name: 'titleSite',
			title: 'Tytuł strony',
			type: 'string',
			group: 'general'
		},
		// Footer
		{
			name: 'content',
			title: 'Treść',
			type: 'array',
			of: [{type: 'block'}],
			group: 'general'
		},
		{
			name: 'links',
			type: 'array',
			title: 'Linki w stopce',
			group: 'footer',
			of: [{type: 'object',
					group: 'footer',
					fields: [
						{
							name: 'linkName',
							title: 'Nazwa linku',
							type: 'string',
						},
						{
							name: 'linkURL',
							title: 'URL Linku',
							type: 'url',
						}
					],
				}],
		},
		{
			name: 'linksSocial',
			type: 'array',
			title: 'Linki do social media',
			group: 'footer',
			of: [{	
				type: 'object',
				group: 'footer',
				fields: [
					{
						name: 'linkName',
						title: 'Nazwa linku',
						type: 'string',
					},
					{
						name: 'linkURL',
						title: 'URL Linku',
						type: 'url',
					}
				],
			}],
		},
	]
};

export default homepage;