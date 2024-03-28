<script lang="ts">
  import '../app.postcss'
  import '../prism.css'
  import Header from '@components/header.svelte'
  import ScrollToTopButton from '@components/scrollToTopButton.svelte'
</script>

<svelte:head>
  <title>Frorong's history</title>
  <meta
    property="og:type"
    content="article"
  />
  <meta
    property="og:title"
    content="Frorong's history"
  />
  <meta
    property="og:image"
    content="{'/lib/images/openGraph.png'}"
  />
</svelte:head>

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
