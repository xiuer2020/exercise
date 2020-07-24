<template>
  <div class="app-view">
    <BaseFlex class="header" fxw="wrap">
      <div class="logo c-t">Models</div>
      <label class="menu c-b" for="menu">menu</label>
      <input type="checkbox" id="menu" />
      <BaseFlex class="nav">
        <div class="content active">Home</div>
        <div class="content">About Us</div>
        <div class="content">Gallery</div>
        <div class="content">
          <label for="dropdown" @click="dropdown=!dropdown">
            Dropdown
            <i class="fa fa-angle-down" v-if="!dropdown"></i>
            <i class="fa fa-angle-up" v-else></i>
          </label>
          <input type="checkbox" id="dropdown" />
          <ul class="select">
            <li>Services</li>
            <li>Blog</li>
            <li>Newsletter</li>
          </ul>
        </div>
        <div class="content">Contact Us</div>
      </BaseFlex>
    </BaseFlex>
    <div class="carousel-outer-layout">
      <div class="carousel-inner-layout">
        <div class="carousel">
          <div class="text-inner-layout">
            <div class="text">Discover Models Or Be</div>
            <div class="text">Discovered</div>
            <BaseFlex jc="flex-end" class="btn-inner-layout">
              <div class="bgc-t btn">Contact Us</div>
            </BaseFlex>
          </div>
          <BaseFlex class="circle">
            <div class="content"></div>
            <div class="content"></div>
            <div class="content"></div>
          </BaseFlex>
        </div>
      </div>
    </div>
    <BaseFlex class="welcome" fxw="wrap">
      <div class="text">
        <div class="main-title">Welcome To Our Models Website</div>
        <div class="second-title">Together we’ll make this world</div>
        <BaseFlex class="icon-outer-layout">
          <div class="icon-second-outer-layout">
            <BaseFlex jc="center" class="icon-inner-layout">
              <div class="iconfont icon-jiazai bgc-t"></div>
            </BaseFlex>
            <div class="title">Make Over</div>
            <div
              class="content"
            >Ut enim ad minima ven aiam, quis no strum ullam corp oris susc ipit.</div>
          </div>
          <div class="icon-second-outer-layout">
            <BaseFlex jc="center" class="icon-inner-layout">
              <div class="iconfont icon-jiazai bgc-t"></div>
            </BaseFlex>
            <div class="title">Make Over</div>
            <div
              class="content"
            >Ut enim ad minima ven aiam, quis no strum ullam corp oris susc ipit.</div>
          </div>
        </BaseFlex>
      </div>
      <div class="img">
        <img src="../assets/images/img.jpg" alt />
      </div>
    </BaseFlex>
    <BaseFlex class="service-inner-layout bgc-t" fxw="wrap" jc="center">
      <div class="service">
        <BaseFlex jc="center" class="icon-inner-layout">
          <div class="iconfont icon-jiazai bgc-t"></div>
        </BaseFlex>
        <div class="title">HEADING HERE</div>
        <div
          class="content"
        >Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.</div>
      </div>
      <div class="service">
        <BaseFlex jc="center" class="icon-inner-layout">
          <div class="iconfont icon-liwu bgc-t"></div>
        </BaseFlex>
        <div class="title">HEADING HERE</div>
        <div
          class="content"
        >Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.</div>
      </div>
      <div class="service">
        <BaseFlex jc="center" class="icon-inner-layout">
          <div class="iconfont icon-xinaixin bgc-t"></div>
        </BaseFlex>
        <div class="title">HEADING HERE</div>
        <div
          class="content"
        >Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.</div>
      </div>
    </BaseFlex>

    <MoudleTitle>
      <template #title>Blog</template>
      <template #content>Ut enim ad minim veniam, quis nostrud ullam.</template>
    </MoudleTitle>
    <BaseFlex fxw="wrap" class="blog-inner-layout">
      <div class="blog">
        <div class="img">
          <img src="../assets/images/blog1.jpg" alt />
          <div class="date">
            <div>13</div>
            <div>Sep</div>
          </div>
        </div>
        <div class="title">Sit accus antium</div>
        <BaseFlex jc="start" class="dynamic-state">
          <div class="content">
            <span class="iconfont icon-zan"></span>20 Likes
          </div>
          <div class="content">
            <span class="iconfont icon-qipao"></span>48 Comments
          </div>
        </BaseFlex>
        <div
          class="content"
        >sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</div>
      </div>
      <div class="blog">
        <div class="img">
          <img src="../assets/images/blog1.jpg" alt />
          <div class="date">
            <div>13</div>
            <div>Sep</div>
          </div>
        </div>
        <div class="title">Sit accus antium</div>
        <BaseFlex jc="start" class="dynamic-state">
          <div class="content">
            <span class="iconfont icon-zan"></span>20 Likes
          </div>
          <div class="content">
            <span class="iconfont icon-qipao"></span>48 Comments
          </div>
        </BaseFlex>
        <div
          class="content"
        >sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</div>
      </div>
      <div class="blog">
        <div class="img">
          <img src="../assets/images/blog1.jpg" alt />
          <div class="date">
            <div>13</div>
            <div>Sep</div>
          </div>
        </div>
        <div class="title">Sit accus antium</div>
        <BaseFlex jc="start" class="dynamic-state">
          <div class="content">
            <span class="iconfont icon-zan"></span>20 Likes
          </div>
          <div class="content">
            <span class="iconfont icon-qipao"></span>48 Comments
          </div>
        </BaseFlex>
        <div
          class="content"
        >sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</div>
      </div>
    </BaseFlex>
    <div class="fashion-look">
      <div class="text">
        <div class="title">FASHION LOOK</div>
        <div class="detail">Creating Your Beauty Image</div>
        <div
          class="content"
        >Donec consequat sapien ut leo cursus rhoncus. Nullam dui mi, vulputate ac metus at</div>
      </div>
    </div>
    <MoudleTitle>
      <template #title>Our Gallery</template>
      <template #content>Ut enim ad minim veniam, quis nostrud ullam.</template>
    </MoudleTitle>

    <div class="gallery-outer-layout">
      <BaseFlex class="gallery-inner-layout" fxw="wrap">
        <div class="gallery">
          <img src="../assets/images/g1.jpg" alt />
        </div>
        <div class="gallery">
          <img src="../assets/images/g1.jpg" alt />
        </div>
        <div class="gallery">
          <img src="../assets/images/g1.jpg" alt />
        </div>
        <div class="gallery">
          <img src="../assets/images/g1.jpg" alt />
        </div>
        <div class="gallery">
          <img src="../assets/images/g1.jpg" alt />
        </div>
        <div class="gallery">
          <img src="../assets/images/g1.jpg" alt />
        </div>
        <div class="gallery">
          <img src="../assets/images/g1.jpg" alt />
        </div>
        <div class="gallery">
          <img src="../assets/images/g1.jpg" alt />
        </div>
        <div class="gallery">
          <img src="../assets/images/g1.jpg" alt />
        </div>
      </BaseFlex>
    </div>

    <div class="newsletter">
      <div class="content">
        <div class="title">Our Newsletter</div>
        <div class="detail">Ut enim ad minim veniam, quis nostrud ullam.</div>
        <BaseFlex class="input-inner-layout" fxw="wrap">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Name" />
          <input type="text" class="btn" placeholder="Name" />
        </BaseFlex>
      </div>
    </div>
    <MoudleTitle>
      <template #title>Contact Us</template>
      <template #content>Ut enim ad minim veniam, quis nostrud ullam.</template>
    </MoudleTitle>
    <div class="address-information">
      <BaseFlex class="content" fxw="wrap" ai="">
        <div class="left">
          <div class="content">
            <div class="title">Address</div>
            <div class="detail">123 San Sebastian, Hill Towers 4567 New York City USA.</div>
          </div>
          <div class="content">
            <div class="title">Address</div>
            <div class="detail">123 San Sebastian, Hill Towers 4567 New York City USA.</div>
          </div>
          <div class="content">
            <div class="title">Address</div>
            <div class="detail">123 San Sebastian, Hill Towers 4567 New York City USA.</div>
          </div>
        </div>
        <div class="right">
          <div class="content">
            <div class="title">Get In Touch</div>
            <input type="text" placeholder="name" />
            <input type="text" placeholder="name" />
            <input type="text" placeholder="name" />
            <textarea name id cols="30" rows="10" placeholder="name"></textarea>
            <input type="submit" value="name" />
          </div>
        </div>
      </BaseFlex>
    </div>
    <div class="footer">
      <BaseFlex class="content" fxw="wrap" ai="start">
        <div class="col">
          <div class="title">WHO WE ARE</div>
          <div
            class="normal"
          >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</div>
        </div>
        <div class="col">
          <div class="title">LATEST NEWS</div>
          <div class="light">Sed ut piciatis unde</div>
          <div class="normal">30 Sep 2018</div>
          <div class="light">Modi tempra incunt</div>
          <div class="normal">02 Aug 2018</div>
          <div class="light">ullam corpis sucipit</div>
          <div class="normal">06 Aug 2018</div>
        </div>
        <div class="col">
          <div class="title">CONTACT US</div>
          <div class="light">Phone</div>
          <div class="normal">+121 098 8907 9987</div>
          <div class="light">Email</div>
          <div class="normal">info@example.com</div>
          <div class="light">Location</div>
          <div class="normal">Honey Avenue, New York City</div>
        </div>
        <div class="col">
          <div class="title">Quick Links</div>
          <div class="normal">Home</div>
          <div class="normal">About Us</div>
          <div class="normal">Blog</div>
          <div class="normal">Gallery</div>
          <div class="normal">Contact Us</div>
        </div>
      </BaseFlex>
    </div>
    <div class="copyright">
      <div class="iconfont icon-shangsheng"></div>
      <div
        class="text"
      >Copyright © 2019.Company name All rights reserved.More Templates <span>模板之家</span> - Collect from <span>网页模板</span></div>
    </div>
  </div>
