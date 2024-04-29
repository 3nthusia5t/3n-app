

<script>
    import Sidebar from './Sidebar.svelte';
    import Content from './Content.svelte';

  let article_clicked = false
  let is_mobile = false
  window.addEventListener('hashchange', function (event) {
  //console.log(window.location.hash)    
  if (window.location.hash != "") {
    article_clicked = true
    } else {
      article_clicked = false
    }

  if (window.screen.availWidth < 800) {
    is_mobile = true
  } else {
    is_mobile = false
  }
  //console.log("is mobile: ", is_mobile)
  //console.log("article clicked: ", article_clicked)

});
</script>

<svelte:head>
	<title>3nthusiast</title>
	<meta name="description" content="Windows and software security, cryptography and more!" />
  <meta name="author" content="3nthusiast">
  <meta name="keywords" content="cybersecurity, windows, software security">
</svelte:head>
<main>
<div class="total">
  <!--Creating Sidebar-->
{#if !is_mobile || !article_clicked}
<Sidebar/>
{/if}
<Content/>

</div>
</main>
<style>
  :global(*) {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
  }

  :global(html, body, main) {
    height: 100%;
  }

  :global(body) {
    cursor: url('../resources/cursor.png'), pointer;
    cursor: url('../resources/cursor-text.png'), text;
  }

  .total {
  display: flex;
  flex-direction: row;
  height: 100%;
  }

  @media (max-width: 800px) {
  .total {
    flex-direction: column;
  }
}
</style>