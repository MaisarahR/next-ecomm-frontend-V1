<script>
	import { goto } from '$app/navigation';
	import { authenticateUser } from '../utils/auth';

	// let username = '';
	let formErrors = '';
	let clicked = false;

	function postLogin() {
		goto('/profile');
	}

	async function userLogin(evt) {
		evt.preventDefault();
		clicked = true;

		const userData = {
			email: evt.target['email'].value,
			password: evt.target['password'].value
		};
		console.log(userData);
		const resp = await authenticateUser(userData.email, userData.password);
		if (resp.success) {
			// loginSuccessAlert();
			postLogin();
		} else {
			//First 'resp' reading is await authenticateUser, second resp is autenticateUser function res, which links back to auth.js file.
			formErrors = resp.res.message;
			//loginFailAlert();
			clicked = false;
		}
	}
</script>

<div class="hero min-h-screen">
	<video autoplay loop muted class="absolute inset-0 w-full h-full object-cover">
		<source src="pexels-gamol-8879031-(720p).mp4" type="video/mp4" />
		Your browser does not support the video tag.
	</video>
	<div class="hero-overlay bg-opacity-60"></div>
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-md">
			<h1 class="mb-5 text-5xl text-primary font-bold text-glow">Own your own NFT</h1>
			<p class="mb-5 text-white text-glow2">
				Start your journey with us today and build your brand with an NFT that is uniquely yours.
			</p>
			<a href="users/new" class="btn btn-primary">Register now</a>
		</div>
	</div>
</div>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row">
		<div class="carousel carousel-center rounded-box">
			<div class="carousel-item">
				<img src="/NFTexample7.jpg" alt="Artwork" style="height: 350px; width: 250px;" />
			</div>
			<div class="carousel-item">
				<img src="/NFTexample6.jpg" alt="Artwork" style="height: 350px; width: 250px;" />
			</div>
			<div class="carousel-item">
				<img src="/NFTexample5.png" alt="Artwork" style="height: 350px; width: 250px;" />
			</div>
			<div class="carousel-item">
				<img src="/NFTexample4.jpg" alt="Artwork" style="height: 350px; width: 300px;" />
			</div>
			<div class="carousel-item">
				<img src="/NFTexample3.png" alt="Artwork" style="height: 350px; width: 300px;" />
			</div>
			<div class="carousel-item">
				<img src="/NFTexample2.jpg" alt="Artwork" style="height: 350px; width: 300px;" />
			</div>
			<div class="carousel-item">
				<img src="/NFTexample1.jpg" alt="Artwork" style="height: 350px; width: 300px;" />
			</div>
		</div>
		<div>
			<h1 class="text-5xl font-bold">Discover NFTs</h1>
			<p class="py-6">Buy and sell NFTs without any fees through the Marketplace</p>
			<a href="/explore" class="btn btn-primary">Explore all NFTs</a>
		</div>
	</div>
</div>

<!-- <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row">
    <div class="max-w-sm rounded-lg shadow-2xl">
      <h1 class="text-5xl font-bold">Discover NFTs</h1>
      <p class="py-6">Buy and sell NFTs without any fees through the Marketplace</p>
      <a href="/explore" class="btn btn-primary">View all collections
    </div>
    <div class="carousel rounded-box">
      <div class="carousel-item">
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
          <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div> 
        </div> 
      </div> 
      <div class="carousel-item">
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
          <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div> 
        </div> 
      </div> 
      <div class="carousel-item">
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
          <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div> 
        </div> 
      </div> 
      <div class="carousel-item">
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
          <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div> 
        </div> 
      </div> 
      <div class="carousel-item">
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
          <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div> 
        </div> 
      </div> 
    </div>
  </div>
</div> -->

<div class="hero min-h-screen bg-base-200">
	<video autoplay loop muted class="absolute w-full h-full object-cover">
		<source src="/pexels-deconjon-15179376-(540p).mp4" type="video/mp4" />
		Your browser does not support the video tag.
	</video>
	<div class="hero-content flex-col lg:flex-row">
		<div class="text-center lg:text-left">
			<h1 class="text-5xl text-white font-bold">Already have a profile?</h1>
			<p class="py-6 text-white">What are you waiting for? Let's get started!</p>
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
					{#if formErrors}
						<div class="text-red-500 text-center mt-2">{formErrors}</div>
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
						required
					/>
					{#if formErrors}
						<div class="text-red-500 text-center mt-2">{formErrors}</div>
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

<style>
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
</style>
