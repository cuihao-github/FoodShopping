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
        <li v-for="item in footerNav" :key="item.title" class="item" v-on:click="selected">
          <router-link v-bind:to="item.url" class="link">
            <img v-bind:src="[item.isSelected?item.src[0]:item.src[1]]" alt="item.isSelected" />
            <p v-bind:class="[item.isSelected?'selected':null]">{{item.title}}</p>
          </router-link>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
import imgSrc1 from './assets/logo.png'
import imgSrc2 from './assets/search.png'
export default {
  data: function(){
    return {
      // 底部数据的抽离
      footerNav: [
        {
          title: "外卖",
          url: "/main",
          src: [imgSrc1,imgSrc2],
          // 判断底部元素是否处于点击状态
          isSelected: true       
        },
        {
          title: "搜索",
          url: "/search",
          src: [imgSrc1,imgSrc2],
          isSelected: false
        },
        {
          title: "订单",
          url: "/order",
          src: [imgSrc1,imgSrc2],
          isSelected: false
        },
        {
          title: "我的",
          url: "/me",
          src: [imgSrc1,imgSrc2],
          isSelected: false
        }
      ]
    }
  },
  methods: {
    // 底部点击样式
    selected: function(e) {
      e = e || window.event;
      e = e.currentTarget;
      let parent = e.parentNode;
      let children = parent.children;
      children = [].slice.call(children);
      let index = children.indexOf(e);        // 获取到了点击元素所在的索引
      // console.log(index);

      // 排他
      for(let i = 0; i < this.footerNav.length; i++) {
        this.footerNav[i].isSelected = false;
      }

      // 更新点击的样式
      this.footerNav[index].isSelected = true;
    }
  }
}
</script>


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
.footer>.nav>.item>.link>.selected {
  color: blue;
}
</style>
