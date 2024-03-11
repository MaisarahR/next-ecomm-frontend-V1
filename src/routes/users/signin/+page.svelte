<script>
	import { goto } from '$app/navigation';
	import { authenticateUser } from '../../../utils/auth';
	import { loginSuccessAlert, loginFailAlert } from '../../../utils/alert';

	// let username = '';
	let formErrors = {};
	let clicked = false;

	function postLogin() {
		goto('/');
	}

	async function userLogin(evt) {
		evt.preventDefault();
		clicked = true;

		const userData = {
			email: evt.target['email'].value,
			password: evt.target['password'].value
		};
		// console.log(userData);
		const resp = await authenticateUser(userData.email, userData.password);
		if (resp.success) {
			postLogin();
			loginSuccessAlert();
		} else {
			//First 'resp' reading is await authenticateUser, second resp is autenticateUser function res, which links back to auth.js file.
			formErrors = resp.res.error;
			loginFailAlert();
			clicked = false;
		}
	}
</script>

<div class="hero min-h-screen">
	<video autoplay loop muted class="absolute inset-0 w-full h-full object-cover">
		<source src="/pexels-engin-akyurt-6315240-(720p).mp4" type="video/mp4" />
		Your browser does not support the video tag.
	</video>
	<div class="hero-content flex-col lg:flex-row-reverse">
		<div class="text-center">
			<h1 class="text-5xl font-bold">Login and let's get started!</h1>
			<div class="mt-6">
				<a class="link-hover text-primary italic text-xs" href="/users/new"
					>Don't have an account? Click here to create one.</a
				>
			</div>
		</div>

		<div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
			<form class="card-body" on:submit={userLogin}>
				<div class="form-control">
					<label class="label" for="email">
						<span class="label-text">Email</span>
					</label>
					<input
						type="text"
						name="email"
						placeholder="johndoe"
						class="input input-bordered w-full"
					/>
					{#if 'email' in formErrors}
					<label class="label" for="email">
						<span class="label-text-alt text-red-500">{formErrors['email']}</span>
					</label>
					{/if}
				</div>

				<div class="form-control">
					<label class="label" for="password">
						<span class="label-text">Password</span>
					</label>
					<input
						type="password"
						name="password"
						placeholder="password"
						class="input input-bordered"
					/>
					{#if 'password' in formErrors}
					<label class="label" for="password">
						<span class="label-text-alt text-red-500">{formErrors['password']}</span>
					</label>
					{/if}
				</div>

				<div class="form-control mt-6">
					{#if clicked}
						<button class="btn btn-primary w-full mt-4">
							<span class="loading loading-infinity loading-lg"></span>
							Loading...
						</button>
					{:else}
						<button class="btn btn-primary w-full mt-4">Login to Account</button>
					{/if}
				</div>
			</form>
		</div>
	</div>
</div>
