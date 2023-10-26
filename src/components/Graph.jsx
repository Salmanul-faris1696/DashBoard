import React from 'react'
import {MdUpdate} from 'react-icons/md'

function Graph() {

    const grapItems = [
        {
            id:1,
            graph:"graph1",
            textHead:"Daily sales",
            textPara:"Todays perfomance",
            icon:<MdUpdate/>,
            updatestatus:"just update",
            style:"bg-gradient-to-tr from-blue-600 to-blue-400  shadow-blue-500/40 "
        },
        {
            id:2,
            graph:"graph2",
            textHead:"Total sales ",
            textPara:"Total perfomance",
            icon:<MdUpdate/>,
            updatestatus:"just update",
            style:"bg-gradient-to-tr from-pink-600 to-pink-400  shadow-pink-500/40"

        },
        {
            id:3,
            graph:"graph3",
            textHead:" completed ",
            textPara:"Overall perfomance",
            icon:<MdUpdate/>,
            updatestatus:" updating",
            style:"bg-gradient-to-tr from-green-600 to-green-400  shadow-green-500/40"
        },

        
    ]





  return (
    <div className='mb-6 grid grid-col-1 gap-y-12 gap-x-6 md:grid-cols-2  xl:grid-cols-3 m-6'>

            {grapItems.map(({id,graph,textHead,textPara,icon,updatestatus,style}) => (

        <div key={id} className="realtive flex flex-col border-2 rounded-xl bg-white text-gray-700 shadow-md">

                
            <div className={` relative border-2 border-white  mx-4 rounded-xl overflow-hidden  text-white shadow-lg -mt-6 ${style}` } > 
            
                <div className='min-h-[235px]  '>

                    <div className='w-[320px] h-[220px] flex items-center justify-center '>

                        <p>
                            {graph}
                        </p>

                    </div>


                </div>

            </div>

            <div className="p-6 ">

                <h6 className='block  tracking-normal  text-base font-semibold  text-blue-gray-900'>

                    {textHead}

                </h6>
                <p className='block   text-sm  font-normal text-blue-gray-600'>
                    {textPara} 

                </p>

            </div>

            <div className='p-6 border-t border-blue-gray-50 px-6 py-5'>
                <p className='text-sm flex items-center font-normal text-blue-gray-600 '>

                    {icon}
                    &nbsp;
                    {updatestatus}
                   

                </p>

            </div>

        </div>
            ))}

   

         
    </div>
  )
}

export default Graph