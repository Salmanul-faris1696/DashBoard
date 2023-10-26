import React from 'react'
import './App.css'
import {MdOutlineLogin} from'react-icons/md'

import { Button, Checkbox, Form, Input } from 'antd';
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

function Login() {
  return (

    <div className=''>

    <div className=' m-5 rounded-md p-10  mt-20 shadow-md bg-gradient-to-br from-slate-900 to-slate-700 md:mt-[10%] md:ml-[30%] md:mr-[30%]  '>

            <p className='flex items-center gap-2 text-2xl font-serif font-bold text-cyan-400 ' >
                Login <MdOutlineLogin/>
            </p>
            
        
        <div className=' m-3  p-4 rounded-md shadow-md shadow-cyan-400 relative'> 

        <div className="border-cyan-500 border-4 animate-borderMove rounded-3xl">
            
            </div>

        <Form
    name="basic"
    // labelCol={{
    //   span: 8,
    // }}
    // wrapperCol={{
    //   span: 16,
    // }}
    style={{
      maxWidth: 600,
      width:"80%",
      margin:"auto"
    }}
    initialValues={{
      remember: true,
    }}
    layout='vertical'
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label={<span className="text-cyan-400">Username</span>}
      name="username"
      
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input  className='text-cyan-900' />
    </Form.Item>

    <Form.Item
      label={<span className='text-cyan-400'>Password</span>}
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password className='text-cyan-200' />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox className='text-white'>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit" className='border border-cyan-400'>
        Submit
      </Button>
    </Form.Item>
  </Form>


        </div>
    </div>
    </div>
  )
}

export default Login