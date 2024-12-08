
<script>
  import svelteLogo from './assets/svelte.svg';
  import viteLogo from '/vite.svg';
  import Counter from './lib/Counter.svelte';
  import Header from './lib/Header.svelte';
  import ControlPanel from './lib/ControlPanel.svelte';
  import './app.css';
  import Message from '$lib/message.svelte'


  const doctorMessages = [
    "Hello, how are you feeling today?",
    "Make sure to take your medication as prescribed.",
    "Don't forget to drink plenty of water and stay hydrated.",
    "Please schedule a follow-up appointment for next week.",
    "Let me know if you're experiencing any side effects.",
    "You should rest and avoid strenuous activities for a few days.",
    "Your test results look good, but we’ll keep monitoring.",
    "If the pain persists, please contact me immediately.",
    "Remember to maintain a balanced diet for better health.",
    "It's important to get at least 8 hours of sleep every night."
  ];


  const familyQuestions = [
    "What is the diagnosis, and what does it mean for my loved one?",
    "What are the treatment options, and which one do you recommend?",
    "Are there any risks or side effects we should be aware of?",
    "How long will the recovery process take?",
    "What can we do at home to help support their recovery?",
    "Are there any lifestyle changes they should make?",
    "What signs or symptoms should we look out for that might need immediate attention?",
    "Are there any alternative treatments or therapies we should consider?",
    "How often should we schedule follow-up appointments?",
    "What resources or support groups are available for our family?",
    "Is this condition hereditary or genetic, and should other family members be tested?",
    "What is the expected long-term outlook for this condition?",
    "Can we contact you if we have further questions or concerns?",
    "What should we do if their symptoms worsen suddenly?",
    "Is there a plan in place for managing pain or discomfort?"
  ];
</script>

<main>
  <div class="demo-wrapper">
    <div class="demo column">
      <Header title="My Svelte App" />

      <div class="column-wrapper">
        <div class="leftColumn">
          <h1> Messages from Doctor Daniels </h1>

          {#each doctorMessages as message}
            <Message messageContent={message} />
          {/each}
        </div>

        <div class="rightColumn">
          <h1> Messages from the family </h1>
          {#each familyQuestions as message}
            <Message messageContent={message} />
          {/each}
        </div>
      </div>
    </div>

    <div class="control-panel column">
      <ControlPanel />
    </div>
  </div>
</main>

<style>
  @import './colors.css';

  main {
    background: var(--background);
    color: var(--text);
    font-family: Arial, sans-serif;
    min-height: 100vh;
    /* padding: 2rem; */
  }

  .column-wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 2vw 4vw;
    gap: 2rem;
  }

  .leftColumn, .rightColumn {
    flex: 1; /* Shares the remaining space */
    padding: 1rem;
    background: var(--card-background, #ffffff);
    border: 1px solid var(--border-color, #ddd);
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .control-panel {
    width: 20%; /* Fixed width for ControlPanel */
    padding: 1rem;
    min-height: 100vh;
    background: var(--panel-background, #f9f9f9);
    /* border: 1px solid var(--border-color, #ddd); */
    color: var( --white);
    border-left: 1px solid var(--blue);
    /* border-radius: 5px; */
    /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
  }

  /* Add spacing between ControlPanel and rightColumn if needed */
  .rightColumn {
    margin-right: 1rem;
  }

  .demo-wrapper {
    display: flex;
    /* gap: 1rem; */
  }

  .column:first-child {
    flex: 2; /* Occupies twice the space of the second column */
  }

  .column:last-child {
    flex: 1; /* Occupies less space */
  }
</style>

