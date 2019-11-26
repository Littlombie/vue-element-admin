<template>
  <el-dialog
    title="修改信息"
    :visible.sync="showEditDialog"
    :before-close="hideEditDialog"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    width="40%"
    class="edit-form"
  >
    <el-form :model="form" ref="ediFforms">
      <el-form-item label="日期" :label-width="formLabelWidth">
        <el-date-picker v-model="form.infoDate" type="date"  format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期"></el-date-picker>
      </el-form-item>
      <el-form-item label="姓名" :label-width="formLabelWidth">
        <el-input placeholder="请输入名称" v-model="form.infoName" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="地址" :label-width="formLabelWidth" class="edit-add">
        <el-cascader
          size="large"
          :options="options"
          v-model="selectedOption"
          @change="handleChange"
        ></el-cascader>
        <el-input placeholder="请输入详细地址" width="40%" v-model="form.detailAddress" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="cancelForm()">取 消</el-button>
      <el-button type="primary" @click="submit()">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import {
  provinceAndCityData,
  regionData,
  provinceAndCityDataPlus,
  regionDataPlus,
  CodeToText,
  TextToCode
} from "element-china-area-data";

export default {
  props: {
    showEditDialog: Boolean,
    formData: Object
  },
  data() {
    return {
      CodeToText,
      TextToCode,
      provinceAndCityData,
      provinceAndCityDataPlus,
      regionData,
      regionDataPlus,
      forms: {
        aid: null,
        infoDate: "",
        infoName: "",
        addText: "",
        detailAddress: ""
      },
      formLabelWidth: "80px",
      options: regionData,
      selectedOptions: [],
      bbb: []
    };
  },
  created () {
    // this.form = this.formData
    // this.$nextTick(() => {
    //   setTimeout(() => {
    //   console.log(this.formData, Object.keys(this.formData).length);
    //   this.selectedOptions()
    //   }, 1000)
    // })
  },
  computed: {
    form() {
      // console.log('formData', this.formData);
      if (Object.keys(this.formData).length) {
        this.forms = {
          aid: this.formData.id,
          infoDate: this.formData.date,
          infoName: this.formData.name,
          addText: "",
          detailAddress: this.formData.addDetail
        }
      } else {

      }
      // console.log(this.forms);
      return this.forms;
    },
    selectedOption() {
      // console.log(this.formData, Object.keys(this.formData).length);
      let newArr = [],aStr=[];
      if (Object.keys(this.formData).length) {
        if (this.forms.addText != '') {
          aStr = this.forms.addText.split(" ");
          newArr = this.convertTextToCode(aStr[0], aStr[1], aStr[2]).split(", ");
        } else {
          aStr = this.formData.address.split(" ");
          newArr = this.convertTextToCode(aStr[0], aStr[1], aStr[2]).split(", ");
        }
      } 
      // console.log(newArr);
      return newArr;
    }
  },
  methods: {
    convertTextToCode(provinceText, cityText, regionText) {
      let code = "";
      if (provinceText && this.TextToCode[provinceText]) {
        const province = this.TextToCode[provinceText];
        code += province.code + ", ";
        if (cityText && province[cityText]) {
          const city = province[cityText];
          code += city.code + ", ";
          if (regionText && city[regionText]) {
            code += city[regionText].code;
          }
        }
      }
      return code;
    },
    hideEditDialog() {
      this.$emit("hideEditDialog");
    },
    handleChange(value) {
      this.forms.addText = value
        .map(item => {
          return this.CodeToText[item];
        })
        .reduce((total, item, index) => {
          return total + " " + item;
        });
      console.log(value, this.forms.addText);
    },
    cancelForm() {
      this.$emit("hideEditDialog");
    },
    submit() {
      console.log("确定修改", this.forms);
      this.$emit('subChange', this.forms);
      this.$emit("hideEditDialog");
    }
  }
};
</script>
<style lang="scss">
.edit-form .edit-add > .el-form-item__content {
  display: flex;
  justify-content: flex-start;
  .el-cascader {
    flex: 1;
  }
  & > .el-input {
    width: 40%;
    margin-left: 20px;
  }
}
</style>
<style lang="scss" scoped>
</style>