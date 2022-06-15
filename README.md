## 准备

- 开发者工具
  - react-dev-tools
  - redux-dev-tools
- vscode 中好用的 plugin
  - Simple React Snippets
  - auto rename tag 修改一个标签, 自动修改一对儿
  - ES7+ React/Redux/React-Native snippets 速写代码片段

## react 入门

### react 简介

#### 介绍

1.用于动态构建用户界面的 JavaScript 库(只关注于视图)  
2.由 Facebook 开源

#### 特点

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

#### 关于虚拟 DOM

1.本质是 Object 类型的对象（一般对象）  
2.虚拟 DOM 比较“轻”，真实 DOM 比较“重”，因为虚拟 DOM 是 React 内部在用，无需真实 DOM 上那么多的属性。  
3.虚拟 DOM 最终会被 React 转化为真实 DOM，呈现在页面上。

**虚拟 DOM 与真实 DOM**

- 1.React 提供了一些 API 来创建一种 “特别” 的一般 js 对象
  `const VDOM = React.createElement('xx',{id:'xx'},'xx')`
  上面创建的就是一个简单的虚拟 DOM 对象
- 2.虚拟 DOM 对象最终都会被 React 转换为真实的 DOM
- 3.我们编码时基本只需要操作 react 的虚拟 DOM 相关数据, react 会转换为真实 DOM 变化而更新界

**渲染虚拟 DOM(元素)**

- 1.语法: `ReactDOM.render(virtualDOM, containerDOM)`
- 2.作用: 将虚拟 DOM 元素渲染到页面中的真实容器 DOM 中显示
- 3.参数说明
  - 1)参数一: 纯 js 或 jsx 创建的虚拟 dom 对象
  - 2)参数二: 用来包含虚拟 DOM 元素的真实 dom 元素对象(一般是一个 div)

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
函数式组件(适用于简单组件[无 state])
类式组件(适用于复杂组件[有 state])

**渲染类组件标签的基本流程：**

- 1.React 内部会创建组件实例对象
- 2.调用 render()得到虚拟 DOM, 并解析为真实 DOM
- 3.插入到指定的页面元素内部

#### 函数式组件

```html
<script type="text/babel">
  //1.创建函数式组件
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
  //1.创建组件
  class MyComponent extends React.Component {
    render() {
      //render是放在哪里的？—— MyComponent的原型对象上，供实例使用。
      //render中的this是谁？—— MyComponent的实例对象 <=> MyComponent组件实例对象。
      console.log("render中的 this:", this);
      return <h2>我是通过类定义的组件</h2>;
    }
  }
  //2. 渲染组件到页面
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

### 组件实例的三大属性之 state

1.state 是组件对象最重要的属性, 值是对象(可以包含多个 key-value 的组合)  
2.组件被称为"状态机", 通过更新组件的 state 来更新对应的页面显示(重新渲染组件)

**注意：**  
1.组件中 render 方法中的 this 为组件实例对象  
2.组件自定义的方法中 this 为 undefined，如何解决？
a)强制绑定 this: 通过函数对象的 bind()
b)箭头函数  
3.状态数据，不能直接修改或更新

#### 原生事件绑定复习

```html
<body>
  <button id="btn1">按钮 1</button>
  <button id="btn2">按钮 2</button>
  <button onclick="demo()">按钮 3</button>
  <script>
    const btn1 = document.getElementById("btn1");
    btn1.addEventListener("click", () => {
      console.log("按钮 1 被点了");
    });
    const btn2 = document.getElementById("btn2");
    btn2.onclick = () => {
      console.log("按钮 2 被点了");
    };
    function demo() {
      console.log("按钮 3 被点了");
    }
  </script>
