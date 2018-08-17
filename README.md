###简单介绍
这是一个jQuery的插件，它可将你的`<img />`根椐父盒子大小，自动适应在你的父盒里
如图
![](https://raw.githubusercontent.com/coolfish6/jquery.showImg/master/demo.png)

  - 图1/图3/图5/图7：用的是全部等比拉伸，填满整个父盒子并居中，显示图片正中间，一般用户商品图片的显示。。
  - 图2/图4/图6/图8：用的是完整显示模式。中间空出的部分显示棋盘格，表示是透明。

```html
    <!--使用方法：-->
    <!-----DOM----->
    <div id="main">
      <div id="parent-dom"><img src="你的图片.jpg" /></div>
    </div>
```
```javascript
    <script src="JQUERY.JS的路径">
    <script src="本插件的路径">
    <script>
        //-----JS-----
        $("div#parent-dom").showImg({
            "type":"显示方式",  // fill(填满-溢出隐藏) || full(完整显示-多余部分留白)
         });
    </script>
```
>
 ##### * 注意父盒子(div#parent-dom)不能设置任何的position属性和text-align属性，如果有继承了它的父元素属性(比如：这里的父元素#main上如果设有text-align: center)，请在做如下还原设置
```css
 div#parent-dom{
    position: static;
    text-align: left;
 }
 ```
