```css 
<style lang="css">
  .var-margin {
    --margin20: 20;
    --margin20px: 20px;
  }
  .var-margin>div {
    background: #f00;
  }
  .var-no-margin {
    margin: var(--margin20)px;
  }
  .var-margin {
    margin: var(--margin20px);
  }
  .var-margin-calc {
  margin: calc(var(--margin20) * 1px);
  }
</style>
```