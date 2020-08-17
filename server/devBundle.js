import config from "./../config/config";
import webpack from "webpack";
import webpackMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import webpackConfig from "./../webpack.config.client";

const compile = (app) => {
  if (config.env === "development") {
    const compiler = webpack(webpackConfig);
    const middleware = webpackMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
    });
    app.use(middleware);
    // Enable hot reloading from the server-side using Webpack Hot Middleware
    app.use(webpackHotMiddleware(compiler));
  }
};

export default {
  compile,
};
