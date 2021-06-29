import React from 'react';
import { HashRouter, NavLink, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";

import RocHome from './pages/home';
import RocLogin from "./pages/login";

function App() {
	return (
		<Provider store={store}>
			<HashRouter>
				{/* 路由链接 */}
				<div>
					<NavLink exact to="/home" />
					<NavLink to="/login" />
				</div>
				{/* 显示 */}
				<Switch>
					<Route exact path="/">
						<Redirect to="/home" />
					</Route>
					<Route path="/home" component={RocHome}></Route>
					<Route path="/login" component={RocLogin}></Route>
				</Switch>
			</HashRouter>
		</Provider>
	);
}

export default App;
