const Vue = require("vue");
const server = require("express")();
const { createRenderer } = require("vue-server-renderer");

server.get("*", (req, res) => {
  const renderer = createRenderer({
    template: require("fs").readFileSync("./index.template.html", "utf-8")
  });

  const context = {
    title: 'Vue SSR',
    meta: '',
  };

  createApp({ url: req.url }).then(app => {
    renderer.renderToString(app, context, (err, html) => {
      if (err) {
        if (err.code === 404) {
          res.status(404).end('Page not found')
        } else {
          res.status(500).end('Internal Server Error')
        }
      } else {
        res.end(html)
      }
    });
  })
});

server.listen(8080);
