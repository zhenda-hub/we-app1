# 温馨民宿小程序

一个精美的民宿展示微信小程序，采用 UniApp (Vue 3) 框架开发。

## 项目特点

- 🎨 温馨居家风格设计
- 📹 视频开场 + 图片轮播
- 🏠 房型/设施展示
- 📍 联系方式 + 地图导航
- 📱 底部 TabBar 导航

## 技术栈

- **框架**: UniApp (Vue 3) + Composition API
- **平台**: 微信小程序
- **样式**: SCSS
- **构建**: Vite

## 项目结构

```
src/
├── pages/              # 页面组件
│   ├── index/         # 欢迎页（视频开场）
│   ├── home/          # 首页
│   ├── rooms/         # 房型展示页
│   └── contact/       # 联系我们页
├── static/            # 静态资源
│   ├── images/        # 图片资源
│   │   ├── banner/    # 轮播图
│   │   ├── floor1/    # 1楼图片
│   │   ├── floor2/    # 2楼图片
│   │   └── bathroom/  # 卫生间图片
│   └── videos/        # 视频资源
├── App.vue            # 根组件
├── main.js            # 入口文件
├── pages.json         # 页面路由配置
└── manifest.json      # 小程序配置
```

## 开发指南

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev:mp-weixin
```

### 微信开发者工具

1. 打开 [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
2. 导入项目，选择 `dist/dev/mp-weixin` 目录
3. 在开发者工具中预览和调试

### 生产构建

```bash
npm run build:mp-weixin
```

## 页面说明

### 欢迎页 (index)
- 视频开场动画
- 图片轮播展示
- 特色标签
- 简介介绍

### 首页 (home)
- 民宿介绍
- 房型预览
- 特色设施
- 联系引导

### 房型页 (rooms)
- 1楼房型展示
- 2楼房型展示
- 卫生间展示
- 设施清单

### 联系页 (contact)
- 电话/微信联系方式
- 地图导航
- 交通指南
- 预订须知

## 配置说明

### pages.json
定义页面路由、TabBar 和导航栏样式。

### manifest.json
配置小程序名称、AppID 等基本信息。

## 资源文件

- 图片文件放在 `src/static/images/` 目录
- 视频文件放在 `src/static/videos/` 目录
- TabBar 图标放在 `src/static/` 目录

## 颜色规范

- 主色调：`#E8A868` (温暖橙色)
- 背景色：`#FAF8F5` (浅米色)
- 文字色：`#5D4E37` (深棕色)
- 辅助色：`#F5F0E8` (暖米色)

## License

Apache License 2.0
