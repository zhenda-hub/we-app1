

# Cozy Homestay Mini Program

A beautifully designed homestay showcase WeChat Mini Program, developed using the UniApp (Vue 3) framework.

## Project Features

- 🎨 Cozy home-style design
- 📹 Video showcase + grouped image carousels
- 🏠 Property detail display (1st floor / 2nd floor / bathroom)
- 📍 Contact information + location navigation
- 📱 Bottom TabBar navigation

## Tech Stack

- **Framework**: UniApp (Vue 3) + Composition API
- **Platform**: WeChat Mini Program (primary) / H5 Browser (development & debugging)
- **Styling**: SCSS
- **Build Tool**: Vite 5.2.8

## Project Structure

```
src/
├── pages/              # Page components
│   ├── home/           # Home page (brand showcase)
│   ├── rooms/          # Property detail page (grouped image carousels)
│   └── contact/        # Contact page
├── static/             # Static assets
│   └── images/         # Image resources
│       ├── floor1/     # 1st floor images (7 images)
│       ├── floor2/     # 2nd floor images (7 images)
│       └── bathroom/   # Bathroom images (4 images)
├── App.vue             # Root component
├── main.js             # Entry file
├── pages.json          # Page route configuration
└── manifest.json       # Mini program configuration

docs/                   # Project documentation
├── CLAUDE.md           # Claude Code development guide
└── development-log.md  # Development log
```

## Development Guide

### Install Dependencies

```bash
npm install
```

### Development Mode

**WeChat Mini Program Development** (Primary Mode):
```bash
npm run dev:mp-weixin
```
Output directory: `dist/dev/mp-weixin/`
Open this directory with WeChat DevTools

**H5 Browser Development** (For development & debugging):
```bash
npm run dev:h5
```
Runs on a local server (usually localhost:5173)

> **Note**: Only run one service during development! Stop the current service before switching modes (Ctrl+C)

### Stop All Development Services

```bash
# Check processes occupying ports
lsof -i :5173 -i :5174 -i :5175

# Stop all development servers
pkill -f "npm run dev"
```

### WeChat DevTools

1. Download and install [WeChat DevTools](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
2. Import the project and select the `dist/dev/mp-weixin` directory
3. Preview and debug within the DevTools

### Production Build

```bash
npm run build:mp-weixin  # WeChat Mini Program
npm run build:h5         # H5 version
```

## Page Descriptions

### Home (home) - Brand Showcase Page
- Top welcome section
- Large image carousel (selected images)
- Feature tags (4 core selling points)
- Quick access (Property Details, Contact Us)

### Property Details (rooms) - Detail Page
- Location navigation (map preview)
- Transportation guide
- Core advantages
- Grouped image carousels (1st floor, 2nd floor, bathroom)
- Video showcase
- Property facilities
- Purchase inquiry button

### Contact (contact)
- Contact info card (phone, WeChat, address)
- Booking instructions

## Static Resource Guidelines

### Image Storage Location
- **Only use** the `src/static/images/` directory
- ❌ Do not use the `public/` directory (removed)
- UniApp automatically handles static assets in `src/static/`

### Image Reference Method
```vue
<!-- Correct: Use absolute paths -->
<image src="/static/images/floor1/floor1-01.jpg" />

<!-- Incorrect: Relative paths -->
<image src="../../static/images/xxx.jpg" />
```

### File Naming Convention (Important)
- ❌ **Chinese filenames are prohibited** (causes URL encoding issues in H5 mode)
- ✅ Use English, numbers, and underscores: `floor1-01.jpg`

**Reason**: Chinese filenames undergo URL encoding in H5 mode (e.g., `%E5%BE%AE%E4%BF%A1...`), preventing images from loading correctly.

## Color Guidelines

- Primary: `#E8A868` (Warm Orange)
- Background: `#FAF8F5` (Light Beige)
- Text: `#5D4E37` (Dark Brown)
- Accent: `#F5F0E8` (Warm Beige)

## TabBar Icons

Using network image URLs (icons8):
- Home: home.png
- Property Details: key.png
- Contact: phone.png

## Platform Compatibility Notes

### WeChat Mini Program
- API calls use the `uni.*` namespace
- Image limit: Single image must not exceed 2MB
- Units: Use `rpx` (750rpx = screen width)

### H5 Browser Mode
- Used for development & debugging, not for production
- TabBar does not display in H5 mode (native component limitation)
- Static assets served via Vite

## Technical Limitations

1. **No CSS `aspect-ratio`** (Not compatible with H5)
   - Alternative: `padding-bottom: 100%` + `position: relative/absolute`

2. **Image Tag Selection**
   - WeChat Mini Program: Use `<image>`
   - H5 Compatibility: Use `<img>` (native HTML tag)

3. **Image Preview Limitation** (WeChat Mini Program)
   - The `uni.previewImage` API **does not support local static paths** (e.g., `/static/...`) in WeChat Mini Programs.
   - Only supports: Network URLs (http/https), temporary file paths, or local file paths.
   - Current solution: Disable image preview in Mini Program mode (only available in H5).

4. **Video Playback Limitation** (WeChat Mini Program)
   - WeChat Mini Programs have limited support for local video files.
   - Current solution: Videos are temporarily hidden in Mini Program mode (only available in H5).

## Common Code Patterns

### Page Navigation

```javascript
// Tab page switching
uni.switchTab({
  url: '/pages/rooms/rooms'
})

// Standard page navigation
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

## Development Documentation

For detailed development guides, please refer to:
- [CLAUDE.md](./CLAUDE.md) - Claude Code Development Guide
- [development-log.md](./docs/development-log.md) - Development Log

## License

Apache License 2.0
