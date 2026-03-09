<template>
  <view class="contact-page">
    <!-- 顶部欢迎 -->
    <view class="header-section">
      <text class="header-title">联系我们</text>
      <text class="header-subtitle">随时为您服务</text>
    </view>

    <!-- 联系方式卡片 -->
    <view class="contact-card">
      <view class="contact-item" @tap="makeCall">
        <view class="contact-icon">📞</view>
        <view class="contact-info">
          <text class="contact-label">电话咨询</text>
          <text class="contact-value">138-0000-0000</text>
        </view>
        <text class="contact-arrow">→</text>
      </view>

      <view class="contact-divider"></view>

      <view class="contact-item" @tap="copyWechat">
        <view class="contact-icon">💬</view>
        <view class="contact-info">
          <text class="contact-label">微信咨询</text>
          <text class="contact-value">wx_minisut_123</text>
        </view>
        <text class="contact-arrow">→</text>
      </view>

      <view class="contact-divider"></view>

      <view class="contact-item" @tap="openLocation">
        <view class="contact-icon">📍</view>
        <view class="contact-info">
          <text class="contact-label">详细地址</text>
          <text class="contact-value">某某市某某区某某街道123号</text>
        </view>
        <text class="contact-arrow">→</text>
      </view>
    </view>

    <!-- 地图预览 -->
    <view class="map-section">
      <view class="map-header">
        <text class="map-title">位置导航</text>
        <text class="map-subtitle">点击地图查看详细位置</text>
      </view>

      <view class="map-placeholder" @tap="openMap">
        <text class="map-icon">🗺️</text>
        <text class="map-text">点击打开地图</text>
      </view>
    </view>

    <!-- 交通信息 -->
    <view class="traffic-section">
      <view class="traffic-header">
        <text class="traffic-title">交通指南</text>
      </view>

      <view class="traffic-item">
        <view class="traffic-icon">🚇</view>
        <view class="traffic-content">
          <text class="traffic-name">地铁</text>
          <text class="traffic-desc">距离XX地铁站约500米，步行5分钟</text>
        </view>
      </view>

      <view class="traffic-item">
        <view class="traffic-icon">🚌</view>
        <view class="traffic-content">
          <text class="traffic-name">公交</text>
          <text class="traffic-desc">多条公交线路可达，XX路站下车</text>
        </view>
      </view>

      <view class="traffic-item">
        <view class="traffic-icon">✈️</view>
        <view class="traffic-content">
          <text class="traffic-name">机场</text>
          <text class="traffic-desc">距离机场约30公里，打车约40分钟</text>
        </view>
      </view>
    </view>

    <!-- 预订提示 -->
    <view class="booking-section">
      <view class="booking-card">
        <text class="booking-title">预订须知</text>
        <text class="booking-desc">如需预订，请提前通过电话或微信联系我们</text>
        <view class="booking-tags">
          <text class="booking-tag">需提前预订</text>
          <text class="booking-tag">支持在线咨询</text>
        </view>
      </view>
    </view>

    <!-- 底部提示 -->
    <view class="footer-section">
      <text class="footer-text">期待您的光临</text>
    </view>
  </view>
</template>

<script setup>
const makeCall = () => {
  uni.makePhoneCall({
    phoneNumber: '13800000000'
  })
}

const copyWechat = () => {
  uni.setClipboardData({
    data: 'wx_minisut_123',
    success: () => {
      uni.showToast({
        title: '微信号已复制',
        icon: 'success'
      })
    }
  })
}

const openLocation = () => {
  uni.openLocation({
    latitude: 39.90469,
    longitude: 116.40717,
    name: '温馨民宿',
    address: '某某市某某区某某街道123号'
  })
}

const openMap = () => {
  openLocation()
}
</script>

<style lang="scss" scoped>
.contact-page {
  min-height: 100vh;
  background: #FAF8F5;
  padding-bottom: 60rpx;
}

.header-section {
  padding: 60rpx 40rpx 40rpx;
  text-align: center;
}

.header-title {
  display: block;
  font-size: 44rpx;
  font-weight: 600;
  color: #5D4E37;
  margin-bottom: 16rpx;
}

