<script>
export default {
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
}
</script>

<style lang="scss">
/* 全局样式 - 温馨居家风格 */
@import '@/uni.scss';

page {
  background-color: #FAF8F5;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

/* 通用按钮样式 */
button {
  &::after {
    border: none;
  }
}

/* 滚动条隐藏 */
::-webkit-scrollbar {
  display: none;
  width: 0;
  height: 0;
}

/* 桌面端优化 */
@media (min-width: 768px) {
  page {
    max-width: 1400px;
    margin: 0 auto;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.05);
  }

  /* 桌面端显示滚动条 */
  ::-webkit-scrollbar {
    display: block;
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(232, 168, 104, 0.3);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(232, 168, 104, 0.5);
  }
}
</style>
