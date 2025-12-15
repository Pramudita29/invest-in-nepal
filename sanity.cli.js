import { defineCliConfig } from 'sanity/cli'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

export default defineCliConfig({
    api: { projectId, dataset },
    deployment: {
        appId: 'ahvu5gj5ggroh2z5u2e7a1n6', // Add this line
    },
})
