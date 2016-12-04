var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  context: __dirname,
	// entry: './assets/js/entry.jsx', //opcao sem reload
  entry: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './assets/js/entry.jsx'
  ],
  // watch: true,
	output: {
    // path: "./public",
		// filename: "bundle.js"
    // path: path.resolve('./assets/bundles/'),
    // filename: "bundle.js"
    path: path.resolve('../project/static/bundles/'), //se local, todo prod
    filename: "[name]-[hash].js",
    publicPath: 'http://localhost:3000/assets/bundles/',
	},

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(), // don't reload if there is an error
    new BundleTracker({filename: './webpack-stats.json'}),
  ],

	module: {
    // loaders: [{
    //     test: /\.jsx?$/,
    //     exclude: /node_modules/,
    //     loader: 'babel',
    //     query: {
    //         presets: ['es2015', 'react']
    //     }
    // }]

    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=react']
    }]
	},
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx']
  },
  scripts: {
    start: "webpack-dev-server",
  }
};
