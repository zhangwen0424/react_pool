import React, { Component } from "react";

import PubSub from "pubsub-js";
import { nanoid } from "nanoid";

import "./index.css";

export default class Header extends Component {
  handleKeyUp = (event) => {
    const { keyCode, target } = event;
    if (keyCode !== 13) return;
    if (target.value.trim() !== "") {
      PubSub.publish("addTodo", {
        id: nanoid(),
        name: target.value,
        done: false,
      });
      target.value = "";
    }
  };
  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          onKeyUp={this.handleKeyUp}
          placeholder="请输入你的任务名称，按回车键确认"
        />
      </div>
    );
  }
}
