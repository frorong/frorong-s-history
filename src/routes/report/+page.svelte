<script lang="ts">
  export let data
  import { page } from '$app/stores'

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

  const handleSubmit = () => {
    console.log(
      '전송된 메시지:',
      message
    )
  }
</script>

<section>
  <h1
    class="mb-4 text-2xl font-semibold capitalize"
  >
    문의하기
  </h1>

  <form method="POST">
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
      on:click="{handleSubmit}"
      type="submit"
    >
      전송
    </button>
  </form>

  {#if $page.data.session}
    <div
      class="flex items-center space-x-4"
    >
      {#if $page.data.session.user?.image}
        <img
          src="{$page.data.session.user
            .image}"
          alt="프로필 이미지"
          class="h-12 w-12 rounded-full"
        />
      {/if}
      <div>
        <h1
          class="text-xl font-semibold"
        >
          {$page.data.session.user
            ?.name ?? '익명의 유저'}님
          안녕하세요!
        </h1>
        <p class="text-gray-600">
          email: {$page.data.session
            .user?.email ??
            'email이 존재하지 않습니다.'}
        </p>
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
