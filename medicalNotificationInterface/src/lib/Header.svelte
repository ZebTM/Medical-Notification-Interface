<script>
  export let title = "Default Text";
</script>

<div class="header">
  {title}
</div>

<style>
  @import '../colors.css';

  .header {
    background: var( --header-blue);
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1.4vh;
    border-bottom: 1px solid var( --blue );
    color: var( --white);
    font-weight: bold;
    font-size: large;
  }
</style>
