import Login from "../pages/Auth/Login"
import Dashboard from "../pages/Dashboard"
import NotFound from "../pages/NotFound"

const routes =[
    {
      pathname:'/',
      component: <Login />
    },
    {
      pathname:'/dashboard',
      component: <Dashboard />
    },
    {
      pathname:'/*',
      component: <NotFound />
    },
  ]
  
  export default routes