// ./sanity.config.ts
import {defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({
    basePath: '/admin',
    projectId: 'uqi29s43',
    dataset: 'production',
    title: "My Personal Website",
    apiVersion: '2023-12-14',
    plugins: [ deskTool() ],
    schema: { types: schemas }
})

export default config 