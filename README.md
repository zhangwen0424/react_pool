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

### jsx 的语法规则

#### JSX

- 1.全称: JavaScript XML
- 2.react 定义的一种类似于 XML 的 JS 扩展语法: JS + XML 本质是 `React.createElement(component, props, ...children)`方法的语法糖
- 3.作用: 用来简化创建虚拟 DOM
  - 1)写法：`var ele = <h1>Hello JSX!</h1>`
  - 2)注意 1：它不是字符串, 也不是 HTML/XML 标签
  - 3)注意 2：它最终产生的就是一个 JS 对象
- 4.标签名任意: HTML 标签或其它标签
- 5.标签属性任意: HTML 标签属性或其它
- 6.基本语法规则
  - 1)遇到 `<`开头的代码, 以标签的语法解析: html 同名标签转换为 html 同名元素, 其它标签需要特别解析
  - 2)遇到以 { 开头的代码，以 JS 语法解析: 标签中的 js 表达式必须用{ }包含
- 7.babel.js 的作用
  - 1)浏览器不能直接解析 JSX 代码, 需要 babel 转译为纯 JS 的代码才能运行
  - 2)只要用了 JSX，都要加上 type="text/babel", 声明需要 babel 来处理

#### 渲染虚拟 DOM(元素)

- 1.语法: `ReactDOM.render(virtualDOM, containerDOM)`
- 2.作用: 将虚拟 DOM 元素渲染到页面中的真实容器 DOM 中显示
- 3.参数说明
  - 1)参数一: 纯 js 或 jsx 创建的虚拟 dom 对象
  - 2)参数二: 用来包含虚拟 DOM 元素的真实 dom 元素对象(一般是一个 div)

```html
<style>
  .title {
    color: red;
  }
</style>
<script type="text/babel">
  /*
  jsx语法规则：
      1.定义虚拟DOM时，不要写引号。如：<h1 id={myId}></h1>
      2.标签中混入JS表达式时要用{}。如：<span>{myData}</span>
      3.样式的类名指定不要用class，要用className。如<h1 className="title"></h1>
      4.内联样式，要用style={{key:value}}的形式去写。如：<span style={{ fontSize: "29px" }}>{myData}</span>
      5.只有一个根标签
      6.标签必须闭合
      7.标签首字母
          (1).若小写字母开头，则将该标签转为html中同名元素，若html中无该标签对应的同名元素，则报错。
          (2).若大写字母开头，react就去渲染对应的组件，若组件没有定义，则报错。

  */
  const myId = "app";
  const myData = "hello, my react app";
  //1.创建虚拟DOM
  const VDOM = (
    <div>
      <h1 id={myId} className="title">
        <span style={{ fontSize: "29px" }}>{myData}</span>
      </h1>
    </div>
  );
  //2.渲染虚拟DOM到页面
  ReactDOM.render(VDOM, document.getElementById("test"));
</script>
```

#### js 语句和 js 表达式

```html
<script type="text/babel">
  /*
    一定注意区分：【js语句(代码)】与【js表达式】
        1.表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方
              下面这些都是表达式：
                  (1). a
                  (2). a+b
                  (3). demo(1)
                  (4). arr.map()
                  (5). function test () {}
        2.语句(代码)：
              下面这些都是语句(代码)：
                  (1).if(){}
                  (2).for(){}
                  (3).switch(){case:xxxx}
  */
  const data = ["react", "vue", "angular"];
  //1.创建虚拟DOM
  const VDom = (
    <div>
      <h1>前端框架列表</h1>
      <ul>
        {data.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
  //2.渲染虚拟DOM到页面
  ReactDOM.render(VDom, document.getElementById("test"));
</script>
```

### 模块与组件、模块化与组件化的理解

#### 模块

- 1.理解：向外提供特定功能的 js 程序, 一般就是一个 js 文件
- 2.为什么要拆成模块：随着业务逻辑增加，代码越来越多且复杂。
- 3.作用：复用 js, 简化 js 的编写, 提高 js 运行效率

#### 组件

- 1.理解：用来实现局部功能效果的代码和资源的集合(html/css/js/image 等等)
- 2.为什么要用组件： 一个界面的功能更复杂
- 3.作用：复用编码, 简化项目编码, 提高运行效率

#### 模块化

