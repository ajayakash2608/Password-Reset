const path = require('path');

module.exports = {
  // Entry point of your app
  entry: './src/index.js',

  // Output configuration
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  // Module rules and loaders
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,    // For JavaScript/JSX files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  // Use Babel to transpile JavaScript
        }
      },
      {
        test: /\.css$/,   // For CSS files
        use: ['style-loader', 'css-loader']  // Loaders for handling CSS
      },
      {
        test: /\.(png|jpg|gif|svg)$/,  // For image files
        use: ['file-loader']  // Loader for handling image files
      }
    ]
  },

  // Resolve polyfills for Webpack 5
  resolve: {
    fallback: {
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "stream": require.resolve("stream-browserify"),
      "util": require.resolve("util/"),
      "zlib": require.resolve("browserify-zlib"),
      "url": require.resolve("url/"),
      "assert": require.resolve("assert/"),
      "os": require.resolve("os-browserify/browser"),
      "path": require.resolve("path-browserify")
    },
    extensions: ['.js', '.jsx']  // Resolve these file extensions
  },

  // Development server configuration (optional)
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,  // You can change the port number
    historyApiFallback: true  // Enable routing with React Router
  }
};
