<script>
  import { onMount } from "svelte";
  import { enhance } from '$app/forms'
  import {invalidate} from '$app/navigation'

    onMount(()=>{
        const interval = setInterval(()=>invalidate('load:child'), 1000)
        return ()=>clearInterval(interval)
    })    
</script>

<form action="" method="post" use:enhance>
    <button>submit</button>
</form>