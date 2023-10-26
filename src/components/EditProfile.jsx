import React, { useState } from 'react'
import photo from '../assets/img/dfgh.jpg'
import { PlusOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, InputNumber, Modal, Upload } from 'antd';



const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

function EditProfile() {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState([]);
    const handleCancel = () => setPreviewOpen(false);
    const handlePreview = async (file) => {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      setPreviewImage(file.url || file.preview);
      setPreviewOpen(true);
      setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };
    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
    const uploadButton = (
      <div>
        <PlusOutlined />
        <div
          style={{
            marginTop: 8,
          }}
        >
          Upload
        </div>
      </div>
    );
return (

  <div className=''> 

  
    <div className='bg-gradient-to-t from-cyan-500  flex m-3  rounded-lg  p-5  ' >

        <div className='flex   p-4  m-3 '>

        <Upload
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
       >
        {fileList.length >= 1 ? null : uploadButton}
      </Upload>
      <Modal   open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img
          alt="example"
          style={{
            width: '100%',
        
          }}
          src={previewImage}
        />
      </Modal>
        </div>

       


       <Form
       className=''
    name="basic"
    style={{
      maxWidth: 1900,
    }}
    initialValues={{
      remember: false,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >

  

     <div className='grid grid-cols-1 justify-center md:grid-cols-2 md:w-fit  md:justify-center gap-4 '>

    <Form.Item
    className=''
      label="First name"
      name="fisrtName"
      rules={[
        {
          required: true,
          message: 'Please input your first name!',
        },
      ]}
    >
      <Input className='' />
    </Form.Item>
      

    

    <Form.Item
    className=' '
      label="Last name"
      name="lastName"
      rules={[
        {
          required: true,
          message: 'Please input your Last name!',
        },
      ]}
    >
      <Input />
    </Form.Item>
      


      


    <Form.Item
      label="Email"
      name="email"
      
      rules={[
        {
            type:'email',
            required: true,
            message: 'Please input your email address',
        },
      ]}
    >
      <Input />
    </Form.Item>
     

      

    <Form.Item
      label="phone"
      name="phone"
      rules={[
        {
          required: true,
          max:10,
          min:10,
          type:"integer",
          message: 'Please input your phone Number!',
        },
      ]}
    >
      <Input />
    </Form.Item>

      

    <Form.Item
      label="Location"
      name="loaction"
      rules={[
        {
          required: true,
          message: 'Please input your Location!',
        },
      ]}
    >
      <Input />
    </Form.Item>
     







   

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit" className='bg-green-500 text-black hover:bg-gradient-to-r from-green-600 to-green-700 shadow-xl md:w-[200px] md:h-[40px]'>
        save
      </Button>
    </Form.Item>

     </div>


    

  


   


  </Form>

       
    </div>
  </div>

    
  )
}

export default EditProfile