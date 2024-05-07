const blog = {
    name: "blog",
    title: "Blog",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Tytuł",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "name" }
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
            name: "intro",
            title: "Zajawka",
            type: "array",
            of: [{ type: "block" }]
        },
        {
            name: "content",
            title: "Treść",
            type: "array",
            of: [{ type: "block" }]
        }
    ]
}

    export default blog;