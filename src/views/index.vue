<script setup lang="jsx">
import { ref, computed } from 'vue'
import banner1 from '@/assets/index/1.jpg'
import banner2 from '@/assets/index/2.png'
import banner3 from '@/assets/index/3.png'
import banner4 from '@/assets/index/4.png'
import banner5 from '@/assets/index/5.png'
import banner6 from '@/assets/index/6.png'
import banner7 from '@/assets/index/7.png'
const timeGrid = ref(null)
// 距离顶部的距离
const top = ref(0)
// 导航栏文字的样式
const navTextStyle = computed(() => {
  return top.value > 0 ? `color:#000` : `color:#fff`
})
// 日期信息
const dateInfo = {
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1
}
// 作品集
const bannerImg = [
  { img: banner1 },
  { img: banner2 },
  { img: banner3 },
  { img: banner4 },
  { img: banner5 },
  { img: banner6 },
  { img: banner7 }
]
// 日历颜色
const colorList = ['blue', 'green', 'red', 'yellow', 'purple', 'cyan']
// tag颜色
const tagColor = ['', 'success', 'info', 'warning', 'danger']
// 排期
const eventslist = ref([
  {
    title: '黑潮-直购-日漫古风双男',
    start: '2024-09-01 8:30:00',
    end: '2024-09-30 9:00:00',
    content:
      `名字：黑潮
类型：直购
阵容：一川藤理
主题：日漫古风双男`,
    theme: colorList[0]
  },
  {
    title: '集绘册-扭蛋-单人壁纸',
    start: '2024-10-01 8:30:00',
    end: '2024-10-12 9:00:00',
    content:
      `名字：集绘册
类型：扭蛋
阵容：一川藤理、跳跳、百万、春天苏醒、青君
主题：单人壁纸`,
    theme: colorList[1]
  },
  {
    title: '黑潮-扭蛋-日漫正比男头',
    start: '2024-11-01 8:30:00',
    end: '2024-11-30 9:00:00',
    content:
      `名字：黑潮
类型：扭蛋
阵容：一川藤理、KINO、ED、回忆、乔郁
主题：日漫正比男头`,
    theme: colorList[2]
  },
  {
    title: '集绘册-扭蛋-正比女头',
    start: '2024-11-01 8:30:00',
    end: '2024-11-30 9:00:00',
    content:
      `名字：集绘册
类型：扭蛋
阵容：一川藤理、跳跳、百万、春天苏醒、阿溱溱
主题：正比女头`,
    theme: colorList[3]
  },
  {
    title: '集绘册-扭蛋-正比女头',
    start: '2024-12-01 8:30:00',
    end: '2024-12-31 9:00:00',
    content:
      `名字：集绘册
类型：扭蛋
阵容：一川藤理、跳跳、春天苏醒、717、十一号、乙酸
主题：正比女头`,
    theme: colorList[4]
  },
  {
    title: '黑潮-直购-情头',
    start: '2024-12-01 8:30:00',
    end: '2024-12-31 9:00:00',
    content:
      `名字：黑潮
类型：直购
阵容：一川藤理
主题：情头`,
    theme: colorList[4]
  },
  {
    title: '集绘册-扭蛋-闺蜜壁纸',
    start: '2025-01-01 8:30:00',
    end: '2025-01-31 9:00:00',
    content:
      `名字：集绘册
类型：扭蛋
阵容：一川藤理、林持、风霜、文星、白琴、笑看
主题：闺蜜壁纸`,
    theme: colorList[5]
  },
  {
    title: '黑潮-扭蛋-男单',
    start: '2025-01-01 8:30:00',
    end: '2025-01-31 9:00:00',
    content:
      `名字：黑潮
类型：扭蛋
阵容：一川藤理、uki
主题：男单`,
    theme: colorList[0]
  },
  {
    title: '堆糖-扭蛋-情头',
    start: '2025-01-01 8:30:00',
    end: '2025-01-31 9:00:00',
    content:
      `名字：堆糖
类型：扭蛋
阵容：一川藤理
主题：情头`,
    theme: colorList[0]
  },
  {
    title: '夜雨声烦-扭蛋-情头',
    start: '2025-02-01 8:30:00',
    end: '2025-02-28 9:00:00',
    content:
      `名字：夜雨声烦
类型：扭蛋
阵容：一川藤理、业、乔郁
主题：情头`,
    theme: colorList[1]
  },
  {
    title: '集绘册-扭蛋-闺蜜壁纸',
    start: '2025-02-01 8:30:00',
    end: '2025-02-28 9:00:00',
    content:
      `名字：集绘册
类型：扭蛋
阵容：一川藤理、跳跳、盐面包、春天苏醒
主题：闺蜜壁纸`,
    theme: colorList[1]
  },
  {
    title: '反调艺术家-扭蛋-未知',
    start: '2025-03-01 8:30:00',
    end: '2025-03-31 9:00:00',
    content:
      `名字：反调艺术家
类型：扭蛋
阵容：一川藤理、云中兔、U7、松时、安那其
主题：情头`,
    theme: colorList[2]
  },
  {
    title: '进行时扭蛋-扭蛋-未知',
    start: '2025-03-01 8:30:00',
    end: '2025-03-31 9:00:00',
    content:
      `名字：进行时扭蛋
类型：扭蛋
阵容：一川藤理、跳跳、白琴、酱酱
主题：未知`,
    theme: colorList[3]
  },
  {
    title: '集绘册-扭蛋-女头正比',
    start: '2025-04-01 8:30:00',
    end: '2025-04-30 9:00:00',
    content:
      `名字：集绘册
类型：扭蛋
阵容：一川藤理、717
主题：女头正比`,
    theme: colorList[4]
  },
  {
    title: '黑潮-扭蛋-情头壁纸',
    start: '2025-04-01 8:30:00',
    end: '2025-04-30 9:00:00',
    content:
      `名字：黑潮
类型：扭蛋
阵容：一川藤理、uki
主题：情头壁纸`,
    theme: colorList[5]
  },
  {
    title: '集绘册-扭蛋-情头',
    start: '2025-04-01 8:30:00',
    end: '2025-04-30 9:00:00',
    content:
      `名字：集绘册
类型：扭蛋
阵容：一川藤理、未知、未知
主题：情头`,
    theme: colorList[5]
  },
  {
    title: '黑潮-直购-未知',
    start: '2025-08-01 8:30:00',
    end: '2025-08-31 9:00:00',
    content:
      `名字：黑潮
类型：直购
阵容：一川藤理、云中兔
主题：未知`,
    theme: colorList[0]
  },
  {
    title: '黑潮-扭蛋-日漫店庆',
    start: '2025-08-01 8:30:00',
    end: '2025-08-31 9:00:00',
    content:
      `名字：黑潮
类型：扭蛋
阵容：一川藤理、云中兔
主题：日漫店庆`,
    theme: colorList[1]
  },
])
// 导出表格
const toCsvEvent = () => {
  timeGrid.value.exportCsv({
    filename: '排期表格.csv',
    original: true,
    isHeader: true,
    data: eventslist.value
  })
}
function checkboxEdit(h, { row }) {
  return (
    <input
      type="checkbox"
      checked={row.finish}
      onChange={(event) => {
        row.finish = event.target.checked
      }}
    />
  )
}
eventslist.value.forEach((item, index) => {
  //shop是content里面的第一个
  item.shop = item.content.split('\n')[0].split('：')[1]
  //type是content里面的第二个
  item.type = item.content.split('\n')[1].split('：')[1]
  //style是content里面的第五个
  item.style = item.content.split('\n')[3].split('：')[1]
  //participant是content里面的第六个
  item.participant = item.content.split('\n')[2].split('：')[1]
  //完成情况是看现在时间有没有超过end
  item.finish = new Date().getTime() > new Date(item.end).getTime()
})
// 滚动事件
window.onscroll = function () {
  top.value = document.documentElement.scrollTop || document.body.scrollTop
}
</script>

