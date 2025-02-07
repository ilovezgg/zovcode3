
import './App.css';
import Header from './components/header/Header';
import Achievments from './components/achievements/Achievments';
import AboutUs from './components/abousUs/AboutUs';
import Projects from './components/prjects/Projects'
import z from '../src/App.css'
function App() {
  return (
    <div className="App">
      <div className={z.header}><Header/></div>
      
      <Achievments/>
      <AboutUs/>
      <Projects/>
    </div>
  );
}

export default App;
