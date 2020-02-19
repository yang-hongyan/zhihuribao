<template>
	<div id="box">
		<swiper :options="swiperOption">
		  <swiper-slide v-for="(item,index) in slideImages">
		    <a href="#" target="_blank"><img :src="item.imageUrl" /></a>
		  </swiper-slide>
		  <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
import '../assets/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default{
	compoents:{
    swiper,
    swiperSlide,
		swiper,
		swiperSlide
	},
	data(){
		return{
			swiperOption: {
			   autoplay: {//自动播放
			     delay: 2500,
			     disableOnInteraction: false
			   },
			   pagination: {//分页
			     el: '.swiper-pagination',
			     clickable: true,
			     renderBullet(index, className) {//自定义分页的按钮
			       return `<span class="${className} swiper-pagination-bullet-custom"></span>`
			     }
			   }
			},
			slideImages:[
				{"imageUrl":require("../assets/img/banner.png")},
				{"imageUrl":require("../assets/img/meinv.jpg")},
			],
		}
	}
}
</script>

<style scoped="scoped">
.swiper-pagination-bullet-custom {
  width: 9px;
  height: 9px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  color: #000;
  opacity: 1;
  border-radius: 0;
  background: #fff;
}
.swiper-pagination-bullet-custom.swiper-pagination-bullet-active {
  color: #fff;
  background: #a11703;
}
img{width:100%}
</style>
