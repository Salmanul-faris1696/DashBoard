import React, { useState } from 'react'
import { Button, Table } from 'antd';
import {BsPersonAdd} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import {FaUsers} from 'react-icons/fa'

function UserTable() {

  const [data, setData] = useState([]);

  const handleDelete = (key) => {
    const updatedData = data.filter((item) => item.key !== key);
    setData(updatedData);
  };


  

  const columns = [
    {
      title: 'Full Name',
      width: 100,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
      
    },
    {
      title: 'Age',
      width: 60,
      dataIndex: 'age',
      key: 'age',
      fixed: 'left',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: '1',
      width: 100,
      fixed:'left'
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: (text,record) =>(
        <>
        <Link to={"/EditProfile"}>

        <Button className='bg-blue-700 text-white'>Edit</Button>
        </Link>
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
  //          age: 32,
  //          address: `London Park no. ${i}`,
  //        });
  //     }

  if (data.length === 0) {
    for (let i = 0; i < 5; i++) {
      const newItem = {
        key: i,
        name: `Edward ${i}`,
        age: 32,
        address: `London Park no. ${i}`,
      };
      setData((prevData) => [...prevData, newItem]);
    }
  }


 



  return (
    
  
    <div className='m-3 rounded-lg bg-green-300 border shadow-gray-500 shadow-md'>
         <div>

<div className='mt-3 ml-3 font-bold flex'>
      <p className='flex items-center gap-3'>
          USERS TABLE <FaUsers size={25}/>
      </p>
  </div>
<div className=' m-3 rounded-full  w-[52px] h-[52px] flex bg-green-500  float-right '>
  <Link   to={"/EditProfile"} className=' p-3 '>
    <BsPersonAdd size={30}/>

  </Link>
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

export default UserTable