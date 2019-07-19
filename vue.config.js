const { ssr } = process.env;

// ssr服务端build配置
if (ssr === 'server') {
   module.exports = require("./config/build.server.js");
}

// ssr客户端build配置
else if (ssr === 'client') {
   module.exports = require("./config/build.client.js");
}

// 纯客户端开发、build配置，使用默认src/main.js作为入口
else {
   module.exports = {
      lintOnSave: false,
   };
}