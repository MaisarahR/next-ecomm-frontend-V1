<script>
//export let data;
</script>



<div class="hero min-h-screen">
  <video autoplay loop muted class="absolute inset-0 w-full h-full object-cover">
    <source src="pexels-joseph-redfield-10755266-(540p).mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="hero-overlay bg-opacity-60"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl text-primary font-bold text-glow">Explore NFTs</h1>
    </div>
  </div>
</div>

<div class="overflow-x-auto w-full" style="padding: 60px;">
  <div class="flex flex-wrap justify-center">
        <!--{#each data.jobs as job}-->
<div class="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<!--{/each}-->
  </div>
</div>

<div class="flex flex-wrap justify-end">
  <div class="join">
    <button class="join-item btn">«</button>
    <button class="join-item btn">Page 1</button>
    <button class="join-item btn">»</button>
  </div>
</div>

<!-- 
  <div class="overflow-x-auto w-full" style="padding: 50px;">
  <div class="flex flex-wrap justify-center">
    {#each data.jobs as job}
    <div class="flex justify-center">
      <div class="card w-96 md:w-80 lg:w-80 bg-base-100 bg-secondary text-secondary-content shadow-xl" style="height: 450px; padding: 10px; margin: 20px;">
        <div class="card-body">
          <h2 class="card-title">{job.title}</h2>
          <div class="text-sm mt-1">
            <p class="text-sm mt-1">{job.employer} . {job.location} .</p>
            <span class="text-sm">USD {humanize.formatNumber(job.minAnnualCompensation)} - USD {humanize.formatNumber(job.maxAnnualCompensation)}</span>
          </div>
          <div class="italic text-xs opacity-50 mt-2">
            posted {new Date(job.created).toLocaleDateString(undefined, {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
          </div>
          <div class="divider divider-primary" style="margin: 5px;"></div>
          <div class="mt-4 text-xs opacity-70">
            {job.description.slice(0, 240)}...
          </div>
          <div class="absolute bottom-4 right-4">
Note: Change button to anchor tag 
            <a class="btn btn-ghost" href="/jobs/{job.id}">Read More</a>
          </div>
        </div>
      </div>
    </div>
    {/each}
  </div>
</div>
-->

<style>
  .hero-background {
  width: 100%;
  height: 100%;
  object-fit: cover; /* This will stretch the image to cover the entire container */
}

  .text-glow {
  text-shadow: 0 0 30px #fff, 0 0 30px #fff, 0 0 30px #fff, 0 0 30px #0ff, 0 0 40px #0ff, 0 0 10px #0ff, 0 0 30px #0ff, 0 0 10px #0ff;
}

.text-glow2 {
  text-shadow: 0 0 0px #fff, 0 0 30px #0ff, 0 0 0px #fff, 0 0 30px #0ff, 0 0 0px #fff, 0 0 30px #fff, 0 0 0px #fff, 0 0 30px #0ff;
}
</style>
