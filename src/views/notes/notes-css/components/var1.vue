<template>
  <div class="box1">
    <div class="box-item box-1 bg-red">
      box-1 红背景 白字
    </div>
    <p>--------------------------------</p>
    <div class="box-item box-2 bg-red">
      <p class="box-2-span">box-2 继承父级- font-size: 18</p> 
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "",
  data() {
   return {

   }
  },
 components: {
 },
 methods: {
 },
}
</script>

<style lang="css" scoped>
  .box1 {
    --bg-red: #f00;
    --color-fff: #fff;
  }
  .box-item {
    width: 300px;
    height: 40px;
    padding: 10px;
  }
  .bg-red {
    background-color: var(--bg-red);
    color: var(--color-fff,  #ff0);
  }

  .box-2 {
    --fs-18: 18px;
  }
  .box-2 .box-2-span {
    font-size: var(--fs-18, 14px);
  }
</style>
