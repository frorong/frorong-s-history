<script lang="ts">
  import { page } from '$app/stores'

  let path = ''

  page.subscribe(($page) => {
    path = $page.url.pathname
  })
</script>

<nav
  class="flex justify-start space-x-8 sm:ml-28"
>
  <a
    href="/"
    class="{`${path === '/' && 'font-bold text-blue-700'} text-xl`}"
  >
    <b>Home</b>
  </a>
  <a
    href="/about"
    class="{`${path === '/about' && 'font-bold text-blue-700'} text-xl`}"
    >About</a
  >
  <a
    href="/blog"
    class="{`${path === '/blog' && 'font-bold text-blue-700'} text-xl`}"
    >Blog</a
  >
</nav>

<style>
  .text-blue-700 {
    color: #3b82f6;
  }
</style>
