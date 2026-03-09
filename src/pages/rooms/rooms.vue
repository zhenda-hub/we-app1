<template>
  <view class="rooms-page">
    <!-- 1楼展示 -->
    <view class="floor-section">
      <view class="floor-header">
        <text class="floor-title">1楼</text>
        <text class="floor-subtitle">Floor 1</text>
      </view>

      <view class="image-grid">
        <view
          class="image-item"
          v-for="(img, index) in floor1Images"
          :key="index"
          @tap="previewImage(floor1Images, index)"
        >
          <image class="room-image" :src="img" mode="aspectFill"></image>
        </view>
      </view>

      <view class="floor-desc">
        <text class="desc-text">宽敞明亮的空间，配有舒适的床品和独立卫浴，适合短期居住。</text>
      </view>
    </view>

    <!-- 2楼展示 -->
    <view class="floor-section">
      <view class="floor-header">
        <text class="floor-title">2楼</text>
        <text class="floor-subtitle">Floor 2</text>
      </view>

      <view class="image-grid">
        <view
          class="image-item"
          v-for="(img, index) in floor2Images"
          :key="index"
          @tap="previewImage(floor2Images, index)"
        >
          <image class="room-image" :src="img" mode="aspectFill"></image>
        </view>
      </view>

      <view class="floor-desc">
        <text class="desc-text">安静舒适的环境，视野开阔，配有阳台，可欣赏周边风景。</text>
      </view>
    </view>

    <!-- 卫生间展示 -->
    <view class="floor-section">
      <view class="floor-header">
        <text class="floor-title">卫生间</text>
        <text class="floor-subtitle">Bathroom</text>
      </view>

      <view class="image-grid">
        <view
          class="image-item"
          v-for="(img, index) in bathroomImages"
          :key="index"
          @tap="previewImage(bathroomImages, index)"
        >
          <image class="room-image" :src="img" mode="aspectFill"></image>
        </view>
      </view>

      <view class="floor-desc">
        <text class="desc-text">干净整洁的独立卫浴，24小时热水供应，配备洗漱用品。</text>
      </view>
    </view>

    <!-- 设施标签 -->
    <view class="amenities-section">
      <view class="amenities-header">
        <text class="amenities-title">房间设施</text>
      </view>

      <view class="amenities-list">
        <view class="amenity-item" v-for="(item, index) in amenities" :key="index">
          <text class="amenity-icon">{{ item.icon }}</text>
          <text class="amenity-text">{{ item.text }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'

// 1楼图片
const floor1Images = ref([
  '/static/images/floor1/微信图片_20260305182440_128_116.jpg',
  '/static/images/floor1/微信图片_20260305182442_129_116.jpg',
  '/static/images/floor1/微信图片_20260305182444_130_116.jpg',
  '/static/images/floor1/微信图片_20260305182447_131_116.jpg',
  '/static/images/floor1/微信图片_20260305182448_132_116.jpg',
  '/static/images/floor1/微信图片_20260305182450_133_116.jpg',
])

// 2楼图片
const floor2Images = ref([
  '/static/images/floor2/微信图片_20260305182548_137_116.jpg',
  '/static/images/floor2/微信图片_20260305182454_135_116.jpg',
  '/static/images/floor2/微信图片_20260305182550_138_116.jpg',
  '/static/images/floor2/微信图片_20260305182456_136_116.jpg',
  '/static/images/floor2/微信图片_20260305182453_134_116.jpg',
])

// 卫生间图片
const bathroomImages = ref([
  '/static/images/bathroom/微信图片_20260305181824_89_116.jpg',
  '/static/images/bathroom/微信图片_20260305181826_90_116.jpg',
  '/static/images/bathroom/微信图片_20260305181828_91_116.jpg',
  '/static/images/bathroom/微信图片_20260305181830_92_116.jpg',
  '/static/images/bathroom/微信图片_20260305181832_93_116.jpg',
  '/static/images/bathroom/微信图片_20260305181834_94_116.jpg',
])

// 设施标签
const amenities = ref([
  { icon: '📶', text: '免费WiFi' },
  { icon: '❄️', text: '空调' },
  { icon: '📺', text: '电视' },
  { icon: '❄️', text: '冰箱' },
  { icon: '🚿', text: '24h热水' },
  { icon: '🧻', text: '洗漱用品' },
])

const previewImage = (images, index) => {
  uni.previewImage({
    urls: images,
    current: index
  })
}
</script>

<style lang="scss" scoped>
.rooms-page {
  min-height: 100vh;
  background: #FAF8F5;
  padding-bottom: 40rpx;
}

.floor-section {
  background: #FFFFFF;
  margin: 30rpx;
  border-radius: 24rpx;
  overflow: hidden;
  box-shadow: 0 8rpx 30rpx rgba(232, 168, 104, 0.1);
}

.floor-header {
  padding: 40rpx 40rpx 30rpx;
  border-bottom: 1rpx solid rgba(0, 0, 0, 0.05);
}

.floor-title {
  display: block;
  font-size: 40rpx;
  font-weight: 600;
  color: #5D4E37;
  margin-bottom: 8rpx;
}

.floor-subtitle {
  display: block;
  font-size: 24rpx;
  color: #999999;
  text-transform: uppercase;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rpx;
  padding: 2rpx;
}

.image-item {
  aspect-ratio: 1;
  overflow: hidden;
}

.room-image {
  width: 100%;
  height: 100%;
}

.floor-desc {
  padding: 30rpx 40rpx;
}

.desc-text {
  display: block;
  font-size: 28rpx;
  color: #666666;
  line-height: 1.8;
}

.amenities-section {
  background: #FFFFFF;
  margin: 0 30rpx 30rpx;
  border-radius: 24rpx;
  padding: 40rpx;
  box-shadow: 0 8rpx 30rpx rgba(232, 168, 104, 0.1);
}

.amenities-header {
  margin-bottom: 30rpx;
}

.amenities-title {
  font-size: 36rpx;
  font-weight: 600;
  color: #5D4E37;
}

.amenities-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
}
</style>
