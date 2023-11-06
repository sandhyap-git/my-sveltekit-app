import { writable } from "svelte/store";
import { persisted } from 'svelte-persisted-store'


// session and local storage handling

//export const cartOpen = writable(false);
//export const cartOpen = persisted('cart.open', false);
export const cartOpen = persisted('cart.open', false, {storage: 'session'});