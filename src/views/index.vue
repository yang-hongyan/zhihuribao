<template>
	<div id="box">
		<Header/>
		<van-pull-refresh v-model="isLoading" @refresh="onRefresh" :head-height="80">
			<banner>
				<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
						<van-swipe-item v-for="item in swiperList" :key="item.id" @click="back">
								<a :href="item.url">
										<img :src="item.image">
										<div class="img">
											<p class="big_white">{{item.title}}</p>
											<p class="little_white">{{item.hint}}</p>
										</div>
								</a>
						</van-swipe-item>
				</van-swipe><!-- 轮播 -->
			</banner>
			<div class="content" v-for="items in conList" :key="items.id">
				<a :href="items.url">
					<div class="content_right">
						<img :src="items.images" />
					</div>
					<div class="content_left">
						<p class="bolds">{{items.title}}</p>
						<p class="gray">{{items.hint}}</p>
					</div>
				</a>
			</div>
			<p class="line">2月15日<img src="../assets/img/xian.jpg" /></p>
			<div class="content" v-for="items in histroy" :key="items.id">
				<a :href="items.url">
					<div class="content_right">
						<img :src="items.images" />
					</div>
					<div class="content_left">
						<p class="bolds">{{items.title}}</p>
						<p class="gray">{{items.hint}}</p>
					</div>
				</a>
			</div>
    </van-pull-refresh><!--下拉刷新-->
	</div>
</template>
<script>
import { Toast } from 'vant';
import Header from '../components/header.vue'
export default{
	components:{
		Header,	
	},
	data(){
		return{
			// 刷新
			count: 0,
			isLoading: false,
			conList:[],
			histroy:[],
			swiperList:[],
		}
	},
	methods: {
	    back(){
	        this.$router.replace('/wenzhangxiangqing')
	    },
			//刷新
	    onRefresh() {
	    setTimeout(() => {
	        this.isLoading = false;
	    }, 1000);
	    }
	},
	mounted:function(){
	  this.axios.get("news/latest").then(res=>{
			this.conList=res.data.stories;
			this.swiperList=res.data.top_stories;
	  });
		this.axios.get("news/before/20131119").then(res=>{
		this.histroy=res.data.stories;
		});
	}
}
</script>
<style>
</style>
