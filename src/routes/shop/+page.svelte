<script>
    export let data;
   // console.log('data ..' + data.aemdata);
    let img = data.aemdata['banner'].imageBackground;
   
</script>

<div class="font-bold capitalize">Banner from AEM</div>

<img src={img} alt="image"/>
