<script>
	import { alertMsg, successAlert, warningAlert } from '../utils/alert';
</script>

<div style="position: relative;">
	{#if $successAlert}
		<div
			role="alert"
			class="alert alert-success"
			style="position: absolute; margin-top: 80px; z-index: 999;"
		>
			<!-- Adjust the margin-top value as needed -->
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="stroke-current shrink-0 h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
			<span>{$alertMsg}</span>
		</div>
	{/if}

	{#if $warningAlert}
		<div
			role="alert"
			class="alert alert-warning"
			style="position: absolute; margin-top: 80px; z-index: 999;"
		>
			<!-- Adjust the margin-top value as needed -->
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="stroke-current shrink-0 h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
			<span>{$alertMsg}</span>
		</div>
	{/if}
</div>
