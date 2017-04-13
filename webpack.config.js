// "__dirname"是node.js中的一个全局变量，它指向当前执行脚本所在的目录
module.exports = {
  devtool: 'eval-source-map',// 配置生成Source Map，选择合适的选项
  entry: __dirname + '/src/main.js',// 入口文件
  output: {
    path: __dirname + '/public',// 打包后文件存放的地方
    filename: 'bundle.js'// 打包后输出文件的文件名
  }
};