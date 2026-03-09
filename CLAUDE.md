# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a UniApp-based WeChat Mini Program for a homestay (民宿) property. The application is built for basic content display, featuring property introductions, image galleries, and contact information.

**Framework**: UniApp (Vue 3) with Composition API
**License**: Apache 2.0
**Primary Platform**: WeChat Mini Program

## Architecture

### Project Structure (Standard UniApp Vue 3)

```
├── pages/              # Page components
│   ├── index/         # Home/Landing page
│   └── ...
├── components/        # Reusable components
├── static/           # Static assets (images, videos)
├── uni_modules/      # UniApp plugins/modules
├── App.vue           # Root component
├── main.js           # Entry point
├── pages.json        # Page routing and configuration
├── manifest.json     # App manifest (platform-specific configs)
└── package.json      # Dependencies
```

### Key Configuration Files

- **pages.json**: Defines all pages, navigation bar, tab bar, and window styles
- **manifest.json**: Contains app ID, icons, permissions, and platform-specific settings

### Asset Organization

Static content is organized in `ifile/` directory:
- `ifile/kt/` - Kitchen images
- `ifile/wc/` - Bathroom images
- `ifile/1l/` - Living room/bedroom images
- Video files for property showcase

## Development Commands

### Initialize Project (if not yet created)
```bash
# Using npx (recommended for Zed editor users)
npx degit dcloudio/uni-preset-vue#vite my-vue3-project
```

### Development
```bash
# Install dependencies
npm install

# Run development server for WeChat Mini Program
npm run dev:mp-weixin

# Build for production
npm run build:mp-weixin
```

### Testing
- Open WeChat Developer Tools (微信开发者工具)
- Import project from `dist/dev/mp-weixin` directory

## Common Patterns

### Page Structure (Vue 3 Composition API)
```vue
<template>
  <view class="container">
    <!-- Content -->
  </view>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Reactive state
const title = ref('')

// Lifecycle
onMounted(() => {
  // Initialize
})
</script>

<style lang="scss" scoped>
.container {
  /* Styles */
}
</style>
```

### Navigation
```javascript
uni.navigateTo({
  url: '/pages/detail/detail?id=123'
})
```

### Asset References
- Static files in `static/` use absolute paths: `/static/image.png`
- Dynamic assets can use relative paths or require()

## Platform-Specific Notes

- **WeChat Mini Program**: All API calls use `uni.*` namespace
- **rpx units**: Use responsive pixel units for layout (750rpx = screen width)
- **Image optimization**: WeChat Mini Program has strict image size limits (2MB per image)

## Git Workflow

1. Create feature branches for new functionality
2. Commit frequently with clear, atomic changes
3. Follow conventional commit format: `feat:`, `fix:`, `docs:`, etc.
