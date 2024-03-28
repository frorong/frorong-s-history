<script lang="ts">
  export let data
</script>

<section>
  <div
    class="container mx-auto px-6 py-10"
  >
    <h1
      class="text-2xl font-semibold capitalize"
    >
      My history Lists
    </h1>
    <div
      class="mt-8 flex flex-col space-y-10"
    >
      {#each data.histories as history (history.id)}
        <div
          class="mb-4 rounded-md border border-gray-200 p-4 shadow-md"
        >
          <a
            href="{history.slug}"
            class="text-lg font-semibold hover:underline"
            >{history.companyName}</a
          >
          {#if history.description}
            <p
              class="mt-2 text-gray-700"
            >
              {history.description}
            </p>
          {/if}
          <p
            class="mt-2 text-sm text-gray-500"
          >
            On: {history.date}
          </p>
          <div
            class="mt-2 flex items-center"
          >
            {#if history.status === 'PENDING'}
              <span
                class="mr-1 inline-block h-3 w-3 rounded-full bg-yellow-500"
              ></span>
            {:else if history.status === 'DOCUMENTS_PASSED' || history.status === 'INTERVIEW_PASSED' || history.status === 'FINALLY_PASSED'}
              <span
                class="mr-1 inline-block h-3 w-3 rounded-full bg-green-500"
              ></span>
            {:else if history.status === 'DOCUMENTS_FAILED' || history.status === 'INTERVIEW_FAILED'}
              <span
                class="mr-1 inline-block h-3 w-3 rounded-full bg-red-500"
              ></span>
            {:else}
              <span
                class="mr-1 inline-block h-3 w-3 rounded-full bg-gray-500"
              ></span>
            {/if}
            <span
              class="text-sm text-gray-700"
              >{history.status}</span
            >
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
