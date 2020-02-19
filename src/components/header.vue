<template>
	<div class="headers">
		<div class="div_right">
			<p>
				<span v-if="grt=(ho<9?'早上好':
		                ho<12?'上午好':
		                ho<15?'中午好':
		                ho<19?'下午好':
		                '晚上好'
		                )">{{grt}}</span>
				<router-link :to="'/wode'"><img src="../assets/img/wode.png" /></router-link>
			</p>
		</div>
		<div class="div_left">
			<p class="number">{{time | nowDay}}</p>
			<p>{{time | nowMonth}}</p>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			//时间
			time:Date.parse(new Date()),
			//问候语
			grt:"hello",
			ho:new Date().getHours(),
		}
	},
	//时间
	filters:{
	    nowDay: function (value) {
			let date = new Date(value);
			let d = date.getDate();
			d = d < 10 ? ('0' + d) : d;
			return d
			},
			nowMonth: function (value){
			let date = new Date(value);
			let MM = date.getMonth()+1;
			MM = MM < 10 ? (MM) : MM;
			return MM+'月'
			}
	}
}
</script>

<style>
</style>
