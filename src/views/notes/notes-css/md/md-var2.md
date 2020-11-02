``` html
  .box { --color: gray; }
  div { --color: green; }
  #alert { --color: red; }
  * { color: var(--color); }
  <div class="box">
    <p>灰色继承于根元素</p>
    <div>绿色来自直接设置</div>
    <div id='alert'>
      ID选择器权重更高，因此是红色！
      <p>此处继承父级颜色，也是红色</p>
    </div>
  </div>
```