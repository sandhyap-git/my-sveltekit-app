<script>
	import Cart from "../lib/components/Cart.svelte";
import Footer from "../lib/components/Footer.svelte";
	import Header from "../lib/components/Header.svelte";
	import PlpPageLayout from "../lib/components/PlpPageLayout.svelte";

	let rtl = false;
	let dir;
	
	let cartOpen = false;

	function toggleRtl() {
		rtl = !rtl;
	}

	function getDir(foo) {
		return foo ? 'rtl' : 'ltr';
	}
	$: dir = rtl ? 'rtl': 'ltr';
</script>

<button on:click={toggleRtl}>Toggle RTL</button>

 <div class="grid gap-6" dir={getDir(rtl)}>
	<Header />	
	<PlpPageLayout />
	<Footer />
 </div>

<Cart />