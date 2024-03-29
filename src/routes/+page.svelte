<script lang="ts">
  export let data
  import {
    signIn,
    signOut,
  } from '@auth/sveltekit/client'

  let password = ''
</script>

<section>
  <div
    class="container mx-auto px-6 py-10"
  >
    <h1
      class="text-2xl font-semibold capitalize"
    >
      메인 페이지는 업데이트 예정입니다.
    </h1>

    <nav>
      <p>
        These actions are all using the
        methods exported from
        <code
          >@auth/sveltekit/client</code
        >
      </p>
      <div class="actions">
        <div class="wrapper-form">
          <button
            on:click="{() =>
              signIn('github')}"
            >Sign In with GitHub</button
          >
        </div>
        <div class="wrapper-form">
          <div class="input-wrapper">
            <label for="password"
              >Password</label
            >
            <input
              bind:value="{password}"
              type="password"
              id="password"
              name="password"
              required
            />
          </div>
          <button
            on:click="{() =>
              signIn('credentials', {
                password,
              })}"
          >
            Sign In with Credentials
          </button>
          <button
            on:click="{() => signOut()}"
          >
            Sign Out
          </button>
        </div>
      </div>
    </nav>
    <!-- <div
      class="mt-8 flex flex-col space-y-10"
    >
      {#each data.histories as history (history.id)}
        <div
          class="mb-4 rounded-md border border-gray-200 p-4 shadow-md"
        >
          <a
            href="{history.slug}"
            class="text-lg font-semibold hover:underline"
            >{history.companyName}</a
          >
          {#if history.description}
            <p
              class="mt-2 text-gray-700"
            >
              {history.description}
            </p>
          {/if}
          <p
            class="mt-2 text-sm text-gray-500"
          >
            On: {history.date}
          </p>
          <div
            class="mt-2 flex items-center"
          >
            {#if history.status === 'PENDING'}
              <span
                class="mr-1 inline-block h-3 w-3 rounded-full bg-yellow-500"
              ></span>
            {:else if history.status === 'DOCUMENTS_PASSED' || history.status === 'INTERVIEW_PASSED' || history.status === 'FINALLY_PASSED'}
              <span
                class="mr-1 inline-block h-3 w-3 rounded-full bg-green-500"
              ></span>
            {:else if history.status === 'DOCUMENTS_FAILED' || history.status === 'INTERVIEW_FAILED'}
              <span
                class="mr-1 inline-block h-3 w-3 rounded-full bg-red-500"
              ></span>
            {:else}
              <span
                class="mr-1 inline-block h-3 w-3 rounded-full bg-gray-500"
              ></span>
            {/if}
            <span
              class="text-sm text-gray-700"
              >{history.status}</span
            >
          </div>
        </div>
      {/each}
    </div>
  </div> -->
  </div>
</section>