</template>

<script>
import MoudleTitle from "../components/MoudleTitle";
export default {
  components: {
    MoudleTitle
  },
  data: function() {
    return {
      carousels: [
        {
          t1: "THE EASIER WAY TO FIND MODELS",
          t2: "Discover Models Or Be",
          t3: "Discovered",
          t4: "Contact Us"
        },
        {
          t1: "THE EASIER WAY TO FIND MODELS",
          t2: "Discover Models Or Be",
          t3: "Discovered",
          t4: "Contact Us"
        }
      ],
      welcomes: [
        {
          t1: "Stylist",
          t2:
            "Ut enim ad minima ven aiam, quis no strum ullam corp oris susc ipit."
        }
      ],
      dropdown: false
    };
  },
  created() {
    console.log("__dirname ==>", __dirname);
  }
};
</script>

<style lang="less" scoped>
@import url("../assets/css/style.less");

.header {
  margin: 0 30px;
  .logo {
    font-family: cursive;
    font-size: 40px;
    line-height: 80px;
  }
  .menu {
    display: none;
    line-height: 80px;
    font-weight: 800;
  }
  #menu {
    display: none;
  }
  .nav {
    color: @c-b;
    line-height: 80px;
    width: 480px;
    font-weight: 500;
    .content {
      position: relative;
      line-height: 34px;
      text-align: center;
      &.active {
        color: @c-t;
      }
      .select {
        border-radius: 4px;
        text-align: left;
        padding: 15px;
        display: none;
        position: absolute;
        left: 0;
        top: 35px;
        z-index: 1;
        background: #333333;
        color: #ffffff;
      }
      .dorpdown {
        display: none;
      }
      #dropdown {
        display: none;
        &:checked {
          & ~ .select {
            display: block;
          }
        }
      }
    }
  }
}
.carousel {
  position: relative;
  background: url("../assets/images/1.jpg") no-repeat left top / 100% auto;
  height: 53vw;
  margin-bottom: 50px;
  .text-inner-layout {
    text-align: right;
    position: absolute;
    right: 0;
    top: 8vw;
    padding: 15px;
    .text {
      width: 100%;
      font-size: 6vw;
      color: #ffffff;
      text-align: right;
    }
    .btn-inner-layout {
      margin-top: 4vw;
      width: 100%;
      .btn {
        padding: 12px 24px;
        color: #ffffff;
        border-radius: 4px;
        border: 2px solid #fff;
      }
    }
  }
  .circle {
    position: absolute;
    bottom: 5vh;
    left: 50%;
    transform: translateX(-50%);
    width: 61px;
    .content {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: @c-t;
      border: 2px solid #fff;
    }
  }
}
.welcome {
  width: 960px;
  margin: 0 auto;
  .text {
    width: 480px;
    .main-title {
      font-size: 36px;
      font-weight: 100;
      color: @c-b;
    }
    .second-title {
      font-style: italic;
      font-size: 18px;
      color: #464646;
      margin: 15px 0 50px;
      color: @c-b;
    }
    .icon-second-outer-layout {
      padding: 0 15px;
      .icon-inner-layout {
        text-align: center;
        .iconfont {
          width: 84px;
          height: 84px;
          border-radius: 50%;
          &::before {
            font-size: 28px;
            line-height: 84px;
            color: #ffffff;
          }
        }
      }
      .title {
        margin: 25px 0 15px;
        color: @c-b;
      }
      .content {
        font-size: 14px;
        line-height: 28px;
        color: @c-g;
      }
    }
  }
  .img {
    width: 480px;
    img {
      width: 100%;
    }
  }
}
.service-inner-layout {
  padding: 48px 0;
  text-align: center;
  .service {
    padding: 0 15px;
    width: 24vw;
    line-height: 30px;
    color: #ffffff;
    .icon-inner-layout {
      text-align: center;
      .iconfont {
        width: 84px;
        height: 84px;
        border-radius: 50%;
        border: 2px solid #fff;
        &::before {
          font-size: 28px;
          line-height: 84px;
          color: #ffffff;
        }
      }
    }
    .title {
      font-size: 24px;
      margin: 50px 0 15px;
    }
    .content {
      font-size: 14px;
    }
  }
}

