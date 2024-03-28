<script lang="ts">
  export let data
</script>

<section
  class="mt-8 flex w-full flex-col items-center space-y-8 pt-2"
>
  <article
    class="container flex flex-col items-center space-y-10 pt-10"
  >
    <div
      class="markdown-container [&>h1]:my-12 [&>h1]:text-3xl [&>h1]:font-bold [&>h2]:my-6 [&>h2]:text-2xl [&>h2]:font-normal [&>h3]:my-6 [&>h3]:text-xl [&>h3]:font-bold [&>img]:mx-auto [&>img]:my-8 [&>img]:max-w-2xl"
    >
      <svelte:component
        this="{data.content}"
      />
    </div>
  </article>
</section>

<style>
  .markdown-container {
    border: 0;
    padding: 1rem 7rem;
    font-size: 1rem;
    font-weight: 200;
    line-height: 1.5;
  }
</style>
