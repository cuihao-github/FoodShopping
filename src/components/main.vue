<template>
    <div class="container">
        <nav class="nav">
            <ul>
                <li>
                    <router-link to="#" class="item">
                        <img src="../assets/logo.png" alt="">
                        <p>甜品饮食</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="#" class="item">
                        <img src="../assets/logo.png" alt="">
                        <p>甜品饮食</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="#" class="item">
                        <img src="../assets/logo.png" alt="">
                        <p>甜品饮食</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="#" class="item">
                        <img src="../assets/logo.png" alt="">
                        <p>甜品饮食</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="#" class="item">
                        <img src="../assets/logo.png" alt="">
                        <p>甜品饮食</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="#" class="item">
                        <img src="../assets/logo.png" alt="">
                        <p>甜品饮食</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="#" class="item">
                        <img src="../assets/logo.png" alt="">
                        <p>甜品饮食</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="#" class="item">
                        <img src="../assets/logo.png" alt="">
                        <p>甜品饮食</p>
                    </router-link>
                </li>
            </ul>
        </nav>

        <div class="business">
            <section class="list">
                <div class="img">
                    <img src="../assets/logo.png" alt="">
                </div>
                <div class="describe"></div>
            </section>
        </div>
    </div>
</template>
<style lang="less" scoped>
.container {
    width: 100%;
    height: calc(100% - 95px);
    .nav {
        width: 100%;
        height: 202px;
        border-bottom: 2px solid #ccc;
        ul {
            width: 100%;
            height: calc(100% - 2px);
            li {
                float: left;
                width: 25%;
                height: 50%;
                .item {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-flow: column nowrap;
                    justify-content: space-around;
                    align-items: center;
                    img {
                        height: 60%;
                    }
                    p {

                    }
                }
            }
        }
    }
    .business {
        width: 100%;
        height: calc(100% - 222px);
        margin-top: 20px;
        border-top: 2px solid #ccc;
        background: green;
        overflow: hidden;
        .list {
            width: 100%;
            height: 90px;
            display: flex;
            flex-flow: nowrap row;
            background: yellow;
            .img {
                flex: 2;
                height: 100%;
                background: #000;
                img {
                    width: 80px;
                }
            }
            .describe {
                flex: 6;
                height: 100%;
                background: red;
            }
        }
    }
}
</style>

