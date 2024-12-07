<script>
  export let title = "Default Text";
</script>

<div class="header">
  {title}
</div>

<style>
  @import '../colors.css';

  .header {
    background: var( --red);
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2vh;
  }
</style>
