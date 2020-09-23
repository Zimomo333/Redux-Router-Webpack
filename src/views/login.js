import React from 'react'
import ReactDOM from 'react-dom'
import { Form, Input, Button } from 'antd';
import { login } from '../redux/action'
import store from '../redux/store'

import { createHashHistory } from 'history';

const layout = {
    labelCol: {
        offset: 7,
        span: 2,
    },
    wrapperCol: {
        span: 6,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 9,
        span: 2,
    },
};

export default class Login extends React.Component {

    onFinish = (values) => {
      store.dispatch(login(values)()).then(()=>{    // 注意二次封装函数调用方式，login(values)()
        createHashHistory().push('/')
      })
    };
    
    onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

    render() {
        return (
            <div style={{ paddingTop: "150px" }}>
              <h3 style={{ textAlign: "center" }}>Login</h3>
              <Form
              {...layout}
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={this.onFinish}
              onFinishFailed={this.onFinishFailed}
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
        
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
            </div>
        );
    }
}