<script>
    export let ctrl; 
</script>
<div on:click={ctrl.handler()}><p>{ctrl.name}</p></div>

<style>
    div {
        display:flex;
        border-width:0px;
        width:100%;
        justify-content: center;
        align-items: center;
        background-color: black;
        color: var(--sText);
        border-right: 2px solid var(--sViolet);
        cursor: var(--cursor), auto;
     }
</style>