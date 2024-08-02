const path = require('path');

module.exports = {
    entry: './src/index.js', // Punto d enetrada de la aplicación, de donde va iniiar el uepad
    output: {
        filename: 'bundle.js', // Nombre del archivo de salida
        path: path.resolve(__dirname, 'dist'), //carpeta de salida
    },
module: {
    rules: [
     { 
        test: /\.css$/, // Expresion regular o regex para identificar archivos css
        use: ['style-loader', 'cs-loader'], // loader para procesar archivos css
     },
     {
        test: /\,js/, // Para identificar archivo java cript 
        exclude: /node_modules/, // excluir la carpeta para que no cargue tanto 
        use: {
        loder: 'babel-loader', // loader para lleva javasript moderno a jv moderno para que sea compatible con todos los navegadores 
        opcions: {
        presets: ['@babel/preset-env'],
        },
    },
     },
    ],
},
devtool: 'soucre-map', // Generar soucre maps para facilitar depuración
denServer: {
    contentBase: path.resolve(__dirname, 'dist'), // Carpeta desde la cual el servidor agarrará los archivos
    compres: true, //habilitando la compresióm (GZIP) para que sea más facil abrir el programa
    port: 900, //puerto del servidor de desarrollo 
},
};