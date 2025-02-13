
import './App.css';
import Header from './components/header/Header';
import Achievments from './components/achievements/Achievments';
import AboutUs from './components/abousUs/AboutUs';
import Projects from './components/prjects/Projects'
import z from '../src/App.css'
import WhyUs from './components/whyUs/WhyUs';
function App() {
  return (
    <div className="App">
      <div className={z.header}><Header/></div>
      <Achievments/>
      <AboutUs/>
      <Projects/>
      <WhyUs/>
    </div>
  );
}

export default App;
