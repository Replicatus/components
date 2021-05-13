module.exports = {
    devServer: {
        port: 4030,
        compress: true,
        proxy: 'http://77.220.211.13:8091/'
    },
    runtimeCompiler: true,
    // chainWebpack:{
    //     rules:[
    //         {
    //             test: /\.s(c|a)ss$/,
    //             use: [
    //                 'vue-style-loader',
    //                 'css-loader',
    //                 {
    //                     loader: 'sass-loader',
    //                     // Requires sass-loader@^7.0.0
    //                     // options: {
    //                     //     implementation: require('sass'),
    //                     //     indentedSyntax: true // optional
    //                     // },
    //                     // Requires sass-loader@^8.0.0
    //                     options: {
    //                         implementation: require('sass'),
    //                         sassOptions: {
    //                             indentedSyntax: true // optional
    //                         },
    //                     },
    //                 },
    //             ],
    //         },
    //     ]
    // }
}