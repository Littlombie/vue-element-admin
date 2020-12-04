# css变量var()的理解和应用

> 目前市面上项目的前端样式构建基本都是用`sass/less/stylus`等css 的预编辑工具，而使用这些编辑工具的最方便的一点就是其具有强大的变量功能，使样式书写能全局统一定义，这样修改和后期的维护都会很方便。  
> 而随着发展，css工作组页跟进了css变量规范制定，并且目前已经适配了市面上主流浏览器，使我们做一些项目也可以不用引入预处理工具，使用本身的css `var()`，完成想要的效果。

### `var()` 定义
`var()`函数可以代替元素中任何属性中的值的任何部分。`var()`函数不能作为属性名、选择器或者其他除了属性值之外的值。（这样做通常会产生无效的语法或者一个没有关联到变量的值。）

* 首先看一个演示： 

<slot name="cssVar1"></slot>

上边的 `--bg-red`定义一个变量值，在需要的样式中使用`var()` 调用使用，`var()`内部可以定义备用值，以逗号`,`分割，如果前边的变量未定义，则会使用后边的值替代，替代值可以由多个。 具体语法如下：

###  语法

方法的第一个参数是要替换的自定义属性的名称。函数的可选第二个参数用作回退值。如果第一个参数引用的自定义属性无效，则该函数将使用第二个值。  

```
var( <custom-property-name> , <declaration-value>? )
```

** 注意 ** ：自定义属性的回退值允许使用逗号。例如， var(--foo, red, blue) 将red, blue同时指定为回退值；即是说任何在第一个逗号之后到函数结尾前的值都会被考虑为回退值。

#### 参数说明：
* ** `<custom-property-name>` 自定义属性名 **
  在实际应用中它被定义为以两个破折号开始的任何有效标识符。 自定义属性仅供作者和用户使用; CSS 将永远不会给他们超出这里表达的意义。
* ** `<declaration-value>` 声明值（后备值） **
  回退值被用来在自定义属性值无效的情况下保证函数有值。回退值可以包含任何字符，但是部分有特殊含义的字符除外，例如换行符、不匹配的右括号（如)、]或}）、感叹号以及顶层分号（不被任何非var()的括号包裹的分号，例如var(--bg-color, --bs;color)是不合法的，而var(--bg-color, --value(bs;color))是合法的）。

### 兼容性

`var()` 兼容目前主流的浏览器，具体如下图：
![css-var()兼容性](../assets/css-var-JR.png)

### 使用方法

#### 我们可以通过`var()`来更加理解css的权重
如下例子：
<slot name="cssWeights"></slot>

#### CSS变量不合法的缺省特性
css中我们使用样式属性名和值，都是相对应的，如下：

``` css
div {
  font-size: 18px;
}
```
这样页面上div的文字大小为18px; 但是如果我们把`font-size:`的值设置为 `#fff`, 我们不会得倒`div`文字颜色为白色，而此时文字的字号大小会找上级的默认设置，

`var()`也一样，如下

```
:root {
  --color: #fff;
}

div {
  font-size: 16px;
}

div p {
  font-size: var(--color, 18px);
}
```
此时因为p的文字大小不会是颜色值，变量值是不合法的，所以不会取变量`--color`，此时则会使用字号的缺省值，也就是默认值代替：父级div 的 16px, 
也不会使用 后边的`18px`, CSS默认值的使用仅限于变量未定义的情况，并不包括变量不合法。

#### CSS变量的空格尾随特性

 如果我们给一个带单位属性值设置变量，那必须得在变量中设置单位。 如下：

``` css
div {
  --margin: 20;
  margin: var(--margin)px;
}
```
按照上边的设置，此时我们以为div的外边距会为 20px， 但是 我们查看的时候会发现 其实为`margin: 20 px`；这样div的外边距实际为其默认值；
如果想要实现直接传数值的方法，那就使用计算函数`calc()`,
```
div {
  --size20: 20;
  margin: calc(var(--size20) * 1px);
}
```
** 注意 **：如果在less中使用计算属性 需要前面加个 `~"calc()"`，把计算内容包起来。

<slot name="cssMargin"></slot>

#### CSS变量的相互传递特性
css变量的相互传递就是指，css变量可以使用另外的变量值，例如：
```
div {
  --colorRed: #f00;
  --backgoundColor: var(--colorRed);
}
```
或者结合计算实现更复杂的效果，例如：
```
div {
  --columns: 4;
  --margins: calc( 40px / var(--columns) );
}
```
对于复杂的布局， css变量相互传递特性，可以大大的简化代码量，也可以实现，一次修改，全局变化的效果，尤其和动态布局在一起的时候，无论是CSS的响应式后者是JS驱动的布局变化。

<slot name="cssLayout"></slot>

### css var() 变量在标签中使用以及js的操作

#### html标签设置var()

在html标签中可以直接设置样式那样设置var()变量：
``` html
<div id="box" style="--color: #ccc">
  <p style="width:100px; height:100px; border: 1px solid var(--color)"></p>
</div>
```
#### 在js中获取css的var()

JS中获取CSS变量可以使用getPropertyValue()方法，如下：

``` js
var box = document.querySelector('#box');
var cssVarColor = getComputedStyle(box).getPropertyValue('--color');

console.log(cssVarColor); //输出 #ccc
```
#### js中设置css 的var()

``` html
<div id="box">
    <p style="width:100px; height:100px; border: 10px solid var(--color);"></p>
</div>
```
使用`setProperty()`方法设置：

```
box.style.setProperty('--color', '#ddd');
```

### 参考文章
[var()函数](https://developer.mozilla.org/zh-CN/docs/Web/CSS/var()
[小tips:了解CSS变量var](https://www.zhangxinxu.com/wordpress/2016/11/css-css3-variables-var/?shrink=1)
[小tips: 如何HTML标签和JS中设置CSS3 var变量](https://www.zhangxinxu.com/wordpress/2018/11/html-js-set-css-css3-var%e5%8f%98%e9%87%8f/)