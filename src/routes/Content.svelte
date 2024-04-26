<script lang="js">
// @ts-nocheck

  import { Tags2List } from "$lib/utils";
  import Title from "./Title.svelte";
  import Tag from "./Tag.svelte";
  import { onMount } from "svelte";
  import Navigation from "./Navigation.svelte";
  import { fetchArticle, fetchArticles } from "$lib/article-api";
  import { Articles } from "$lib/model.pb"
  //import { ArticleList, Article } from "$lib/article.pb"
  import {Pbf} from "$lib/pbf"


  //Global values
  let articles = [];
  let tags = {};
  let html = "";
  let chosenIndex = 0;
  function show_article(article) {
    fetchArticle(article) 
      .then(data => {
              window.location.hash = article.friendly_url;
                html = data
            })
  }

  function return_behaviour() {
    if (window.location.hash === "") {
      console.log("Im here")  
      html = "";
        return;
      }
      console.log(articles)
      for (let i = 0; i < articles.length; i++) {
        let hashCheck = "#" + articles[i].friendly_url;
        console.log(hashCheck)
        console.log(window.location.hash === hashCheck)

        if (hashCheck === window.location.hash) {
          fetchArticle(articles[i])
            .then(data => {
                window.location.hash = articles[i].friendly_url;
                html = data
            })
        }
      }
  }

  /**
   * @param {{ [x: string]: string[]; }} map
   * @param {string | any[]} articles
   */
  function map_tags_to_uuid(map, articles) {
    for (let i = 0; i < articles.length; i++) {
        let listOfTags = Tags2List(articles[i].tags);
        map[articles[i].uuid] = listOfTags;
      }
  }
  // Fetch articles on mount
  onMount(async () => {
    
    try {
      const binData = await fetchArticles()
      const pbf = new Pbf(binData);
      const obj = Articles.read(pbf);
      articles = obj.listOfArticles;

      // Now you can use the obj or do further processing
    } catch (error) {
      console.error("Error:", error);
    }
    //Essential to display tags related to article
    map_tags_to_uuid(tags, articles)
    //Set up the return behaviour
    window.onpopstate = return_behaviour
    console.log(articles)
    return_behaviour()
  });
</script>

<div class="content">
  {#if html === ""}
    <div class="main-page">
      {#each articles as article}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
          role="button"
          tabindex="0"
          class="article"
          on:click={() => show_article(article)}
        >
          <Title title={article.title} />
          <div class="tags">
            {#each tags[article.uuid] as tag}
              <Tag name={tag} />
            {/each}
          </div>
        </div>
      {/each}
    </div>
  {:else}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="markdown-styling">
      {@html html}
    </div>
    <Navigation bind:html articles={articles}/>
  {/if}
</div>


<style>
  /* General styling */


  .content {
    flex: 1;
    background-color: var(--sGray);
    display: block;
    flex-direction: column;
    overflow:auto;
  }
  
  @media (max-width: 800px) {
    .content {
      overflow:visible;
    }
  }


  .tags {
    margin-top: 0.2rem;
    max-width:100%;
    display: flex;
    flex: 1;
    flex-direction: row;
    flex-wrap:wrap;
  }

  .article {
    flex: 1;
    max-height: fit-content;
    background-color: var(--sBoxGray);
    margin: 5px;
    padding-bottom: 5px;
    padding: 10px;
  }

  .markdown-styling {
    margin: 5%;
    padding: 3%;
    background-color: var(--sBoxGray);
    color: var(--sText);
  }

  /*Styling for parsed markdown articles*/


  /*Code Block (``` in markdown)*/
  .markdown-styling :global(pre) {
  padding: .5rem;
  line-height: 1.25;
  overflow-x: scroll;
  border: 1px solid #999;
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
  page-break-inside: avoid;
  background-color: #333;
  }


  /*markdown header (# in markdown)*/
  .markdown-styling :global(h1) {
    color: var(--sOrange);
    opacity: 0.8;
  }

  /*markdown image*/
 .markdown-styling :global(img) {
    max-width: 100%;
    height: auto;
  }

  .markdown-styling :global(h2), :global(code) {
    color: var(--sText);
  }

  .markdown-styling :global(*) {
    font-family: Menlo, Monaco, "Courier New", monospace;
  }

  @media print {
    *,
    *:before,
    *:after {
      background: transparent !important;
      color: #000 !important;
      box-shadow: none !important;
      text-shadow: none !important;
    }


    :global(a, a:visited) {
      text-decoration: underline;
    }

    :global(a[href]:after) {
      content: " (" attr(href) ")";
    }

    :global(abbr[title]:after) {
      content: " (" attr(title) ")";
    }

    :global(a[href^="#"]:after, a[href^="javascript:"]:after) {
      content: "";
    }

    :global(tr, img) {
      page-break-inside: avoid;
    }

    :global(img) {
      max-width: 100%;
    }

    :global(p, h2, h3) {
      orphans: 3;
      widows: 3;
    }

    :global(h2, h3) {
      page-break-after: avoid;
    }
  }

  :global(a, a:visited) {
    color: #01ff70;
  }


  .markdown-styling :global(p) {
    font-size: 1rem;
    margin-bottom: 0.6rem;
    margin-top:0.6rem;
    color: var(--sText);
  }

  .markdown-styling :global(ul) {
    margin-left: 1.5rem;
  }

  .markdown-styling :global(h1),
  :global(h2),
  :global(h3),
  :global(h4) {
    margin: 1.414rem 0 0.5rem;
    font-weight: inherit;
    line-height: 1.42;
  }

  /*Header 1 (# in markdown)*/
  .markdown-styling :global(h1) {
    margin-top: 0;
    margin-bottom: 1.5rem;
    font-size: 2.7rem;
    line-height: 1;  
  }

  /*Header 2 (## in markdown)*/
  .markdown-styling :global(h2) {
    font-size: 2rem;
    border-bottom: 1px #484848 solid;
  }

  /*Header 3 (### in markdown)*/
  .markdown-styling :global(h3) {
    font-size: 1.999rem;
  }

  /*Header 4 (#### in markdown)*/
  .markdown-styling :global(h4) {
    font-size: 1.1rem;
  }

  /*Header 5 (##### in markdown)*/
  .markdown-styling :global(h5) {
    font-size: 1.121rem;
  }

  /*Header 6 (###### in markdown)*/
  .markdown-styling :global(h6) {
    font-size: 0.88rem;
  }

  .markdown-styling :global(small) {
    font-size: 0.707em;
  }
  /* Side notes (> *text* in markdown)*/
  .markdown-styling :global(blockquote) {
    display: flex;
    align-items: center;
    border: 1px solid #999;
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
    page-break-inside: avoid;
    border-left: 3px solid #01ff70;
    padding-left: 1rem;
  }

  /* image ( ![]() in markdown)*/
  .markdown-styling :global(img) {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
</style>
