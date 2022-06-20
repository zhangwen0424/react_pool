import React, { Component } from "react";
import PubSub from "pubsub-js";
// import PropTypes from "prop-types"

import "./index.css";
import Item from "../Item";

export default class List extends Component {
  //初始化状态
  state = {
    todos: [
      { id: "001", name: "吃饭", done: true },
      { id: "002", name: "睡觉", done: true },
      { id: "003", name: "打代码", done: false },
      { id: "004", name: "逛街", done: false },
    ],
  };

  //addTodo用于添加一个todo，接收的参数是todo对象
  addTodo = (_, todoObj) => {
    this.setState({ todos: [todoObj, ...this.state.todos] });
  };

  // 组件将要挂载
  componentDidMount() {
    this.addTodo = PubSub.subscribe("addTodo", this.addTodo);
  }
  // 组件将要销毁
  componentWillUnmount() {
    PubSub.unsubscribe(this.addTodo);
  }

  render() {
    const { todos } = this.state;
    console.log("List:", this);
    return (
      <ul className="todo-main">
        {todos.map((todo) => {
          return (
            <Item key={todo.id} {...todo}>
              {todo.name}
            </Item>
          );
        })}
      </ul>
    );
  }
}
