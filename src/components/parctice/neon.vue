<template>
    <div id="neon-btn">
      <button class="btn one">Hover me</button>
      <button class="btn two">Hover me</button>
      <button class="btn three">Hover me</button>
    </div>
</template>

<script type="text/javascript">
export default {
  name: "",
  data() {
    return {};
  },
  components: {},
  methods: {
  },
};
</script>

<style  scoped>
#neon-btn {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  background: #031628;
}

.btn {
  border: 1px solid;
  background-color: transparent;
  text-transform: uppercase;
  font-size: 14px;
  padding: 10px 20px;
  font-weight: 300;
}

.one {
  color: #4cc9f0;
}

.two {
  color: #f038ff;
}

.three {
  color: #b9e769;
  margin-top: 0;
}

.btn:hover {
  color: white;
  border: 0;
  cursor: pointer;
}

.one:hover {
  background-color: #4cc9f0;
  -webkit-box-shadow: 10px 10px 99px 6px rgba(76, 201, 240, 1);
  -moz-box-shadow: 10px 10px 99px 6px rgba(76, 201, 240, 1);
  box-shadow: 10px 10px 99px 6px rgba(76, 201, 240, 1);
}

.two:hover {
  background-color: #f038ff;
  -webkit-box-shadow: 10px 10px 99px 6px rgba(240, 56, 255, 1);
  -moz-box-shadow: 10px 10px 99px 6px rgba(240, 56, 255, 1);
  box-shadow: 10px 10px 99px 6px rgba(240, 56, 255, 1);
}

.three:hover {
  background-color: #b9e769;
  -webkit-box-shadow: 10px 10px 99px 6px rgba(185, 231, 105, 1);
  -moz-box-shadow: 10px 10px 99px 6px rgba(185, 231, 105, 1);
  box-shadow: 10px 10px 99px 6px rgba(185, 231, 105, 1);
}
</style>
