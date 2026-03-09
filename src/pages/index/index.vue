<template>
  <view class="welcome-page">
    <!-- 图片轮播 -->
    <view class="swiper-section">
      <swiper
        class="banner-swiper"
        :indicator-dots="true"
        :autoplay="true"
        :interval="3000"
        :duration="500"
        indicator-color="rgba(255,255,255,0.5)"
        indicator-active-color="#E8A868"
      >
        <swiper-item v-for="(img, index) in bannerImages" :key="index">
          <image class="banner-image" :src="img" mode="aspectFill"></image>
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

    <!-- 简介文字 -->
    <view class="intro-section">
      <text class="intro-title">温馨舒适的民宿</text>
      <text class="intro-text">位于风景优美的区域，为您提供舒适的住宿体验</text>
    </view>

    <!-- 视频入口卡片 -->
    <view class="video-entry-section">
      <view class="video-card" @tap="playVideo">
        <image class="video-thumbnail" src="/static/images/banner/微信图片_20260305182440_128_116.jpg" mode="aspectFill"></image>
        <view class="play-overlay">
          <view class="play-icon">▶</view>
          <text class="play-text">观看视频</text>
        </view>
      </view>
    </view>

    <!-- 底部引导 -->
    <view class="bottom-section">
      <button class="enter-home-btn" @tap="goToHome">
        <text>立即入住</text>
      </button>
    </view>

    <!-- 视频弹窗 -->
    <view v-if="showVideoModal" class="video-modal" @tap="closeVideo">
      <view class="video-content" @tap.stop>
        <video
          class="modal-video"
          src="/static/videos/0ee6398ff4993cb749afc60bf7eaf427.mp4"
          :autoplay="true"
          :controls="true"
          :loop="false"
          objectFit="contain"
          @ended="onVideoEnded"
        ></video>
        <view class="close-btn" @tap="closeVideo">✕</view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'

const showVideoModal = ref(false)

// 轮播图（使用1楼图片作为示例）
const bannerImages = ref([
  '/static/images/banner/微信图片_20260305182440_128_116.jpg',
  '/static/images/banner/微信图片_20260305182442_129_116.jpg',
  '/static/images/banner/微信图片_20260305182444_130_116.jpg',
])

// 特色标签
const features = ref([
  { icon: '🚇', text: '近地铁' },
  { icon: '🚿', text: '独卫' },
  { icon: '🍳', text: '可做饭' },
  { icon: '📶', text: 'WiFi' },
])

const playVideo = () => {
  showVideoModal.value = true
}

const closeVideo = () => {
  showVideoModal.value = false
}

const onVideoEnded = () => {
  // Video ended, modal stays open until user closes it
}

const goToHome = () => {
  uni.switchTab({
    url: '/pages/home/home'
  })
}
</script>

<style lang="scss" scoped>
.welcome-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #FAF8F5 0%, #F5F0E8 100%);
}

.swiper-section {
  width: 100%;
  height: 700rpx;
}

.banner-swiper {
  width: 100%;
  height: 100%;
}

.banner-image {
  width: 100%;
  height: 100%;
}

.features-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 60rpx 40rpx 40rpx;
  gap: 30rpx;
}

.feature-tag {
  display: flex;
  align-items: center;
  padding: 20rpx 40rpx;
  background: #FFFFFF;
  border-radius: 50rpx;
  box-shadow: 0 4rpx 20rpx rgba(232, 168, 104, 0.15);
}

.tag-icon {
  font-size: 36rpx;
  margin-right: 10rpx;
}

.tag-text {
  font-size: 28rpx;
  color: #5D4E37;
}

.intro-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40rpx 60rpx;
}

.intro-title {
  font-size: 40rpx;
  font-weight: 600;
  color: #5D4E37;
  margin-bottom: 20rpx;
}

.intro-text {
  font-size: 28rpx;
  color: #999999;
  text-align: center;
  line-height: 1.8;
}

.video-entry-section {
  padding: 40rpx 60rpx;
}

.video-card {
  position: relative;
  width: 100%;
  height: 400rpx;
  border-radius: 24rpx;
  overflow: hidden;
  box-shadow: 0 8rpx 30rpx rgba(232, 168, 104, 0.2);
}

.video-thumbnail {
  width: 100%;
  height: 100%;
}

.play-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
}

.video-card:active .play-overlay {
  background: rgba(0, 0, 0, 0.4);
}

.play-icon {
  width: 100rpx;
  height: 100rpx;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40rpx;
  color: #E8A868;
  margin-bottom: 20rpx;
  box-shadow: 0 4rpx 20rpx rgba(0, 0, 0, 0.2);
}

.play-text {
  font-size: 28rpx;
  color: #FFFFFF;
  font-weight: 500;
  text-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.3);
}

.bottom-section {
  padding: 60rpx 80rpx;
}

.enter-home-btn {
  width: 100%;
  height: 100rpx;
  background: linear-gradient(135deg, #E8A868 0%, #D4955A 100%);
  border-radius: 50rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
}

.enter-home-btn text {
  font-size: 32rpx;
  color: #FFFFFF;
  font-weight: 500;
}

.video-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.video-content {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-video {
  width: 100%;
  height: 100%;
}

.close-btn {
  position: absolute;
  top: 80rpx;
  right: 40rpx;
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48rpx;
  color: #FFFFFF;
  backdrop-filter: blur(10rpx);
  z-index: 10000;
}

.close-btn:active {
  background: rgba(255, 255, 255, 0.3);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20rpx);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
