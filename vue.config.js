const localhost = "192.168.1.100";
module.exports = {
  devServer: {
    host: localhost, //target host
    port: 8080,
    proxy: {
      "^/api": {
        target: `http://${localhost}:7001`, //代理地址，这里设置的地址会代替axios中设置的baseURL
        changeOrigin: true // 如果接口跨域，需要进行这个参数配置
      }
    }
  }
};
