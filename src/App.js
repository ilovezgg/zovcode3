import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home/Home';
import We from './components/pages/we/We';
import Catalog from './components/pages/catalog/Catalog';
import Contacts from './components/pages/contacts/Contacts';
import Gallery from './components/pages/cabinet/Gallery';
import Favourites from './components/pages/favourites/Favourites';
import SignUp from './components/pages/signup/SignUp';
import Profile from './components/pages/profile/Profile';
import Login from './components/pages/login/Login';
import Preloader from './components/pages/preloader/Preloader';
import houseData2 from './components/pages/housePages/firstCardHouse/houseData2/houseData2.js'
import FirstCardHouse from './components/pages/housePages/firstCardHouse/FirstCardHouse';

function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/we" element={<We />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/cabinet" element={<Gallery />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Catalog houses={houseData2} />} />
        <Route path="/house/:id" element={<FirstCardHouse />} />
        </Routes>
      </Router>
      
      {showPreloader && (
        <Preloader onComplete={() => setShowPreloader(false)} />
      )}
    </div>
  );
}

export default App;