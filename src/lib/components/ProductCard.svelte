<script>
	import { addToCart } from "../stores/cartItems";
	import ColorSwatch from "./ColorSwatch.svelte";
    import ProductImage from "./ProductImage.svelte";

    export let title;
    export let variants;
    let selectedVariant;

    let selectedVariantIndex=0;

    function swatchClicked(index) {
        selectedVariantIndex = index;
    }

    $: selectedVariant = variants[selectedVariantIndex];

    function addToCardClicked(){
        addToCart(title, selectedVariant);
    }

</script>

<div class="border p-3 grid gap-2">  

        <ProductImage hex={selectedVariant.hex}/>

        <div class="font-bold">{title}</div>
        <div class="flex gap-2">
            {#each variants as variant, index}
                <ColorSwatch 
                    on:click={() => swatchClicked(index)}
                    hex={variant.hex} 
                    selected={index == selectedVariantIndex}
                />
            {/each}
        </div>        
        <div class="">{selectedVariant.price}</div>
        <div class="">
            <button on:click={addToCardClicked}
                class="bg-black text-white p-2">ADD TO CART</button>
        </div>
</div>