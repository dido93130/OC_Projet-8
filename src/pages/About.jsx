// Importation du module React depuis la bibliothèque react
import React from 'react';

// Importation des composants personnalisés depuis leurs emplacements respectifs
import Banner from '../components/partials/Banner';
import Collapse from '../components/partials/collapse';

// Importation des styles SCSS pour cette page
import '../sass/main.scss';

// Définition du composant fonctionnel About
const About = () => {
  // Données factices pour les collapses
  const aboutDatas = [
    {
      "id": "1",
      "title": "Fiabilité",
      "content": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
    },
    {
      "id": "2",
      "title": "Respect",
      "content": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
      "id": "3",
      "title": "Service",
      "content": "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    },
    {
      "id": "4",
      "title": "Sécurité",
      "content": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
  ];

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