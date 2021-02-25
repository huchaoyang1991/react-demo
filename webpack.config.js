const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')//导入在内存中自动生成index页面的插件

//创建一个插件的实例对象
const htmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html'),//源文件
    filename: 'index.html' //生成的内存中首页的名称
})
//向外暴露一个打包的配置对象；因为webpack是基于node构建的；所以webpack支持所有Node API和语法
//webpack 默认只能打包处理.js后缀的文件；像.png .vue无法主动处理，所以要配置第三方的loader;
module.exports = {
    mode: 'development', //development production
    plugins: [
        htmlPlugin
    ],
    module: {//所有第三方规则匹配
        rules: [{
            test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/
        },
        {
            test: /\.css$/i, use: ['style-loader', 'css-loader']
        }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],//表示这几个文件的后缀名，可以省略不写
        alias: {
            '@': path.join(__dirname, './src')//表示，@表示项目根目录中src的这一层路径
        }
    }
}