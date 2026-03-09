<template>
  <view class="rooms-page">
    <!-- 页面标题 -->
    <view class="page-header">
      <text class="page-title">房源详情</text>
      <text class="page-subtitle">温馨舒适的家</text>
    </view>

    <scroll-view class="detail-content" scroll-y>
      <!-- 位置信息 -->
      <view class="section">
        <text class="section-title">📍 位置</text>
        <text class="section-text">{{ roomInfo.location }}</text>
      </view>

      <!-- 交通信息 -->
      <view class="section">
        <text class="section-title">🚇 交通</text>
        <view class="traffic-list">
          <view class="traffic-item" v-for="(item, index) in roomInfo.traffic" :key="index">
            <view class="traffic-icon-wrapper">
              <text class="traffic-icon">{{ item.icon }}</text>
            </view>
            <text class="traffic-text">{{ item.text }}</text>
          </view>
        </view>
      </view>

      <!-- 核心优势 -->
      <view class="section">
        <text class="section-title">⭐ 核心优势</text>
        <view class="advantage-tags">
          <text class="advantage-tag" v-for="(item, index) in roomInfo.advantages" :key="index">
            {{ item }}
          </text>
        </view>
      </view>

      <!-- 图片展示 -->
      <view class="section">
        <text class="section-title">📷 房源图片</text>
        <swiper
          class="gallery-swiper"
          :indicator-dots="true"
          :autoplay="false"
          :interval="5000"
          :duration="500"
          indicator-color="rgba(232, 168, 104, 0.3)"
          indicator-active-color="#E8A868"
        >
          <swiper-item v-for="(img, index) in roomInfo.images" :key="index">
            <image class="gallery-image" :src="img" mode="aspectFill" @tap="previewImage(roomInfo.images, index)" />
          </swiper-item>
        </swiper>
      </view>

      <!-- 视频展示 -->
      <view class="section" v-if="roomInfo.video">
        <text class="section-title">🎬 视频展示</text>
        <video
          class="room-video"
          :src="roomInfo.video"
          :controls="true"
          :autoplay="false"
          :show-play-btn="true"
          :show-center-play-btn="true"
          objectFit="contain"
        ></video>
      </view>

      <!-- 设施清单 -->
      <view class="section">
        <text class="section-title">🛠 房屋设施</text>
        <view class="amenities-grid">
          <view class="amenity-item" v-for="(item, index) in roomInfo.amenities" :key="index">
            <text class="amenity-icon">{{ item.icon }}</text>
            <text class="amenity-text">{{ item.text }}</text>
          </view>
        </view>
      </view>

      <!-- 购房链接 -->
      <view class="section action-section">
        <button class="purchase-btn" @tap="openPurchaseLink">
          了解更多 / 购房咨询
        </button>
      </view>
    </scroll-view>
  </view>
</template>

<script setup>
import { ref } from 'vue'

const roomInfo = ref({
  location: 'xx区xx街道xx号',
  traffic: [
    { icon: '🚇', text: '地铁1号线 xx站 500米' },
    { icon: '🚌', text: '公交xx路 xx站' },
    { icon: '✈️', text: '距离机场约30公里' },
  ],
  advantages: [
    '近地铁',
    '独立出入',
    '可做饭',
    '采光好',
    '安静舒适',
    '独立卫浴'
  ],
  images: [
    '/static/images/floor1/微信图片_20260305182810_160_116.jpg',
    '/static/images/floor1/微信图片_20260305182812_161_116.jpg',
    '/static/images/floor1/微信图片_20260305182808_159_116.jpg',
    '/static/images/floor1/微信图片_20260305182804_157_116.jpg',
    '/static/images/floor1/微信图片_20260305182806_158_116.jpg',
    '/static/images/floor2/微信图片_20260305182310_120_116.jpg',
    '/static/images/floor2/微信图片_20260305182350_126_116.jpg',
    '/static/images/bathroom/微信图片_20260305181838_96_116.jpg',
    '/static/images/bathroom/微信图片_20260305181840_97_116.jpg',
  ],
  video: '/static/videos/0ee6398ff4993cb749afc60bf7eaf427.mp4',
  amenities: [
    { icon: '📶', text: '免费WiFi' },
    { icon: '🚿', text: '独立卫浴' },
    { icon: '❄️', text: '空调' },
    { icon: '🍳', text: '可做饭' },
    { icon: '🧹', text: '每日清洁' },
    { icon: '🚇', text: '近地铁' },
    { icon: '📺', text: '电视' },
    { icon: '🧴', text: '洗漱用品' },
  ],
  purchaseUrl: 'https://example.com'
})

