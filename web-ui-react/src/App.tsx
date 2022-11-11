import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";

import RocHome from "./pages/home";
import RocLogin from "./pages/login";
import RocRegister from "./pages/register";

function RouterBefourEach(props: any) {
  const currPath = props.location.pathname;
  const targetRouter = props.routers.find((item: any) => currPath.indexOf(item.path) !== -1);
  const token = localStorage.getItem("token");
  if (token) {
    // 登录过了
    if (targetRouter.path === "/login" || targetRouter.path === "/register") {
      return <Redirect to="/"></Redirect>;
    } else {
      return <Route path={targetRouter.path} component={targetRouter.component}></Route>;
    }
  } else {
    // 没有登录
    if (targetRouter.path === "/login" || targetRouter.path === "/register") {
      return <Route path={targetRouter.path} component={targetRouter.component}></Route>;
    } else {
      return <Redirect to="/login"></Redirect>;
    }
  }
}

function App() {
  const routers = [
    { path: "/home", component: RocHome },
    { path: "/login", component: RocLogin },
    { path: "/register", component: RocRegister },
  ];
  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home"></Redirect>
          </Route>
          <RouterBefourEach routers={routers}></RouterBefourEach>
        </Switch>
      </HashRouter>
    </Provider>
  );
}

export default App;
