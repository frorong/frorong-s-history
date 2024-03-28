<script lang="ts">
  import type { BlogType } from '$lib/types'
  export let blog: BlogType
</script>

<a
  href="{`/blog/${blog.slug}`}"
  class="mb-8 max-w-2xl transform rounded-md bg-white p-6 shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
>
  <span
    class="mb-2 block text-lg font-semibold text-blue-700 hover:underline"
    >{blog.title}</span
  >
  <p class="text-gray-700">
    {blog.description}
  </p>
  <p class="mt-2 text-sm text-gray-500">
    On: {blog.date}
  </p>
</a>

<style>
  .bg-white {
    background-color: #ffffff;
  }
  .shadow-md {
    box-shadow: 0px 2px 4px
      rgba(0, 0, 0, 0.1);
  }
  .rounded-md {
    border-radius: 0.375rem;
  }
  .p-6 {
    padding: 1.5rem;
  }
  .mb-8 {
    margin-bottom: 2rem;
  }
  .text-lg {
    font-size: 1.125rem;
  }
  .text-blue-700 {
    color: #3b82f6;
  }
  .hover\:underline:hover {
    text-decoration: underline;
  }
  .text-gray-700 {
    color: #4b5563;
  }
  .text-gray-500 {
    color: #6b7280;
  }
  .text-sm {
    font-size: 0.875rem;
  }
  .mt-2 {
    margin-top: 0.5rem;
  }
</style>
