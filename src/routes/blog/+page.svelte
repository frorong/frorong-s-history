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
      My blog Lists
    </h1>
    <div
      class="mt-8 flex flex-col space-y-10"
    >
      {#each data.blogs as blog (blog.id)}
        <div
          class="mb-4 rounded-md border border-gray-200 p-4 shadow-md"
        >
          <a
            href="{blog.slug}"
            class="text-lg font-semibold hover:underline"
            >{blog.title}</a
          >
          {#if blog.description}
            <p
              class="mt-2 text-gray-700"
            >
              {blog.description}
            </p>
          {/if}
          <p
            class="mt-2 text-sm text-gray-500"
          >
            On: {blog.date}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>
