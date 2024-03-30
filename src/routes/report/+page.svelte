<script lang="ts">
  export let data
  import { page } from '$app/stores'
  import isExistCookie from '$lib/isExistCookie.js'

  export let form
  import { signIn } from '@auth/sveltekit/client'
  import GithubLoginButton from '@components/githubLoginButton.svelte'

  let message: string = ''
  let title: string = ''

  const handleMessageInput = (
    event: Event
  ) => {
    const target =
      event.target as HTMLTextAreaElement
    message = target.value
  }

  const handleTitleInput = (
    event: Event
  ) => {
    const target =
      event.target as HTMLInputElement
    title = target.value
  }
</script>

<section>
  <h1
    class="my-4 text-2xl font-semibold capitalize"
  >
    문의하기
  </h1>

  {#if $page.data.session}
    <div
      class="flex items-center space-x-4"
    >
      <form
        method="POST"
        on:submit="{(e) => {
          if (
            isExistCookie(
              'isSuccess'
            ) ||
            message.length < 5 ||
            title.length < 5
          )
            e.preventDefault()
          else
            document.cookie =
              'isSuccess=true; max-age=5'
        }}"
      >
        <input
          name="subject"
          type="text"
          class="mb-4 w-full rounded-md border p-2"
          placeholder="제목을 입력해주세요."
          bind:value="{title}"
          on:input="{handleTitleInput}"
        />
        <textarea
          name="body"
          class="w-full rounded-md border p-2"
          rows="5"
          placeholder="문의 내용을 입력해주세요."
          bind:value="{message}"
          on:input="{handleMessageInput}"
        ></textarea>
        <button
          class="mt-2 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          type="submit"
        >
          전송
        </button>
      </form>
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
        로그인된 사용자만 서비스 문의가
        가능합니다.
      </p>
    </div>

    <div
      class="my-8 h-px w-full bg-slate-400"
    ></div>

    <GithubLoginButton
      onClick="{() => signIn('github')}"
    />
  {/if}
</section>