const previewImage = (images, index) => {
  uni.previewImage({
    urls: images,
    current: index
  })
}

const openPurchaseLink = () => {
  // 复制链接到剪贴板
  uni.setClipboardData({
    data: roomInfo.value.purchaseUrl,
    success: () => {
      uni.showToast({
        title: '链接已复制',
        icon: 'success'
      })
    }
  })
}
</script>

<style lang="scss" scoped>
.rooms-page {
  min-height: 100vh;
  background: #FAF8F5;
  padding-bottom: 40rpx;
}

.page-header {
  padding: 60rpx 40rpx 40rpx;
  text-align: center;
}

.page-title {
  display: block;
  font-size: 44rpx;
  font-weight: 600;
  color: #5D4E37;
  margin-bottom: 16rpx;
}

.page-subtitle {
  display: block;
  font-size: 28rpx;
  color: #999999;
}

.detail-content {
  height: calc(100vh - 200rpx);
}

.section {
  background: #FFFFFF;
  border-radius: 24rpx;
  padding: 40rpx;
  margin: 0 30rpx 30rpx;
  box-shadow: 0 8rpx 30rpx rgba(232, 168, 104, 0.1);
}

.section-title {
  display: block;
  font-size: 36rpx;
  font-weight: 600;
  color: #5D4E37;
  margin-bottom: 30rpx;
}

.section-text {
  display: block;
  font-size: 28rpx;
  color: #666666;
  line-height: 1.8;
}

.traffic-list {
  display: flex;
  flex-direction: column;
  gap: 24rpx;
}

.traffic-item {
  display: flex;
  align-items: center;
  gap: 20rpx;
  padding: 24rpx;
  background: rgba(232, 168, 104, 0.08);
  border-radius: 16rpx;
}

.traffic-icon-wrapper {
  width: 64rpx;
  height: 64rpx;
  background: #FFFFFF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.traffic-icon {
  font-size: 32rpx;
}

.traffic-text {
  flex: 1;
  font-size: 28rpx;
  color: #5D4E37;
}

.advantage-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 16rpx;
}

.advantage-tag {
  padding: 12rpx 28rpx;
  background: rgba(232, 168, 104, 0.15);
  border-radius: 50rpx;
  font-size: 26rpx;
  color: #E8A868;
  font-weight: 500;
}

.gallery-swiper {
  height: 500rpx;
  border-radius: 16rpx;
  overflow: hidden;
}

.gallery-image {
  width: 100%;
  height: 100%;
}

.room-video {
  width: 100%;
  height: 500rpx;
  border-radius: 16rpx;
}

.amenities-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30rpx;
}

.amenity-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30rpx 20rpx;
  background: rgba(232, 168, 104, 0.08);
  border-radius: 16rpx;
}

.amenity-icon {
  font-size: 44rpx;
  margin-bottom: 12rpx;
}

.amenity-text {
  font-size: 24rpx;
  color: #666666;
  text-align: center;
}

.action-section {
  padding: 50rpx 40rpx;
  margin-bottom: 0;
}

.purchase-btn {
  width: 100%;
  height: 100rpx;
  background: linear-gradient(135deg, #E8A868 0%, #D4955A 100%);
  border-radius: 50rpx;
  color: #FFFFFF;
  font-size: 32rpx;
  font-weight: 600;
  border: none;
  box-shadow: 0 8rpx 30rpx rgba(232, 168, 104, 0.3);
}

.purchase-btn::after {
  border: none;
}

.purchase-btn:active {
  opacity: 0.9;
}
</style>
