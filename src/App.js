import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Shered/Footer/Footer';
import Navbox from './Components/Shered/Navbox/Navbox';
import Homepage from './Components/Homepage/Homepage';
import NotFound from './Components/NotFound/NotFound';
import Account from './Components/Account/Account';
import ServicesPage from './Components/ServicesPage/ServicesPage';
import Contact from './Components/Contact/Contact';
import AuthProvider from './Components/Context/AuthProvider';
import PrivateRouter from './Components/PrivateRouter/PrivateRouter';
import Profile from './Components/Profile/Profile';
import Doctors from './Components/Doctors/Doctors';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbox></Navbox>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/home' element={<Homepage />}></Route>
          <Route path='/home#service' element={<Homepage />}></Route>

          {/* Private router */}
          <Route path='/services/:id' element={
            <PrivateRouter redirectTo="/account">
              <ServicesPage />
            </PrivateRouter>
          } />
          <Route path='/profile' element={
            <PrivateRouter redirectTo="/account">
              <Profile />
            </PrivateRouter>
          } />
          
          <Route path='/account' element={<Account />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/doctors' element={<Doctors />}></Route>
          <Route path = "*" element={<NotFound />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
