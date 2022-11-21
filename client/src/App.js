import './App.css';
import Home from './components/Home';
import Landing from './components/LandingPage';
import CreateActivity from './components/CreateActivity';
import DetailCountry from './components/DetailCountry';
import Activities from './components/Activities';
import {Routes, Route} from "react-router-dom"




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path= "/countries" element={<Home/>}/>
        <Route path= "/countries/:id" element={<DetailCountry/>}/>
        <Route path= "/activity" element ={<CreateActivity/>}/>
        <Route path='/activities'element={<Activities/>}/>
        </Routes>
    </div>
  );
}

export default App;
