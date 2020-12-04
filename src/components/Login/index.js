import React from 'react';
import './style.css';
import LoginWall from './login-wall.jpg'
import { Form, Input, Button, Checkbox } from 'antd';
const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 18 },
};
const tailLayout = {
  wrapperCol: { offset: 5, span: 18 },
};
 const onFinish = values => {
    console.log('Success:', values);
}
const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
};
class Login extends React.Component{
    render(){
        return(
            <div className="main-login">
                <img src={LoginWall}></img>
                <div className="form-login">
                    <h1 className="login">Login</h1>
                    <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                            Login
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}
export default Login