当应用的 js 都以模块来编写的, 这个应用就是一个模块化的应用

#### 组件化

当应用是以多组件的方式实现, 这个应用就是一个组件化的应用

## react 面向组件编程

### 基本理解和使用

开发者工具：React Develope Tools

**注意点：**

- 1.组件名必须首字母大写
- 2.虚拟 DOM 元素只能有一个根元素
- 3.虚拟 DOM 元素必须有结束标签

**组件分类：**
函数式组件、类式组件

**渲染类组件标签的基本流程：**

- 1.React 内部会创建组件实例对象
- 2.调用 render()得到虚拟 DOM, 并解析为真实 DOM
- 3.插入到指定的页面元素内部

#### 函数式组件

```html
<script type="text/babel">
  //1.创建虚拟DOM
  function MyComponent() {
    console.log(this); //此处的this是undefined，因为babel编译后开启了严格模式
    return <h1>我是用函数定义的组件</h1>;
  }
  //2.渲染虚拟DOM到页面
  ReactDOM.render(<MyComponent />, document.getElementById("test"));
  /* 
    执行了ReactDOM.render(<MyComponent/>.......之后，发生了什么？
        1.React解析组件标签，找到了MyComponent组件。
        2.发现组件是使用函数定义的，随后调用该函数，将返回的虚拟DOM转为真实DOM，随后呈现在页面中。
  */
</script>
```

#### 类式组件

```html
<script type="text/babel">
  //1.创建虚拟DOM
  class MyComponent extends React.Component {
    render() {
      //render是放在哪里的？—— MyComponent的原型对象上，供实例使用。
      //render中的this是谁？—— MyComponent的实例对象 <=> MyComponent组件实例对象。
      console.log("render中的 this:", this);
      return <h2>我是通过类定义的组件</h2>;
    }
  }
  //2.渲染虚拟DOM到页面
  ReactDOM.render(<MyComponent />, document.getElementById("test"));
  /* 
    执行了ReactDOM.render(<MyComponent/>.......之后，发生了什么？
        1.React解析组件标签，找到了MyComponent组件。
        2.发现组件是使用类定义的，随后new出来该类的实例，并通过该实例调用到原型上的render方法。
        3.将render返回的虚拟DOM转为真实DOM，随后呈现在页面中。
  */
</script>
```

#### 类的复习

```html
<script>
  /*
    总结：
      1.类中的构造器不是必须要写的，要对实例进行一些初始化的操作，如添加指定属性时才写。
      2.如果A类继承了B类，且A类中写了构造器，那么A类构造器中的super是必须要调用的。
      3.类中所定义的方法，都放在了类的原型对象上，供实例去使用。
  */
  //创建一个Person类
  class Person {
    // 1.类中的构造器不是必须要写的，要对实例进行一些初始化的操作，如添加指定属性时才写。
    constructor(name, age) {
      //构造器中的this是谁？—— 类的实例对象
      this.name = name;
      this.age = age;
    }
    //类中可以直接写赋值语句,如下代码的含义是：给Person的实例对象添加一个属性，名为a，值为1
    a = 1;
    wheel = 4;
    speak() {
      console.log(`我叫${this.name},我年龄是${this.age}岁了`);
    }
    study() {
      console.log("我超级努力学习");
    }
  }

  class Student extends Person {
    constructor(name, age, grade) {
      super(name, age);
      this.grade = grade;
    }
    //重写从父类继承过来的方法
    speak() {
      console.log(
        `我叫${this.name},我年龄是${this.age}岁了,我上${this.grade}年级了`
      );
      this.study();
    }
    //重写从父类继承过来的方法
    study() {
      //study方法放在了哪里？——类的原型对象上，供实例使用
      //通过Student实例调用study时，study中的this就是Student实例
      console.log("我在努力学习");
    }
  }
  let p = new Person("小王", "18");
  let ple = new Person();
  console.log("p:", p, p.speak()); //{"a":1,"wheel":4,"name":"小王","age":"18"}  我叫小王,我年龄是18岁了
  console.log("ple:", ple); //{"a":1,"wheel":4,age: undefined,name: undefined}
  let s = new Student("张三", "20", "二");
  console.log("s:", s, s.speak()); //我叫张三,我年龄是20岁了,我上二年级了
  //
</script>
```
