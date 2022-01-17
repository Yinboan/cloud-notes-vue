(function (isProduction){
    let isDev = !isProduction
    const fs = require('fs')
    const path = require('path')
    //47.97.254.219
    const mockBaseURL = '//note-server.hunger-valley.com'
    const realBaseURL = '//note-server.hunger-valley.com'

    // 根据环境区分接口地址，拼接代码文件内容
    let FileStr=
    `    module.exports = {
        baseURL : '${isDev?mockBaseURL:realBaseURL}'
    }`
    // 生成最终代码文件（目录自己指定，之后的接口地址都从该文件导入）
    fs.writeFileSync(path.join(__dirname,'./src/helper/config-baseURL.js'),FileStr)

})(process.env.NODE_ENV === 'production')


module.exports = {
    // publicPath: process.env.NODE_ENV === 'production' ? './':'/',
    devServer: {
        progress: true,  // 显示打包的进度条
        https: true,
        host: 'localhost',
    }
  }