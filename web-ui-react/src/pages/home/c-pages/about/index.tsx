import React, { PureComponent } from "react";

import { StyledAboutWrap } from "./styled";

export default class RocAbout extends PureComponent {
  render() {
    return (
      <StyledAboutWrap>
        <div className="title-box">
          <h2>设置</h2>
        </div>
        <div className="cont-box">
          <h2>roc-todoList</h2>
          <p>学习react、TypeScript、koa2写的一个全栈小案例</p>
          <hr />
          <h2>前端相关</h2>
          <p>typescript</p>
          <p>react</p>
          <p>react-router-dom</p>
          <p>redux</p>
          <p>react-redux</p>
          <p>styled-components</p>
          <p>classnames</p>
          <p>antd</p>
          <hr />
          <h2>后端相关</h2>
          <p>koa</p>
          <p>koa-bodyparser</p>
          <p>koa-static</p>
          <p>@koa/multer</p>
          <p>@koa/router</p>
          <p>jsonwebtoken</p>
          <p>mysql2</p>
          <p>redis</p>
          <p>multer</p>
        </div>
      </StyledAboutWrap>
    );
  }
}
