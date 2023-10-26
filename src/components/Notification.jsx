// import React, { useState } from 'react'
// import {RxCross2} from 'react-icons/rx'
// import {AiFillInfoCircle} from 'react-icons/ai'

// function Notification() {

//     const msg =[
//         {
//             id:1,
//             text:"A simple blue alert with an example link. Give it a click if you like.",
//             style:' bg-blue-500 shadow-blue-500'
//         },

//         {
//             id:2,
//             text:"A simple green alert with an example link. Give it a click if you like.",
//             style:' bg-green-500 shadow-green-500'
//         },

//         {
//             id:3,
//             text:"A simple orange alert with an example link. Give it a click if you like.",
//             style:' bg-orange-500 shadow-orange-500'
//         },

//         {
//             id:4,
//             text:"A simple red alert with an example link. Give it a click if you like.",
//             style:' bg-red-500 shadow-red-500'
//         },   
//     ]

    
      
//   return (
//     <div>
//     <div className='border rounded-md m-3 p-4 shadow-xl '>
//         <p>
//             Alert
//         </p>

//         {msg.map(({id,text,style}) =>(



//         <div key={id} className={`rounded-md ${style} m-3 mt-5 p-5 flex shadow-md text-white justify-between`}>
//             <div>
//             <p>
//             {text}
//             </p>

//             </div>

//             <button className='pl-4'>
//             <RxCross2 size={25}/>

//             </button>




//         </div>
//         ))}


//     </div>
//     <div className='border rounded-md m-3 mt-8 p-4 shadow-xl '>
//         <p> 
//             Alert with icon
//         </p>

        

//         {msg.map(({id,text,style}) =>(



//         <div key={id} className={`rounded-md ${style} m-3 mt-5 p-5 flex shadow-md text-white justify-between`}>
//             <div className='flex'>
//             <div className='mr-4 '>
                

//                     <AiFillInfoCircle size={30}/>
                
                
//             </div>
//             <p>
//             {text}
//             </p>

//             </div>

//             <button className='pl-4'>
//             <RxCross2 size={25}/>

//             </button>




//         </div>
//         ))}


//     </div>
//     </div>
//   )
// }

// export default Notification

import React from 'react';
import { Alert, Space } from 'antd';
const onClose = (e) => {
  console.log(e, 'I was closed.');
};
const msg =[
    {
        id:1,
        message:"A simple blue alert with an example link. Give it a click if you like.",
        style:'bg-blue-500 shadow-md shadow-blue-300'

    },
    {
        id:2,
        message:"A simple green alert with an example link. Give it a click if you like.",
        style:'bg-green-500 shadow-md shadow-green-300'

    },
    {
        id:1,
        message:"A simple orange alert with an example link. Give it a click if you like.",
        style:'bg-orange-500 shadow-md shadow-orange-300'

    },
    {
        id:1,
        message:"A simple red alert with an example link. Give it a click if you like.",
        style:'bg-red-500 shadow-md shadow-red-300'

    },
]
const App = () => (

  <Space
    direction="vertical"
    style={{
      width: '100%',
      
    }}
  >
    <div className='border rounded-md m-3 p-4 shadow-xl'>

        {msg.map(({id,message,style}) =>(

        <div  key={id} className='mb-4 '>

    <Alert
      message={message}
      className={`${style}  text-white font-semibold text-[16px] p-5`}
      closable
      onClose={onClose}
    />
        </div>
        ))}



    </div>

   
  </Space>
);
export default App;