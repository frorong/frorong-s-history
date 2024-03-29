<script lang="ts">
  import '../app.postcss'
  import '../prism.css'
  import Header from '@components/header.svelte'
  import ScrollToTopButton from '@components/scrollToTopButton.svelte'

  import {
    SignIn,
    SignOut,
  } from '@auth/sveltekit/components'
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
        <img
          src="{$page.data.session.user
            .image}"
          class="avatar"
          alt="User Avatar"
        />
      {/if}
      <span class="signedInText">
        <small>Signed in as</small><br
        />
        <strong
          >{$page.data.session.user
            ?.name ?? 'User'}</strong
        >
      </span>
      <SignOut>
        <div
          slot="submitButton"
          class="buttonPrimary"
        >
          Sign out
        </div>
      </SignOut>
    {:else}
      <span class="notSignedInText"
        >You are not signed in</span
      >
      <SignIn>
        <div
          slot="submitButton"
          class="buttonPrimary"
        >
          Sign in
        </div>
      </SignIn>
      <SignIn provider="github" />
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
