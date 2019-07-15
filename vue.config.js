const { SSR } = process.env;

// ssr服务端渲染配置
if (SSR === 'server') {
   module.exports = require("./config/ssr.server.js");
}

// ssr客户端渲染配置
else if (SSR === 'client') {
   module.exports = require("./config/ssr.client.js");
}

// 无ssr的纯客户端渲染配置，使用默认src/main.js作为入口
else {
   module.exports = {
      lintOnSave: false,
   };
}