<template>
  <view class="home-page">
    <!-- 顶部欢迎区 -->
    <view class="welcome-section">
      <text class="greeting">童话森林里民宿</text>
      <text class="subtitle">温馨舒适的家园，优质房源值得拥有</text>
    </view>

    <!-- 大图轮播 -->
    <view class="banner-section">
      <swiper
        class="banner-swiper"
        :indicator-dots="true"
        :autoplay="true"
        :interval="5000"
        :duration="500"
        indicator-color="rgba(255, 255, 255, 0.4)"
        indicator-active-color="#E8A868"
      >
        <swiper-item v-for="(img, index) in bannerImages" :key="index">
          <image class="banner-image" :src="img" mode="aspectFill" @tap="previewImage(bannerImages, index)" />
        </swiper-item>
      </swiper>
    </view>

    <!-- 特色标签 -->
    <view class="features-section">
      <view class="feature-tag" v-for="(tag, index) in features" :key="index">
        <text class="tag-icon">{{ tag.icon }}</text>
        <text class="tag-text">{{ tag.text }}</text>
      </view>
    </view>

  </view>
</template>

<script setup>
import { ref } from 'vue'

// jsDelivr CDN 加速 GitHub（国内访问快）
const cdnBase = 'https://cdn.jsdelivr.net/gh/zhenda-hub/we-app1@main/src/static'

// 自动导入 banner 图片并转换为 CDN 链接
const bannerModules = import.meta.glob('../../static/images/banner/*.{jpg,png,jpeg}', {
  eager: true
})

// 将本地文件路径转换为 CDN 链接
const toCdnUrls = (modules) => {
  return Object.keys(modules)
    .map(path => path.split('/').pop())
    .sort()
    .map(filename => `${cdnBase}/images/banner/${filename}`)
}

const bannerImages = ref(toCdnUrls(bannerModules))

// 如果 banner 目录为空，使用默认图片
if (bannerImages.value.length === 0) {
  bannerImages.value = [`${cdnBase}/images/floor1/floor1-01.jpg`]
}

const features = ref([
  { icon: '🚇', text: '近地铁' },
  { icon: '🚿', text: '独立卫浴' },
  { icon: '🍳', text: '可做饭' },
  { icon: '📶', text: '免费WiFi' },
])

const previewImage = (images, index) => {
  uni.previewImage({
    urls: images,
    current: index
  })
}

</script>

<style lang="scss" scoped>
.home-page {
  min-height: 100vh;
  background: #FAF8F5;
  padding-bottom: 40rpx;
}

.welcome-section {
  padding: 60rpx 40rpx 50rpx;
  text-align: center;
}

.greeting {
  display: block;
  font-size: 48rpx;
  font-weight: 600;
  color: #5D4E37;
  margin-bottom: 20rpx;
}

.subtitle {
  display: block;
  font-size: 28rpx;
  color: #999999;
  line-height: 1.6;
}

.banner-section {
  padding: 0 30rpx 60rpx;
}

.banner-swiper {
  height: 500rpx;
  border-radius: 24rpx;
  overflow: hidden;
  box-shadow: 0 8rpx 30rpx rgba(232, 168, 104, 0.15);
}

.banner-image {
  width: 100%;
  height: 100%;
}

.features-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24rpx;
  padding: 20rpx 40rpx 60rpx;
}

.feature-tag {
  display: flex;
  align-items: center;
  gap: 12rpx;
  padding: 20rpx 32rpx;
  background: #FFFFFF;
  border-radius: 50rpx;
  box-shadow: 0 4rpx 20rpx rgba(232, 168, 104, 0.08);
}

.tag-icon {
  font-size: 32rpx;
}

.tag-text {
  font-size: 28rpx;
  color: #5D4E37;
  font-weight: 500;
}

/* 桌面端优化 */
@media (min-width: 768px) {
  .home-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px;
  }

  .welcome-section {
    padding: 40px 20px 30px;
  }

  .greeting {
    font-size: 36px;
    margin-bottom: 12px;
  }

  .subtitle {
    font-size: 18px;
  }

  .banner-section {
    padding: 0 20px 40px;
  }

  .banner-swiper {
    height: 500px;
  }

  .banner-image {
    border-radius: 16px;
  }

  .features-section {
    gap: 16px;
    padding: 20px 20px 40px;
  }

  .feature-tag {
    padding: 12px 24px;
  }

  .tag-icon {
    font-size: 24px;
  }

  .tag-text {
    font-size: 16px;
  }

}
</style>
