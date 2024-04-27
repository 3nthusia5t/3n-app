<script>
    //get tags for each article id
    export let name = "";
    export let color = "#2a5573";
</script>


<div style="--tag-color: {color}">  
    <p>{name}</p>
</div>



<style> 
    div {
        font-family: Menlo, Monaco, "Courier New", monospace;
        margin-top:5px;
        margin-right: 7px;
        background-color: var(--tag-color);
        max-width: fit-content;
        padding: 5px;
        padding-inline: 7px;
        color: var(--sText);
    }
</style>