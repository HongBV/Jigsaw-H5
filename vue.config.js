module.exports = {
  devServer: {
    host: "10.13.10.183", //target host
    port: 8080,
    proxy: {
      "^/api": {
        target: "http://10.13.10.183:7001", //代理地址，这里设置的地址会代替axios中设置的baseURL
        changeOrigin: true // 如果接口跨域，需要进行这个参数配置
      }
    }
  }
};
