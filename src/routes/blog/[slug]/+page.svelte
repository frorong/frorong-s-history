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
    class="markdown-container [&>h1]:my-12 [&>h1]:text-3xl [&>h1]:font-bold [&>h2]:my-6 [&>h2]:text-2xl [&>h2]:font-normal [&>img]:mx-auto [&>img]:my-8"
  >
    <svelte:component
      this="{data.content}"
    />
  </div>
</article>

<style>
  .markdown-container {
    border: 0;
    padding: 1rem 7rem;
    font-size: 1rem;
    font-weight: 200;
    line-height: 1.5;
  }
</style>
