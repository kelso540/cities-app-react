import './App.css';
import Header from './components/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import About from './components/About';
import Contact from './components/Contact';
import CityDetails from './components/CityDetails';
import Data from './Data';
import CitiesContainer from './components/CitiesContainer';

function App() {
const user = {
  firstName: "Kelsey",
  lastName: "Jackson", 
  avatarURL: "https://lh3.googleusercontent.com/5V_uDDWFuEkkq-ohavkv_1H3GfjkCU0E1UhirVA5mVH8JnhRfHbox_bBfU4jU8JBtD17PoopY77c_6EN4ZPcyjGO4VfQoyaKtwYYk04W-hj6TPE3s-fbqCDlQQE4sKMXnEhH4H2bmpIf64wVY4714V0mGfCutMygkkhOS11qwk1ZlRCLK22ofK50gv5GvPK2L1XH1ecf65nnaKLI690mJODDEcVFGKNK8AueRrw_8r6umvYSRZMit-IdiXP0_iRBfHT6HODmLf3d_qw0xUlXPNzQr7WHIKj-245Ctb1aOl5hLQR9rQlxzd-qFuW14uAZhl15lL3uZvWTpwn_1_PP5wOn_3CNCcmXeufNl_g_nM2vhL33fB5bf_JCHJDV6RovicpKycQ4XZPvkuySMJkjDfL8fYGvwplN-Pdgx02UUJWICRnknWxhWWHaCyedQ_H4ZdAmPqyzijZA57U3gkLf-QLY7oUii3eQC7HUqQXVeXGlEK05U-BORgmwwZhiFyJ1mqb0FfgJWLpg1geNFVqU-0nTJvBjJVOFqhhqjiVZcNziMFJIojXcPJE5--8aKnckPj-f8wS_1aXEzAlS3YWNo-QDWdlNPVCOaHKSQyII3cQAQd4swN00-0IOpCYWZm6VYLaKScxu7ybuuaZwYbq33ZUryiA2_w4YoUZK2kVUZf4YrzVF4rGLxJtB-_LmwaoH1nr6KhX-7S9QC89X4TamVOzPRcjoXDmzg_4EaiapF3QLVej00QbzO56L7_cH=w522-h696-no?authuser=0",
  key: 1
}
const cities = Data; 


  return (
    <div>
      <BrowserRouter>
        <Header user={user} />
        <Routes>
          <Route path='/' element={<CitiesContainer cities={cities}/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/cityDetails/:city' element={<CityDetails cities={cities}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
