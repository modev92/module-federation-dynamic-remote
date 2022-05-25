const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3001,
  },
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /bootstrap\.js$/,
        loader: "bundle-loader",
        options: {
          lazy: true,
        },
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "hostApp",
      remotes: {
        mfName: `promise new Promise(resolve => {

					// ----- 
					// https://webpack.js.org/concepts/module-federation/#motivation
					// full blown but not necessary example: https://github.com/module-federation/module-federation-examples/blob/master/dynamic-system-host/app1/src/utils/getOrLoadRemote.js
					// -----

					const urlParams = new URLSearchParams(window.location.search);
					// you should use a cookie or something else too, to have it consistent after client-side navigation etc.
					
					const remoteQueryUrl = urlParams.get('mfName');
					const remoteUrlWithVersion = remoteQueryUrl ? remoteQueryUrl : "http://localhost:3002/remoteEntry.js"

					const script = document.createElement('script')
					script.src = remoteUrlWithVersion
					script.onload = () => {
						// the injected script has loaded and is available on window
						// we can now resolve this Promise
						const proxy = {
							get: (request) => window.mfName.get(request),
							init: (arg) => {
								try {
									return window.mfName.init(arg)
								} catch(e) {
									console.log('remote container already initialized')
								}
							}
						}
						resolve(proxy)
					}
					// inject this script with the src set to the versioned remoteEntry.js
					document.head.appendChild(script);
				})
				`,
      },
      shared: { react: { singleton: true }, "react-dom": { singleton: true } },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
