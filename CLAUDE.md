# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a UniApp-based WeChat Mini Program for a homestay (民宿) property. The application displays property information with images and videos.

**Framework**: UniApp (Vue 3) with Composition API
**License**: Apache 2.0
**Primary Platform**: WeChat Mini Program
**H5 Preview**: Browser development supported

## Current Project Structure

```
src/
├── pages/
│   ├── home/home.vue         # 首页 (品牌展示页)
│   ├── rooms/rooms.vue       # 房源详情页 (详情展示)
│   └── contact/contact.vue   # 联系页
├── static/
│   └── images/
│       ├── floor1/           # 1楼图片
│       ├── floor2/           # 2楼图片
│       └── bathroom/         # 卫生间图片
├── App.vue
├── main.js
├── pages.json               # 页面配置和导航
└── manifest.json            # 应用配置
```

## Page Structure

### 1. 首页 (home/home.vue) - 品牌展示页
- 顶部欢迎区
- 大图轮播（精选图片）
- 特色标签（4个核心卖点）
- 快捷入口（房源详情、联系我们）

### 2. 房源详情 (rooms/rooms.vue) - 详情页
- 位置导航（地图预览）
- 交通指南
- 核心优势
- 房源图片分组轮播（1楼、2楼、卫生间）
- 视频展示
- 房屋设施
- 购房咨询按钮

### 3. 联系页 (contact/contact.vue)
- 联系方式卡片（电话、微信、地址）
- 预订须知

## Development Commands

### Install Dependencies
```bash
npm install
```

### WeChat Mini Program Development
```bash
npm run dev:mp-weixin
```
Output: `dist/dev/mp-weixin/`
Open in: 微信开发者工具

### H5 Browser Development (用于开发调试)
```bash
npm run dev:h5
```
Output: Runs on localhost (typically 5173)
**重要**: 开发时只运行一个服务！

### Build for Production
```bash
npm run build:mp-weixin  # 微信小程序
npm run build:h5         # H5版本
```

## Critical Rules

### 开发服务器管理
1. **只运行一个开发服务器**
   - WeChat Mini Program: `npm run dev:mp-weixin`
   - H5 Browser: `npm run dev:h5`
   - 切换前先停止当前服务 (Ctrl+C)

2. **停止所有服务的方法**
```bash
# 查看占用端口的进程
lsof -i :5173 -i :5174 -i :5175 -i :5176 -i :5177 -i :5178

# 停止所有开发服务器
pkill -f "npm run dev"
```

### 静态资源处理

**图片文件存放位置**：
- 本地开发：`src/static/images/`
- UniApp 会自动处理静态资源

**图片引用方式**：
```vue
<!-- 正确：使用绝对路径 -->
<image src="/static/images/floor1/xxx.jpg" />

<!-- 错误：相对路径 -->
<image src="../../static/images/xxx.jpg" />
```

**文件命名规范**：
- ❌ 避免中文文件名（可能导致编码问题）
- ✅ 使用英文、数字、下划线：`floor1-001.jpg`

### Git Workflow

1. **创建功能分支**（重要修改）
```bash
git checkout -b feature-name
```

2. **提交规范**
```bash
# 小步提交，每次一个逻辑单元
git add specific-files
git commit -m "feat: 添加新功能"
git commit -m "fix: 修复问题"
```

3. **合并到 main**
```bash
git checkout main
git merge feature-name
git branch -d feature-name
```

## Common Patterns

### Page Structure (Vue 3 Composition API)
```vue
<template>
  <view class="container">
    <!-- Content -->
  </view>
</template>

<script setup>
import { ref } from 'vue'

const title = ref('')
</script>

<style lang="scss" scoped>
.container {
  /* Styles */
}
</style>
```

### Navigation
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

### Image Preview
```javascript
const previewImage = (images, index) => {
  uni.previewImage({
    urls: images,
    current: index
  })
}
```

## Platform-Specific Notes

### WeChat Mini Program
- API calls use `uni.*` namespace
- Image size limit: 2MB per image
- `rpx` units: 750rpx = screen width

### H5 Browser Mode
- 用于开发调试，不是生产环境
- TabBar 在 H5 模式下不显示（原生组件限制）
- 静态资源通过 Vite 服务

## Current Issues & Solutions

### 图片在 H5 模式下不显示
**问题**: 直接访问图片URL返回网页而非图片
**原因**: UniApp H5 模式的静态资源处理机制
**解决**: 使用网络图片URL或重命名文件为英文

### 中文文件名编码问题
**问题**: 中文文件名可能导致URL编码问题
**建议**: 重命名图片文件为英文（如 floor1-01.jpg）

## Technical Constraints

1. **不使用 aspect-ratio**（H5不兼容）
   - 使用 `padding-bottom: 100%` + `position: relative/absolute` 实现正方形

2. **图片标签选择**：
   - 微信小程序：使用 `<image>`
   - H5兼容：使用 `<img>`（原生HTML标签）

3. **TabBar 图标**：使用网络图片URL（icons8等）

## File Modification Guidelines

### 在修改前必须：
1. `git branch --show-current` - 显示当前分支
2. 确认在正确的分支上
3. 询问是否创建新分支

### 提交前检查：
1. `git status` - 确认改动
2. `git diff` - 确认改动内容
3. 只提交相关的文件

## Commit History Context

Recent major changes:
- 房源详情页改为分组轮播展示
- 删除 index 欢迎页，只保留 home 首页
- 使用网络图片URL作为TabBar图标
