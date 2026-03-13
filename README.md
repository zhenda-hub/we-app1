# 温馨民宿小程序

一个精美的民宿展示微信小程序，采用 UniApp (Vue 3) 框架开发。

## 项目特点

- 🎨 温馨居家风格设计
- 📹 视频展示 + 图片分组轮播
- 🏠 房源详情展示（1楼/2楼/卫生间）
- 📍 联系方式 + 位置导航
- 📱 底部 TabBar 导航

## 技术栈

- **框架**: UniApp (Vue 3) + Composition API
- **平台**: 微信小程序（主要）/ H5 浏览器（开发调试）
- **样式**: SCSS
- **构建**: Vite 5.2.8

## 项目结构

```
src/
├── pages/              # 页面组件
│   ├── home/           # 首页（品牌展示页）
│   ├── rooms/          # 房源详情页（图片分组轮播）
│   └── contact/        # 联系页
├── static/             # 静态资源
│   └── images/         # 图片资源
│       ├── floor1/     # 1楼图片（7张）
│       ├── floor2/     # 2楼图片（7张）
│       └── bathroom/   # 卫生间图片（4张）
├── App.vue             # 根组件
├── main.js             # 入口文件
├── pages.json          # 页面路由配置
└── manifest.json       # 小程序配置

docs/                   # 项目文档
├── CLAUDE.md           # Claude Code 开发指南
└── development-log.md  # 开发日志
```

## 开发指南

### 安装依赖

```bash
npm install
```

### 开发模式

**微信小程序开发**（主要模式）：
```bash
npm run dev:mp-weixin
```
输出目录：`dist/dev/mp-weixin/`
使用微信开发者工具打开该目录

**H5 浏览器开发**（用于开发调试）：
```bash
npm run dev:h5
```
运行在本地服务器（通常是 localhost:5173）

> **注意**：开发时只运行一个服务！切换模式前先停止当前服务 (Ctrl+C)

### 停止所有开发服务

```bash
# 查看占用端口的进程
lsof -i :5173 -i :5174 -i :5175

# 停止所有开发服务器
pkill -f "npm run dev"
```

### 微信开发者工具

1. 下载并安装 [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
2. 导入项目，选择 `dist/dev/mp-weixin` 目录
3. 在开发者工具中预览和调试

### 生产构建

```bash
npm run build:mp-weixin  # 微信小程序
npm run build:h5         # H5版本
```

## 页面说明

### 首页 (home) - 品牌展示页
- 顶部欢迎区
- 大图轮播（精选图片）
- 特色标签（4个核心卖点）
- 快捷入口（房源详情、联系我们）

### 房源详情 (rooms) - 详情页
- 位置导航（地图预览）
- 交通指南
- 核心优势
- 房源图片分组轮播（1楼、2楼、卫生间）
- 视频展示
- 房屋设施
- 购房咨询按钮

### 联系页 (contact)
- 联系方式卡片（电话、微信、地址）
- 预订须知

## 静态资源规范

### 图片存放位置
- **只使用** `src/static/images/` 目录
- ❌ 不使用 `public/` 目录（已移除）
- UniApp 会自动处理 `src/static/` 中的静态资源

### 图片引用方式
```vue
<!-- 正确：使用绝对路径 -->
<image src="/static/images/floor1/floor1-01.jpg" />

<!-- 错误：相对路径 -->
<image src="../../static/images/xxx.jpg" />
```

### 文件命名规范（重要）
- ❌ **禁止中文文件名**（会导致 H5 模式下 URL 编码问题）
- ✅ 使用英文、数字、下划线：`floor1-01.jpg`

**原因**：中文文件名在 H5 模式下会进行 URL 编码（如 `%E5%BE%AE%E4%BF%A1...`），导致图片无法正确加载。

## 颜色规范

- 主色调：`#E8A868` (温暖橙色)
- 背景色：`#FAF8F5` (浅米色)
- 文字色：`#5D4E37` (深棕色)
- 辅助色：`#F5F0E8` (暖米色)

## TabBar 图标

使用网络图片 URL（icons8）：
- 首页：home.png
- 房源详情：key.png
- 联系：phone.png

## 平台兼容性说明

### 微信小程序
- API 调用使用 `uni.*` 命名空间
- 图片限制：单张图片不超过 2MB
- 单位：使用 `rpx`（750rpx = 屏幕宽度）

### H5 浏览器模式
- 用于开发调试，非生产环境
- TabBar 在 H5 模式下不显示（原生组件限制）
- 静态资源通过 Vite 服务

## 技术限制

1. **不使用 CSS aspect-ratio**（H5 不兼容）
   - 替代方案：`padding-bottom: 100%` + `position: relative/absolute`

2. **图片标签选择**
   - 微信小程序：使用 `<image>`
   - H5 兼容：使用 `<img>`（原生 HTML 标签）

3. **图片预览功能限制**（微信小程序）
   - `uni.previewImage` API 在微信小程序中**不支持本地静态路径**（如 `/static/...`）
   - 仅支持：网络 URL（http/https）、临时文件路径、本地文件路径
   - 当前方案：小程序中禁用图片预览功能（仅 H5 模式可用）

4. **视频播放限制**（微信小程序）
   - 微信小程序对本地视频文件支持有限
   - 当前方案：小程序中暂不显示视频（仅 H5 模式可用）

## 常用代码模式

### 页面导航

```javascript
// Tab页面切换
uni.switchTab({
  url: '/pages/rooms/rooms'
})

// 普通页面跳转
uni.navigateTo({
  url: '/pages/detail/detail?id=123'
})
```

### 图片预览

```javascript
const previewImage = (images, index) => {
  uni.previewImage({
    urls: images,
    current: index
  })
}
```

## 开发文档

详细的开发指南请查看：
- [CLAUDE.md](./CLAUDE.md) - Claude Code 开发指南
- [development-log.md](./docs/development-log.md) - 开发日志

## License

Apache License 2.0
