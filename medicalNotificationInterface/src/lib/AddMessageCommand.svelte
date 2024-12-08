<script>
  import { Button } from '$lib/components/ui/button/index.ts';

  export let from;
  export let clickFun;
</script>

<Button onclick={clickFun} >
  Add Message From {from}
</Button>

<style>

</style>
