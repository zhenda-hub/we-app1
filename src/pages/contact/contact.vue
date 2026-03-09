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

/* 桌面端优化 */
@media (min-width: 768px) {
  .contact-page {
    max-width: 800px;
    margin: 0 auto;
    padding-bottom: 80px;
  }

  .header-section {
    padding: 40px 20px 30px;
  }

  .header-title {
    font-size: 32px;
  }

  .header-subtitle {
    font-size: 18px;
  }

  .contact-card {
    max-width: 600px;
    margin: 0 auto 40px;
    border-radius: 16px;
  }

  .contact-item {
    padding: 28px 32px;
  }

  .contact-icon {
    width: 60px;
    height: 60px;
    font-size: 28px;
  }

  .contact-label {
    font-size: 14px;
  }

  .contact-value {
    font-size: 18px;
  }

  .contact-arrow {
    font-size: 24px;
  }

  .booking-section {
    padding: 0 20px;
  }

  .booking-card {
    max-width: 600px;
    margin: 0 auto;
    padding: 36px 32px;
    border-radius: 16px;
  }

  .booking-title {
    font-size: 24px;
  }

  .booking-desc {
    font-size: 16px;
  }

  .booking-tags {
    gap: 12px;
  }

  .booking-tag {
    padding: 8px 20px;
    font-size: 14px;
  }

  .footer-section {
    padding: 40px 20px 30px;
  }

  .footer-text {
    font-size: 14px;
  }
}
</style>
