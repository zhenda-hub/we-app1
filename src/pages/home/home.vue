<template>
  <view class="home-page">
    <!-- 顶部欢迎区 -->
    <view class="welcome-section">
      <text class="welcome-title">欢迎来到温馨民宿</text>
      <text class="welcome-subtitle">舒适的住宿，美好的体验</text>
    </view>

    <!-- 民宿介绍卡片 -->
    <view class="intro-card">
      <image class="intro-image" src="/static/images/banner/微信图片_20260305182440_128_116.jpg" mode="aspectFill"></image>
      <view class="intro-content">
        <text class="intro-heading">关于我们</text>
        <text class="intro-desc">
          我们的民宿位于交通便利的地段，周边配套设施齐全。为您提供温馨舒适的住宿环境，让您在旅途中感受到家的温暖。
        </text>
      </view>
    </view>

    <!-- 房型预览 -->
    <view class="rooms-preview">
      <view class="section-header">
        <text class="section-title">房型介绍</text>
        <text class="section-more" @tap="goToRooms">查看全部 →</text>
      </view>

      <view class="room-card" @tap="goToRooms">
        <image class="room-image" src="/static/images/floor1/微信图片_20260305182440_128_116.jpg" mode="aspectFill"></image>
        <view class="room-info">
          <text class="room-name">1楼房型</text>
          <text class="room-desc">宽敞明亮，独立卫浴</text>
          <view class="room-tags">
            <text class="room-tag">独卫</text>
            <text class="room-tag">WiFi</text>
          </view>
        </view>
      </view>

      <view class="room-card" @tap="goToRooms">
        <image class="room-image" src="/static/images/floor2/微信图片_20260305182548_137_116.jpg" mode="aspectFill"></image>
        <view class="room-info">
          <text class="room-name">2楼房型</text>
          <text class="room-desc">安静舒适，视野开阔</text>
          <view class="room-tags">
            <text class="room-tag">独卫</text>
            <text class="room-tag">阳台</text>
          </view>
        </view>
      </view>
    </view>

    <!-- 特色设施 -->
    <view class="facilities-section">
      <view class="section-header">
        <text class="section-title">特色设施</text>
      </view>

      <view class="facilities-grid">
        <view class="facility-item" v-for="(item, index) in facilities" :key="index">
          <text class="facility-icon">{{ item.icon }}</text>
          <text class="facility-name">{{ item.name }}</text>
        </view>
      </view>
    </view>

    <!-- 联系引导 -->
    <view class="contact-section">
      <view class="contact-card" @tap="goToContact">
        <text class="contact-title">联系我们</text>
        <text class="contact-desc">如有任何问题，欢迎随时联系</text>
        <text class="contact-btn">立即咨询 →</text>
      </view>
    </view>
  </view>
</template>

<script setup>
const facilities = ref([
  { icon: '📶', name: '免费WiFi' },
  { icon: '🚿', name: '独立卫浴' },
  { icon: '❄️', name: '空调' },
  { icon: '🍳', name: '可做饭' },
  { icon: '🧹', name: '每日清洁' },
  { icon: '🚇', name: '近地铁' },
])

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
  padding: 60rpx 40rpx 40rpx;
  text-align: center;
}

.welcome-title {
  display: block;
  font-size: 44rpx;
  font-weight: 600;
  color: #5D4E37;
  margin-bottom: 16rpx;
}

.welcome-subtitle {
  display: block;
  font-size: 28rpx;
  color: #999999;
}

.intro-card {
  margin: 0 30rpx 40rpx;
  background: #FFFFFF;
  border-radius: 24rpx;
  overflow: hidden;
  box-shadow: 0 8rpx 30rpx rgba(232, 168, 104, 0.1);
}

.intro-image {
  width: 100%;
  height: 400rpx;
}

.intro-content {
  padding: 40rpx;
}

.intro-heading {
  display: block;
  font-size: 36rpx;
  font-weight: 600;
  color: #5D4E37;
  margin-bottom: 20rpx;
}

.intro-desc {
  display: block;
  font-size: 28rpx;
  color: #666666;
  line-height: 1.8;
}

.rooms-preview {
  padding: 0 30rpx 40rpx;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30rpx;
  padding: 0 10rpx;
}

.section-title {
  font-size: 36rpx;
  font-weight: 600;
  color: #5D4E37;
}

.section-more {
  font-size: 26rpx;
  color: #E8A868;
}

.room-card {
  background: #FFFFFF;
  border-radius: 24rpx;
  overflow: hidden;
  margin-bottom: 30rpx;
  box-shadow: 0 8rpx 30rpx rgba(232, 168, 104, 0.1);
}

.room-image {
  width: 100%;
  height: 350rpx;
}

.room-info {
  padding: 30rpx;
}

.room-name {
  display: block;
  font-size: 32rpx;
  font-weight: 600;
  color: #5D4E37;
  margin-bottom: 12rpx;
}

.room-desc {
  display: block;
  font-size: 26rpx;
  color: #999999;
  margin-bottom: 20rpx;
}

.room-tags {
  display: flex;
  gap: 16rpx;
}

.room-tag {
  padding: 8rpx 24rpx;
  background: rgba(232, 168, 104, 0.1);
  border-radius: 30rpx;
  font-size: 24rpx;
  color: #E8A868;
}

.facilities-section {
  padding: 0 30rpx 40rpx;
}

.facilities-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24rpx;
}

.facility-item {
  background: #FFFFFF;
  border-radius: 20rpx;
  padding: 40rpx 20rpx;
  text-align: center;
  box-shadow: 0 4rpx 20rpx rgba(232, 168, 104, 0.08);
}

.facility-icon {
  display: block;
  font-size: 48rpx;
  margin-bottom: 16rpx;
}

.facility-name {
  display: block;
  font-size: 24rpx;
  color: #666666;
}

.contact-section {
  padding: 0 30rpx;
}

.contact-card {
  background: linear-gradient(135deg, #E8A868 0%, #D4955A 100%);
  border-radius: 24rpx;
  padding: 50rpx 40rpx;
  text-align: center;
}

.contact-title {
  display: block;
  font-size: 36rpx;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 16rpx;
}

.contact-desc {
  display: block;
  font-size: 26rpx;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 30rpx;
}

.contact-btn {
  display: inline-block;
  padding: 20rpx 50rpx;
  background: #FFFFFF;
  border-radius: 50rpx;
  font-size: 28rpx;
  color: #E8A868;
  font-weight: 500;
}
</style>
