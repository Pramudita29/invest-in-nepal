// sanity.config.js
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

import schemaTypes from './sanity/schemaTypes';

export default defineConfig({
  name: 'default',
  title: 'StrategicInsightsCMS',

  // Sanity CLI reads from process.env.SANITY_STUDIO_*
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
