//component of the React Router that is used for nested routes
import {Outlet} from 'react-router-dom'
import * as windowAPI from '@tauri-apps/api/window'

export default function Layout() {
  function handleMinimize()
  {
    windowAPI.appWindow.minimize()
  }
  function handleClose()
  {
    windowAPI.appWindow.close()
  }
    return (
    <>
      <div className = "topBar">
          <h3 id = "title">DAILY GROWTH</h3>
              <div className = "windowControls">
                  <img src = "./assets/minimize-button.png" alt = "minimize" onClick = {handleMinimize}/>
                  <img src = "./assets/exit-button.png" alt = "close" onClick = {handleClose}/>
              </div>
      </div>
        {/*this part is what is going to be changing*/}
        <Outlet/>
    </>
    )
}