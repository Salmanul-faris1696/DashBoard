import React from 'react'
import {MdToday} from 'react-icons/md'
import {PiUsersFill} from 'react-icons/pi'
import {FaDailymotion} from 'react-icons/fa'
import {SlGraph} from 'react-icons/sl'


function Card() {

    const cardItem=[
        {
            id:1,
            icon:<MdToday size={30}/>,
            textRight:"Todays sales",
            no:"$53k",
            percentage:"+55%",
            textBottm:"than last week",
            style:"bg-gradient-to-tr from-blue-600 to-blue-400  shadow-blue-500/40"
        },

        {
            id:2,
            icon:<PiUsersFill size={30}/>,
            textRight:"Todays users",
            no:"2300",
            percentage:"+3%",
            textBottm:"than last month",
            style:'bg-gradient-to-tr from-pink-600 to-pink-400  shadow-pink-500/40'
        },

        {
            id:3,
            icon:<FaDailymotion size={30}/>,
            textRight:"Daily sales",
            no:"3300",
            percentage:"-3%",
            textBottm:"than yesterday",
            style:'bg-gradient-to-tr from-green-600 to-green-400  shadow-green-500/40'
        },

        {
            id:4,
            icon:<SlGraph size={30}/>,
            textRight:"total sales ",
            no:"$103,430",
            percentage:"+5%",
            textBottm:"than last yesterday",
            style:'bg-gradient-to-tr from-orange-600 to-orange-400 shadow-orange-500/40  '
        },
        
    ]



  return (
    <div className="mt-12  m-5   ">
        <div className="mb-12 grid gap-y-10 gap-x-10  md:grid-cols-2   lg:grid-col-4  xl:grid-col-4 xl:flex   ">

            {cardItem.map(({id,icon,textRight,no,percentage,textBottm,style}) =>(



            <div key={id} className="raltive flex flex-col bg-clip-border border-2 rounded-xl bg-white text-gray-700 shadow-md lg:w-[250px] ">
                <div className={`bg-clip-border mx-4 rounded-xl overflow-hidden  text-white shadow-lg absolute -mt-4 grid h-16 w-16 items-center justify-center ${style} `}>
                    <p>
                        {icon}
                    </p>

                </div>

                <div className='p-4 text-right '> 
                    <p className='block  text-sm leading-normal font-normal text-blue-gray-600  '>
                        {textRight}

                    </p>
                    <h4 className='block  tracking-normal text-2xl font-semibold  text-blue-gray-900'>
                        {no}
                    </h4>
                </div>

                <div className='border-t border-blue-gary-50 p-4 '>
                    <p className='block text-base leading-relaxed font-normal text-blue-gray-600'>
                        <strong className='text-green-500'>{percentage}</strong>
                        &nbsp;
                        {textBottm}

                    </p>

                </div>

            </div>
            ))}



        </div>
    </div>
   
  )
}

export default Card