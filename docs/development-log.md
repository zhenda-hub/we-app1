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

### H5 浏览器调试

```bash
# 启动 H5 开发模式（用于浏览器调试）
npm run dev:h5
```

## 调试命令

### 服务器管理

```bash
# 查看占用端口的进程
lsof -i :5173 -i :5174 -i :5175

# 停止所有开发服务器
pkill -f "npm run dev"

# 强制停止指定端口的进程
kill <PID>
```

### 图片资源调试

```bash
# 测试图片 HTTP 状态码
curl -s -o /dev/null -w "%{http_code}\n" "http://localhost:5173/static/images/floor1/floor1-01.jpg"

# 验证图片内容
curl -s "http://localhost:5173/static/images/floor1/floor1-01.jpg" -o /tmp/test.jpg && file /tmp/test.jpg

# 测试中文文件名问题
curl -s "http://localhost:5173/static/images/bathroom/中文文件名.jpg" -o /tmp/test-chinese.jpg && head -3 /tmp/test-chinese.jpg
```

### 文件操作

```bash
# 批量重命名图片文件（示例）
cd src/static/images/floor1
counter=1
for file in *.jpg; do
  mv "$file" "floor1-$(printf '%02d' $counter).jpg"
  ((counter++))
done

# 统计文件数量
ls -1 | wc -l

# 查看文件大小
ls -lh
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
