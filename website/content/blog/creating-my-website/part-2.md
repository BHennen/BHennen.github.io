---
title: "Creating My Website Using Gatsby: Part 2 - Comments"
slug: "creating-my-website-using-gatsby/part-2"
description: I explore the process of how I built my personal website. I show each step in detail, covering the design process, pitfalls, tools, code, and techniques used to build the website. The second post covers how I enabled comments using Utterances with Gatsby.
excerpt: I show the creative process of building my personal website using Gatsby.
date: "2020-01-31"
publish: True
tags: ["Programming", "Creative", "Guide", "Website", "Design"]
---

Have you ever wanted to comment on something? Maybe you want to utter some words to somebody through the internet? [Utterances](https://github.com/utterance/utterances) may be the open source solution for you. (It was for me!)

Built on top of GitHub Issues, it allows [open source](https://github.com/utterance) ad-free priceless comments to be added to (possibly) any page. All that is needed is a github user account for comment posters, and a github repository for the website. The Utterances app will open issues that act as the comment thread for each web page the script is activated on, and the script will display updated comments wherever it is put on the website.

Here are the steps I followed to get it working with my [Gatsby](https://www.gatsbyjs.com/) site:

## First Steps with Utterances

I first followed the [configuration](https://utteranc.es/#configuration) steps. Since my website is hosted on GitHub pages, it was simple to directly link my website with the configuration options. By filling in the blanks it automatically updates the info in the code block at the bottom of the page.

### Setting up the repo

For the repo box I filled in `BHennen/BHennen.github.io`

### Choosing a mapping

I decided the default mapping (pathname URL → issue title) would be best since my domain name may change if I decide to pay for hosting and [change the CNAME](https://docs.github.com/en/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site). The URL pathname, however, should not change. (Hopefully.)

### Creating a Label

I wanted to have a custom label for comments since the comments share the same repository as the website itself. In case any other issues pop up I can easily filter out the comments.

GitHub makes it easy to add a new label; I simply navigated to BHennen/BHennen.github.io/issues, selected the `labels` button next to the search bar, then clicked `New label`. I called mine `Comments`, and filled out the respective box on the Utterances page.

### Final Output

With all that said, I ended up with the following:

```HTML
<script src="https://utteranc.es/client.js"
        repo="BHennen/BHennen.github.io"
        issue-term="pathname"
        label="Comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
```

## Integration with Gatsby

Sweet, I now have a script I can simply put into my blog posts that will automatically add comments to my website.

### Adding to Blog Posts

Since I only want comments on my blog posts, I created a different template for those posts that have the comment section, while other pages do not have the comment section.

To set this up, in gatsby-config.js I added the following:

```Javascript
plugins: [
    ...
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`, // Call the content in this directory 'blog'
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        // Change the default layout for posts in the 'blog' folder to use the blog-post template 
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js"),
          blog: require.resolve("./src/templates/blog-post.js"),
        },
      },
    },
    ...
]
```

And in the `blog-post.js` template I simply added the script (WARNING, DOES NOT WORK):

```JSX
<article className="blog-post" itemScope itemType="http://schema.org/Article">
  <header>...</header>
  <MDXRenderer>{post.body}</MDXRenderer>
  <footer>...</footer>
  Error! Use at your own peril:
  <script src="https://utteranc.es/client.js"
          repo="BHennen/BHennen.github.io"
          issue-term="pathname"
          label="Comment"
          theme="github-light"
          crossorigin="anonymous"
          async>
  </script>
</article>
```

This resulted in the script not loading correctly. What was strange is that it *sometimes* worked and loaded correctly, but it did not work for all posts, all the time. 

### Adding to Blog Posts (The Working Way)

After researching into the issue, I stumbled upon a useful article by [Rahul](https://creativcoder.dev/how-to-add-github-utterances-blog). They detail that the script should be inside a component so that it is rendered individually for each page. Aha! Now I knew that I should have made a Comments component instead of simply inserting the script mid-page. By using the [useEffect hook](https://reactjs.org/docs/hooks-effect.html), the script is able to run after React has updated the DOM and is able add the comments to our page. Here is how I wrote the component (in Comments.js):

```JSX
import React, { useRef, useEffect } from "react"

export const Comments = props => {
  const comment_ref = useRef()

  useEffect(() => {
    const script = document.createElement("script")
    script.async = true
    script.src = "https://utteranc.es/client.js"
    script.setAttribute("repo", "BHennen/BHennen.github.io")
    script.setAttribute("issue-term", "pathname")
    script.setAttribute("label", "Comment")
    script.setAttribute("theme", "github-light")
    script.setAttribute("crossorigin", "anonymous")
    comment_ref.current.appendChild(script)
  }, []) //Since we only want the comments to load once, we pass an empty array here

  return <section ref={comment_ref}></section>
}

export default Comments
```

Now that I have a commments component, it is very easy to add that to the blog post template:

```JSX
import Comments from "../components/Comments"

<article className="blog-post" itemScope itemType="http://schema.org/Article">
  <header>...</header>
  <MDXRenderer>{post.body}</MDXRenderer>
  <footer>...</footer>
  <Comments />
</article>
```

And it just works! Nice.