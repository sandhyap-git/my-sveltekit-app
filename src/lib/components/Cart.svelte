 <script>
    import { fly } from "svelte/transition";
    import { focusTrap } from "$lib/actions/focusTrap";
	import { cartOpen } from "../stores/cartOpen";
    import { cartItems } from "../stores/cartItems";
	import CartItem from "./CartItem.svelte";	
	import Backdrop from "./Backdrop.svelte";

    function close() {
        $cartOpen = false;
    }
    
 </script>
 
 {#if $cartOpen }

    <Backdrop />
    
    <div use:focusTrap={{ onDeactivate: close}} transition:fly={{ x: "100%" }} class="fixed top-0 right-0 w-[350px] h-full bg-white border-l">

        <div class="bg-black text-white flex gap-6 justify-between p-3">
            Cart
            <button on:click={close}><iconify-icon class="text-30" icon="ep:close"></iconify-icon></button>
        </div>
       

        <div class="p-3 grid gap-3">
            {#each Object.values($cartItems) as item}
                 <CartItem {...item} />
            {/each}
        </div>
    </div>
 {/if}
