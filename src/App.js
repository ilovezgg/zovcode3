import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home/Home';
import We from './components/pages/we/We';
import Catalog  from './components/pages/catalog/Catalog';
import Contacts  from './components/pages/contacts/Contacts';
import Cabinet from './components/pages/cabinet/Cabinet';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/we" element={<We />} /> 
        <Route path="/catalog" element={<Catalog />} /> 
        <Route path="/contacts" element={<Contacts />} /> 
        <Route path="/cabinet" element={<Cabinet />} /> 
      </Routes>
    </Router>
    </div>
  );
}

export default App;