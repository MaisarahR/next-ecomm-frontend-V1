<script>
	import SvelteMarkdown from 'svelte-markdown';
	import humanize from 'humanize-plus';
	import { goto } from '$app/navigation';
	import { getUserId, getTokenFromLocalStorage } from '../../../utils/auth';
	import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';
	export let data;
	//

	function editPost() {
		goto(`/posts/${data.post.id}/edit`);
	}

	function afterDelete() {
		try {
			goto(`/explore`);
		} catch (error) {
			console.error('Error navigating after deleting post:', error);
		}
	}

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

	export async function deleteUserPost() {
		try {
			const userId = getUserId();
			if (!userId) return false;

			const resp = await fetch(
				PUBLIC_BACKEND_BASE_URL + `/image/${data.post.id}`, // Removed the extra } character
				{
					method: 'DELETE',
					mode: 'cors',
					headers: {
						'Content-Type': 'application/json',
						Authorization: getTokenFromLocalStorage()
					}
				}
			);
			console.log(resp);

			afterDelete();
			if (resp.status == 204) {
				return true;
			}

			return false;
		} catch (error) {
			console.error('Failed to delete user post:', error);
			return null;
		}
	}
</script>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row-reverse mt-20">
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<img src={data.post.url} alt="Image" class="w-2/6 rounded-lg shadow-2xl" />

		<div class="flex flex-row w-full mt-8 w-2/6">
			<div class="max-w w-full">
				<h1 class="text-3xl font-extrabold mb-10">{data.post.title}</h1>
				<h2 class="text-xl font-thin mb-5">Description</h2>
				<SvelteMarkdown source={data.post.description} />
				<h2 class="text-xl font-thin mt-10 mb-5">Price</h2>
				<p>USD $ {humanize.formatNumber(data.post.price)}</p>
				<div class="flex flex-row space-x-4 mt-10">
					{#if data.post.userId === getUserId()}
						<button on:click={editPost} class="btn btn-secondary">Edit</button>
						<button on:click={deleteUserPost} class="btn btn-secondary">Delete</button>
					{/if}
					<button
						type="submit"
						on:click={() => imagePayment(data.post.id)}
						class="btn btn-secondary">Buy Now</button
					>
				</div>
			</div>
		</div>
	</div>
</div>
