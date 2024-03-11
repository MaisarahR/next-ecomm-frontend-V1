<script>
	import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';
	import { goto } from '$app/navigation';
	import { authenticateUser } from '../../../utils/auth';
	import { signupSuccessAlert, signupFailAlert } from '../../../utils/alert';

	// let username = '';
	let formErrors = {};
	let clicked = false;

	function postSignUp() {
		goto('/profile');
	}

	async function createUser(evt) {
		evt.preventDefault();
		// let clicked = true; //for loading status

		if (evt.target['password'].value != evt.target['password-confirmation'].value) {
			formErrors['password'] = { message: 'Password confirmation does not match' };
			return;
		}
		// clicked = true;

		//get data to send
		const userData = {
			name: evt.target['name'].value,
			email: evt.target['email'].value,
			password: evt.target['password'].value
		};

		//creation part
		const resp = await fetch(PUBLIC_BACKEND_BASE_URL + '/users', {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userData)
		});

		//verify that it is correct and log you in
		if (resp.status == 200) {
			const res = await authenticateUser(userData.email, userData.password);

			if (res.success) {
				postSignUp();
				signupSuccessAlert();
				// clicked = true;
			} else {
				throw 'Sign up succeeded but authentication failed';
			}
		} else {
			const res = await resp.json();
			formErrors = res.error; //is now error
			signupFailAlert();
			clicked = false;
		}
	}
</script>

<div class="hero min-h-screen">
	<video autoplay loop muted class="absolute inset-0 w-full h-full object-cover">
		<source src="/pexels-engin-akyurt-6315240-(720p).mp4" type="video/mp4" />
		Your browser does not support the video tag.
	</video>
	<div class="hero min-h-screen bg-base-200">
		<div class="hero-content flex-col lg:flex-row-reverse">
			<div class="text-center">
				<h1 class="text-5xl text-green-400 font-bold">Register an account</h1>
				<div class="mt-6">
					<a class="link-hover text-green-400 italic text-xs" href="/users/signin"
						>Already have one? Click here login.</a
					>
				</div>
			</div>

			<div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
				<form class="card-body" on:submit={createUser}>
					<div class="form-control">
						<label class="label" for="name">
							<span class="label-text">Name</span>
						</label>
						<input
							type="text"
							name="name"
							placeholder="John Doe"
							class="input input-bordered w-full"
						/>
						{#if 'name' in formErrors}
							<label class="label" for="name">
								<span class="label-text-alt text-red-500">{formErrors['name']}</span>
							</label>
						{/if}
					</div>

					<div class="form-control w-full">
						<label class="label" for="email">
							<span class="label-text">Email</span>
						</label>
						<input
							type="text"
							name="email"
							placeholder="john@example.com"
							class="input input-bordered w-full"
							required
						/>
						{#if 'email' in formErrors}
							<label class="label" for="email">
								<span class="label-text-alt text-red-500">{formErrors['email']}</span>
							</label>
						{/if}
					</div>

					<div class="form-control w-full">
						<label class="label" for="password">
							<span class="label-text">Password</span>
						</label>
						<input
							type="password"
							name="password"
							placeholder=""
							class="input input-bordered w-full"
							required
						/>
						{#if 'password' in formErrors}
							<label class="label" for="password">
								<span class="label-text-alt text-red-500">{formErrors['password']}</span>
							</label>
						{/if}
					</div>

					<div class="form-control w-full">
						<label class="label" for="password">
							<span class="label-text">Confirm Password</span>
						</label>
						<input
							type="password"
							name="password-confirmation"
							placeholder=""
							class="input input-bordered w-full"
							required
						/>
						{#if 'password' in formErrors}
							<label class="label" for="password">
								<span class="label-text-alt text-red-500">{formErrors['password']}</span>
							</label>
						{/if}
					</div>

					{#if clicked}
						<button class="form-control mt-6">
							<span class="loading loading-infinity loading-lg"></span>
							Loading...
						</button>
					{:else}
						<button class="btn btn-primary mt-6">Create an Account</button>
					{/if}
				</form>
			</div>
		</div>
	</div>
</div>
