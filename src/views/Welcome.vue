<template>
  <div class="welcome">
    <header class="header">
      <nav class="navbar">
        <a class="navbar-brand" href="/"> Jigsaw-H5 </a>
        <ul class="navbar-nav">
          <li class="nav-item">首页</li>
          <li class="nav-item">特点</li>
        </ul>
      </nav>
    </header>
    <section class="section">
      <div class="slogan">
        <h1>所见，即所得</h1>
        <p>
          Jigsaw-H5是一款功能强大，高可扩展的H5可视化页面配置解决方案。致力于提供一套简单方便、专业可靠、无限可能的H5落地页最佳实践
        </p>
        <button @click="linkTo('Dashboard')">立即体验</button>
        <button @click="linkTo('Dashboard')">使用文档</button>
      </div>
      <div class="specimen">
        <img :src="phoneImg" alt="phone" draggable="false" />
      </div>
    </section>
    <section class="section">
      <div class="feature-card-list">
        <div class="feature-card">
          <div class="feature-card__title">
            <img :src="logo1Img" alt="开箱即用logo" />
            <span>开箱即用</span>
          </div>
          <p class="feature-card__description">
            无需编程，没有任何学习成本。在网站上简单的拖拽组件，即可生成精美H5页面
          </p>
        </div>
        <div class="feature-card">
          <div class="feature-card__title">
            <img :src="logo2Img" alt="高自由度logo" />
            <span>高自由度</span>
          </div>
          <p class="feature-card__description">
            每个组件都开放了大量可编辑项，针对不同用户的不同需求，可以胜任各种编辑场景
          </p>
        </div>
        <div class="feature-card">
          <div class="feature-card__title">
            <img :src="logo3Img" alt="云端同步logo" />
            <span>云端同步</span>
          </div>
          <p class="feature-card__description">
            每次修改都会自动同步至云端，无需部署，用户就可以看到最新版本的页面
          </p>
        </div>
      </div>
      <div class="usage-introduce">
        <p class="title">拖拽生成H5页面</p>
        <p class="sub-title">
          提供丰富的页面组件，更方便的为使用者搭建更强大的H5落地页
        </p>
        <button class="button" @click="linkTo('Dashboard')">开始体验</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      phoneImg: require("../../public/img/phone@2x.png"),
      logo1Img: require("../../public/img/开箱即用.png"),
      logo2Img: require("../../public/img/高自由度.png"),
      logo3Img: require("../../public/img/云端同步.png")
    };
  },
  methods: {
    /**
     * 跳转
     * @param {string} routerName
     */
    linkTo(routerName) {
      this.$router.push({ name: routerName });
    }
  }
};
</script>

<style lang="scss">
$black: #000000;
$blue: #0071e3;
$white: #f5f5f5;
.welcome {
  width: 100%;
  background-color: $black;
  .header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
    padding: 20px 0;
    backdrop-filter: blur(6px);
    .navbar {
      margin: 0 auto;
      width: 1100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: $white;
      .navbar-brand {
        margin: 0;
        padding: 0;
        font-size: 24px;
        font-weight: bold;
        color: $white;
      }
      .navbar-nav {
        display: flex;
        .nav-item {
          display: inline-block;
          margin: 0 0 0 20px;
          padding: 10px 0;
          font-weight: 500;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.6px;
        }
      }
    }
  }
  .section {
    margin: 0 auto;
    width: 1100px;
    height: calc(100vh);
    &:nth-child(2) {
      display: flex;
      justify-content: center;
      align-items: center;
      .slogan {
        width: 550px;
        color: $white;
        font-size: 18px;
        user-select: none;
        h1 {
          margin: 0;
          font-size: 50px;
        }
        p {
          margin: 40px 0;
          opacity: 0.8;
          transition: all 2s;
          &:hover {
            opacity: 1;
          }
        }
        button {
          margin-right: 40px;
        }
      }
      .specimen {
        width: 550px;
        img {
          width: 100%;
        }
      }
    }
    &:nth-child(3) {
      color: $white;
      .feature-card-list {
        padding: 150px 0 100px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        width: 1100px;
        font-size: 18px;
        .feature-card {
          padding: 30px;
          width: 25%;
          border-radius: 20px;
          &__title {
            display: flex;
            align-items: center;
            img {
              padding: 10px;
              height: 40px;
              width: 40px;
              border-radius: 30px;
              background-color: #ffffff;
            }
            span {
              margin-left: 23px;
              font-size: 24px;
              font-family: PingFangSC-Semibold, PingFang SC;
              font-weight: 600;
              color: $white;
            }
          }
          &__description {
            font-size: 14px;
            color: #cccccc;
          }
        }
      }
      .usage-introduce {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        .title {
          margin: 10px 0;
          font-size: 36px;
          font-weight: bold;
        }
        .sub-title {
          margin: 10px 0 60px;
          font-size: 24px;
          color: #cccccc;
        }
        .button {
          padding: 20px 40px;
          font-size: 18px;
        }
      }
    }
  }
  button {
    display: inline-block;
    outline: none;
    padding: 12px 30px;
    border-radius: 22px;
    border: none;
    color: $white;
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    background-color: $blue;
    box-sizing: border-box;
    user-select: none;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
      box-shadow: 0 2px 12px 5px rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
