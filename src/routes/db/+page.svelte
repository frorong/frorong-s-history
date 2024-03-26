<script lang="ts">
  import { onMount } from 'svelte'
  import type { PageData } from './$types'

  export let data: PageData
  $: ({ tutorials } = data)

  data.tutorials.forEach((item: any) =>
    console.log('>>>> ' + item.title)
  )
</script>
