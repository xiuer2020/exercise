<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
import Home from './views/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>

#app{
  font-family: sans-serif;
}
@font-face {font-family: "iconfont";
  src: url('//at.alicdn.com/t/font_1939880_ydd4ovdlou.eot?t=1594641076332'); /* IE9 */
  src: url('//at.alicdn.com/t/font_1939880_ydd4ovdlou.eot?t=1594641076332#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('//at.alicdn.com/t/font_1939880_ydd4ovdlou.woff?t=1594641076332') format('woff'),
  url('//at.alicdn.com/t/font_1939880_ydd4ovdlou.ttf?t=1594641076332') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('//at.alicdn.com/t/font_1939880_ydd4ovdlou.svg?t=1594641076332#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-shangsheng:before {
  content: "\e640";
}

.icon-xinaixin:before {
  content: "\e602";
}

.icon-liwu:before {
  content: "\e609";
}

.icon-yanjing:before {
  content: "\e60c";
}

.icon-zan:before {
  content: "\e63b";
}

.icon-qipao:before {
  content: "\e647";
}

.icon-jiazai:before {
  content: "\e723";
}

.icon--star-o:before {
  content: "\e600";
}



</style>
