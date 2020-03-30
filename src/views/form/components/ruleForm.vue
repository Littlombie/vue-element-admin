<!--
 * @Author: Littlombie
 * @Date: 2020-03-19 11:02:53
 * @lastEditors: Littlombie
 * @LastEditTime: 2020-03-19 17:11:08
 -->
<template>
  <div class="form-content">
    <el-form :model="ruleForm" ref="ruleForm" :rules="rules" :inline="true" label-width="100px">
      <div class="" v-for="(item, index) in ruleForm.compareArr" :key="index"> 
        <el-form-item :label="'比较值'+ (index+1)" required>
          <div>
            <el-form-item :prop="`compareArr.${index}.lowestValue`">
              <el-input v-model="item.lowestValue" placeholder="请输入最低值"></el-input>
            </el-form-item>
            <el-form-item :prop="`compareArr.${index}.highestValue`">
              <el-input v-model="item.highestValue" placeholder="请输入最高值"></el-input>
            </el-form-item>
            <el-button v-if="ruleForm.compareArr.length > 1" @click="clearCompare(index)">删除</el-button>
          </div>
        </el-form-item>
      </div>
      <p class="add-btn" @click="addCompare"> <i class="el-icon-plus"></i></p>
    </el-form>
  </div>
</template>

<script type="text/javascript">
import rules from '../../../utils/rules'
export default {
  name: "rule-form",
  props: {
    type: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      ruleForm: {
        compareArr: [{
          lowestValue: null,
          highestValue: null
        }]
      },
      rules: {}
    }
  },
  watch: {
    'ruleForm.compareArr': {
      handler(list) {
        list.forEach((item, index) => {
          // console.log(item);
          this.createRuleValidate(index);
          
        });
      },
      deep: true
    },
    ruleForm: {
      handler(newVal, oldVal) {
        this.$emit('ruleData', newVal.compareArr)
      },
      deep: true
    }
  },
  components: {
  },
  created() {
    this.createRuleValidate(0);
  },
  methods: {
    createRuleValidate(index) {
      this.$set(this.rules, `compareArr.${index}.lowestValue`, [
        {required: true,  trigger: ['blur','change'], message: '最低值不能为空'},
        {required: true, validator: this.$rules.numberCheck, trigger: ['blur', 'change'], message: '最高值必须为正整数'},
        {
          required: true,
          validator: (rule, value, callback) => {
            const _value = String(value).trim() && Number(value);
            const highestValue = this.ruleForm.compareArr[index].highestValue;
            if (_value > highestValue && highestValue) {
              return callback(rule.message);
            }
            callback();
          },
          message: '不能大于最大值',
          trigger: ['change', 'blur']
        }
      ]);
      this.$set(this.rules, `compareArr.${index}.highestValue`, [
        {required: true,  trigger: ['blur','change'], message: '最高值不能为空'},
        {required: true, validator: this.$rules.numberCheck, trigger: ['blur', 'change'], message: '最高值必须为正整数'},
        {
          required: true,
          validator: (rule, value, callback) => {
            const _value = String(value).trim() && Number(value);
            const lowestValue = this.ruleForm.compareArr[index].lowestValue;
            if (_value <= lowestValue && lowestValue) {
              return callback(rule.message);
            }
            callback();
          },
          message: '不能小于最小值',
          trigger: ['change', 'blur']
        }
      ])
    },
    addCompare () {
      let data = {
        lowestValue: null,
        highestValue: null
      }
      this.ruleForm.compareArr.push(data);
    },
    clearCompare(index) {
      console.log(index);
      if (this.ruleForm.compareArr.length == 1) {
        return;
      }
      this.ruleForm.compareArr.splice(index, 1)
    },
    validateForm () {
      let flag = null
      this.$refs['ruleForm'].validate(valid => {
        if (valid) {
          flag = true
        } else {
          flag = false
        }
      })
      return flag
    },
  },
}
</script>

<style lang="less" scoped>
  .add-btn {
    width: 400px;
    height: 40px;
    margin-left: 100px;
    text-align: center;
    line-height: 40px;
    border-radius: 5px;
    cursor: pointer;
    border: 1px dashed #ccc;
  }
</style>
