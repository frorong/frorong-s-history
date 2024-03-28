<script lang="ts">
  import BlogCard from '@components/blogCard.svelte'
  export let data
</script>

<section>
  <div
    class="container mx-auto px-6 py-10"
  >
    <h1
      class="text-2xl font-semibold capitalize"
    >
      Frorong's blog
    </h1>
    <div
      class="mt-8 flex flex-col space-y-10"
    >
      {#each data.blogs as blog (blog.id)}
        <BlogCard blog="{blog}" />
      {/each}
    </div>
  </div>
</section>
