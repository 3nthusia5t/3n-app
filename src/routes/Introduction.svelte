<script>
    import { compile } from "svelte/compiler";
    import license from "../images/license.png"
    import gh_logo from "../images/github-mark-white.svg"
    import email_logo from "../images/email.svg"
</script>

<p class="description">Digital presentation of my projects and thoughts. The blog is about computer science and cybersecurity.</p>

<p id="social-title" class="description">Social media:</p>
<div class="social-media">
<a href="https://github.com/3nthusia5t"><img class="gh-social" src={gh_logo} alt="github"></a>
<a href="mailto://3nthusiast@proton.me"><img class="email-social" src={email_logo} alt="3nthusiast@proton.me"></a>
</div>
<div id="license">
<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src={license}/></a>
</div>


<style>
a {
    margin-right: 0.8rem;
}


i {
    margin: 3px;
    color: var(--sText);
}

.social-media {
    min-height: fit-content;
    margin-top: 0.8rem;
}

#social-title {
    margin-top:1rem;
}


.description {
    color: var(--sText);
}

.links {
    color: var(--sText);
}

.gh-social {
    height: 1.5rem;
    width:auto;
}

.email-social {
    height: 1.5rem;
    width:auto;
}

#license {
   position:fixed;
   left:0px;
   bottom:1rem;
   height:30px;
}
</style>