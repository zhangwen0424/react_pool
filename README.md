# react 学习记录

## 准备

- 开发者工具
  - react-dev-tools
  - redux-dev-tools

## react 入门

### react 简介

**介绍**  
1.用于动态构建用户界面的 JavaScript 库(只关注于视图)  
2.由 Facebook 开源

**特点**  
1.声明式编码  
2.组件化编码  
3.React Native 编写原生应用  
4.高效（优秀的 Diffing 算法）

**高效的原因**  
1.使用虚拟(virtual)DOM, 不总是直接操作页面真实 DOM。  
2. DOM Diffing 算法, 最小化页面重绘

### react 基本使用

**相关 js 库**
1.react.js：React 核心库。
2.react-dom.js：提供操作 DOM 的 react 扩展库。
3.babel.min.js：解析 JSX 语法代码转为 JS 代码的库。

#### hello react

```html
<body>
  <!-- 准备好一个“容器” -->
  <div id="test"></div>

  <!-- 引入react核心库 -->
  <script src="../js/react.development.js"></script>
  <!-- 引入react-dom，用于支持react操作DOM -->
  <script src="../js/react-dom.development.js"></script>
  <!-- 引入babel，用于将jsx转为js -->
  <script src="../js/babel.min.js"></script>

  <!-- 此处一定要写babel -->
  <script type="text/babel">
    //1.创建虚拟DOM
    const VDom = <h1>hello,react</h1>;
    //2.渲染虚拟DOM到页面
    ReactDOM.render(VDom, document.getElementById("test"));
  </script>
</body>
```

#### 虚拟 Dom 的两种创建方法

- 1.纯 js 方式(一般不用)

```html
<body>
  <!-- 准备好一个“容器” -->
  <div id="test"></div>

  <!-- 引入react核心库 -->
  <script type="text/javascript" src="../js/react.development.js"></script>
  <!-- 引入react-dom，用于支持react操作DOM -->
  <script type="text/javascript" src="../js/react-dom.development.js"></script>

  <script type="text/javascript">
    //1.创建虚拟DOM
    const VDOM = React.createElement(
      "h1",
      { id: "title" },
      React.createElement("span", {}, "hello react")
    );
    //2.渲染虚拟DOM到页面
    ReactDOM.render(VDOM, document.getElementById("test"));
  </script>
</body>
```

- 2.jsx 方式

```html
<body>
  <!-- 准备好一个“容器” -->
  <div id="test"></div>

  <!-- 引入react核心库 -->
  <script type="text/javascript" src="../js/react.development.js"></script>
  <!-- 引入react-dom，用于支持react操作DOM -->
  <script type="text/javascript" src="../js/react-dom.development.js"></script>
  <!-- 引入babel，用于将jsx转为js -->
  <script type="text/javascript" src="../js/babel.min.js"></script>

  <script type="text/babel">
    /* 此处一定要写babel */
    //1.创建虚拟DOM
    const VDOM = (
      /* 此处一定不要写引号，因为不是字符串 */
      <h1 id="title">
        <span>Hello,React</span>
      </h1>
    );
    //2.渲染虚拟DOM到页面
    ReactDOM.render(VDOM, document.getElementById("test"));
  </script>
</body>
```

**关于虚拟 DOM：**  
1.本质是 Object 类型的对象（一般对象）  
2.虚拟 DOM 比较“轻”，真实 DOM 比较“重”，因为虚拟 DOM 是 React 内部在用，无需真实 DOM 上那么多的属性。  
3.虚拟 DOM 最终会被 React 转化为真实 DOM，呈现在页面上。

**虚拟 DOM 与真实 DOM**
1.React 提供了一些 API 来创建一种 “特别” 的一般 js 对象
`const VDOM = React.createElement('xx',{id:'xx'},'xx')`
上面创建的就是一个简单的虚拟 DOM 对象  
2.虚拟 DOM 对象最终都会被 React 转换为真实的 DOM  
3.我们编码时基本只需要操作 react 的虚拟 DOM 相关数据, react 会转换为真实 DOM 变化而更新界
