<template>
  <div class="css-var-layout">
    <ul>
      <li v-for="(item, index) in layoutList" :key="index">
        <h3 class="title">{{ item.title }}</h3>
        <p class="content">{{ item.content }}</p>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "",
  data() {
    return {
      layoutList: [],
    };
  },
  components: {},
  mounted() {
    this.initList();
  },
  methods: {
    initList() {
      for (let i = 0; i < 7; i++) {
        this.layoutList.push({
          title: `标题${i + 1}`,
          content: `这是第${i + 1}个内容`,
        });
        
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
.css-var-layout ul {
  --color: red;
  --columns: 4;
  --margins: calc(24px / var(--columns));
  --space: calc(1px * var(--columns));
  --fontSize: calc(100px - 4 / var(--columns));
}
.css-var-layout ul {
  /* display: flex;
  justify-content: flex-start;
  flex-wrap: wrap; */
  width: 100%;
  min-width: 100px;
  background: #cfd;
  padding: 20px;
  overflow: hidden;
}
.css-var-layout ul:after {
  display: block;
  content: '';
  clear: both;
}

@media screen and (max-width: 800px) {
  .css-var-layout ul {
    --columns: 3;
  }
}
@media screen and (max-width: 700px) {
  .css-var-layout ul {
    --columns: 2;
  }
}
@media screen and (max-width: 600px) {
  .css-var-layout ul {
    --columns: 1;
  }
}
.css-var-layout ul li  {
  float: left;
  width: calc((100% - var(--margins) * var(--columns) * 2) / var(--columns));
  margin: var(--margins);
  box-sizing: border-box;
  padding: var(--columns);
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
  
  /* &:before  {
    display: none !important;
  } */
}

.css-var-layout ul li:before  {
  display: none !important;
}

.css-var-layout ul li .title {
  font-size: var(--fontSize);
  padding: var(--space);
}

.css-var-layout ul li:nth-child(1) {
  background-color: #ff0;
  /* background-color: color(var(--color) a(50%) hue(+30deg)); */
  
}
.css-var-layout ul li:nth-child(2) {
  /* background: calc(var(--color) * 50%); */
  background-color: #fdd;
}
.css-var-layout ul li:nth-child(3) {
  /* background: calc(var(--color) * 0.5); */
  background-color: #f57;
}
.css-var-layout ul li:nth-child(4) {
  /* background: calc(var(--color) * 0.5); */
  background-color: #f66;
}
.css-var-layout ul li:nth-child(5) {
  /* background: calc(var(--color) * 0.5); */
  background-color: #f01;
}
.css-var-layout ul li:nth-child(6) {
  /* background: calc(var(--color) * 0.5); */
  background-color: #f08;
}
.css-var-layout ul li:nth-child(7) {
  /* background: calc(var(--color) * 0.5); */
  background-color: #fcc;
}
</style>
