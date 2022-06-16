import React, { Component } from "react";
import hello from "./hello.module.css";

export default class Hello extends Component {
  render() {
    return <div className={hello.title}>Hello</div>;
  }
}
