import { readonly, writable } from "svelte/store";
import { cartOpen } from "./cartOpen";
import { persisted } from 'svelte-persisted-store'

const items = persisted('cart.items', {});

export function addToCart(title, variant) {

    const productData = {title, ...variant};

    items.update((state) => {

        const sku = variant.sku;

        state[sku] = productData;

        console.log(state);

        return state;
    });

     cartOpen.set(false);
}

export const cartItems = readonly(items);

export function removeFromCart( sku ) {   

    items.update((state) => {

        delete state[sku];

        return state;
    });
}