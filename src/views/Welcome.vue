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
        <button @click="login">立即体验</button>
        <button>使用文档</button>
      </div>
      <div class="specimen">
        <img :src="phoneImg" alt="phone" draggable="false" />
      </div>
    </section>
    <section class="section"></section>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      phoneImg: require("../../public/img/phone@2x.png")
    };
  },
  methods: {
    login() {
      this.$router.push({ name: "Login" });
    }
  }
};
</script>

<style lang="scss">
$blue: #0033cc;
$white: #f5f5f5;
.welcome {
  width: 100%;
  .header {
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
    padding: 20px 0;
    background-color: $blue;
    .navbar {
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
    height: calc(100vh - 30px);
    &:nth-child(2) {
      margin-top: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $blue;
      .slogan {
        width: 550px;
        color: $white;
        font-size: 18px;
        user-select: none;
        h1 {
          margin: 25px 0;
          font-size: 50px;
        }
        p {
          opacity: 0.8;
          transition: all 2s;
          &:hover {
            opacity: 1;
          }
        }
        button {
          display: inline-block;
          outline: none;
          margin: 20px 40px 0 0;
          padding: 12px 30px;
          border-radius: 22px;
          border: none;
          color: $white;
          font-weight: 500;
          font-size: 14px;
          text-align: center;
          background-color: #1eb667;
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
      .specimen {
        width: 550px;
        img {
          width: 100%;
        }
      }
    }
    &:nth-child(3) {
      background-color: $white;
      .slogan {
        width: 600px;
        color: $white;
        font-size: 18px;
        h1 {
          margin: 25px 0;
          font-size: 50px;
        }
      }
      .specimen {
        width: 400px;
      }
    }
  }
}
</style>
