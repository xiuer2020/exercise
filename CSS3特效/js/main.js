 // 眼睛跟随鼠标移动特效
 let {
     log
 } = console;

 function getOffset(eleObj) {
     if (eleObj.offsetParent) {
         return {
             left: getOffset(eleObj.offsetParent).left + eleObj.offsetLeft,
             top: getOffset(eleObj.offsetParent).top + eleObj.offsetTop
         }
     } else {
         return {
             left: eleObj.offsetLeft,
             top: eleObj.offsetTop
         }
     }
 }
 let effectsFollow = document.querySelector('#effects-follow');
 let effectsFollowTop = getOffset(effectsFollow).top;
 let effectsFollowLeft = getOffset(effectsFollow).left;


 effectsFollow.onmousemove = ((e) => {
     let w = effectsFollow.offsetWidth;
     let h = effectsFollow.offsetHeight;

     // 计算左上角偏移
     let left = e.pageX - effectsFollowLeft;
     let top = e.pageY - effectsFollowTop;

     // log(`${left/w}%`)
     Array.from(document.getElementsByClassName('eyeball-outside'), (ele) => {
         ele.style.left = `${left/w*100}%`;
         ele.style.top = `${top/h*100}%`;
     })
 })
 effectsFollow.onmouseleave = function(){
    Array.from(document.getElementsByClassName('eyeball-outside'), (ele) => {
        ele.style.left = `50%`;
        ele.style.top = `50%`;
    })
 }


 // 按钮特效
 // 获取按钮
 var buuttonDiv = document.querySelectorAll('ul.effects-button-box>li>div');
 var buuttonImg = document.querySelectorAll('ul.effects-button-box>li>img');
 function buttonToggeClass(objs){
    objs.forEach((ele) => {
        ele.onmouseenter = function () {
           this.classList.add('active');
        }
        ele.onmouseleave = function () {
           objs.forEach((el)=>{
               el.classList.remove('active');
           })
        }
    })
 }
 buttonToggeClass(buuttonDiv);
 buttonToggeClass(buuttonImg);
 