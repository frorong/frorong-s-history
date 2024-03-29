<script lang="ts">
  export let onClick: () => void
</script>

<button
  class="flex items-center justify-center rounded-md border border-gray-300 bg-gray-800 px-4 py-2 text-white outline-none hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
  on:click="{onClick}"
>
  <svg
    class="mr-2 h-4 w-4"
    fill="currentColor"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      d="M3.646 3.354a.5.5 0 00-.708 0l-2.5 2.5a.5.5 0 000 .708l2.5 2.5a.5.5 0 00.708-.708L2.707 6H8.5a.5.5 0 000-1H2.707l1.94-1.94a.5.5 0 000-.708zM9.5 0a.5.5 0 01.5.5v3a.5.5 0 01-1 0v-2.793l-1.146 1.147a.5.5 0 11-.708-.708l2-2A.5.5 0 019.5 0zM1 8.5a.5.5 0 01.5-.5H6a.5.5 0 010 1H1.5a.5.5 0 01-.5-.5zM8.5 10a.5.5 0 01.5.5v3a.5.5 0 01-1 0v-2.793l-1.146 1.147a.5.5 0 11-.708-.708l2-2A.5.5 0 018.5 10zM14 8.5a.5.5 0 01.5-.5H18a.5.5 0 010 1h-3.5a.5.5 0 01-.5-.5zM18 6h-5.793l1.147-1.146a.5.5 0 10-.708-.708l-2 2a.5.5 0 000 .708l2 2a.5.5 0 10.708-.708L12.707 6H18a.5.5 0 010 1z"
    ></path>
  </svg>
  Logout
</button>
