var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

// module.exports = {
//   entry: `${SRC_DIR}/index.jsx`,
//   output: {
//     filename: 'bundle.js',
//     path: DIST_DIR
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.jsx?/,
//         include: SRC_DIR,
//         loader: 'babel-loader',
//         query: {
//           presets: ['@babel/preset-react', '@babel/preset-env']
//         }
//       },
//     ]
//   },
//   resolve: {
//     extensions: [".js", ".json", ".jsx", ".css"]
//   }
// };

module.exports = [
  {
    name: 'client',
    entry: path.join(__dirname,'client', 'src','index.jsx'),
    module: {
      rules: [
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        {
          test: /\.css$/,
          use: [
            'style-loader', 'css-loader',
          ],
        },
      ],
    },
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, 'client', 'dist'),
      publicPath: '/',
    },
  },
];