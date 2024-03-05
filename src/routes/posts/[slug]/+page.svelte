<script>
  import SvelteMarkdown from 'svelte-markdown';
  import humanize from 'humanize-plus';
  import {goto} from '$app/navigation'
  import { getUserId, getTokenFromLocalStorage } from '../../../utils/auth';
  import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';
  export let data;

  function editPost() {
    goto(`/jobs/${data.job.id}/editjob`);
  };

  function afterDeleteUserPost() {
    goto(`/`);
  };


  export async function deleteUserPost() {
  try {
    const userId = getUserId();
    if (!userId) return false;

    const resp = await fetch(
      PUBLIC_BACKEND_BASE_URL + `/api/collections/jobs/records/${data.job.id}`,
      {
        method: 'DELETE',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': getTokenFromLocalStorage()
        },
      }
    );
    console.log(resp)

    if (resp.status == 204) {
      afterDeleteUserPost();
      return true;
    }

    return false;
  } catch (error) {
    console.error('Failed to delete user post:', error);
    return null;
  }
}
</script>


<div class="mt-10" style="padding-left: 80px; padding-right: 70px; margin-bottom: 100px;">
  <div class="flex">
      <div class="flex-1">
          <h1 class="text-3xl font-extrabold">{data.job.title}</h1>
          <p class="text-xl">{data.job.employer}</p>
      </div>
  </div>

  <div class="flex flex-row w-full mt-8">
      <div class="basis-4/5 prose max-w-none w-full">
          <h2 class="text-xl font-thin">Description</h2>
          <SvelteMarkdown source={data.job.description} />
          <div class="mt-6" />
          <h2 class="text-xl font-thin">Requirements</h2>
          <SvelteMarkdown source={data.job.requirements} />
          <div class="mt-6" />
          <h2 class="text-xl font-thin">How to Apply?</h2>
          <p>{data.job.applicationInstructions}</p>
      </div>
      <div class="basis-1/5 ml-4">
          <h2 class="text-xl font-thin">Location</h2>
          <p>{data.job.location}</p>
          <div class="mt-6" />
          <h2 class="text-xl font-thin">Salary Range</h2>
          <p>
              USD {humanize.formatNumber(data.job.minAnnualCompensation)} - USD {humanize.formatNumber(
                  data.job.maxAnnualCompensation
              )}
          </p>

        <div class="mt-8">
            {#if data.job.user == getUserId() }
            <button on:click={editPost} class="btn btn-md">Edit</button>
            {/if}
        </div>

        <div class="mt-8">
          {#if data.job.user == getUserId() }
          <button on:click={deleteUserPost} class="btn btn-md">Delete</button>
          {/if}
      </div>

      </div>
  </div>
</div>