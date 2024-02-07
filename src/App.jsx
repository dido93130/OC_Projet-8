import React from 'react';
import { HashRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

// Importation des composants de votre application
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Apartment from "./pages/Apartment"
import ErrorPage from './pages/ErrorPage';

const Dashboard = () => {
  return (
    <>          
      <Header/> 
      <Outlet/> {/* Cet Outlet va rendre les composants des routes enfants */}    
      <Footer/>      
    </>
  );
};

const App = () => {  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="apartment/:id" element={<Apartment />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

// Exportation du composant principal (App)
export default App;