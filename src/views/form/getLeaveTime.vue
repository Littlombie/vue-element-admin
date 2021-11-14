<!--
 * @Author: Littlombie
 * @Date: 2021-11-14 20:01:30
 * @lastEditors: Littlombie
 * @LastEditTime: 2021-11-14 23:55:30
-->
<template>
  <div class="">
    <el-form ref="form" :model="form" @change="cahngeForm">
      <el-date-picker
        v-model="form.startTime"
        type="datetime"
        placeholder="选择日期时间"
      >
      </el-date-picker>
      <el-date-picker
        v-model="form.endTime"
        type="datetime"
        placeholder="选择日期时间"
      >
      </el-date-picker>
    </el-form>
    <el-button @click="outInner"> 输出 </el-button>
    <p>请假时长{{ times }}</p>
  </div>
</template>

<script type="text/javascript">
import { getTotal } from '@/utils/getLeaveTime'
export default {
  name: "",
  data() {
    return {
      form: {
        endTime: "",
        startTime: "",
      },
      times: "",
    };
  },
  components: {},
  watch: {
    // form: {
    //   handler(newVal) {
    //     this.setLeaveTIme(newVal)
    //   },
    //   deep: true
    // }
  },
  created() {},
  mounted() {},
  methods: {
    cahngeForm() {
      console.log(this.form);
    },
    setLeaveTIme(form) {
      console.log(form);
    },
    outInner() {
      console.log(this.form);
      let startTime = this.$dayjs(this.form.startTime).format('YYYY-MM-DD HH:mm:ss')
      let endTime = this.$dayjs(this.form.endTime).format('YYYY-MM-DD HH:mm:ss')
      this.times = getTotal(startTime , endTime,9.5,18.5,true,12,13.5)
      console.log(this.times, startTime, endTime)
    },
  },
};
</script>

<style lang="less" scoped>
</style>
