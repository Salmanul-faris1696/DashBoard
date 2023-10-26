import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GlobalProvider } from './components/context/GlobalContext.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Card from './components/Card.jsx'
import Graph from './components/Graph.jsx'
import Table from './components/Table.jsx'
import Profile from './components/Profile.jsx'
import EditProfile from './components/EditProfile.jsx'
import Notification from './components/Notification';
import SignUp from './components/SignUp.jsx'
import UserTable from './components/UserTable.jsx'
import SellersTable from './components/SellersTable.jsx'
import OrderTable from './components/OrderTable.jsx'
import Banners from './components/Banners.jsx'
import BannerCreate from './components/BannerCreate.jsx'
import Login from './Login.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:"/",
        element: <div>
          
          
          <Card/>

          <Graph/>

          <Table/>
        </div>
      },{
        path:"/profile",
        element:<Profile/>
      },
      {
        path:"/EditProfile",
        element:<EditProfile/>
      },
      {
        path:"/UserTable",
        element:<UserTable/>
      },
      {
        path:"/SellersTable",
        element:<SellersTable/>
      },
      {
        path:"/OrderTable",
        element:<OrderTable/>
      },
      {
        path:"/Banners",
        element:<Banners/>
      },
      {
        path:"/BannerCreate",
        element:<BannerCreate/>

      },
      {
        path:"/Notification",
        element:<Notification/>
      },
      {
        path:"/Signup",
        element:<SignUp/>
      }
      
    ]

  }, {
    path:'/Login',
    element:<Login/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalProvider>

    <RouterProvider router={router} />
    </GlobalProvider>
  </React.StrictMode>,
)
