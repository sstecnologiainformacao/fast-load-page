import { groq } from 'next-sanity';
import { readClient } from './lib/client';
import { buildQuery } from './utls';

interface GetResourcesParams {
    query: string;
    category: string;
    page: string;
};

export const getResourcesPlaylist = async () => {
    try {
        const resources = await readClient.fetch(
            groq`*[_type == "resourcePlaylist"]{
                title,
                _id,
                resources[0...6]->{
                    title,
                    _id,
                    downloadLink,
                    "image": poster.asset->url,
                    views,
                    category
                }
            }`
        );

        return resources;
    } catch (error) {
        console.log(error);
    }
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