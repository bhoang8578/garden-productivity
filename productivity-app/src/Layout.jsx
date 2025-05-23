//component of the React Router that is used for nested routes
import {Outlet} from 'react-router-dom'

export default function Layout() {
    return (
    <>
      <div className = "topBar">
          <h3 id = "title">DAILY GROWTH</h3>
              <div className = "windowControls">
                  <img src = "./assets/minimize-button.png" alt = "minimize" onClick = {handleMinimize}/>
                  <img src = "./asset/exit-button.png" alt = "close" onClick = {handleClose}/>
              </div>
      </div>
        //this part is what is going to be changing
        <Outlet/>
    </>
    )
}