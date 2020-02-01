<template>
  <div id="app">
    <!-- 头部 -->
    <header class="header">
      <div class="search">搜索</div>
      <div class="address">西安站</div>
      <div class="login">登陆|注册</div>
    </header>

    <transition name="appFade" appear mode="out-in">
        <router-view></router-view>
    </transition>

    <!-- 底部导航模块 -->
    <footer class="footer">
      <ul class="nav">
        <li class="item">
          <router-link to="/login" class="link">
            <img src="./assets/search.png" alt="">
            <p>外卖</p>
          </router-link>
        </li>
        <li class="item">
          <router-link to="/main/search" class="link">
            <img src="./assets/search.png" alt="">
            <p>搜索</p>
          </router-link>
        </li>
        <li class="item">
          <router-link to="/main/order" class="link">
            <img src="./assets/search.png" alt="">
            <p>订单</p>
          </router-link>
        </li>
        <li class="item">
          <router-link to="/main/me" class="link">
            <img src="./assets/search.png" alt="">
            <p>我的</p>
          </router-link>
        </li>
      </ul>
    </footer>
  </div>
</template>

<style scoped>
#app {
  width: 100%;
  height: 100%;
}

/* 过渡动画的初始状态 */
.appFade-enter,
.appFade-leave-to {
  opacity: 0;
}
.appFade-enter-active,
.appFade-leave-active {
  transition: all 0.5s ease; 
}
.appFade-leave-active {
  position: absolute;
}
</style>
