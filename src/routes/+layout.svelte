<script lang="ts">
  import '../app.postcss'
  import '../prism.css'
  import Header from '@components/header.svelte'
  import ScrollToTopButton from '@components/scrollToTopButton.svelte'
</script>

<div
  class="w-full p-4 md:p-6 lg:p-8 xl:p-12"
>
  <Header />
  <main
    class="flex w-full flex-col items-center"
  >
    <slot />
    <ScrollToTopButton />
  </main>
</div>
