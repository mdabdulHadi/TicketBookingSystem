const path = require('path');

module.exports = {
    entry: './seatbookingsystem.client/src/index.js', // Entry point for your app (adjust the file name if needed)
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',  // Output file for your bundled code
  },
  module: {
    rules: [
      {
        test: /\.js$/,  // Use Babel to transpile JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,  // Load and bundle CSS files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],  // Resolve JS and JSX files
  },
  devtool: 'source-map', // Enable source maps for easier debugging
  mode: 'development', // Set the mode to development (you can switch to 'production' when deploying)
  devServer: {
    contentBase: path.join(__dirname, 'public'),  // Folder for static assets
    compress: true,
    port: 9000, // Port for the dev server
  },
};