.blog-inner-layout {
  margin-bottom: 50px;
  .blog {
    padding: 0 15px;
    position: relative;
    width: 29vw;
    .img {
      position: relative;
      img {
        width: 100%;
        vertical-align: middle;
      }
      .date {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 70px;
        height: 70px;
        background: #38d2fe;
        color: #ffffff;
      }
    }
    .title {
      margin: 24px 0 8px;
      font-size: 22px;
      color: @c-b;
    }
    .dynamic-state {
      .content {
        color: @c-g;
        margin-bottom: 15px;
        &:last-child {
          margin-left: 15px;
        }
        .iconfont {
          margin-right: 8px;
          &::before {
            color: @c-t;
            font-size: 15px;
          }
        }
      }
    }
    & > .content {
      font-size: 14px;
      color: @c-g;
      line-height: 30px;
    }
  }
}
.fashion-look {
  height: 40vw;
  background: url("../assets/images/bg2.jpg") no-repeat left top / 100% auto;
  .text {
    padding: 48px 0;
    width: 960px;
    margin: 0 auto;
    color: #ffffff;
    .title {
      opacity: 0.35;
      font-size: 26px;
      font-weight: 800;
    }
    .detail {
      font-size: 30px;
      font-weight: 800;
      line-height: 42px;
      margin: 8px 0 16px;
    }
    .content {
      font-size: 14px;
    }
  }
}
.gallery-outer-layout {
  margin-bottom: 50px;
  .gallery-inner-layout {
    width: 960px;
    margin: 0 auto;
    .gallery {
      width: 33%;
      box-sizing: border-box;
      padding: 0 15px;
      margin-top: 30px;
      &:nth-child(-n + 3) {
        margin-top: 0;
      }
    }
  }
}

