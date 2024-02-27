import { groq } from 'next-sanity';
import { readClient } from './lib/client';
import { buildQuery } from './utls';

interface GetResourcesParams {
    query: string;
    category: string;
    page: string;
};

export const getResources = async ({ query, category, page}: GetResourcesParams) => {
    try {
        const resources = await readClient.fetch(
            groq`${buildQuery({
                type: 'resource',
                query,
                category,
                page: parseInt(page),
            })}{
                title,
                _id,
                downloadLink,
                "image": poster.asset->url,
                views,
                slug,
                category
            }`
        );

        return resources;
    } catch (error) {
        console.log(error);
    }
};