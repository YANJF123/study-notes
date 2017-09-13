## npm related

#### Node version management
```
// 安装
npm install -g n

// Use or install the latest official release:
n latest

// Use or install the stable official release:
n stable

// Use or install the latest LTS official release:
n lts
```

#### npm跟yarn命令比较
其中pakageName代表包的名称
+ `npm install == yarn / yarn install`
+ `npm install packageName --save == yarn add packageName`
+ `npm install packageName --save-dev == yarn add packageName --dev`
+ `npm uninstall packageName --save == yarn remove packageName`
+ `npm update == yarn upgrade`
+ `npm install packageName -g == yarn global add packageName`

#### npm配置淘宝源
```
npm config set registry https://registry.npm.taobao.org

//当你想发布自己的包时，需要将地址修改回来
npm config set registry https://registry.npmjs.org/
```

#### npm常用命令
```
//安装包并保存到package.json文件中的devDependencies属性中
npm install pakageName --save-dev

//安装包并保存到package.json文件中的dependencies属性中
npm install packageName --save

//全局安装一个包
npm install packageName -g

//npm升级自身
npm install npm -g
```
