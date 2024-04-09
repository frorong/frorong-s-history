<script lang="ts">
  import BlogCard from '@components/blogCard.svelte'
  export let data

  export let selectedOption = '전체'
  export const ALL_CATEGORY = '전체'
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

    <select
      class="mt-4 block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-800 shadow-sm focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
      bind:value="{selectedOption}"
    >
      <option value="전체">전체</option>
      <option value="CS">CS</option>
      <option value="JS">JS</option>
      <option value="React"
        >React</option
      >
      <option value="Svelte"
        >Svelte</option
      >
      <option value="TS">TS</option>
      <option value="FE">FE</option>
      <option value="Next">Next</option>
    </select>
    <div
      class="mt-8 flex flex-col space-y-10"
    >
      {#each data.blogs.filter((blog) => blog.category == selectedOption || selectedOption == ALL_CATEGORY) as blog (blog.id)}
        <BlogCard blog="{blog}" />
      {/each}
    </div>
  </div>
</section>