<template>
  <div class="header px-[15px] h-[64px] fixed left-0 top-0 w-full z-50"
    :style="top > 0 ? `background:#fff` : `background:transparent`">
    <tiny-layout :cols="12" class="h-full">
      <tiny-row class="h-full">
        <tiny-col :span="4" class="h-full flex justify-center align-center">
          <div class="h-full text-[16px] font-[400] leading-[64px]" :style="navTextStyle">一川藤理</div>
        </tiny-col>
        <tiny-col :span="4" class="h-full h-full flex justify-center align-center">
          <div class="h-full text-[16px] font-[400] leading-[64px] mx-[20px]" :style="navTextStyle">作品集</div>
          <div class="h-full text-[16px] font-[400] leading-[64px] mx-[20px]" :style="navTextStyle">排期</div>
          <div class="h-full text-[16px] font-[400] leading-[64px] mx-[20px]" :style="navTextStyle">时间图</div>
        </tiny-col>
        <tiny-col :span="4" class="h-full h-full flex justify-center align-center">
          <div class="h-full text-[16px] font-[400] leading-[64px] mx-[20px]" :style="navTextStyle">常驻：集绘册、黑潮</div>
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
        <tiny-carousel-item class="carousel-item-demo" v-for="item in bannerImg" :key="item">
          <img :src="item.img" alt="" class="w-full h-full object-cover rounded-lg" />
        </tiny-carousel-item>
      </tiny-carousel>
    </div>
  </div>
  <div class="planList h-[5635px] px-[120px]">
    <div class="plan h-[1139px] flex items-center justify-center">
      <div class="tableContainer w-full">
        <tiny-button @click="toCsvEvent">导出排期</tiny-button>
        <tiny-grid ref="timeGrid" :data="eventslist" border :edit-config="{ trigger: 'click', mode: 'cell', showStatus: true }">
          <tiny-grid-column type="index" width="60"></tiny-grid-column>
          <tiny-grid-column type="selection" width="60"></tiny-grid-column>
          <tiny-grid-column field="shop" title="馆子">
            <template #default="data">
              <tiny-tag-group effect="dark" v-if="data.row.shop === `黑潮`"
                :data="[{ name: data.row.shop, type: tagColor[1] }]"></tiny-tag-group>
              <tiny-tag-group effect="dark" v-else-if="data.row.shop === `集绘册`"
                :data="[{ name: data.row.shop, type: tagColor[0] }]"></tiny-tag-group>
              <tiny-tag-group effect="dark" v-else
                :data="[{ name: data.row.shop, type: tagColor[2] }]"></tiny-tag-group>
            </template>
          </tiny-grid-column>
          <tiny-grid-column field="type" title="类型">
            <template #default="data">
              <tiny-tag-group effect="dark" v-if="data.row.type === `直购`"
                :data="[{ name: data.row.type, type: tagColor[1] }]"></tiny-tag-group>
              <tiny-tag-group effect="dark" v-else
                :data="[{ name: data.row.type, type: tagColor[0] }]"></tiny-tag-group>
            </template>
          </tiny-grid-column>
          <tiny-grid-column field="start" title="起始时间"></tiny-grid-column>
          <tiny-grid-column field="end" title="截止时间"></tiny-grid-column>
          <tiny-grid-column field="style" title="主题风格"></tiny-grid-column>
          <tiny-grid-column field="participant" title="阵容">
            <template #default="data">
              <tiny-tag-group effect="dark"
                :data="data.row.participant.split(`、`).map((ele, index) => ({ name: ele, type: tagColor[index % 5] }))"></tiny-tag-group>
            </template>
          </tiny-grid-column>
          <tiny-grid-column field="finish" title="完成情况" align="center" format-text="boole"
            :editor="checkboxEdit"></tiny-grid-column>
        </tiny-grid>
      </div>

    </div>
    <div class="plan h-[1139px] flex items-center justify-center">
      <div class="calendarContainer w-full">
        <tiny-calendar-view class="h-full" :events="eventslist" :year="dateInfo.year"
          :month="dateInfo.month"></tiny-calendar-view>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.banner {
  background: url("@/assets/index/homeBg.png") 100% 100% no-repeat;
}

.topButton {
  transition: all 0.3s;

  &:hover {
    transform: translateY(-4px);
  }
}
</style>
