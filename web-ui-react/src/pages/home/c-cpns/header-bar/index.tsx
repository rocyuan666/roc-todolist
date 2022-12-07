import React, { PureComponent } from "react";

import { HeaderBarWrap } from "./styled";

export default class CpnRocHeaderBar extends PureComponent {
  render() {
    return (
      <HeaderBarWrap>
        <span>rocyuan邮箱: rocyuan666@163.com</span>
        <span>rocyuanWX: rocyuan666</span>
        <span>
          个人网站:
          <a href="https://rocyuan.top" target="_blank" rel="noreferrer">
            https://rocyuan.top
          </a>
        </span>
        <span>
          github:
          <a href="https://github.com/rocyuan666/roc-todolist" target="_blank" rel="noreferrer">
          https://github.com/rocyuan666/roc-todolist
          </a>
        </span>
      </HeaderBarWrap>
    );
  }
}
