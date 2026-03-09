<template>
  <view class="rooms-page">
    <!-- 页面标题 -->
    <view class="page-header">
      <text class="page-title">房源详情</text>
      <text class="page-subtitle">温馨舒适的家</text>
    </view>

    <scroll-view class="detail-content" scroll-y>
      <!-- 位置导航 -->
      <view class="section map-section">
        <view class="map-header">
          <text class="map-title">位置导航</text>
          <text class="map-subtitle">点击地图查看详细位置</text>
        </view>
        <view class="map-placeholder" @tap="openLocation">
          <text class="map-icon">🗺️</text>
          <text class="map-text">点击打开地图</text>
        </view>
      </view>

      <!-- 交通指南 -->
      <view class="section traffic-section">
        <view class="traffic-header">
          <text class="traffic-title">交通指南</text>
        </view>
        <view class="traffic-item" v-for="(item, index) in roomInfo.traffic" :key="index">
          <view class="traffic-icon">{{ item.icon }}</view>
          <view class="traffic-content">
            <text class="traffic-name">{{ item.name }}</text>
            <text class="traffic-desc">{{ item.desc }}</text>
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

      <!-- 房源图片分组 -->
      <view class="section image-group-section" v-for="(group, groupIndex) in roomInfo.imageGroups" :key="groupIndex">
        <view class="group-header">
          <text class="group-title">{{ group.title }}</text>
          <text class="group-subtitle">{{ group.subtitle }}</text>
        </view>
        <view class="image-grid">
          <view
            class="image-item"
            v-for="(img, imgIndex) in group.images"
            :key="imgIndex"
            @tap="previewImage(group.images, imgIndex)"
          >
            <img class="grid-image" :src="img" />
          </view>
        </view>
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
  latitude: 39.90469,
  longitude: 116.40717,
  name: '温馨民宿',
  traffic: [
    { icon: '🚇', name: '地铁', desc: '距离XX地铁站约500米，步行5分钟' },
    { icon: '🚌', name: '公交', desc: '多条公交线路可达，XX路站下车' },
    { icon: '✈️', name: '机场', desc: '距离机场约30公里，打车约40分钟' },
  ],
  advantages: [
    '近地铁',
    '独立出入',
    '可做饭',
    '采光好',
    '安静舒适',
    '独立卫浴'
  ],
  imageGroups: [
    {
      title: '1楼',
      subtitle: 'Floor 1',
      images: [
        'https://picsum.photos/400/400?random=1',
        'https://picsum.photos/400/400?random=2',
        'https://picsum.photos/400/400?random=3',
        'https://picsum.photos/400/400?random=4',
        'https://picsum.photos/400/400?random=5',
        'https://picsum.photos/400/400?random=6',
      ]
    },
    {
      title: '2楼',
      subtitle: 'Floor 2',
      images: [
        '/static/images/floor2/微信图片_20260305181946_99_116.jpg',
        '/static/images/floor2/微信图片_20260305181947_100_116.jpg',
        '/static/images/floor2/微信图片_20260305181950_102_116.jpg',
        '/static/images/floor2/微信图片_20260305181953_103_116.jpg',
        '/static/images/floor2/微信图片_20260305181955_104_116.jpg',
        '/static/images/floor2/微信图片_20260305181956_105_116.jpg',
      ]
    },
    {
      title: '卫生间',
      subtitle: 'Bathroom',
      images: [
        '/static/images/bathroom/微信图片_20260305181828_91_116.jpg',
        '/static/images/bathroom/微信图片_20260305181832_93_116.jpg',
        '/static/images/bathroom/微信图片_20260305181836_95_116.jpg',
        '/static/images/bathroom/微信图片_20260305181838_96_116.jpg',
        '/static/images/bathroom/微信图片_20260305181840_97_116.jpg',
        '/static/images/bathroom/微信图片_20260305181824_89_116.jpg',
      ]
    }
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

const openLocation = () => {
  uni.openLocation({
    latitude: roomInfo.value.latitude,
    longitude: roomInfo.value.longitude,
    name: roomInfo.value.name,
    address: roomInfo.value.location
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

// 地图预览样式
.map-section {
  padding: 0;
  overflow: hidden;
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

// 交通指南样式
.traffic-section {
  padding: 40rpx;
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

// 图片分组样式
.image-group-section {
  padding: 0;
  overflow: hidden;
}

.group-header {
  padding: 40rpx 40rpx 30rpx;
  border-bottom: 1rpx solid rgba(0, 0, 0, 0.05);
}

.group-title {
  display: block;
  font-size: 40rpx;
  font-weight: 600;
  color: #5D4E37;
  margin-bottom: 8rpx;
}

.group-subtitle {
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
  width: 100%;
  height: 0;
  padding-bottom: 100%; /* 1:1 宽高比 */
  position: relative;
  overflow: hidden;
  background: #f0f0f0; /* 临时背景色，方便调试 */
}

.grid-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
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
