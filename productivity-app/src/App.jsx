import './App.css'
import {Routes,Route} from 'react-router-dom'
//import all of our other JavaScript files for interaction
import Homepage from './Homepage.jsx'

{/*import Page2 from './Page2.jsx'
import Page3 from './Page3.jsx'
import Page4 from './Page4.jsx'
import Page5 from './Page5.jsx'
import Page6 from './Page6.jsx'
import Page7 from './Page7.jsx'
import Page8 from './Page8.jsx'
import Layout from './Layout.jsx'
*/}
function App() {

  return (
    //defining routes to all of the pages/JavaScript files I made
    //this was based on my Figma prototype that has 8 pages
    <Routes>
      <Route path = "/" element = {<Layout/>}>
      <Route index element = {<Homepage/>}/>
      <Route path = "/page2" element = {<Page2/>}/>
      <Route path = "/page3" element = {<Page3/>}/>
      <Route path = "/page4" element = {<Page4/>}/>
      <Route path = "/page5" element = {<Page5/>}/>
      <Route path = "/page6" element = {<Page6/>}/>
      <Route path = "/page7" element = {<Page7/>}/>
      <Route path = "/page8" element = {<Page8/>}/>
      </Route>
    </Routes>
  )
}

export default App
