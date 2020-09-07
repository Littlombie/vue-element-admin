<template>
   <div class="main-page item-box left-item">
     <p>https://github.com/channg/umoji</p>
    <p class="box-item-title">Emoji转换</p>
     <el-form :model="form">
       <el-form-item>
         <el-input type="text" v-model="form.value" ></el-input>
       </el-form-item>
       <el-button size="medium" @click="translateUnicode">转换程Unicode</el-button>
       <el-button size="medium" @click="translateEmoji">转换程emoji</el-button>
       <el-form-item>
         <p >{{form.unicodeText}}</p>
        </el-form-item>
     </el-form>
     <neon></neon>
  </div>
</template>

<script type="text/javascript">
import umoji from 'umoji';
import neon from '../../components/parctice/neon'
export default {
  name: "",
  data() {
    return {
      form: {
        value: null,
        unicodeText: null,
        emojiText: null
      }
    }
  },
 components: {
   neon
 },
 methods: {
  translateUnicode () {
   this.form.unicodeText =  umoji.emojiToUnicode('😀😀😀😀😀sdksk');
  },
  translateEmoji () {

  },
 },
}
</script>

<style lang="less" scoped>

</style>
