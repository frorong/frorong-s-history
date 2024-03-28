<script lang="ts">
  export let data
</script>

<svelte:head>
  <title>{data.meta.companyName}</title>
  <meta
    property="og:type"
    content="article"
  />
  <meta
    property="og:title"
    content="{data.meta.companyName}"
  />
</svelte:head>

<article
  class="container flex flex-col items-center space-y-10 pt-10"
>
  <div
    class="mb-4 rounded-md border border-gray-200 p-4 shadow-md"
  >
    <span
      class="text-lg font-semibold hover:underline"
      >{data.meta.companyName}</span
    >
    {#if data.meta.description}
      <p class="mt-2 text-gray-700">
        {data.meta.description}
      </p>
    {/if}
    <p
      class="mt-2 text-sm text-gray-500"
    >
      On: {data.meta.date}
    </p>
    <div class="mt-2 flex items-center">
      {#if data.meta.status === 'PENDING'}
        <span
          class="mr-1 inline-block h-3 w-3 rounded-full bg-yellow-500"
        ></span>
      {:else if data.meta.status === 'DOCUMENTS_PASSED' || data.meta.status === 'INTERVIEW_PASSED' || data.meta.status === 'FINALLY_PASSED'}
        <span
          class="mr-1 inline-block h-3 w-3 rounded-full bg-green-500"
        ></span>
      {:else if data.meta.status === 'DOCUMENTS_FAILED' || data.meta.status === 'INTERVIEW_FAILED'}
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
        >{data.meta.status}</span
      >
    </div>
  </div>
  <div class="border text-lg">
    <svelte:component
      this="{data.content}"
    />
  </div>
</article>
