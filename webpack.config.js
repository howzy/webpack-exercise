// "__dirname"是node.js中的一个全局变量，它指向当前执行脚本所在的目录
module.exports = {
  devtool: 'eval-source-map',// 配置生成Source Map，选择合适的选项

  entry: __dirname + '/src/main.js',// 入口文件
  output: {
    path: __dirname + '/public',// 打包后文件存放的地方
    filename: 'bundle.js'// 打包后输出文件的文件名
  },

  devServer: {
    contentBase: './public',// 本服务器所加载的页面所在位置
    colors: true,// 终端中输出的结果为彩色
    historyApiFallback: true,// 不跳转
    inline: true,// 实时刷新
    port: '3000'// 监听端口，如果省略，默认为"8080"
  }
};