.header-subtitle {
  display: block;
  font-size: 28rpx;
  color: #999999;
}

.contact-card {
  background: #FFFFFF;
  margin: 0 30rpx 40rpx;
  border-radius: 24rpx;
  overflow: hidden;
  box-shadow: 0 8rpx 30rpx rgba(232, 168, 104, 0.1);
}

.contact-item {
  display: flex;
  align-items: center;
  padding: 40rpx;
}

.contact-icon {
  width: 80rpx;
  height: 80rpx;
  background: rgba(232, 168, 104, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36rpx;
  margin-right: 24rpx;
}

.contact-info {
  flex: 1;
}

.contact-label {
  display: block;
  font-size: 28rpx;
  color: #999999;
  margin-bottom: 8rpx;
}

.contact-value {
  display: block;
  font-size: 32rpx;
  color: #5D4E37;
  font-weight: 500;
}

.contact-arrow {
  font-size: 32rpx;
  color: #CCCCCC;
}

.contact-divider {
  height: 1rpx;
  background: rgba(0, 0, 0, 0.05);
  margin: 0 40rpx;
}

.map-section {
  background: #FFFFFF;
  margin: 0 30rpx 40rpx;
  border-radius: 24rpx;
  overflow: hidden;
  box-shadow: 0 8rpx 30rpx rgba(232, 168, 104, 0.1);
}

.map-header {
  padding: 40rpx 40rpx 30rpx;
}

.map-title {
  display: block;
  font-size: 36rpx;
  font-weight: 600;
  color: #5D4E37;
  margin-bottom: 8rpx;
}

.map-subtitle {
  display: block;
  font-size: 24rpx;
  color: #999999;
}

.map-placeholder {
  height: 300rpx;
  background: linear-gradient(135deg, rgba(232, 168, 104, 0.1) 0%, rgba(212, 149, 90, 0.1) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.map-icon {
  font-size: 64rpx;
  margin-bottom: 16rpx;
}

.map-text {
  font-size: 28rpx;
  color: #E8A868;
}

.traffic-section {
  background: #FFFFFF;
  margin: 0 30rpx 40rpx;
  border-radius: 24rpx;
  padding: 40rpx;
  box-shadow: 0 8rpx 30rpx rgba(232, 168, 104, 0.1);
}

.traffic-header {
  margin-bottom: 30rpx;
}

.traffic-title {
  font-size: 36rpx;
  font-weight: 600;
  color: #5D4E37;
}

.traffic-item {
  display: flex;
  align-items: flex-start;
  padding: 30rpx 0;
  border-bottom: 1rpx solid rgba(0, 0, 0, 0.05);
}

.traffic-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.traffic-item:first-child {
  padding-top: 0;
}

.traffic-icon {
  font-size: 40rpx;
  margin-right: 24rpx;
  margin-top: 4rpx;
}

.traffic-content {
  flex: 1;
}

.traffic-name {
  display: block;
  font-size: 30rpx;
  color: #5D4E37;
  font-weight: 500;
  margin-bottom: 8rpx;
}

.traffic-desc {
  display: block;
  font-size: 26rpx;
  color: #999999;
  line-height: 1.6;
}

.booking-section {
  padding: 0 30rpx;
}

.booking-card {
  background: linear-gradient(135deg, #E8A868 0%, #D4955A 100%);
  border-radius: 24rpx;
  padding: 50rpx 40rpx;
  text-align: center;
}

.booking-title {
  display: block;
  font-size: 36rpx;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 16rpx;
}

.booking-desc {
  display: block;
  font-size: 28rpx;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 30rpx;
}

.booking-tags {
  display: flex;
  justify-content: center;
  gap: 16rpx;
}

.booking-tag {
  padding: 10rpx 24rpx;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 30rpx;
  font-size: 24rpx;
  color: #FFFFFF;
}

.footer-section {
  padding: 60rpx 40rpx 40rpx;
  text-align: center;
}

.footer-text {
  font-size: 26rpx;
  color: #CCCCCC;
}
</style>
