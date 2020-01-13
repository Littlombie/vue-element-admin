# 测试Markdown解析


 参考文章：  
[vue中引入md文件，解析为组件并实现代码高亮](https://segmentfault.com/a/1190000021085117?utm_source=weekly&utm_medium=email&utm_campaign=email_weekly)


>  测试一下 

1. 研究方向
	1. state prop机制

2. 研究方法
	2. vuex主要解决什么问题，如果不用vuex如何解决，
  3. vuex如何管理state prop; state prop分别来处理什么内容？


**重点**
******

*ceshi*

`html` 代码

``` html
<template>
  <div>测试代码</div>
</template>
```

`javascript`代码测试

```  javascript
console.log('Hello Markdown');
console.waning('警告');
```

`css` 测试代码
``` css
div {
  color: #ccc;
  font-size: 16px;
}
```
#扩展 slot 
###default
这里插入一个默认插槽
<slot></slot>
####footer
这里插入一个具名插槽
<slot name="footer"></slot>
