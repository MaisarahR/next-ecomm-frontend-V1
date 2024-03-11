<script>
	import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';
	import humanize from 'humanize-plus';
	export let data;

	// function buyNow(postId) {
	//   goto(`/posts/${postId}/edit`);
	// };

	//Page pagination (Part 1)
	import { paginate, LightPaginationNav, DarkPaginationNav } from 'svelte-paginate';

	let images = data.post;
	let currentPage = 1;
	let pageSize = 6;
	$: paginatedItems = paginate({ items: images, pageSize, currentPage });

	// Image Payment
	export async function imagePayment(id) {
		console.log(id);

		const resp = await fetch(PUBLIC_BACKEND_BASE_URL + '/payment', {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ id })
		});
		const res = await resp.json();
		window.location = res;
	}
</script>

<!-- Hero Banner -->
<div class="hero min-h-screen">
	<video autoplay loop muted class="absolute inset-0 w-full h-full object-cover">
		<source src="pexels-joseph-redfield-10755266-(540p).mp4" type="video/mp4" />
		Your browser does not support the video tag.
	</video>
	<div class="hero-overlay bg-opacity-60"></div>
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-md">
			<h1 class="mb-5 text-5xl text-primary font-bold text-glow">Explore NFTs</h1>
		</div>
	</div>
</div>

<div class="overflow-x-auto w-full" style="padding: 50px;">
	<div class="flex flex-wrap justify-center">
		{#each paginatedItems as image}
			<div class="flex justify-center">
				<div class="card w-96 bg-base-100 shadow-xl" style="height: 500px; margin: 20px;">
					<!-- svelte-ignore a11y-img-redundant-alt -->
					<figure style="height: 500px; overflow: hidden;">
						<img src={image.url} alt="Image" />
					</figure>
					<div class="card-body bg-secondary text-black">
						<h2 class="card-title">{image.title}</h2>
						<div class="text-sm mt-1">
							<div class="badge badge-accent">
								<span class="text-sm">USD $ {humanize.formatNumber(image.price)}</span>
							</div>
						</div>
						<div class="italic text-xs opacity-50 mt-2"></div>
						<div class="mb-4 text-xs opacity-70">
							{image.description.slice(0, 240)}...
						</div>
						<div class="flex justify-end" style="margin-top: 5px;">
							<a class="btn btn-neutral mr-2" href="/posts/{image.id}">Learn More</a>
							<a class="btn btn-neutral" type="submit" on:click={() => imagePayment(image.id)}
								>Buy Now</a
							>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<!-- Page  pagination (Part 3) -->
<div class="pagination-container">
	<DarkPaginationNav
		totalItems={images.length}
		{pageSize}
		{currentPage}
		limit={1}
		showStepOptions={true}
		on:setPage={(e) => (currentPage = e.detail.page)}
	/>
</div>

<style>
	.hero-background {
		width: 100%;
		height: 100%;
		object-fit: cover; /* This will stretch the image to cover the entire container */
	}

	.text-glow {
		text-shadow:
			0 0 30px #fff,
			0 0 30px #fff,
			0 0 30px #fff,
			0 0 30px #0ff,
			0 0 40px #0ff,
			0 0 10px #0ff,
			0 0 30px #0ff,
			0 0 10px #0ff;
	}

	.text-glow2 {
		text-shadow:
			0 0 0px #fff,
			0 0 30px #0ff,
			0 0 0px #fff,
			0 0 30px #0ff,
			0 0 0px #fff,
			0 0 30px #fff,
			0 0 0px #fff,
			0 0 30px #0ff;
	}

	.card-wrapper {
		flex: 0 0 33.33%; /* Each card wrapper takes up one-third of the container width */
		max-width: 33.33%; /* Each card wrapper takes up one-third of the container width */
		padding: 5px; /* Adjust padding as needed */
		box-sizing: border-box; /* Ensure padding is included in the width */
	}

	/* Override styles for pagination */
	.pagination-container {
		display: flex;
		justify-content: center;
		margin-top: 20px; /* Adjust margin as needed */
		margin-bottom: 20px;
	}

	.pagination-button {
		background-color: #23262b; /* Change background color */
		color: white; /* Change text color */
		padding: 8px 12px; /* Adjust padding as needed */
		border: none;
		border-radius: 4px;
		cursor: pointer;
		margin: 0 5px; /* Adjust margin between buttons */
	}

	.pagination-button:hover {
		background-color: #2d3748; /* Change background color on hover */
	}

	.pagination-active {
		background-color: #2d3748; /* Change background color for active page */
	}
</style>
