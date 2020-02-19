<template>
	<div class="footer">
		<router-link :to="footerList.href" v-for="footerList in footerList" :key="footerList.title">
			<img :src="footerList.src">
		</router-link>
	</div>
</template>

<script>
export default{
	data(){
		return{
			footerList:[
				{"src":require("../assets/img/hei2.png"),"href":"/"},
				{"src":require("../assets/img/xiaoxi.png"),"href":"/pinglun"},
				{"src":require("../assets/img/zanya.png"),"href":"/"},
				{"src":require("../assets/img/xing.png"),"href":"/"},
				{"src":require("../assets/img/xiazai.png"),"href":"/"}
			]
		}
	}
}
</script>

