import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.tsx'
import Services from './pages/Services/Services.tsx';
import Cars from './pages/Cars/Cars.tsx';
import Budget from './pages/Budget/Budget.tsx';
import Contact from './pages/Contact/Contact.tsx';
import ContextProvider from './Context/Context.tsx';

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Services' element={<Services />} />
            <Route path='/Cars' element={<Cars />} />
            <Route path='/Budget' element={<Budget />} />
            <Route path='/Contact' element={<Contact />} />
          </Routes>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
