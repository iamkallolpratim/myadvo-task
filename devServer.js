var path = require("path");
var express = require("express");
var webpack = require("webpack");

var port = process.env.PORT || 8080;
var host = process.env.HOST || "localhost";

var env = "dev";

var webpackConfig = require("./webpack.config." + env);
var compiler = webpack(webpackConfig);
var app = express();

app.use(require("webpack-dev-middleware")(compiler, {
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));

app.use(require("webpack-hot-middleware")(compiler));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});


app.listen(port, host, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Listening at http://" + host + ":" + port);
});
