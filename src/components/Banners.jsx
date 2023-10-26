
import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card ,} from 'antd';
import {AiOutlineAppstoreAdd} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const { Meta } = Card;

function Banners() {

  const item = [
    {
      id:1,
      
      alt:'example',
      src:'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      title:"card title",
      description:'details'
    },
    {
      id:2,
      
      alt:'example',
      src:'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      title:"card title",
      description:'details'
    },
    {
      id:3,
      
      alt:'example',
      src:'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      title:"card title",
      description:'details'
    },
  ]

  
  
  return (
    <div className=''>
      
      <div className=' w-full  flex justify-end px-5'>
        <div className='m-3 rounded-full  w-[52px] h-[52px] flex bg-cyan-500 '>

        <Link to={"/BannerCreate"} className='flex items-center justify-center p-3 '>
          <AiOutlineAppstoreAdd size={30}/>
        </Link>
        </div>
      </div>

    <div className='m-3 grid  gap-y-10 gap-x-10 justify-center md:grid-cols-2   lg:grid-col-4  xl:grid-col-4 xl:flex'>

      {item.map(({id,alt,src,title,description}) =>(

      <div key={id} className='m-3 rounded-lg bg-gray-500 shadow-md shadow-gray-500'>

       <Card
         style={{width:300}}
         cover={
        <img
          alt={alt}
          src={src}
        />
        }
        actions={[
          <>
          <Link to={"/BannerCreate"}>
          <EditOutlined key="edit" />
          </Link>
          </>
      
         ]}
  >
        <Meta
          title={title}
          description={description}
        />
        </Card>
      </div>

      ))}
     

      

    </div>
    </div>
  )
}

export default Banners