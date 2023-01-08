const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry:{
        index:{
            import:'./src/index.js',
            runtime:'common-run'
        },
        start:{
            import:'./src/start.js',
            runtime:'common-run',// 将该chunk的webpack运行时代码单独打包成common-run bundle
            // dependOn:'index'
        }
    },
    output:{
        filename:'[name]-[hash].js',
        publicPath:'./zzx', //所有link script标签的相对src路径前缀
        clean:true
    },
    mode:'development',
    resolve:{
        extensions:['.js']
    },
    plugins:[
        new HtmlWebpackPlugin()
    ]
}