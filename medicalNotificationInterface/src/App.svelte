<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
  import Header from './lib/Header.svelte'
  import './app.css';
</script>

<main>
  <Header />

  <div class="content-wrapper">
   <div class="leftColumn">
      left
    </div>

    <div class="rightColumn">
      right
    </div>
  </div>
</main>

<style>
  @import './colors.css';
  

  main {
    background: var( --background);
    color: var( --text);
  }
  
  .content-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px dotted rgb(96 139 169);
    gap: 5vw;
    padding: 2vw 4vw;

  }

  .leftColumn {
    
  }

  .rightColumn {
  
  }

  
</style>
