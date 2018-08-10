const hoxy = require("hoxy");
const styleTag = require("./style-tag");
const svgElem = require("./svg-elem");

const proxy = hoxy
  .createServer({
    reverse:
      "https://www.timeanddate.com/countdown/generic?iso=20180808T0808&p0=3546&msg=ml+one+is+born&font=cursive"
  })
  .listen(8080);

proxy.intercept(
  {
    phase: "response",
    mimeType: "text/html",
    as: "$"
  },
  function(req, resp) {
    resp.$("head").append(styleTag);
  }
);
