---
date: "2023-07-08"
excerpt: In the world of modern web development, the demand for fast-loading and interactive web pages has grown significantly. How do developers meet these expections?
image: server-side-rendering.png
isFeatured: true
title: "Understanding Server-Side Rendering"
---

## Introduction

In the world of modern web development, the demand for fast-loading and interactive web pages has grown significantly. To meet these expectations, developers have turned to server-side rendering (SSR) as a technique to improve web performance and enhance the overall user experience. In this blog post, we will explore the concept of server-side rendering, its benefits, and provide a sample code implementation to better understand its practical application.

## What is Server-Side Rendering?

Server-side rendering is a technique where web pages are generated on the server and sent to the client as fully rendered HTML content. This means that when a user requests a page, the server processes the request, generates the necessary HTML, and sends it back to the client's browser. Unlike client-side rendering (CSR), where the browser loads a minimal HTML skeleton and relies on JavaScript to render the page, SSR provides a pre-rendered and fully functional page right from the start.

## Benefits of Server-Side Rendering

1. Improved Performance: SSR significantly reduces the time-to-first-render (TTFP) by sending pre-rendered HTML to the client. This results in faster page load times, better perceived performance, and improved search engine optimization (SEO) as search engine bots can easily crawl and index the content.

2. Enhanced User Experience: With SSR, users can access the content quickly, even on slower devices or unreliable network connections. The initial view is immediately visible, allowing users to start interacting with the page while the JavaScript and other assets are still being loaded in the background.

3. SEO Friendliness: Search engines can easily crawl and index SSR pages since the content is readily available in the HTML response. This can lead to better visibility and higher rankings in search engine results, benefiting websites and applications with significant content-driven strategies.

## Example Code

1. Install express and react

```bash
$ npm install express react react-dom
```

2. Create an express server and SSR route

```js
const express = require("express");
const React = require("react");
const ReactDOMServer = require("react-dom/server");

const app = express();

app.get("/", (req, res) => {
  // Render your React component
  const html = ReactDOMServer.renderToString(React.createElement(App));

  // Return the rendered HTML
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Server-Side Rendering Example</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script src="client.js"></script>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
```

3. Using the React library, create the client-side code (e.g. in a file named client.js). This code will hydrate the rendered HTML on the client.

```js
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.hydrate(<App />, document.getElementById("app"));
```

## Conclusion:

Server-side rendering offers significant advantages by improving web performance, user experience, and search engine visibility. By pre-rendering HTML content on the server, SSR reduces the time to display meaningful content to users, resulting in faster load times and better overall user satisfaction.
