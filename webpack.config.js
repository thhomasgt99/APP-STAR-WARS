const path = require('path'); //alparecer require es un metodo de node para traer a path
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/' //porque ruta arranca| esta line debe estar comentada mientras estemos en desarrollo, en produccion si deve estar activa
    //si esta liena esta activa cuando corramos el proyecto entonces tomara los archivos de las carpetas dist o build, esto es el funcionaiento necesario para produccion pero no para desarrollo por lo tanto deve estar comentada en ese modo
    //en ambos modos utilizara node_modules para utilizar las dependencias de produccion
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader, 
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
				test:/\.(png|svg|jpg|gif)$/,
				type:'asset'
			},
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css', //esto pone la regla, al compilar creara un carpeta llamada assets y dentro el css con el nombre por defecto alparecer
    }),
    // new CopyPlugin({
    //   patterns: [
    //   // {from: 'src/images', to: 'assets/images'}
    // //     { from: 'public/manifest.json', to: '' },
    // //     { from: 'public/service-worker.js', to: '' },
    // //     { from: 'public/icon.png', to: 'assets' },
    //   ],
    // }),
  ],
  devServer: {
    static: path.join(__dirname, 'build'),
    compress: true, //comprimir
    historyApiFallback: true, //permite acceder a las rutas por la url arparecer
    port: 3005,
    open: true,
  },
};
