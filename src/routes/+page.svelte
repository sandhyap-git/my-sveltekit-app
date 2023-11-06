<script>
	import BlackButton from "$lib/components/buttons/BlackButton.svelte";
import Button from "$lib/components/buttons/Button.svelte";
	import RedButton from "$lib/components/buttons/RedButton.svelte";
	import WhiteButton from "$lib/components/buttons/WhiteButton.svelte";

</script>
Home Page!

<div class="flex gap-6">
   
    <!--  for referemce    
    <button class="border-2 p-2 uppercase font-bold hover:bg-black hover:text-yellow">Button1</button>
    <button class="border-2 p-2 uppercase font-bold bg-black text-white hover:bg-transparent hover:text-red">Button2</button>

    <Button class="hover:bg-black hover:text-yellow" > New Button1</Button>
    <Button class="bg-black text-white hover:bg-transparent hover:text-red" > New Button2</Button> 
    -->

    <BlackButton> Black Yellow </BlackButton>
    <WhiteButton> White Red </WhiteButton>
    <RedButton> Red Button</RedButton>

</div>

