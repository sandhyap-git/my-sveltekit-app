import { mockProducts } from "$lib/mockProducts";

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    return {
        path: params.path
    };
}