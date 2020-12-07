import React from 'react';
import './style.css';
import SignupWall from './signup-wall-2.jpg';
import { Form, Input, Button, Checkbox ,Space} from 'antd';
const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 18 },
};
const tailLayout = {
  wrapperCol: { offset: 9, span: 20 },
};
 const onFinish = values => {
    console.log('Success:', values);
}
const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
};
class Signup extends React.Component{
    render(){
        return(
            <div className="main">
                <img src={SignupWall}></img>
                <div className="form-signup">
                    <h1 className="signup">Sign Up</h1>
                    <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[{ required: true, message: 'Please input your name!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
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
                            <Space>
                                <Button type="primary" htmlType="submit">
                                Signup
                                </Button>
                                <span>OR</span>
                                <Button type="primary" htmlType="link" href="/login">
                                Login
                                </Button>
                            </Space>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}
export default Signup