<script lang="ts">
  import { page } from '$app/stores'

  let path = ''

  page.subscribe(($page) => {
    path = $page.url.pathname
  })

  enum PATHS {
    MAIN = '/',
    ABOUT = '/about',
    BLOG = '/blog',
    REPORT = '/report',
  }
</script>

<nav
  class="flex justify-start space-x-8 sm:ml-28"
>
  <a
    href="{PATHS.MAIN}"
    class="{`${path === PATHS.MAIN && 'font-bold text-blue-700'} text-xl`}"
  >
    <b>Home</b>
  </a>
  <a
    href="{PATHS.BLOG}"
    class="{`${path === PATHS.BLOG && 'font-bold text-blue-700'} text-xl`}"
    >Blog</a
  >
  <a
    href="{PATHS.ABOUT}"
    class="{`${path === PATHS.ABOUT && 'font-bold text-blue-700'} text-xl`}"
    >About</a
  >
  <a
    href="{PATHS.REPORT}"
    class="{`${path === PATHS.REPORT && 'font-bold text-blue-700'} text-xl`}"
    >Report</a
  >
</nav>

<style>
  .text-blue-700 {
    color: #3b82f6;
  }
</style>