.newsletter {
  padding: 48px 0;
  background: url("../assets/images/bg3.jpg") no-repeat left top / 100% auto;
  .content {
    width: 960px;
    margin: 0 auto;
    .title {
      font-size: 32px;
      color: #ffffff;
      font-weight: 800;
    }
    .detail {
      font-size: 14px;
      color: #ffffff;
      margin: 8px 0 50px;
    }
    input {
      margin: 0 15px;
      padding: 15px;
      border-radius: 4px;
      flex: 1;
      border: none;
      &.btn {
        background: #38d2fe;
        color: #ffffff;
        &::-webkit-input-placeholder {
          /* placeholder颜色  */
          color: #fff;
          /* placeholder位置  */
          text-align: center;
        }
      }
    }
  }
}
.address-information {
  margin-bottom: 50px;
  & > .content {
    width: 960px;
    margin: 0 auto;
    .left {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-right: 30px;
      .content {
        padding: 30px;
        box-shadow: 0px 2px 13px -1px rgba(0, 0, 0, 0.15);
        .title {
          font-size: 22px;
          color: #38d2fe;
          margin-bottom: 15px;
        }
        .detail {
          color: @c-g;
          font-size: 14px;
        }
      }
    }
    .right {
      flex: 1;
      .content {
        padding: 30px;
        box-shadow: 0px 2px 13px -1px rgba(0, 0, 0, 0.15);
      }
      .title {
        font-size: 22px;
        color: #38d2fe;
        margin-bottom: 15px;
      }
      input,
      textarea {
        resize: none;
        width: 100%;
        padding: 11px;
        margin-bottom: 15px;
        border: 0;
        border-bottom: 1px solid #000;
        &[type="submit"] {
          margin-bottom: 0;
          background: @c-t;
          border: none;
        }
      }
    }
  }
}
.footer {
  background: #212020;
  padding: 48px 0;
  .content {
    width: 960px;
    margin: 0 auto;
    .col {
      flex: 1;
      padding: 0 15px;
      .title {
        margin-bottom: 50px;
        color: #ffffff;
        font-size: 20px;
        font-weight: 800;
      }
      .normal {
        color: #ababab;
        line-height: 30px;
        font-size: 14px;
      }
      .light {
        color: #ffffff;
        margin-bottom: 8px;
      }
    }
  }
}
.copyright {
  background: #212020;
  color: #ababab;
  padding: 0 15px 50px;
  border-top: 1px solid #dee2e6;
  .iconfont {
    text-align: center;
    margin: 15px 0;
    &::before {
      color: @c-t;
      font-size: 34px;
    }
  }
  .text{
    text-align: center;
    span{
      color: @c-t;
    }
  }
}

