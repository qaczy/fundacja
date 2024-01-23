import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import schemaTypes from '../sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'Next Sanity Fundacja',

  projectId: 'uqi29s43',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
