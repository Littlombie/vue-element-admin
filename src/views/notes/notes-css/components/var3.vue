<template>
  <div class="var-margin">
    <div class="var-no-margin">
      无外边距
    </div>
    <div class="var-margin">
      有外边距
    </div>
    <div class="var-margin-calc">
      使用计算属性
    </div>
  </div>
</template>


<style lang="css" scoped>
.var-margin {
  --margin20: 20;
  --margin20px: 20px;
}
.var-margin>div {
  background: #f00;
}
.var-no-margin {
  margin: var(--margin20)px;
}
.var-margin {
  margin: var(--margin20px);
}
.var-margin-calc {
 margin: calc(var(--margin20) * 1px);
}
</style>
