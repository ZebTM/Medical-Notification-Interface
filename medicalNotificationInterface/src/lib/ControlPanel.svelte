<script>
  import AddMessageCommand from './AddMessageCommand.svelte';
  import { Textarea } from '$lib/components/ui/textarea';
  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { Label } from '$lib/components/ui/label';
  import * as RadioGroup from '$lib/components/ui/radio-group';
  
  let props = $props();
  let addMessage = props.addMessage;

  let onClickDoctor = () => {
    alert('Clicked Doctor')
  }

  function onClickFamily() {
    console.log("Click Family")
  }
  let user = $state('family');
  let message = ''; // To store the input value
  const handleSubmit = ( event ) => {
    if ( message.length < 2 ) {
      return;
    }
    console.log('Message:', user); // Handle form submission
    addMessage( message, user );

    event.target.reset();
  };

</script>

<div class="control-panel">
  <div class="control-panel-header">
    <h1> Control Panel </h1>
  </div>
  <div class="user-selection content-right">
    <h1 class="font-large font-bold mb-2 ">Selected User: </h1> 
    <RadioGroup.Root 
      
      bind:value={user}>
     <div class="flex items-center space-x-2" id="test">
      <RadioGroup.Item value="doctor" id="doctor" />
      <Label for="option-one">Doctor</Label>
      </div>
      <div class="flex items-center space-x-2" id="test1">
        <RadioGroup.Item value="family" id="family" />
        <Label for="option-two">Family</Label>
      </div>
    </RadioGroup.Root> 
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
  class="space-y-4 mt-5"
>
  <div class="form-group">
    <label for="message" class="block text-sm font-large font-bold text-left">
      Write a message
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

  .user-selection {
    text-align: left;
    padding-bottom: 1vh;
    border-bottom: 1px solid var( --blue );
  }
</style>
