<template>
  <div class="">
    <css-var>
      <template v-slot:cssVar1>
        <demo-block>
          <template slot="source">
            <cassVar1></cassVar1>
          </template>
          <template slot="highlight">
            <md-var1></md-var1>
          </template>
        </demo-block>
      </template>
      <template v-slot:cssWeights>
        <demo-block>
          <template slot="source">
            <cassVarWeights></cassVarWeights>
          </template>
           <template slot="highlight">
             <mdWeights></mdWeights>
          </template>
        </demo-block>
      </template>
    </css-var>
  </div>
</template>

<script type="text/javascript">
import cssVar from './md/css-var.md';
import mdVar1 from './md/md-var1.md';
import mdWeights from './md/md-var2.md';
import cassVar1 from './components/var1'
import cassVarWeights from './components/var2'
export default {
  name: "",
  data() {
   return {

   }
  },
 components: {
   cssVar,
   cassVar1,
   mdVar1,
   mdWeights,
   cassVarWeights
 },
 methods: {
 },
}
</script>

<style lang="less" scoped>
</style>
