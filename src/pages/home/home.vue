<template>
  <view class="home-page">
    <!-- 顶部欢迎区 -->
    <view class="welcome-section">
      <text class="greeting">欢迎光临</text>
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

    <!-- 快捷入口 -->
    <view class="quick-links-section">
      <view class="link-card" @tap="goToRooms">
        <view class="link-icon-wrapper">
          <text class="link-icon">🏠</text>
        </view>
        <view class="link-content">
          <text class="link-title">房源详情</text>
          <text class="link-desc">查看位置、设施等信息</text>
        </view>
        <text class="link-arrow">→</text>
      </view>

      <view class="link-card" @tap="goToContact">
        <view class="link-icon-wrapper">
          <text class="link-icon">📞</text>
        </view>
        <view class="link-content">
          <text class="link-title">联系我们</text>
          <text class="link-desc">获取更多咨询</text>
        </view>
        <text class="link-arrow">→</text>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'

const bannerImages = ref([
  '/static/images/banner/微信图片_20260305182810_160_116.jpg',
  '/static/images/banner/微信图片_20260305182812_161_116.jpg',
  '/static/images/banner/微信图片_20260305182558_142_116.jpg',
  '/static/images/banner/微信图片_20260305182602_144_116.jpg',
  '/static/images/banner/微信图片_20260305182800_155_116.jpg',
])

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

const goToRooms = () => {
  uni.switchTab({
    url: '/pages/rooms/rooms'
  })
}

const goToContact = () => {
  uni.switchTab({
    url: '/pages/contact/contact'
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

.quick-links-section {
  padding: 0 30rpx;
  display: flex;
  flex-direction: column;
  gap: 30rpx;
}

.link-card {
  background: #FFFFFF;
  border-radius: 24rpx;
  padding: 36rpx 40rpx;
  display: flex;
  align-items: center;
  box-shadow: 0 4rpx 20rpx rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.link-card:active {
  transform: scale(0.98);
  box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.05);
}

.link-icon-wrapper {
  width: 88rpx;
  height: 88rpx;
  background: rgba(232, 168, 104, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 24rpx;
}

.link-icon {
  font-size: 40rpx;
}

.link-content {
  flex: 1;
}

.link-title {
  display: block;
  font-size: 32rpx;
  font-weight: 600;
  color: #5D4E37;
  margin-bottom: 8rpx;
}

.link-desc {
  display: block;
  font-size: 24rpx;
  color: #999999;
}

.link-arrow {
  font-size: 36rpx;
  color: #CCCCCC;
}
</style>
