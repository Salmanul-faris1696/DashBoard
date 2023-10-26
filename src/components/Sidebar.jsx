import React, { useContext } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { FaUsers } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { GiVerticalBanner } from 'react-icons/gi';
import { IoIosNotifications } from 'react-icons/io';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import GlobalContext from './context/GlobalContext';

function Sidebar() {
  const { sidbaropen ,windowWidth, isDarkMode} = useContext(GlobalContext);

  const links = [
    { id: 1, link: "Dashboard", icon: <AiFillHome />, path:"/"},
    { id: 2, link: "Profile", icon: <CgProfile /> ,path:"/profile"},
    { id: 3, link: "Users", icon: <FiUsers/> ,path:"/UserTable"},
    { id: 4, link: "Sellers", icon: <FaUsers/> ,path:"/SellersTable"},
    { id: 5, link: "Orders", icon: <MdOutlineProductionQuantityLimits/> ,path:"/OrderTable"},
    { id: 6, link: "Banners", icon:<GiVerticalBanner/>,path:"/Banners" },



    { id: 7, link: "Notifications", icon: <IoIosNotifications />, path:"/Notification" },
  ];


  
console.log({isDarkMode})
  return (
    <div className="md:h-screen ">
       {windowWidth < 1080 ? sidbaropen && ( // Check window width
       <div className={`fixed md:static z-10 h-full rounded-lg ${isDarkMode ? 'bg-gray-900 text-white' : "bg-white text-black" } 
       transition duration-500 lg:block m-4 w-64 p-3`}>
          <div className="text-2xl font-bold mb-4">Activities</div>
          <hr className="p-3" />
          <div>
            {links.map(({ id, link, icon,path }) => (
              <NavLink key={id} to={path} className={({isActive}) => `${isActive ? 'bg-blue-500' : 'bg-gray-400'} mb-4  p-2 rounded-md hover:scale-x-110 duration-200 flex items-center gap-2`}>
                {icon} {link}
              </NavLink>
            ))}
          </div>
        </div>
      ) : (

        <div className={`fixed md:static z-10 h-full rounded-lg ${isDarkMode ? 'bg-gray-900 text-white' : "bg-white text-black" } 
         transition duration-500 lg:block m-4 w-64 p-3`}>
        <div className="text-2xl font-bold mb-4">Activities</div>

        <hr className="p-3" />
        <ul>
        {links.map(({ id, link, icon,path }) => (
               <NavLink key={id} to={path} className={({isActive}) => `${isActive ? 'bg-blue-500' : 'bg-gray-400'} mb-4  p-2 rounded-md hover:scale-x-110 duration-200 flex items-center gap-2`}>
               {icon} {link}
             </NavLink>
            ))}
        </ul>
      </div>
      )}
    </div>
  );
}

export default Sidebar;
