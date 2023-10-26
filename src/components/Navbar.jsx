import React, { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { FcSettings } from "react-icons/fc";
import { MdNotificationsActive } from "react-icons/md";
import GlobalContext from "./context/GlobalContext";
import { Button, Popover } from "antd";
import { AiFillClockCircle } from "react-icons/ai";
import { BsSpotify } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import SignUp from "./SignUp";
import { Drawer } from "antd";
import { Switch } from "antd";
import Notification from './Notification';



const notification = [
  {
    id: 1,
    img:  <BsSpotify size={20} />,
    name:"abby",
    time:"9",

  },
  {
    id: 2,
    img: "",
    name:"bobby",
    time:"10",

  },
  {
    id: 3,
    img: "",
    name:"cobby",
    time:"10",

  },
]


function Navbar() {
  const { sidbaropen, setSidbarOpen, toggleDarkMode, toggleLightMode } =
    useContext(GlobalContext);
  const location = useLocation();
  // console.log({path: location.pathname});

  const [open, setOpen] = useState(false);
  const hide = () => {
    setOpen(false);
  };
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  const [open2, setOpen2] = useState(false);
  const showDrawer = () => {
    setOpen2(true);
  };
  const onClose = () => {
    setOpen2(false);
  };

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  


  return (
    <div className="  md:static flex flex-col w-screen md:w-full px-5 md:flex-row  md:justify-between  z-10  ">
      <div className="md:order-2 p-3 text-gray-500  flex items-center  justify-between mt-3">
        <input
          type="text"
          placeholder="Type here"
          className="rounded-md p-2  border-2 border-gray-300 focus:border-gray-500  hover:border-gray-600 transition duration-300 flex items-center"
        />

        <div>
          <ul className="flex  items-center justify-center ">
            <button className="lg:hidden px-4 cursor-pointer text-gray-500 font-medium hover:scale-x-125 duration-200">
              <FaBars size={20} onClick={() => setSidbarOpen(!sidbaropen)} />
            </button>

            <Link
              to={"/Login"}
              className="px-4 cursor-pointer text-gray-500  hover:scale-125 duration-200"
            >
              <BsFillPersonPlusFill size={20} />
            </Link>

            <button
              className="px-4 cursor-pointer text-gray-500  hover:scale-125 duration-200 "
              onClick={showDrawer}
            >
              <FcSettings size={20} />
            </button>

            <Drawer
              title=" Settings"
              placement="right"
              onClose={onClose}
              open={open2}
            >
              <div>
                <h1 className="font-bold text-xl">Dashboard configurator</h1>
              </div>

              <div className="mt-20">
                <h1 className="font-bold text-lg">SideNav types</h1>

                <div className="flex gap-5">
                  <Button
                    className="hover:bg-slate-800 w-[150px] h-[50px]"
                    onClick={toggleDarkMode}
                  >
                    Dark
                  </Button>

                  <Button
                    className="bg-stone-800 text-white hover:bg-white w-[150px] h-[50px]"
                    onClick={toggleLightMode}
                  >
                    white
                  </Button>
                </div>
              </div>
            </Drawer>

            {/* <Popover
              content={
                <a onClick={hide}>
                  <div>
                    <div className="flex gap-2 items-center">
                      <div className="rounded-3xl bg-green-400 w-8 h-8 flex items-center justify-center">
                        <p>
                          <BsSpotify size={20} />
                        </p>
                      </div>
                      <div className="flex">
                        <p className="font-bold">New album</p>
                      </div>
                      <div></div>
                      <p className=" flex">from dabzee</p>
                    </div>
                    <div className="flex m-2 items-center gap-2">
                      <AiFillClockCircle />
                      <p className="text-xs text-gray-500">1 day ago</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-2 items-center">
                      <div className="rounded-3xl bg-blue-400 w-8 h-8 flex items-center justify-center">
                        <p>
                          <BsFillPersonPlusFill size={20} />
                        </p>
                      </div>
                      <div className="flex">
                        <p className="font-bold">New message</p>
                      </div>
                      <div></div>
                      <p className=" flex">from unknow</p>
                    </div>
                    <div className="flex m-2 items-center gap-2">
                      <AiFillClockCircle />
                      <p className="text-xs text-gray-500">30 minutes ago</p>
                    </div>
                  </div>
                </a>
              }
              title=""
              trigger="click"
              open={open}
              onOpenChange={handleOpenChange}
            >
              <button className="px-4 cursor-pointer text-gray-500  hover:scale-125 duration-200">
                <MdNotificationsActive size={20} />
              </button>
            </Popover> */}

            {/* <Popover >
       <button className='px-4 cursor-pointer text-gray-500  hover:scale-125 duration-200'>

                        <MdNotificationsActive size={20}/>
                            
                    </button>
    </Popover> */}
            <Popover
              content={
                notification.map(it => (
              <a onClick={hide} className="flex gap-2 items-center">
                <div>
                  {/* <img src="" alt="" /> */}
                  {it.img}
                  
                  </div>  
                  <div>
                    <p>New Message from {it.name}</p>
                    <p>{it.time} ago</p>
                  </div>
                </a>

                ))
              }
              title="Title"
              trigger="click"
              open={open}
              onOpenChange={handleOpenChange}
            >
              <button className="px-4 cursor-pointer text-gray-500  hover:scale-125 duration-200">
                <MdNotificationsActive size={20} />
              </button>
            </Popover>
          </ul>
        </div>
      </div>
      <div className=" m-3 ">
        <h4 className="text-gray-400 flex gap-3">
          Dashboard{" "}
          <p className="text-gray-600">
            {" "}
            {location.pathname === "/" ? "" : location.pathname}
          </p>
        </h4>

        <p className="font-bold text-black">
          {location.pathname === "/" ? "Home" : location.pathname.split("/")[1]}
        </p>
      </div>
    </div>
  );
}

export default Navbar;
