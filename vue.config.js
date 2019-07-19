const { ssr } = process.env;

// ssr开发环境配置，支持热重载
if (ssr === 'dev') {
   module.exports = require("./config/server.ssr.js");
}

// ssr服务端build配置，生成vue-ssr-server-bundle.json
else if (ssr === 'server') {
   module.exports = require("./config/build.server.js");
}

// ssr客户端build配置，生成vue-ssr-client-manifest.json、客户端包文件
else if (ssr === 'client') {
   module.exports = require("./config/build.client.js");
}

// 无ssr的纯客户端配置
else {
   module.exports = {
      lintOnSave: false,
   };
}