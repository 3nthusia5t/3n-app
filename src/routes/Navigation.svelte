<script>
  import Control from "./Control.svelte";
  import ch from "../resources/cursor-home.png"
    import cb from "../resources/cursor-back.png"
    import cn from "../resources/cursor-next.png"
    import c from "../resources/cursor.png"
    import { fetchArticle, fetchArticles } from "$lib/article-api";

    export let html;
    export let articles =[];
    
    function Home(){
      html = ""
      window.location.hash = ""
    }

    function Previous() {
          for (let i = 0; i < articles.length; i++) {
            let hashCheck = "#" + articles[i].uuid;
            if (hashCheck === window.location.hash) {
              try {
              fetchArticle(articles[i+1])
              .then(data => {
                    window.location.hash = articles[i].uuid;
                    html = data
                    return 
                })
              } catch (error){
                console.log(error)
                return
            }
          }
    }
  }
    function Next() {
          for (let i = 0; i < articles.length; i++) {
            let hashCheck = "#" + articles[i].uuid;
            if (hashCheck === window.location.hash) {
              try {
              fetchArticle(articles[i-1])
              .then(data => {
                    window.location.hash = articles[i].uuid;
                    html = data
                    return 
                })
              } catch (error){
                console.log(error)
                return
              }
            }
          }
    }

  // Declaration
  class nav_control {
    constructor(path, name, handler) {
      this.path = path;
      this.name = name;
      this.handler = handler
    }
  }

  const nav_controls = [
      new nav_control(ch, "Home", Home),
      new nav_control(cb, "Previous", Previous),
      new nav_control(cn, "Next", Next)
]
</script>

<div>
  {#each nav_controls as control}
    <Control ctrl={control} --cursor={control.path}/>
  {/each}
</div>

<style>
  div {
    display: flex;
    flex-direction: row;
    width: auto;
    position: sticky;
    left: 0px;
    overflow-anchor: none;
    bottom: 0px;
    border-top: 2px solid var(--sViolet);
    height: 4rem;
  }
</style>
