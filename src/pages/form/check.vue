<template>
  <div class="views-box ">
    <form action class="form">
      <div class="label-box">
        <label>单选框:</label>
        <el-radio v-model="radio" label="1">备选项</el-radio>
        <el-radio v-model="radio" label="2">备选项</el-radio>
      </div>
      <div class="label-box">
        <label>复选框:</label>
        <el-checkbox v-model="checked1">备选项1</el-checkbox>
        <el-checkbox v-model="checked2">备选项</el-checkbox>
      </div>
      <div class="label-box">
        <label>多选框组:</label>
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="复选框 A"></el-checkbox>
          <el-checkbox label="复选框 B"></el-checkbox>
          <el-checkbox label="复选框 C"></el-checkbox>
          <el-checkbox label="禁用" disabled></el-checkbox>
          <el-checkbox label="选中且禁用" disabled></el-checkbox>
        </el-checkbox-group>
      </div>
      <div class="label-box">
        <el-checkbox
          :indeterminate="isIndeterminate"
          v-model="checkAll"
          @change="handleCheckAllChange"
        >全选</el-checkbox>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
          <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
      </div>
      <div class="label-box">
        <el-checkbox-group v-model="checkedCities2" :min="1" :max="2">
          <el-checkbox v-for="city in cities2" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
      </div>
    </form>
  </div>
</template>

<script>
const cityOptions = ["上海", "北京", "广州", "深圳"];
const cityOptions2 = ["上海", "北京", "广州", "深圳"];
export default {
  data() {
    return {
      radio: "1",
      checked1: false,
      checked2: true,
      checkList: ["选中且禁用", "复选框 A"],
      checkAll: false,
      checkedCities: ["上海", "北京"],
      cities: cityOptions,
      isIndeterminate: true,

      checkedCities2: ["上海", "北京"],
      cities2: cityOptions2
    };
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  margin-top: 20px;
}
.label-box {
  margin-top: 20px;
  label {
    padding-right: 10px;
  }
}
</style>