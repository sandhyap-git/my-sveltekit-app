<script>
	import Footer from "../lib/components/Footer.svelte";
import Header from "../lib/components/Header.svelte";
	import PlpPageLayout from "../lib/components/PlpPageLayout.svelte";

	let rtl = false;

	function toggleRtl(){
		rtl = !rtl;
	}
</script>

<button on:click={toggleRtl}>Toggle RTL</button>

 <div class="grid gap-6" dir={rtl ? 'rtl': 'ltr'}>
	<Header/>	
	<PlpPageLayout />
	<Footer />
 </div>