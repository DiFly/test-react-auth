import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Layout, Menu, Button, Row, Col } from "antd";
import React, { lazy, Suspense } from "react";
import Home from "./routes/Home";

const { Header, Footer, Content } = Layout;

const Login = lazy(() => import("./routes/Login"));
const Register = lazy(() => import("./routes/Register"));
const Users = lazy(() => import("./routes/Users"));
const About = lazy(() => import("./routes/About"));
const GamesAll = lazy(() => import("./routes/GamesAll"));
const GamesFavourite = lazy(() => import("./routes/GamesFavourite"));

export default function App() {
  return (
    <Router>
      <Layout className="layout">
        <Suspense fallback={<div>Loading...</div>}>
          <Header>
            <Row justify="space-between">
              <Col span={22}>
                <Menu
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={["1"]}
                >
                  <Menu.Item key="1">
                    <Link to="/">Home</Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Link to="/games/all">Games All</Link>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Link to="/games/favourite">Games Favourite</Link>
                  </Menu.Item>
                  <Menu.Item key="4">
                    <Link to="/about">About</Link>
                  </Menu.Item>
                  <Menu.Item key="5">
                    <Link to="/users">Users</Link>
                  </Menu.Item>
                  <Menu.Item key="6">
                    <Link to="/login">Login</Link>
                  </Menu.Item>
                  <Menu.Item key="7">
                    <Link to="/register">Register</Link>
                  </Menu.Item>
                </Menu>
              </Col>
              <Col span={2}>
                <Button type="primary">Logout</Button>
              </Col>
            </Row>
          </Header>
          <Content>
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/users" component={Users} />
              <Route path="/games/all" component={GamesAll} />
              <Route path="/games/favourite" component={GamesFavourite} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route exact path="/" component={Home} />
            </Switch>
          </Content>
          <Footer>Simple React app by DiFly</Footer>
        </Suspense>
      </Layout>
    </Router>
  );
}
