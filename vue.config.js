module.exports = {
  devServer: {
    host: "192.168.31.68", //target host
    port: 8080,
    proxy: {
      "^/api": {
        target: "http://192.168.31.68:7001", //代理地址，这里设置的地址会代替axios中设置的baseURL
        changeOrigin: true // 如果接口跨域，需要进行这个参数配置
      }
    }
  }
};
