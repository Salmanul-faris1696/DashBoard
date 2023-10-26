import React from 'react'
import { Input } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';

const props = {
    name: 'file',
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const { TextArea } = Input;

function BannerCreate() {

    
  return (
    <div className='m-3 border rounded-md shadow-md shadow-cyan-300 p-3 bg-gradient-to-r from-cyan-50 to-cyan-100  md:w-fit '> 

    <div className='flex items-center  gap-12 mb-8 md:flex  '>

        <label htmlFor="product title">Product title</label>
        <Input placeholder="product title" className=' p-2 w-[300px]' />
    </div>

    <div className='flex items-center  gap-10 mb-8 '>

        <label htmlFor="product title">Product Detail</label>
        <TextArea rows={4} className='w-[300px]'/>
    </div>

    <div className='flex items-center  gap-14 mb-8 '>

        <label htmlFor="product title">Cover photo</label>
        <Upload {...props}>
        <Button icon={<UploadOutlined />}>Click to Upload your Cover photo</Button>
        </Upload>
    </div>

    <div className='flex items-center justify-center gap-10 mb-8 '>

        <Button type="primary" htmlType="submit" className='bg-blue-500'>
        Submit
      </Button>
    </div>


    




        

    </div>
  )
}

export default BannerCreate