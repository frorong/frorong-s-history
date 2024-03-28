<script lang="ts">
  export let data
</script>

<svelte:head>
  <title>{data.meta.title}</title>
  <meta
    property="og:type"
    content="article"
  />
  <meta
    property="og:title"
    content="{data.meta.title}"
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
      >{data.meta.title}</span
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
  </div>
  <div class="border text-lg">
    <svelte:component
      this="{data.content}"
    />
  </div>
</article>
