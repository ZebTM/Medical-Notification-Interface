<script>
  import * as Avatar from '$lib/components/ui/avatar';
  export let messageContent// Message to display
  export let img;
  export let imgFallBack;
</script>

<div class="message-container">
  <Avatar.Root class="avatar">
    <Avatar.Image src={img} alt="@shadcn" />
    <Avatar.Fallback>{imgFallBack}</Avatar.Fallback>
  </Avatar.Root>  
  <p class="message-text">{messageContent}</p>
</div>

<style>
  @import '../colors.css';

  .message-container {
    background-color: var(--header-blue); /* Light blue background */
    border: 1px solid #d1e3ff; /* Subtle border */
    border-radius: 8px; /* Rounded corners */
    padding: 16px; /* Spacing around the text */
    max-width: 600px; /* Optional: Restrict the width */
    margin: 10px auto; /* Center the component with spacing */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
  }

  .message-text {
    color: #1a202c; /* Darker text for readability */
    font-size: 1rem; /* Base font size */
    line-height: 1.5; /* Better readability */
    flex: 11;
  }

  .avatar {
    flex: 1;
  }
</style>