</body>
```

state 使用

```html
<script type="text/babel">
  //1.创建类式组件
  class Weather extends React.Component {
    //构造器调用几次？ ———— 1次
    constructor(props) {
      console.log("constructor");
      super(props);
      //初始化状态
      this.state = { isHot: true };
      //解决changeWeather中this指向问题
      this.changeWeather = this.changeWeather.bind(this);
    }
    //render调用几次？ ———— 1+n次 1是初始化的那次 n是状态更新的次数
    render() {
      console.log("render", this);
      //读取状态
      const { isHot } = this.state;
      return (
        <h1 onClick={this.changeWeather}>
          今天天气很{isHot ? "炎热" : "凉爽"}
        </h1>
      );
    }
    //changeWeather调用几次？ ———— 点几次调几次
    changeWeather() {
      //changeWeather放在哪里？ ———— Weather的原型对象上，供实例使用
      //由于changeWeather是作为onClick的回调，所以不是通过实例调用的，是直接调用
      //类中的方法默认开启了局部的严格模式，所以changeWeather中的this为undefined
      const isHot = !this.state.isHot;
      //严重注意：状态必须通过setState进行更新,且更新是一种合并，不是替换。
      this.setState({ isHot: isHot });
      //严重注意：状态(state)不可直接更改，下面这行就是直接更改！！！
      // this.state.isHot = isHot; //这是错误的写法
      console.log("changeWeather", isHot, this);
    }
  }
  //2. 渲染组件到页面
  ReactDOM.render(<Weather />, document.getElementById("test"));
</script>
```

state 简写

```html
<script type="text/babel">
  //1.创建类式组件
  class Weather extends React.Component {
    //初始化状态
    state = { isHot: true, wind: "微风" };

    render() {
      const { isHot, wind } = this.state;
      return (
        <h1 onClick={this.changeWeather}>
          今天天气很{isHot ? "炎热" : "凉爽"}, {wind}
        </h1>
      );
    }

    //自定义方法————要用赋值语句的形式+箭头函数
    changeWeather = () => {
      const isHot = !this.state.isHot;
      this.setState({ isHot: isHot });
    };
  }
  //2. 渲染组件到页面
  ReactDOM.render(<Weather />, document.getElementById("test"));
</script>
```

### 组件实例的三大属性之 props

1. 每个组件对象都会有 props(properties 的简写)属性
2. 组件标签的所有属性都保存在 props 中

1.内部读取某个属性值 `this.props.name`  
2.对 props 中的属性值进行类型限制和必要性限制
第一种方式（React v15.5 开始已弃用）：

```js
Person.propTypes = {
  name: React.PropTypes.string.isRequired,
  age: React.PropTypes.number,
};
```

第二种方式（新）：使用 prop-types 库进限制（需要引入 prop-types 库） 3.扩展属性: 将对象的所有属性通过 props 传递

```js
Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.
}
```

4.默认属性值：`<Person {...person}/>`

5.组件类的构造函数

```js
constructor(props){
  super(props)
  console.log(props)//打印所有属性
}
```

基本使用

```html
<!-- 此处一定要写babel -->
<script type="text/babel">
  //1.创建类式组件
  class MyComponent extends React.Component {
    render() {
      const { name, age, sex } = this.props;
      return (
        <ul>
          <li>姓名：{name}</li>
          <li>性别：{sex}</li>
          <li>年龄：{age}</li>
        </ul>
      );
    }
  }
  //2. 渲染组件到页面
  ReactDOM.render(
    <MyComponent name="张三" sex="女" age="18" />,
    document.getElementById("test")
  );
  ReactDOM.render(
    <MyComponent name="小王" sex="男" age="28" />,
    document.getElementById("test1")
  );
  let p = { name: "老张", age: 20, sex: "男" };
  ReactDOM.render(<MyComponent {...p} />, document.getElementById("test2"));
</script>
```

props 的限制

```html
<!-- 准备好一个“容器” -->
<div id="test"></div>

<!-- 引入react核心库 -->
<script src="../js/react.development.js"></script>
<!-- 引入react-dom，用于支持react操作DOM -->
<script src="../js/react-dom.development.js"></script>
<!-- 引入babel，用于将jsx转为js -->
<script src="../js/babel.min.js"></script>
<!-- 引入prop-types，用于对组件标签属性进行限制 -->
<script type="text/javascript" src="../js/prop-types.js"></script>

