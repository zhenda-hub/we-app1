# 民宿小程序开发记录

## 项目初始化

### 1. 初始化 UniApp Vue 3 项目

```bash
# 使用 npx 初始化项目（需要 --force 因为目录不为空）
npx degit dcloudio/uni-preset-vue#vite . --force
```

### 2. 安装依赖

```bash
# 安装项目依赖
npm install

# 安装 sass 预处理器（用于样式编译）
npm install -D sass
```

## 目录结构创建

### 创建页面目录

```bash
# 创建页面目录
mkdir -p src/pages/home
mkdir -p src/pages/rooms
mkdir -p src/pages/contact
```

### 创建静态资源目录

```bash
# 创建静态资源目录结构
mkdir -p src/static/videos
mkdir -p src/static/images/floor1
mkdir -p src/static/images/floor2
mkdir -p src/static/images/bathroom
mkdir -p src/static/images/banner
```

## 资源文件整理

### 复制视频文件

```bash
# 复制视频文件到 static/videos/
cp ifile/*.mp4 src/static/videos/
```

### 复制图片文件

```bash
# 复制1楼图片
cp ifile/1l/*.jpg src/static/images/floor1/

# 复制2楼图片
cp ifile/2l/*.jpg src/static/images/floor2/

# 复制卫生间图片
cp ifile/wc/*.jpg src/static/images/bathroom/

# 复制轮播图（使用1楼图片）
cp ifile/1l/*.jpg src/static/images/banner/
```

### 创建 TabBar 图标占位符

```bash
# 创建 TabBar 图标占位文件
touch src/static/tab-home.png
touch src/static/tab-home-active.png
touch src/static/tab-room.png
touch src/static/tab-room-active.png
touch src/static/tab-contact.png
touch src/static/tab-contact-active.png
```

## 开发命令

### 启动开发服务器

```bash
# 启动微信小程序开发模式
npm run dev:mp-weixin
```

### 生产构建

```bash
# 构建生产版本
npm run build:mp-weixin
```

## 微信开发者工具使用

1. 打开微信开发者工具
2. 导入项目，选择 `dist/dev/mp-weixin` 目录
3. 在开发者工具中预览和调试

## 配置文件说明

### pages.json

页面路由配置，包含：

- 页面路径
- 导航栏样式
- TabBar 配置

### manifest.json

小程序配置，包含：

- 小程序名称
- AppID（需要在微信公众平台申请）
- 权限配置

## 颜色规范

- 主色调：`#E8A868` (温暖橙色)
- 背景色：`#FAF8F5` (浅米色)
- 文字色：`#5D4E37` (深棕色)
- 辅助色：`#F5F0E8` (暖米色)

## 注意事项

1. **视频文件**：确保视频格式为 mp4，大小不超过微信小程序限制
2. **图片文件**：建议压缩图片，单个图片不超过 2MB
3. **AppID**：需要在[微信公众平台](https://mp.weixin.qq.com/)申请小程序账号
4. **TabBar 图标**：当前为占位符，需要替换为实际图标（建议 81x81 px）
