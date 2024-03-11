<script>
	import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';
	import { goto } from '$app/navigation';
	import { getTokenFromLocalStorage } from '../../../../utils/auth';
	import { uploadMedia } from '../../../../utils/s3-uploader';
	import { jobpostUpdateSuccessAlert, jobpostUpdateFailAlert } from '../../../../utils/alert';

	export let data;
	let formErrors = {};
	let clicked = false;

	async function updatePost() {
		goto(`/posts/${data.post.id}`);
	}

	// Edit Image function
	async function editPost(evt) {
		const token = getTokenFromLocalStorage();
		const [fileName, fileUrl] = await uploadMedia(evt.target['file'].files[0]);
		// Do something with fileName and fileUrl if needed
		// Collect form data
		evt.preventDefault(); // Prevent the default form submission behavior

		// Collect form data
		const userPost = {
			// id: getUserToken,
			title: evt.target['title'].value,
			description: evt.target['description'].value,
			price: parseInt(evt.target['price'].value),
			url: fileUrl,
			filename: fileName
		};

		const resp = await fetch(`${PUBLIC_BACKEND_BASE_URL}/image/${data.post.id}`, {
			method: 'PUT',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`
			},
			body: JSON.stringify(userPost)
		});

		if (resp.ok) {
			updatePost();
			jobpostUpdateSuccessAlert();
			clicked = true;
		} else {
			const res = await resp.json();
			formErrors = res.data;
			jobpostUpdateFailAlert();
			clicked = false;
		}
	}
</script>

<svelte:head>
	<script src="/aws-sdk-s3.min.js"></script>
</svelte:head>

<div class="hero min-h-screen bg-base-200">
	<video autoplay loop muted class="absolute w-full h-full object-cover">
		<source src="/pexels-luz-calor-som-12467968-(720p).mp4" type="video/mp4" />
		Your browser does not support the video tag.
	</video>
	<div class="hero-content flex-col lg:flex-row-reverse mt-20">
		<div class="text-center lg:text-right">
			<h1 class="text-5xl font-bold">Edit Post for Artwork</h1>
		</div>
		<div class="card shrink-0 w-full max-w-md shadow-2xl bg-neutral-900">
			<form on:submit|preventDefault={editPost} class="card-body">
				<!-- Title -->
				<div class="form-control">
					<label class="label" for="title">
						<span class="label-text">NFT Title</span>
					</label>
					<input
						type="text"
						name="title"
						placeholder="My first NFT"
						class="input input-bordered"
						required
					/>
					{#if 'title' in formErrors}
						<label class="label" for="title">
							<span class="label-text-alt text-red-500">{formErrors['title'].message}</span>
						</label>
					{/if}
				</div>

				<!-- Description -->
				<div class="form-control">
					<label class="label" for="description">
						<span class="label-text">Description</span>
					</label>
					<textarea
						type="text"
						name="description"
						placeholder="NFT description"
						class="input input-bordered"
						required
					/>
					{#if 'description' in formErrors}
						<label class="label" for="description">
							<span class="label-text-alt text-red-500">{formErrors['description'].message}</span>
						</label>
					{/if}
				</div>

				<!-- Price -->
				<div class="form-control">
					<label class="label" for="price">
						<span class="label-text">Price (ETH)</span>
					</label>
					<input
						type="text"
						name="price"
						placeholder="10000"
						class="input input-bordered"
						required
					/>
					{#if 'price' in formErrors}
						<label class="label" for="price">
							<span class="label-text-alt text-red-500">{formErrors['price'].message}</span>
						</label>
					{/if}
				</div>

				<!-- File Upload -->
				<div class="form-control mb-7">
					<label class="label" for="file">
						<span class="label-text">Select File</span>
					</label>
					<input
						type="file"
						name="file"
						class="file-input file-input-bordered file-input-primary"
						required
					/>
					{#if 'file' in formErrors}
						<label class="label" for="file">
							<span class="label-text-alt text-red-500">{formErrors['file']}</span>
						</label>
					{/if}
				</div>

				<!-- Button -->
				{#if clicked}
					<button class="btn btn-md w-full mt-4">
						<span class="loading loading-infinity loading-lg"></span>
						Loading...
					</button>
				{:else}
					<button class="btn btn-primary">Publish Artwork</button>
				{/if}
			</form>
		</div>
	</div>
</div>

<style>
	input,
	textarea {
		padding: 10px;
		border: 1px solid #d5d5d5;
	}

	textarea {
		height: 150px;
	}

	.form-control textarea {
		height: 250px; /* Adjust the height as needed */
	}
</style>
