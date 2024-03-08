<script>
  import humanize from 'humanize-plus';
  export let data;

</script>


<div class="hero min-h-96" style="background-image: url(https://playtoearn.net/blog_images/how-did-axie-infinity-overcome-challenges-and-achieve-success-1000x700.jpg); background-position: up; background-size: cover;">
  <div class="hero-overlay bg-opacity-60"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">Profile</h1>
    </div>
  </div>
</div>

<!-- Card -->
<div class="overflow-x-auto w-full" style="padding: 50px;">
  <div class="flex flex-wrap justify-center">
    {#each data.post as postItem}
    <div class="flex justify-center">
      <div class="card w-96 bg-base-100 shadow-xl" style="height: 450px; margin: 20px;" >
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <figure style="height: 500px; overflow: hidden;"><img src="{postItem.url}" alt="Image" /></figure>
        <div class="card-body bg-secondary text-black">
          <h2 class="card-title">{postItem.title}</h2>
          <div class="text-sm mt-1">
            <span class="text-sm">ETH {humanize.formatNumber(postItem.price)}</span>
          </div>
          <div class="italic text-xs opacity-50 mt-2"></div>
          <div class="mb-10 text-xs opacity-70">
            {postItem.description.slice(0, 240)}...
          </div>
          <div class="absolute bottom-4 right-4">
            <a class="btn" href="/posts/{postItem.id}">Learn More</a>
            <!-- svelte-ignore a11y-missing-attribute -->
            <a class="btn" >Buy Now</a>
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>
</div>