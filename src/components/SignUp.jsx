import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
const SignUp = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div className=' m-3 bg-cyan-500 rounded-lg  p-3 md:w-fit '>

         <div className='shadow-black bg-cyan-100 w-fit p-3 rounded-lg'>
            <h1 className='font-extrabold text-lg'>
                Sign up
            </h1>
         </div>
    <div className='  m-3  mt-9 rounded-md bg-green-400 p-4 flex justify-center '>

    <Form
      name="normal_login"
      className="login-form md:w-60px"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button bg-blue-500">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
    </div>

    </div>
  );
};
export default SignUp;