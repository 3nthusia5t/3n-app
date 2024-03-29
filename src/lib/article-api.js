
  import { MutServerAddress } from "./constants.js"
  import {Pbf} from "./pbf.js"

  //Extract content from a database
  // Function to fetch the articles
  export async function fetchArticles() {
    
    MutServerAddress.pathname = "/GetAllArticles"
    //console.log(MutServerAddress)
    try {
      const response = await fetch(MutServerAddress.toString(), {
        method: "GET",
        headers: {
          "Cache-Control": "no-cache", // Add cache-busting header
        },
      });

      // Check if the request was successful
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Convert response to ArrayBuffer
      const data = await response.arrayBuffer();
      return data;
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  }

  /**
 * @param {{ uuid: string; }} article
 */
  export async function fetchArticle(article) {
    MutServerAddress.pathname = "/GetChosenArticle";

    var pbf2 = new Pbf();
    Article.write(article, pbf2);
    var buffer = pbf2.finish();
    try {
      const res = await fetch(MutServerAddress.toString(), {
        method: "POST",
        headers: {
          "Content-type": "application/octet-stream",
        },
        body: buffer,
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }
      const data = await res.text();
      return data
    } catch (error) {
      console.error("Error fetching the article:", error);
    }
  }
