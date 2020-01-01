# 1. 初始化项目
## 1.1 清空不必要的文件
### 1.1.1 首先清空src/router
1. 清除路由规则中的所有路由
```js
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
]

const router = new VueRouter({
  routes
})

export default router
```

2. 删除不必要的文件

    /view/所有组件
    /components/所有组件

## 1.1.2 清除App。vue的部分内容
    即需要删除所有的样式和标签，只保留基本的标签


# 2. 创建login登陆页面
## 2.1 创建login组件
## 2.2 设置路由
```js
const routes = [
  {path: '/', redirect: '/login'},              // redirect重定向到/login
  {path: '/login', component: login}            // 添加login路由规则
]
```

## 2.3 设置router-view
该标签用来盛放路之后的vue模板