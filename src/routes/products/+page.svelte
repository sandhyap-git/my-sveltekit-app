<script>
	import ProductCard from "$lib/components/ProductCard.svelte";	

    export let data;
    console.log("Hi");
    console.log(data);
</script>

<main class="grid gap-6 md:grid-cols-12">
    <div class="border p-6 md:col-span-3">Filters</div>
    <div class="border p-6 md:col-span-9">
        <h1>Products</h1> 
        
        <div class="grid gap-6 grid-cols-2 lg:grid-cols-3">
            {#each data.products as product}
                <ProductCard {...product} />
            {/each}          
        </div>           
    </div>
</main>