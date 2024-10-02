<script setup>
import { ref,computed } from 'vue'
const top = ref(0)
const navTextStyle = computed(() => {
  return top.value > 0 ? `color:#000` : `color:#fff`
})
window.onscroll=function(){
  top.value = document.documentElement.scrollTop || document.body.scrollTop
}
import banner1 from '@/assets/index/1.jpg'
import banner2 from '@/assets/index/2.png'
import banner3 from '@/assets/index/3.png'
import banner4 from '@/assets/index/4.png'
import banner5 from '@/assets/index/5.png'
import banner6 from '@/assets/index/6.png'
import banner7 from '@/assets/index/7.png'
const bannerImg = [
  { img: banner1 },
  { img: banner2 },
  { img: banner3 },
  { img: banner4 },
  { img: banner5 },
  { img: banner6 },
  { img: banner7 }
]
</script>

<template>
  <div class="header px-[15px] h-[64px] fixed left-0 top-0 w-full" :style="top>0?`background:#fff`:`background:transparent`">
    <tiny-layout :cols="12" class="h-full">
      <tiny-row class="h-full">
        <tiny-col :span="4" class="h-full flex justify-center align-center">
          <div class="h-full text-[16px] font-[400] leading-[64px]" :style="navTextStyle">一川藤理</div>
        </tiny-col>
        <tiny-col :span="4" class="h-full h-full flex justify-center align-center">
          <div class="h-full text-[16px] font-[400] leading-[64px] mx-[20px]":style="navTextStyle">作品集</div>
          <div class="h-full text-[16px] font-[400] leading-[64px] mx-[20px]":style="navTextStyle">排期</div>
          <div class="h-full text-[16px] font-[400] leading-[64px] mx-[20px]":style="navTextStyle">时间图</div>
        </tiny-col>
        <tiny-col :span="4" class="h-full h-full flex justify-center align-center">
          <div class="h-full text-[16px] font-[400] leading-[64px] mx-[20px]":style="navTextStyle">常驻：集绘册、黑潮</div>
        </tiny-col>
      </tiny-row>
    </tiny-layout>
  </div>
  <div class="banner h-[1328px] pt-[197px]">
    <div class="h-[80px] text-white text-center text-[72px] font-[700] mb-[24px]">一川藤理的最新作品们</div>
    <div class="h-[28px] text-slate-300 text-center text-[20px] font-[400] mb-[32px]">一川藤理,喜欢厚涂，日漫，擅长各种....</div>
    <div class="h-[56px] flex justify-center">
      <div
        class="w-[200px] h-[60px] text-center bg-white text-blue-600 rounded-full leading-[56px] text-[22px] font-[500] mx-[6px] cursor-pointer topButton">
        所有作品 </div>
      <div
        class="w-[200px] h-[60px] text-center bg-transparent text-white border-white border-2 rounded-full leading-[56px] text-[22px] font-[500] mx-[6px] cursor-pointer topButton">
        个人主页 </div>
    </div>
    <div class="h-[824px] mt-[86px]">
      <tiny-carousel height="675px" type="card" autoplay>
        <tiny-carousel-item class="carousel-item-demo"  v-for="item in bannerImg" :key="item">
          <img :src="item.img" alt="" class="w-full h-full object-cover rounded-lg" />
        </tiny-carousel-item>
      </tiny-carousel>
    </div>
  </div>
</template>

<style scoped lang="scss">
.banner {
  background: url("@/assets/index/homeBg.png") 100% 100% no-repeat;
}
.topButton{
  transition: all 0.3s;
  &:hover{
    transform: translateY(-4px);
  }
}
</style>
