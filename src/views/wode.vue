<template>
	<div id="box">
	  <p class="firstP">
			<router-link :to="'/'"><img src="../assets/img/hei.jpg" /></router-link>
		</p>
		<div class="div">
			<p class="user"><img src="../assets/img/wode.png" /></p>
			<p class="text">用户6669604149</p>
		</div>
		<p class="my">我的收藏<img src="../assets/img/hui.jpg" /></p>
		<p class="inform">消息中心<img src="../assets/img/hui.jpg" /></p>
		<div>
		  <dl v-for="dl in dl" :key="dl.id">
				<dt><img :src="dl.image" /></dt>
				<dd>{{dl.text}}</dd>
			</dl>	
		</div>
	</div>
</template>
<script>
export default{
	compoents:{

	},
	data(){
		return{
			dl:[
				{"image":require("../assets/img/yejian.jpg"),"text":"夜间模式"},
				{"image":require("../assets/img/shezhi.jpg"),"text":"设置"}
			]
		}
	}
}
</script>
<style>
</style>