<!-- 此处一定要写babel -->
<script type="text/babel">
  //1.创建类式组件
  class MyComponent extends React.Component {
    render() {
      console.log("this", this);
      const { name, age, sex, speak } = this.props;
      return (
        <div>
          <ul>
            <li>姓名：{name}</li>
            <li>性别：{sex}</li>
            <li>年龄：{age}</li>
          </ul>
          <button onClick={speak}>提交</button>
        </div>
      );
    }
  }
  MyComponent.propTypes = {
    name: PropTypes.string.isRequired, //限制name必传，且为字符串
    sex: PropTypes.string, //限制sex为字符串
    age: PropTypes.number, //限制age为数值
    speak: PropTypes.func, //限制speak为函数
  };
  MyComponent.defaultProps = {
    sex: "女",
    age: 20,
    speak,
  };
  //2. 渲染组件到页面
  let p = { name: "老张", age: 20, sex: "男", speak };
  function speak() {
    console.log("speak");
  }
  ReactDOM.render(<MyComponent {...p} />, document.getElementById("test"));
</script>
```

简写形式

```html
<script type="text/babel">
  //1.创建类式组件
  class MyComponent extends React.Component {
    //对标签属性进行类型、必要性的限制
    static propTypes = {
      name: PropTypes.string.isRequired, //限制name必传，且为字符串
      sex: PropTypes.string, //限制sex为字符串
      age: PropTypes.number, //限制age为数值
    };
    //对标签属性进行类型、必要性的限制
    static defaultProps = {
      sex: "女",
      age: 20,
    };

    render() {
      console.log("this", this);
      const { name, age, sex } = this.props;
      return (
        <div>
          <ul>
            <li>姓名：{name}</li>
            <li>性别：{sex}</li>
            <li>年龄：{age}</li>
          </ul>
        </div>
      );
    }
  }
  //2. 渲染组件到页面
  let p = { name: "老张", age: 20, sex: "男" };
  ReactDOM.render(<MyComponent {...p} />, document.getElementById("test"));
</script>
```

函数式组件使用 props

```html
<script type="text/babel">
  function Person(props) {
    const { name, age, sex } = props;
    return (
      <ul>
        <li>姓名：{name}</li>
        <li>性别：{sex}</li>
        <li>年龄：{age}</li>
      </ul>
    );
  }
  Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    sex: PropTypes.string,
  };
  Person.defaultProps = {
    sex: "男",
    age: 19,
  };
  ReactDOM.render(<Person />, document.getElementById("test"));
</script>
```

### 组件实例三大属性之 ref

1.字符串形式的 ref `<input ref="input1"/> this.refs.value`  
2.回调形式的 ref `<input ref={(c)=>{this.input1 = c}}/> this.input1.value`  
3.createRef 创建 ref 容器

```js
myRef = React.createRef()
<input ref="{this.myRef}" />
this.myRef.current.value
```

#### 字符串形式 ref

```html
<script type="text/babel">
  // 创建组件
  class Demo extends React.Component {
    //展示左侧输入框的数据
    showData = () => {
      const { input1 } = this.refs;
      console.log(input1.value);
    };
    showData2 = () => {
      const { input2 } = this.refs;
      console.log(input2.value);
    };

    render() {
      const { showData, showData2 } = this;
      return (
        <div>
          <input ref="input1" type="text" placeholder="点击按钮提示数据" />
          &nbsp;
          <button onClick={showData}>点我显示左侧数据</button>
          &nbsp;
          <input
            ref="input2"
            onBlur={showData2}
            type="text"
            placeholder="失去焦点提示数据"
          />
        </div>
      );
    }
  }
  ReactDOM.render(<Demo />, document.getElementById("test"));
</script>
```

#### 回调函数形式 ref

```html
<script type="text/babel">
  // 创建组件
  class Demo extends React.Component {
    //展示左侧输入框的数据
    showData = () => {
      const { input1 } = this;
      console.log(input1.value);
    };
    showData2 = () => {
      const { input2 } = this;
      console.log(input2.value);
    };

    render() {
      const { showData, showData2 } = this;
      return (
        <div>
          <input
            ref={(c) => (this.input1 = c)}
            type="text"
            placeholder="点击按钮提示数据"
          />
          &nbsp;
          <button onClick={showData}>点我显示左侧数据</button>
          &nbsp;
          <input
            ref={(c) => (this.input2 = c)}
            onBlur={showData2}
            type="text"
            placeholder="失去焦点提示数据"
          />
        </div>
      );
    }
  }
  ReactDOM.render(<Demo />, document.getElementById("test"));
