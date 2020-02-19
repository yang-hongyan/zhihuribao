<template>
	<div id="box">
		<div class="long bold">
		  <p class="p">
				<router-link :to="'/wenzhangxiangqing'"><img src="../assets/img/hei.jpg" /></router-link>
				<span class="eight">34条评论</span>
			</p>
		</div>
		<div>
		  <p class="one">14条长评</p>
			<div class="long" v-for="longs in longs" :key="longs.id">
				<p class="head"><img :src="longs.avatar" />{{longs.author}}<span><img src="../assets/img/many.jpg" /></span></p>
				<p class="contents">{{longs.content}}</p>
				<p class="contents">
					<span class="grayText">{{longs.time}}</span>
					<span class="zan"><img :src="longs.likes" /></span>
					<span class="wei"><img src="../assets/img/wei.jpg" /></span>
				</p>
			</div>
		</div>
		<div>
		  <p class="one">20条短评</p>
			<div  class="long" v-for="short in short" :key="short.id">
				<p class="head"><img :src="short.avatar" />{{short.author}}<span><img src="../assets/img/many.jpg" /></span></p>
				<p class="contents">{{short.content}}</p>
				<p class="contents">
					<span class="grayText">{{short.time}}</span>
					<span class="zan"><img :src="short.likes" /></span>
					<span class="wei"><img src="../assets/img/wei.jpg" /></span>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	compoents:{
		
	},
	data(){
		return{
			longs:[],
			short:[]
		}
	},
	mounted:function(){
	  this.axios.get("story/4232852/long-comments").then(res=>{
	  this.longs=res.data.comments;	
	  });
		this.axios.get("story/4232852/short-comments").then(res=>{
		this.short=res.data.comments;
		});
	}
}
</script>
<style>
</style>
