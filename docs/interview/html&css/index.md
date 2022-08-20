
## css 选择器和优先级
1. !important 1000
2. 内联样式
3. id 选择器
4. 类选择器
5. 标签选择器
## BFC

#### BFC 是什么?
`块级格式化上下文`：它会创建一个特殊的区域,这个特殊的区城不受外界影响。在这个区域中，只有block box 参与布局；而 BFC 的一系列特点和规则规定了在这个特殊的区城中如何进行布局，如何进行定位，区城内元素的相互关系和相互作用是怎样的。这个特殊的区域不受外界影响。
上
#### 如何形成 BFC
- 根元素或其他包含根元素的元素
- 浮动元素 （元素的 f1oat 不是 none)
- 纯对定位元素（元素的position 为absolute 或 fixed)
- 内联块（元素具有 display: inline-block 属性）
- 表格单元格 （元素具有display: table-cell，HTML表格单元格默认属性）
- 表格标题 （元素具有 display: table-caption， HTML 表格标题默认属性）
- 具有overnow 且值不是 visible 的块元素
- 含有样式属性 display: flow-root 的元素
- 含有样式属性column-span:all 的元素

#### BFC 的规则
- 内部的 box 将会独占宽度，且在垂直方向上一个接一个排列
- box 在垂直方向上的间距由 margin 熟悉决定，但是同一个 BFC 的两个相邻 box 的margin会出现边距重叠现象 
- 每个 box 在水平方的上的左边缘与 BFC 的左边缘相对齐，即使存在浮动也是如此
- BFC 区域不会与浮动元素重叠，而是会依次排列。
- BFC 区城是一个独立的渲染容器，容器内的元素和BFC区域外的元素之同不会有任何干扰
- 浮动元素的高度也参与 BFC 的高度计算

###### 从这些规则中，我们至少能总结出如下一些关键要点。
1. 边距折叠
2. 清除浮动
3. 自适应多栏布局
4. 高度塌陷问题

## 实现居中的方式
```css
    /* 居中的实现方案1 */
    .parent {
        position: relative;
    }

    .child {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -50px;
        margin-top: -50px;
    }

    /* 居中的实现方案2 */
    .parent {
        position: relative;
    }

    .child {
        position: absolute;
        top: calc(50% - 50px);
        left: calc(50% - 50px)
    }

    /* 居中的实现方案3 */
    .parent {
        position: relative;
    }

    .child {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
    }

    /* 居中的实现方案4 */
    .parent {
        position: relative;
    }

    .child {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    /* 居中的实现方案5 */
    .parent {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /* 居中的实现方案6 */
    .parent {
        display: grid;
    }

    .child {
        align-self: center;
        justify-self: center;
    }

    /* 居中的实现方案7 */
    .parent {
        display: table-cell;
        text-align: center;
        vertical-align: middle;
    }
    .child {
        display: inline-block;
    }
```




