const { config } = process.env;

// 从指定的配置文件导出
if (config) {
   module.exports = require(`./config/${config}`);
}

// 默认配置，无ssr的纯客户端
else {
   module.exports = {
      lintOnSave: false,
   };
}