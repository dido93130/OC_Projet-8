// Importation du module React depuis la bibliothèque react
import React from 'react';

// Importation des composants personnalisés depuis leurs emplacements respectifs
import Banner from '../components/partials/Banner';
import Collapse from '../components/partials/collapse';

// Importation des styles SCSS pour cette page
import '../sass/main.scss';

import aboutDatas from '../data/aboutData.json';

// Définition du composant fonctionnel About
const About = () => {
    // Rendu du composant
  return (
    <div>
      {/* Composant de bannière */}
      <Banner />      
      {/* Contenu principal de la page about */}
      <main className='about_main'>
        {/* Mapping des données pour créer des collapses */}
        {aboutDatas.map(data => (
          // Chaque collapse contient un titre et un contenu
          <div key={data.id} className="about_main_collapse">          
           <Collapse  title={data.title} content={data.content} />        
          </div>
        ))}
      </main>
    </div>
  );
};

// Exportation du composant About en tant que composant par défaut
export default About;