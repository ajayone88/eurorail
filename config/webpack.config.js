const path = require('path');

module.exports= {
    entry:{
        main:['@babel/polyfill','./src/main.js']
    },
    mode:"production",
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname, "../dist"),
        publicPath:"/"
    },
    devServer: {
        contentBase:"/",
        overlay:true,
        historyApiFallback: true,
        hot:true,
        stats:{
            color:true
        }
    },
    devtool: "sourcemap",
    module:{
        rules:[
            {
              test:/\.js$/,
              use:[
                  {
                      loader:"babel-loader"
                  }
              ],
                exclude:/node_modules/
            },
            {
                test:/\.html$/,
                use:[
                    {
                        loader:"file-loader",
                        options:{
                            name:"[name].html"
                        }
                    },
                    {
                        loader:"extract-loader"
                    },
                    {
                        loader:"html-loader",
                        options:{
                            attrs:["img:src"]
                        }
                    }
                ]
            },
            {
                test:/\.css$/,
                use:[
                    {
                        loader:"style-loader"
                    },
                    {
                        loader:"css-loader",
                        options:{
                            modules:true
                        }
                    },
                    {
                      loader:"postcss-loader",
                        options:{
                          config:{
                              path: path.resolve(__dirname, "./config/postcss.config.js")
                          }
                        }

                    }
                ]
            },
            {
                test:/\.(jpg|png|svg)$/,
                use:[
                    {
                        loader:"file-loader",
                        options:{
                            name:"images/[name].[ext]"
                        }
                    }
                ]
            }
        ]
    }
};