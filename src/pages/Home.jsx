// Importez la bibliothèque React pour créer des composants React
import React from 'react';

// Importez le composant Banner et le composant Gallery depuis leurs emplacements respectifs
import Banner from '../components/partials/Banner';
import Gallery from '../components/partials/Gallery';

// Importez le style SCSS pour cette page d'accueil
import '../sass/main.scss';

// Définissez le composant Home
const Home = () => {
	// Rend le contenu de la page d'accueil
	return (
		<div className='home'>
		  {/* Incluez le composant Banner */}
		  <Banner/>
		  {/* Incluez le composant Gallery */}
		  <Gallery/>          
		</div>
	)
}

// Exportez le composant Home pour pouvoir l'utiliser ailleurs dans votre application
export default Home;