</script>
```

#### 回调 ref 中回调函数执行次数问题

```html
<script type="text/babel">
  // 创建组件
  class Demo extends React.Component {
    state = { isHot: true };
    /**
     * 如果 ref 回调函数是以内联函数的方式定义的，在更新过程中它会被执行两次
     * 第一次传入参数 null，然后第二次会传入参数 DOM 元素。
     * 这是因为在每次渲染时会创建一个新的函数实例，
     * 所以 React 清空旧的 ref 并且设置新的。通过将 ref 的回调函数定义成 class 的绑定函数的方式可以避免上述问题
     */
    // 点击更新时，@会被打印出现两遍
    changeWeather = () => {
      const { isHot } = this.state;
      console.log("changeWeather");
      this.setState({ isHot: !isHot });
    };
    // 点击更新,执行一遍
    showInfo = () => {
      console.log("showInfo:", this.input2.value);
    };
    saveInput = (e) => {
      this.input2 = e;
      console.log("saveInput:", e);
    };
    render() {
      const { showInfo, saveInput, changeWeather } = this;
      const { isHot } = this.state;
      return (
        <div>
          <h1>今天天气很{isHot ? "炎热" : "凉爽"}</h1>
          <input
            type="text"
            ref={(c) => {
              this.input1 = c;
              console.log("@", c);
            }}
          />
          <button onClick={changeWeather}>
            点我更新天气(字符串 ref 执行两遍)
          </button>
          <br />
          <input type="text" ref={saveInput} />
          <button onClick={showInfo}>点我提示输入数据(函数式执行一遍)</button>
        </div>
      );
    }
  }
  ReactDOM.render(<Demo />, document.getElementById("test"));
</script>
```

#### createRef

```html
<script type="text/babel">
  // 创建组件
  class Demo extends React.Component {
    /* 
          (1).通过onXxx属性指定事件处理函数(注意大小写)
              a.React使用的是自定义(合成)事件, 而不是使用的原生DOM事件 —————— 为了更好的兼容性
              b.React中的事件是通过事件委托方式处理的(委托给组件最外层的元素) ————————为了的高效
          (2).通过event.target得到发生事件的DOM元素对象 ——————————不要过度使用ref
      */
    /*
          React.createRef调用后可以返回一个容器，该容器可以存储被ref所标识的节点,该容器是“专人专用”的
          区别于字符串类 ref，不用通过 this.refs.myRef 获取，而是直接在 this 上获取
        */
    myRef = React.createRef();
    myRef1 = React.createRef();
    //展示左侧输入框的数据
    showData = () => {
      // 字符串型，this.refs.myRef.value;
      console.log(this.myRef.current.value);
    };
    logData = () => {
      console.log(this.myRef1.current.value);
      console.log(this);
    };
    render() {
      const { showData, logData } = this;
      return (
        <div>
          <input ref={this.myRef} type="text" placeholder="点击按钮提示数据" />
          <button onClick={showData}>点我提示左侧的数据</button>
          <input
            type="text"
            ref={this.myRef1}
            onBlur={logData}
            placeholder="失去焦点提示数据"
          />
        </div>
      );
    }
  }
  ReactDOM.render(<Demo />, document.getElementById("test"));
</script>
```

#### 事件处理

1.通过 onXxx 属性指定事件处理函数(注意大小写)
1)React 使用的是自定义(合成)事件, 而不是使用的原生 DOM 事件
2)React 中的事件是通过事件委托方式处理的(委托给组件最外层的元素)  
2.通过 event.target 得到发生事件的 DOM 元素对象

### react 中收集表单

#### 非受控组件(不受 state 控制)

```html
<script type="text/babel">
  class Login extends React.Component {
    handleSubmit = (event) => {
      event.preventDefault();
      console.log(
        `您的用户名是：${this.username.value}，密码是：${this.password.value}`
      );
    };
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          用户名：
          <input type="text" ref={(c) => (this.username = c)} />
          密码：
          <input type="password" ref={(c) => (this.password = c)} />
          <button>登录</button>
        </form>
      );
    }
  }
  ReactDOM.render(<Login />, document.getElementById("test"));
