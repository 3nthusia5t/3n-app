<script>
    import { page } from '$app/stores';
</script>

<h1>{$page.status}: {$page.error.message}. Page not found</h1>

<style>

h1,h2 {
    font-family: 'Press Start 2P', cursive;
}


</style>