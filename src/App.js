import "./App.css";

import { BrowserRouter as Router, Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Layout, Menu, Button, Row, Col } from "antd";
import React, { Suspense } from "react";
import Routes from "./routes/Routes";

const { Header, Footer, Content, Sider } = Layout;

export default function App() {
  return (
    <Router>
      <Layout className="layout">
        <Suspense fallback={<div>Loading...</div>}>
          <Header>
            <Row justify="space-between">
              <Col span={22}>
                <div className="logo" />
                <Menu
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={["1"]}
                >
                  <Menu.Item key="1">
                    <Link to="/">Home</Link>
                  </Menu.Item>

                  <Menu.Item key="2">
                    <Link to="/about">About</Link>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Link to="/users">Users</Link>
                  </Menu.Item>
                  <Menu.Item key="4">
                    <Link to="/login">Login</Link>
                  </Menu.Item>
                  <Menu.Item key="5">
                    <Link to="/register">Register</Link>
                  </Menu.Item>
                </Menu>
              </Col>
              <Col span={2}>
                <Button type="primary">Logout</Button>
              </Col>
            </Row>
          </Header>
          <Layout>
            <Sider theme="light">
              <Menu>
                <Menu.Item>
                  <Link to="/games/all">Games All</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/games/favourite">Games Favourite</Link>
                </Menu.Item>
              </Menu>
            </Sider>
            <Content>
              <Routes />
            </Content>
          </Layout>
          <Footer style={{ textAlign: "center" }}>
            Simple React app by DiFly ©2020
          </Footer>
        </Suspense>
      </Layout>
    </Router>
  );
}
