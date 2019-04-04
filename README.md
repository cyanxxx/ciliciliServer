# ciliciliSever
这是与cilicili对接的后台使用node，主要负责部署静态文件和转发微博第三方登录后请求数据
## 使用
* 将cilicil打包的dist文件夹的内容放入public中，express会部署这些静态文件
* 在server.js写与前端对接的路径，使用app.use(),配置url与相关函数
* 在router文件夹里面写请求逻辑，在api文件夹config里面写微博提供的接口，serverConfig里面写服务器的请求配置，post的请求数据默认使用application/x-www-form-urlencode方式传输，有图片的时候才转换成'multipart/form-data'，由服务器去请求（https模块去请求），再返回给前端，绕过浏览器同源策略
## 运行
初次使用：
```
npm install
```
运行：
```
npm run start
```

