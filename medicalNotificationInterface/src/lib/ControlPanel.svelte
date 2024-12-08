<script>
  import AddMessageCommand from './AddMessageCommand.svelte'
  import { Textarea } from '$lib/components/ui/textarea'
  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';

  let onClickDoctor = () => {
    alert('Clicked Doctor')
  }

  function onClickFamily() {
    console.log("Click Family")
  }

  let message = ''; // To store the input value
  const handleSubmit = () => {
    console.log('Message:', message); // Handle form submission
    alert(`Submitted Message: ${message}`);
  };

</script>

<div class="control-panel">
  <div class="control-panel-header">
    <h1> Control Panel </h1>
  </div>

 <!--  <div class="Message"> -->
 <!--    <h1 class="message-title"> Add a Message </h1> -->
 <!--    <Textarea /> -->
 <!--  -->
 <!--    <AddMessageCommand class="command" from="Doctor" clickFun={onClickDoctor} /> -->
 <!--    <AddMessageCommand  class="command" from="Family & Friends" clickFun={onClickFamily} />  -->
 <!--  </div> -->
 <!---->
  
<form
  on:submit|preventDefault={handleSubmit}
  class="space-y-4 max-w-md mx-auto mt-10"
>
  <div class="form-group">
    <label for="message" class="block text-sm font-medium">
      Your Message
    </label>
    <Input
      id="message"
      type="text"
      placeholder="Type your message here"
      bind:value={message}
      class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
    />
  </div>
  <Button type="submit" class="w-full bg-indigo-600 text-white">
    Submit
  </Button>
</form>

  <div class="commands-wrappper">
  </div>
</div>

<style>
  .control-panel {
    align-items: flex-start;
    justify-content: space-between;
    text-align: center; 
    color: var( --white);
  }

  .message-title {
    text-align: left;
    font-weight: bold;
    margin-bottom: 1vh;
  }

  .commands-wrapper {
    display: flex;
  }

  .command {
    flex: 1;
  }

  .control-panel-header {
    border-bottom: 1px solid var( --blue); /* Adds a 2px solid border with a dark gray color */
    padding-bottom: 1vh;
    margin-bottom: 1vh;
    font-weight: bold;
    font-size: large;
  }
</style>
