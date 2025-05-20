//from React Router so we can switch to the desired page
import {useNavigate} from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate(); //hook from React Router
    return (
        <div class = "center">
            <h1>"the grass is greener where you water it"</h1>
            //start button to the menu of tools
            <button onClick={() => navigate('./page2')}>start</button>
        </div>
    )
}