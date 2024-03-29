<script lang="ts">
  export let onClick: () => void
</script>

<button
  on:click="{onClick}"
  class="flex items-center justify-center rounded-md border border-gray-300 bg-gray-800 px-4 py-2 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
>
  <svg
    class="mr-2 h-4 w-4"
    fill="currentColor"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      d="M8 .5A7.5 7.5 0 00.5 8c0 3.29 2.14 6.09 5.11 7.08.37.07.51-.16.51-.36v-2.5C3.11 12.11 2 10.71 2 8.5c0-2.89 2.36-5.25 5.25-5.25 1.46 0 2.79.59 3.75 1.55A6.58 6.58 0 018 5.25c-.31 0-.61.03-.89.08a2.75 2.75 0 00-2.47 2.72c0 .19.14.44.52.37C5.86 7.3 7 7 8 7c1.13 0 2.3.26 3.36.68.38.07.52-.17.52-.36a2.75 2.75 0 00-2.47-2.72A7.472 7.472 0 008 .5z"
    ></path>
  </svg>
  Sign in with GitHub
</button>
