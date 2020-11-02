```
<style lang="css">
  .box1 {
    --bg-red: #f00;
    --color-fff: #fff;
  }
  .box-item {
    width: 300px;
    height: 40px;
    padding: 10px;
  }
  .bg-red {
    background-color: var(--bg-red);
    color: var(--color-fff,  #ff0);
  }

  .box-2 {
    --fs-18: 18px;
  }
  .box-2 .box-2-span {
    font-size: var(--fs-18, 14px);
  }
</style>
```