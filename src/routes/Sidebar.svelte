<script>
    import Logo from "../images/logo.png"
    import Introduction from "./Introduction.svelte";
    import {GameOfLife} from "$lib/game.js"
</script>


<aside class="sidebar-small">
<img src={Logo} alt="error">
<Introduction/>
</aside>

<style>
    .game-pitch {
        display: block;
        background-color: blue;
    }

    .row { 
        display: inline-block;
        max-width: 100%;
        
    }

    .game-pitch > .alive {

        background-color: green;
    }

    .game-pitch .dead {
        background-color: red;
        height: 0.15rem;
        width: 0.15rem;
    }

    .sidebar-small {
        flex: 1;
        background: black;
        padding: 20px;
        max-width: 16%;
        border-right: 2px solid var(--sViolet);
    }

    @media (max-width: 800px) {
    .sidebar-small {

        display:flex;
        flex-direction: column;
        max-width: 100%;
        min-height: fit-content;
        border-right: 0px;
        border-bottom: 2px solid var(--sViolet);
        align-items: center;
    } 
}

    img {
        border: 1px dotted var(--sOrange);
        margin-bottom: 1rem;
        max-width: 100%;
    }
</style>

