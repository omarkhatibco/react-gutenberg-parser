# React Gutenberg Parser 

This project Idea to reflect WordPress gutenberg object in RestAPI to dynamicly imported components.

This will help us to make a full headless dynamic React app with WordPress backend.

## Why ?

I know there is a lot of implementations in Internet like Gatsby but I need something easy and help me build a Truly WordPress theme without a static site generator and supporting Gutenberg Blocks.

In a previous project I was able to make WordPress & gutenberg 50% headless, so part of the website was React and the Other part was just static or with Vanilla JavaScript.

The problem was that the core components have their own styles and we had no control over them in Styling (we can style theme by overridding their style 😷) + normal WordPress theme has some styles and scripts injected in Head which can not be removed.


## What is the different from Gatsby and its ecosystem ?

- This is not a static site generator. you will able to run it on a server without node or NPM.
- Gatsby plugins parse the HTML so you have no control over the syntax, in other side this project should deal directly with attributes.

## Limitations 

- we have to make a component for every block in Gutenberg

- we have to interduce our own modules in both gutenberg + react app 

- we have to right new plugins (sliders - forms - SEO) with RestAPI first in mind, I mean a plugins that right only to WordPress RestAPI with no PHP Viewer 

- Gutenberg save the blocks as an HTML in Database without and JSON Object

### Gutenberg Object

Gutenberg save the blocks as an HTML in Database without and JSON Object which is BAD !

there is a function interduced in WordPress v5 called `parse_blocks` which convert raw HTML to a JSON object but the same thing, it serve WordPress needs and we can not know what props has this block.

I was able to get the true gutenberg object from the gutenberg it self which was fine, but I had 2 problems

- I did not find a way to save this object only on saving post or if you change something.

- This thing is a client side version and must be generated from Gutenberg, so if you decide to build a website for an existing website, let's say a news website with +5000 Articles, you should open all this articles and save theme again in order to generate and save Gutenberg Object.
