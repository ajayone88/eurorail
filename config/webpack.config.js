import path from 'path';
import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';

const config = {
    entry:['webpack-hot-middleware/client?reload=true', './src/index.js'],
    mode:"development",
    output:{
        filename:'[name]-bundle.js',
        path:path.resolve(__dirname, "../dist"),
        publicPath:"/"
    },
    devServer: {
        contentBase:"/",
        overlay:true,
        hot:true,
        stats:{
            colors:true
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
                        loader:"html-loader",
                        options:{
                            attributes:{
                                list:[
                                    {
                                        tag:"img",
                                        attribute:'src',
                                        type:'src'
                                    }
                                ]
                            }
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
                    }
                ]
            },
            {
                test:/\.(jpg|png|svg)$/,
                use:[
                    {
                        loader:"file-loader",
                        options:{
                            name:"./images/[name].[ext]"
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HTMLWebpackPlugin({
            template:"./src/index.html",
            filename:'index.html'
        })
    ]
};

export default config;