</script>
```

#### 受控组件

```html
<script type="text/babel">
  class Login extends React.Component {
    //初始化状态
    state = {
      username: "", //用户名
      password: "", //密码
    };
    changeValue = (event) => {
      let dataObj = { [event.target.name]: event.target.value };
      this.setState(dataObj);
    };
    handleSubmit = (event) => {
      event.preventDefault();
      console.log(
        `您的用户名是：${this.state.username}，密码是：${this.state.password}`
      );
    };
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          用户名：
          <input type="text" onChange={this.changeValue} name="username" />
          密码：
          <input type="password" onChange={this.changeValue} name="password" />
          <button>登录</button>
        </form>
      );
    }
  }
  ReactDOM.render(<Login />, document.getElementById("test"));
</script>
```

高阶函数和函数柯里化复习

```html
<script type="text/babel">
  /* 
    高阶函数：如果一个函数符合下面2个规范中的任何一个，那该函数就是高阶函数。
            1.若A函数，接收的参数是一个函数，那么A就可以称之为高阶函数。
            2.若A函数，调用的返回值依然是一个函数，那么A就可以称之为高阶函数。
            常见的高阶函数有：Promise、setTimeout、arr.map()等等

    函数的柯里化：通过函数调用继续返回函数的方式，实现多次接收参数最后统一处理的函数编码形式。 
      function sum(a){
        return(b)=>{
          return (c)=>{
            return a+b+c
          }
        }
      }
    */
  //创建组件
  class Login extends React.Component {
    state = {
      username: "",
      password: "",
    };
    //保存表单数据到状态中
    saveData = (dataType) => {
      return (event) => {
        console.log("dataType", dataType, event);
        this.setState({ [dataType]: event.target.value });
      };
    };
    //表单提交的回调
    submit = (event) => {
      event.preventDefault(); //阻止表单提交
      console.log("this.state", this.state);
    };
    render() {
      return (
        <form onSubmit={this.submit}>
          用户名:
          <input
            type="text"
            onChange={this.saveData("username")}
            placeholder="请输入用户名"
          />
          密码:
          <input
            type="text"
            onChange={this.saveData("password")}
            placeholder="请输入密码"
          />
          <button>提交</button>
        </form>
      );
    }
  }
  //渲染组件
  ReactDOM.render(<Login />, document.getElementById("test"));
</script>
```

不用函数柯里化实现

```html
<script type="text/babel">
  //创建组件
  class Login extends React.Component {
    state = {
      username: "",
      password: "",
    };
    //保存表单数据到状态中
    saveData = (dataType) => {
      console.log("dataType", dataType, event);
      this.setState({ [dataType]: event.target.value });
    };
    //表单提交的回调
    submit = (event) => {
      event.preventDefault(); //阻止表单提交
      console.log("this.state", this.state);
    };
    render() {
      return (
        <form onSubmit={this.submit}>
          用户名:
          <input
            type="text"
            onChange={(e) => this.saveData("username", e)}
            placeholder="请输入用户名"
          />
          密码:
          <input
            type="text"
            onChange={(e) => this.saveData("password")}
            placeholder="请输入密码"
          />
          <button>提交</button>
        </form>
      );
    }
  }
  //渲染组件
  ReactDOM.render(<Login />, document.getElementById("test"));
</script>
```

### 组件的生命周期

引出生命周期

```html
<script type="text/babel">
  // 创建组件
  class Life extends React.Component {
    state = { opacity: 1 };
    // 销毁组件
    destroy = () => {
      console.log("destroy");
      //卸载组件
      ReactDOM.unmountComponentAtNode(document.getElementById("root"));
    };
    //组件挂完毕
    componentDidMount() {
      console.log("componentDidMount");
      let { opacity } = this.state;
      this.timer = setInterval(() => {
        opacity -= 0.1;
        if (opacity < 0) opacity = 1;
        this.setState({ opacity });
      }, 200);
    }
    // 组件将要卸载
    componentWillUnmount() {
      console.log("componentWillUnmount");
      clearInterval(this.timer);
    }
    render() {
      console.log("render");
      return (
        <div>
          <h4 style={{ opacity: this.state.opacity }}>React 学习</h4>
          <button onClick={this.destroy}>销毁组件</button>
        </div>
      );
    }
  }
  ReactDOM.render(<Life />, document.getElementById("root"));
</script>
```
