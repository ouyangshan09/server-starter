# 服务器脚手架项目

## 采用以下技术实现

- Egg.js (主要框架)
- Typescript (开发语言)
- MySQL (数据库)
- Dokcer (部署)

## 实现目标

- cjcms server
- - upload server
- - increment update server
- - auth server

## typescript拓展测试记录

- [x] controller
- [x] service
- [x] middleware
- [x] extend
- [x] extend/appliaction
- [x] extend/context
- [x] extend/reqeust
- [x] extend/response
- [x] config/view
- [x] config/middleware
- [x] config/plugin
- [x] unit test && cov
- [x] debug(vscode-eggjs)插件调试

## 插件封装

- [] mysql
- [] dockerfile

### 记录

- package.json 中的`ets`命令属于`egg-ts-helper`中的功能，作用用于清除编译后的.js文件
- 测试环境中的assert应该属于`egg-bin`集成好的模块
- 关于npm script中的`"migrate:new": "egg-sequelize migration:create"` 实际上它是需要接收一些参数的，如果直接这样使用`npm run migrate:new --name=TODO` 会报错，因为它接收不到参数，必须变为这样`npm run migrate:new -- --name=TODO` 才可以