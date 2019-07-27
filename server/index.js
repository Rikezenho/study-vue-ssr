const express = require('express');
const { createBundleRenderer } = require("vue-server-renderer");
const path = require("path");
const template = require("fs").readFileSync(path.join(__dirname, "./index.template.html"), "utf-8");
const serverBundle = require(path.join(__dirname, "../dist/vue-ssr-server-bundle.json"));
const clientManifest = require(path.join(__dirname, "../dist/vue-ssr-client-manifest.json"));

const server = express();

server.use("/dist", express.static(path.join(__dirname, "../dist")));

server.get("*", (req, res) => {
  const renderer = createBundleRenderer(serverBundle, {
    runInNewContext: false,
    template,
    clientManifest
  });

  const context = {
    url: req.url,
    title: "Vue SSR",
    meta: ""
  };

  renderer.renderToString(context, (err, html) => {
    if (err) {
      console.log(err);
      if (err.code === 404) {
        res.status(404).end("Page not found");
      } else {
        res.status(500).end("Internal Server Error");
      }
    } else {
      res.end(html);
    }
  });
});

server.listen(8080, () => console.log("Server listening on 8080..."));
