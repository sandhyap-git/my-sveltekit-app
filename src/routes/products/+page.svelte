<script>
	import ProductCard from "$lib/components/ProductCard.svelte";
	import { mockProducts } from "$lib/mockProducts";

    export let data;
    console.log("Hi");
    console.log(data);
</script>

<main class="grid gap-6 md:[grid-template-column:250px_auto]">
    <div class="border p-6">Filters</div>
    <div class="border p-6">
        <h1>Products</h1> 
        
        <div class="grid gap-6 grid-cols-2 lg:grid-cols-3">
            {#each mockProducts as product}
                <ProductCard {...product} />
            {/each}          
        </div>           
    </div>
</main>