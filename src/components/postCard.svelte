<script lang="ts">
  export let title: string
  export let content: string
  export let createdAt: string
  export let likes: number
  export let authorName: string
</script>

<div
  class="overflow-hidden rounded-lg bg-white shadow-lg"
>
  <div class="p-4">
    <h2
      class="mb-2 text-xl font-semibold"
    >
      {title}
    </h2>
    <p
      class="mb-4 text-sm text-gray-600"
    >
      {content}
    </p>
    <div
      class="flex items-center justify-between text-gray-500"
    >
      <p class="text-xs">
        Created at: {createdAt}
      </p>
      <p class="text-xs">
        Likes: {likes}
      </p>
    </div>
    <p
      class="mt-2 text-xs text-gray-500"
    >
      Written by {authorName}
    </p>
  </div>
</div>
