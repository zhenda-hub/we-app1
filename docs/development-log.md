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

---

## 平台兼容性问题记录

### 2026-03-12 - 微信小程序平台限制

#### 问题 1：图片预览功能在微信小程序中无法使用

**现象**：
- H5 模式下图片可以点击查看大图
- 微信小程序模式下点击图片一直转圈，无法显示预览

**原因**：
`uni.previewImage` API 在微信小程序中**不支持本地静态路径**（如 `/static/...`）。

该 API 仅支持以下路径类型：
- 网络图片 URL（http/https）
- 临时文件路径（wxfile://）
- 本地文件路径（wx.local://）

**调试过程**：
```javascript
// Console 输出
预览图片: Proxy {0: "/static/images/floor1/floor1-01.jpg", ...}
当前索引: 4
// 一直转圈，无错误提示
```

**✅ 最终解决方案**：使用 GitHub raw 链接

将图片和视频托管到 GitHub，使用 raw 链接作为网络 URL：

```javascript
// 使用 GitHub raw 链接
const githubRawBase = 'https://raw.githubusercontent.com/zhenda-hub/we-app1/main/src/static'

imageGroups: [
  {
    title: '1楼',
    images: [
      `${githubRawBase}/images/floor1/floor1-01.jpg`,
      `${githubRawBase}/images/floor1/floor1-02.jpg`,
      // ...
    ]
  }
]

// 图片预览功能恢复
@tap="previewImage(group.images, imgIndex)"
```

**代码位置**：
- `src/pages/rooms/rooms.vue`

**注意事项**：
- 文件需要推送到 GitHub 的 main 分支才能访问
- GitHub raw 链接格式：`https://raw.githubusercontent.com/用户名/仓库/分支名/文件路径`

---

#### 问题 2：本地视频在微信小程序中无法播放

**现象**：
- H5 模式下视频可以正常播放
- 微信小程序模式下视频加载失败，报错 `MEDIA_ERR_SRC_NOT_SUPPORTED`

**尝试过的方案**：
1. ❌ 静态路径：`/static/videos/xxx.mp4`
2. ❌ 动态导入：`import.meta.glob` + `query: '?url'`
3. ❌ 直接导入：`import videoFile from '...'`

**✅ 最终解决方案**：使用 GitHub raw 链接

```javascript
// 视频使用 GitHub raw 链接
<video
  class="room-video"
  :src="`${githubRawBase}/videos/0ee6398ff4993cb749afc60bf7eaf427.mp4`"
  controls
  object-fit="contain"
></video>
```

**代码位置**：
- `src/pages/rooms/rooms.vue`

---

## ✅ 解决方案总结

### 使用 GitHub raw 链接

**核心思路**：将图片和视频托管到 GitHub 仓库，使用 raw 链接作为网络 URL。

**GitHub raw 链接格式**：
```
https://raw.githubusercontent.com/用户名/仓库名/分支名/文件路径
```

**示例代码**：
```javascript
// 定义基础 URL
const githubRawBase = 'https://raw.githubusercontent.com/zhenda-hub/we-app1/main/src/static'

// 图片
images: [
  `${githubRawBase}/images/floor1/floor1-01.jpg`,
  `${githubRawBase}/images/floor1/floor1-02.jpg`,
]

// 视频
:src="`${githubRawBase}/videos/video.mp4`"
```

**优点**：
- ✅ 免费、稳定
- ✅ 支持图片预览和视频播放
- ✅ 无需额外服务配置

**注意事项**：
- 文件必须推送到 GitHub 才能访问
- main 分支是最稳定的选择
- 大文件可能加载较慢，可考虑使用 CDN 加速

---

## 问题 3：视频黑屏有声音（视频编码问题）

### 现象
- 视频能播放，有声音
- 但画面黑屏，无法显示

### 原因
视频编码格式为 **H.265/HEVC**，微信小程序只支持 **H.264** 编码。

### 诊断命令
```bash
ffmpeg -i video.mp4 2>&1 | grep Video
```

**错误输出示例**：
```
Video: hevc (Main) (hvc1 / 0x31637668)  ← H.265，不支持
```

**正确输出示例**：
```
Video: h264 (High) (avc1 / 0x31637661)  ← H.264，支持
```

### 解决方案：转换为 H.264 编码

#### 1. 检查当前视频编码

```bash
# 查看视频详细信息
ffmpeg -i video.mp4 2>&1 | grep -E "Video|Audio|Duration"

# 只查看视频编码
ffmpeg -i video.mp4 2>&1 | grep "Stream #0:0"
```

#### 2. 转换为 H.264 编码

**基础转码命令**：
```bash
ffmpeg -i input.mp4 -c:v libx264 -preset medium -crf 23 -c:a aac -b:a 128k output_h264.mp4
```

**快速转码（适合大文件）**：
```bash
ffmpeg -i input.mp4 -c:v libx264 -preset fast -crf 25 -c:a aac -b:a 128k output_h264.mp4
```

**高质量转码**：
```bash
ffmpeg -i input.mp4 -c:v libx264 -preset slow -crf 18 -c:a aac -b:a 192k output_h264.mp4
```

**参数说明**：

| 参数 | 说明 | 可选值 |
|------|------|--------|
| `-c:v libx264` | 视频编码使用 H.264 | libx264, libx265 |
| `-preset` | 编码速度与压缩率平衡 | ultrafast, superfast, veryfast, faster, fast, medium, slow, slower, veryslow |
| `-crf` | 恒定质量因子（越小质量越好） | 18-28（推荐 23） |
| `-c:a aac` | 音频编码使用 AAC | aac, mp3, libopus |
| `-b:a 128k` | 音频码率 | 96k, 128k, 192k, 320k |

**本项目的实际使用**：
```bash
# 将 H.265 视频转换为 H.264
ffmpeg -i src/static/videos/0ee6398ff4993cb749afc60bf7eaf427.mp4 \
  -c:v libx264 -preset medium -crf 23 \
  -c:a aac -b:a 128k \
  src/static/videos/0ee6398ff4993cb749afc60bf7eaf427_h264.mp4
```

#### 3. 验证转码结果

```bash
# 检查新视频编码
ffmpeg -i output_h264.mp4 2>&1 | grep "Stream #0:0"

# 应该显示：
# Video: h264 (High) (avc1 / 0x31637661) ✅
```

### 微信小程序开发设置

**开发时临时方案**：
1. 微信开发者工具 → 右上角 **详情**
2. **本地设置** → 勾选 ✅ **不校验合法域名**

**正式发布**：
需要在 [微信公众平台](https://mp.weixin.qq.com/) 配置服务器域名白名单：
- 开发 → 开发管理 → 服务器域名
- **downloadFile 合法域名** 添加：`https://raw.githubusercontent.com`

---

## 最终状态

| 功能 | H5 模式 | 微信小程序 |
|------|---------|------------|
| 图片显示 | ✅ | ✅ |
| 图片预览 | ✅ | ✅ (GitHub raw) |
| 视频播放 | ✅ | ✅ (H.264 + GitHub raw) |
- ✅ 无需额外服务配置

**注意事项**：
- 文件必须推送到 GitHub 才能访问
- main 分支是最稳定的选择
- 大文件可能加载较慢，可考虑使用 CDN 加速
