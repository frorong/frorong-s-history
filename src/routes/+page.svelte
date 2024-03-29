<script lang="ts">
  export let data
  import { page } from '$app/stores'
  import {
    signIn,
    signOut,
  } from '@auth/sveltekit/client'

  import GithubLoginButton from '@components/githubLoginButton.svelte'
  import LogoutButton from '@components/logoutButton.svelte'
</script>

<section>
  <div
    class="container mx-auto px-6 py-10"
  >
    <div>
      {#if $page.data.session}
        <div
          class="flex items-center space-x-4"
        >
          {#if $page.data.session.user?.image}
            <img
              src="{$page.data.session
                .user.image}"
              alt="프로필 이미지"
              class="h-12 w-12 rounded-full"
            />
          {/if}
          <div>
            <h1
              class="text-xl font-semibold"
            >
              {$page.data.session.user
                ?.name ??
                '익명의 유저'}님
              안녕하세요!
            </h1>
            <p class="text-gray-600">
              email: {$page.data.session
                .user?.email ??
                'email이 존재하지 않습니다.'}
            </p>
          </div>
          <div>
            <LogoutButton
              onClick="{() =>
                signOut({
                  callbackUrl: '/',
                })}"
            >
              로그아웃
            </LogoutButton>
          </div>
        </div>
      {:else}
        <div
          class="border-l-4 border-blue-500 bg-blue-100 p-4 text-blue-800"
          role="alert"
        >
          <p class="font-bold">
            아직 로그인하지 않았습니다!
          </p>
          <p>
            커뮤니티를 이용하기 위해서는
            로그인이 필요합니다.
          </p>
        </div>

        <div
          class="my-8 h-px w-full bg-slate-400"
        ></div>

        <GithubLoginButton
          onClick="{() =>
            signIn('github')}"
        />
      {/if}
    </div>
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
