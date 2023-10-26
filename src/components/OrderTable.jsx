import React, { useState } from 'react'
import { Button, Table } from 'antd';
import {PiShoppingCart} from 'react-icons/pi'

function OrderTable() {

  const [data, setData] = useState([]);

  const handleDelete = (key) => {
    const updatedData = data.filter((item) => item.key !== key);
    setData(updatedData);
  };


  const columns = [
    {
      title: 'Product Name',
      width: 100,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
      
    },
    {
      title: 'Quanity',
      width: 60,
      dataIndex: 'quantity',
      key: 'quantity',
      fixed: 'left',
    },
    {
      title: 'Product Detail',
      dataIndex: 'detail',
      key: '1',
      width: 100,
      fixed:'left'
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: (record) =>(
        <>
        
        <Button className='bg-blue-700 text-white'>Edit</Button>
        <Button className='bg-red-600 text-white' onClick={() => handleDelete(record.key)} >Delete</Button>
        </>
        ),    
       },
  ];

  // const data = [];
  //     for (let i = 0; i < 100; i++) {
  //          data.push({
  //          key: i,
  //          name: `Edward ${i}`,
  //          quanity: 32,
  //          detail: `London Park no. ${i}`,
  //        });

  //     }

  if (data.length === 0) {
    for (let i = 0; i < 5; i++) {
      const newItem = {
        key: i,
        name: `Edward ${i}`,
        quantity: 32,
        detail: `London Park no. ${i}`,
      };
      setData((prevData) => [...prevData, newItem]);
    }
  }


 
    
    
  





  return (
    <div className='m-3 rounded-lg bg-orange-300 border shadow-gray-500 shadow-md'>
      <div>

      <div className='mt-3 ml-3 font-bold'>
            <p className='p-3 flex items-center gap-3'>
                ORDER TABLE <PiShoppingCart size={25}/>
            </p>
        </div>
   
      </div>

      <Table
    columns={columns}
    dataSource={data}
    rowKey="key"
    // scroll={{
      
    //   y:300,
    // }}
  />

    </div>
  )
}

export default OrderTable




