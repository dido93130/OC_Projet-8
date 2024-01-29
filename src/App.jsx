// Importation des modules React et des composants React Router
import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

// Importation des composants de votre application
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Apartment from "./pages/Apartment"
import ErrorPage from './pages/ErrorPage';

// Composant principal de votre application
const Dashboard = () => {
  return (
    <>          
      <Header/>      
      <Outlet/> {/* Outlet est utilisé pour rendre les éléments enfants des routes */}
      <Footer/>      
    </>
  );
};

// Configuration des routes de l'application avec React Router
const router = createBrowserRouter([
  {
    path:"/",
    element: <Dashboard/>, // L'élément racine pour la route "/"
    children:[
      {
      path:"/",
      element:<Home/> // L'élément à afficher pour la route "/"
      },
      {
        path: "/about",
        element:<About/> // L'élément à afficher pour la route "/about"
       },
       {
        path: "/apartment/:id",
        element: <Apartment /> // L'élément à afficher pour les appartements avec un paramètre d'ID
       },
       {
        path: "*",
        element: <ErrorPage /> // L'élément à afficher pour toutes les autres routes (erreur 404)
      },
     ],
   },   
])

// Composant principal de l'application qui fournit le router à l'ensemble de l'application
const App = () => {  
  return (
    <>
    {/* Fournit le router à l'application via le contexte de React Router */}
    <RouterProvider router={router}/> 
    </>
  )
}

// Exportation du composant principal (App)
export default App;