// 媒体查询
@media (max-width: 992px) {
  .welcome {
    .text {
      width: 720px !important;
      margin: 0 auto;
    }
    .img {
      width: 100% !important;
    }
  }
  .blog-inner-layout {
    .blog {
      margin-bottom: 50px;
      width: 100% !important;
      flex: auto !important;
    }
  }
  .fashion-look {
    .text {
      width: 720px !important;
    }
  }
  .gallery-outer-layout {
    .gallery-inner-layout {
      width: 720px;
    }
  }
  .newsletter {
    .content {
      width: 720px;
    }
  }
  .address-information {
    & > .content {
      width: 720px;
    }
  }
  .footer {
    .content {
      width: 720px;
      .col {
        width: 50% !important;
        flex: auto !important;
      }
    }
  }
}
@media (max-width: 768px) {
  .header.base-flex {
    // display: block !important;
    .nav {
      display: none !important;
      margin-bottom: 30px;
      .select {
        position: static !important;
        text-align: center !important;
        background: #ffffff !important;
        color: #000 !important;
      }
    }
    .menu {
      display: block !important;
    }
    #menu {
      &:checked {
        & ~ .nav {
          display: block !important;
          width: 100%;
        }
      }
    }
    .welcome {
      width: 100% !important;
    }
  }
  .welcome {
    padding: 0 15px;
    width: 100% !important;
    .text {
      width: 100% !important;
      margin: 0 auto;
    }
  }
  .service-inner-layout {
    .service {
      width: 100% !important;
      max-width: 510px;
      flex: auto !important;
      margin-bottom: 24px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  .fashion-look {
    .text {
      width: 100% !important;
      padding: 15px;
    }
  }
  .gallery-outer-layout {
    .gallery-inner-layout {
      width: 100%;
      padding: 0 15px;
      .gallery {
        width: 100%;
        text-align: center;
        margin-bottom: 30px;
      }
    }
  }

  .newsletter {
    background-size: auto 100%;
    .content {
      width: 100%;
      input {
        width: 100% !important;
        flex: auto !important;
        margin: 0 15px 15px !important;
      }
    }
  }
  .address-information {
    & > .content {
      width: 100%;
      padding: 0 15px;
      .left,
      .rihgt {
        flex: auto !important;
        width: 100%;
      }
    }
  }
  .footer {
    .content {
      width: 100%;
      padding: 0 15px;
    }
  }
}
</style>