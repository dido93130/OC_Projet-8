// Importez le composant Header et le composant de lien de react-router-dom
import React from 'react';
import { Link } from 'react-router-dom';
import '../sass/main.scss';

// Définissez le composant ErrorPage
const ErrorPage = () => {
	return (
		<div className='notFound'>			
			<div className="notFound_infos">
				{/* Affichez le titre de l'erreur (404) */}
				<h1 className='notFound_infos_title'>404</h1>
				{/* Affichez le message d'erreur */}
				<p className='notFound_infos_content'>Oups! La page que vous recherchez n'existe pas.</p>
			</div>
			{/* Ajoutez un lien de retour vers la page d'accueil */}
			<Link className='notFound_infos_return' to='/'>Retourner sur la page d'accueil</Link>			
		</div>		
	)
}

// Exportez le composant ErrorPage
export default ErrorPage;
