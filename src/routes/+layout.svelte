<script lang="ts">
  import '../app.postcss'
  import '../prism.css'
  import Header from '@components/header.svelte'
  import ScrollToTopButton from '@components/scrollToTopButton.svelte'

  import { page } from '$app/stores'
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
  <div>
    {#if $page.data.session}
      {#if $page.data.session.user?.image}
        <span
          style="background-image: url('{$page
            .data.session.user.image}')"
          class="avatar"
        ></span>
      {/if}

      <span>
        <small>Signed in as</small>
        <br />
        <strong>
          {$page.data.session.user
            ?.email ??
            $page.data.session.user
              ?.name}
        </strong>
      </span>

      <a
        href="/auth/signout"
        class="button"
        data-sveltekit-preload-data="off"
      >
        Sign out
      </a>
    {:else}
      <span class="notSignedInText">
        You are not signed in
      </span>

      <a
        href="/auth/signin"
        class="buttonPrimary"
        data-sveltekit-preload-data="off"
      >
        Sign in
      </a>
    {/if}
  </div>
  <Header />
  <main
    class="flex w-full flex-col items-center"
  >
    <slot />
    <ScrollToTopButton />
  </main>
</div>
