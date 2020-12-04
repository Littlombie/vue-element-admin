<template>
  <div class="">
    <css-var>
      <template v-slot:cssVar1>
        <demo-block>
          <template slot="source">
            <cssVar1></cssVar1>
          </template>
          <template slot="highlight">
            <md-var1></md-var1>
          </template>
        </demo-block>
      </template>
      <template v-slot:cssWeights>
        <demo-block>
          <p></p>
          <template slot="source">
            <cssVarWeights></cssVarWeights>
          </template>
           <template slot="highlight">
             <mdWeights></mdWeights>
          </template>
        </demo-block>
      </template>
      <template v-slot:cssMargin>
        <demo-block>
          <template slot="source">
            <cssVarMargin></cssVarMargin>
          </template>
           <template slot="highlight">
             <mdMargin></mdMargin>
          </template>
        </demo-block>
      </template>
      <template v-slot:cssLayout>
        <demo-block>
          <template slot="source">
            <cssVarLayout></cssVarLayout>
          </template>
           <template slot="highlight">
             <mdLayout></mdLayout>
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
import mdMargin from './md/md-var3.md';
import mdLayout from './md/md-var4.md';
import cssVar1 from './components/var1'
import cssVarWeights from './components/var2'
import cssVarMargin from './components/var3'
import cssVarLayout from './components/var4'
export default {
  name: "",
  data() {
   return {

   }
  },
 components: {
   cssVar,
   cssVar1,
   mdVar1,
   mdWeights,
   cssVarWeights,
   cssVarMargin,
   mdMargin,
   cssVarLayout,
   mdLayout
 },
 methods: {
 },
}
</script>

<style lang="less" scoped>
</style>
