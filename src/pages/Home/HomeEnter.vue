<template>
<div>
	<div v-if="window.width>=576" class="row justify-content-center enter-row pt-2 pb-2" style="margin:0px;">
		<div class="col-3 enter-area" >
			<img :src="require('@/assets/icon/13990305845_32ec4e1c05_o.jpg')" style="width:100%;">
			<div class="enter-card">
				<h6>給高中生</h6>
				<p style="color:#000;">由於108課綱對於「素養」的重視，本系重視邏輯思考與計算思維的基礎訓練，積極調整課程與發展方向，以打造未來人才。</p>
				<a href="./#/parent"><button>MORE<div> > </div></button></a>
				<a target="_blank" href="https://collego.ceec.edu.tw/Highschool/DepartmentIntro?dept_id=015019"><img class="mb-2" :src="require('@/assets/1611806044457.jpg')" style="width:100%;"></a>
			</div>
		</div>
		<div class="col-3 enter-area">
			<img :src="require('@/assets/icon/11145883865_2675fdd73e_o.jpg')" style="width:100%;">
			<div class="enter-card">
				<h6>給大學生</h6>
				<p style="color:#000;">本系課程分成兩組「數據科學與智慧應用」、「計算科學與金融應用」請同學依興趣修習，也可與系上老師討論未來發展方向。</p>
				<a href="./#/university"><button>MORE<div> > </div></button></a>
			</div>
		</div>
		<div class="col-3 enter-area">
			<img :src="require('@/assets/icon/14009793803_f3dfe70b55_o.jpg')" style="width:100%;">
			<div class="enter-card">
				<h6>給研究生</h6>
				<p style="color:#000;">受惠於國內各企業在「數據分析」與「數位轉型」領域的迫切需求，帶動相關人才的成長。本系所鼓勵研究生們跨界跨域學習，將應用數學到各領域，在強化自身競爭力的同時也培養學習力。</p>
				<a href="./#/senior"><button>MORE<div> > </div></button></a>
			</div>
		</div>
	</div>
	<div v-if="window.width<=576" class="row justify-content-center enter-row pt-2 pb-2" style="margin:0px">
		<div class="col-12 pt-2">
			<img :src="require('@/assets/icon/13990305845_32ec4e1c05_o.jpg')" style="width:100%;border-radius:5px;">
			<div class="enter-card" style="background: #ECE9E2;margin: 0px 0px 10px 0px;">
				<h6>給高中生</h6>
				<p style="color:#000;">由於108課綱對於「素養」的重視，本系除了數理邏輯的基礎訓練外，也積極調整課程與發展方向，以打造未來人才。</p>
				<a href="./#/parent"><button>MORE<div> > </div></button></a>				
				<a target="_blank" href="https://collego.ceec.edu.tw/Highschool/DepartmentIntro?dept_id=015019"><img class="mb-2" :src="require('@/assets/1611806044457.jpg')" style="width:100%;"></a>
			</div>
		</div>
		<div class="col-12 pt-2">
			<img :src="require('@/assets/icon/11145883865_2675fdd73e_o.jpg')" style="width:100%;border-radius:5px;">
			<div class="enter-card" style="background: #ECE9E2;margin: 0px 0px 10px 0px;">
				<h6>給大學生</h6>
				<p style="color:#000;">本系課程分成兩組「數據科學與智慧應用」、「計算科學與金融應用」請同學依興趣修習，也可與系上老師討論未來發展方向。</p>
				<a href="./#/university"><button>MORE<div> > </div></button></a>
			</div>
		</div>
		<div class="col-12 pt-2">
			<img :src="require('@/assets/icon/14009793803_f3dfe70b55_o.jpg')" style="width:100%;border-radius:5px;">
			<div class="enter-card" style="background: #ECE9E2;margin: 0px 0px 10px 0px;">
				<h6>給研究生</h6>
				<p style="color:#000;">受惠於國內各企業在「數據分析」與「數位轉型」領域的迫切需求，帶動相關人才的成長。本系所鼓勵研究生們跨界跨域學習，將應用數學到各領域，在強化自身競爭力的同時也培養學習力。</p>
				<a href="./#/senior"><button>MORE<div> > </div></button></a>
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
  data() {
    return{
      window: {
        width: 0,
        height: 0
      }
    }
  },
  created () {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {

      this.window.width = window.innerWidth;
    }
  }
}
</script>
<style scoped>
.enter-area {
	padding-right: 0px;
	padding-left: 0px;
	border-radius: 3px;
	margin: 10px;
	background:#ECE9E2;
}
.enter-card {
	padding:15px;
	margin:5px;
}
.enter-card h6{
	color:rgb(72, 46, 179);
	font-weight: 600;
	font-size:130%;
}

.enter-card button {
	font-size: 90%;
	display:flex;
	justify-content:flex-end;
	padding:0px 0px 0px 6px;
	background:white;
	border:none;
	margin-bottom: 40px;
}

.enter-card button div{
	color:white;
	margin-left:5px;
	background: rgb(72, 46, 179);
	padding:0px 5px;
	border-left: 4px solid rgb(175, 164, 218);
}
</style>