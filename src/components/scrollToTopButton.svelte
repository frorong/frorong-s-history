<script lang="ts">
  function scrollToTop() {
    const scrollStep =
      -window.scrollY / (500 / 15)
    const scrollInterval = setInterval(
      function () {
        if (window.scrollY !== 0)
          window.scrollBy(0, scrollStep)
        else
          clearInterval(scrollInterval)
      },
      15
    )
  }
</script>

<button
  class="fixed bottom-4 right-4 rounded-full bg-blue-500 px-4 py-2 text-white shadow-md transition duration-300 hover:bg-blue-600"
  on:click="{scrollToTop}"
>
  <svg
    class="h-6 w-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M5 10l7-7m0 0l7 7m-7-7v18"
    ></path>
  </svg>
</button>
