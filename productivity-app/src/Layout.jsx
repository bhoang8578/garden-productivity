//component of the React Router that is used for nested routes
import {Outlet} from 'react-router-dom'

export default function Layout() {
    return (
    <>
      <div class = "top">
        <h3>DAILY GROWTH</h3>
        //have the icons for the exit, expand, minimize
        //<ul></ul>
      </div>
        //this part is what is going to be changing
        <Outlet/>
    </>
    )
}