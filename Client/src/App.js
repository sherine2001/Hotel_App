
import './App.css';
import Navbar from './Components/Navbar';
import Homescreen from './screens/Homescreen';
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'

function App() {

  
  return <div>
   <Navbar/>
    <Homescreen/>
  </div>
}

export default App;
