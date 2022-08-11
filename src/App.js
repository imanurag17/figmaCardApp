import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import LandingPage from './Component/LandingPage';
import Share from './Component/Share';
import CreateCard from './Component/createCard';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="share" element={<Share/>}/>
      <Route path="share/createCard" element={<CreateCard/>}/>
    </Routes>
    </>
  );
}

export default App;
