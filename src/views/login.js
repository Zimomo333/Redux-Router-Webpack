import React from 'react'
import ReactDOM from 'react-dom'
import { Form, Input, Button } from 'antd';
import { login } from '../redux/action'
import store from '../redux/store'

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
      store.dispatch(login(values));
    };
    
    onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

    render() {
        return (
            <div>
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