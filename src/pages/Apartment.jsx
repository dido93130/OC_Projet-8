// Importez les hooks React nécessaires pour la gestion de l'état, des effets, des paramètres d'URL et de la navigation
import '../sass/main.scss';
import { useEffect, useState } from "react"; // useEffect et useState pour gérer l'état et les effets
import { useParams, useNavigate } from "react-router-dom"; // useParams pour extraire les paramètres d'URL, useNavigate pour la navigation
import data from "../data/logements.json"; // Importez le fichier de données logements.json
import Slider from "../components/partials/Caroussel"; // Importez le composant Slider pour afficher les images
import Collapse from "../components/partials/collapse"; // Importez le composant Collapse pour les sections repliables
import greyStar from "../assets/grey_star.png"; // Importez l'icône d'étoile grise
import redStar from "../assets/red_star.png"; // Importez l'icône d'étoile rouge

const Apartment = () => {
  const [imageSlider, setImageSlider] = useState([]); // State pour stocker les images de l'appartement
  const { id: idApartment } = useParams(); // Utilisez le hook useParams pour obtenir l'ID de l'appartement depuis l'URL
  const navigate = useNavigate(); // Utilisez le hook useNavigate pour la navigation

  // Trouvez l'appartement correspondant à l'ID fourni dans l'URL
  const dataCurrentApartment = data.find((item) => item.id === idApartment);

  useEffect(() => {
    // Si l'appartement avec l'ID spécifié n'est pas trouvé, redirigez vers la page d'erreur
    if (!dataCurrentApartment) {
      navigate('/error'); // Utilisez useNavigate pour la navigation
    } else {
      setImageSlider(dataCurrentApartment.pictures);
    }
  }, [idApartment, dataCurrentApartment, navigate]);

  // Extraire les données nécessaires de l'appartement actuel
  const name = dataCurrentApartment?.host?.name?.split(" ") || [];
  const rating = dataCurrentApartment?.rating || 0;
  const description = dataCurrentApartment?.description || "";
  const equipments = dataCurrentApartment?.equipments || [];

  // Rendu de la page d'appartement
  return (
    <>
      {/* Composant Slider pour afficher les images de l'appartement */}
      <Slider imageSlider={imageSlider} />
      {/* Section principale de la page d'appartement */}
      <main className="apartment">
        {/* Contenu de l'appartement */}
        <div className="apartment_content">
          <div className="apartment_content_infos">
            {/* Titre, emplacement et balises associées à l'appartement */}
            <h1>{dataCurrentApartment?.title}</h1>
            <p>{dataCurrentApartment?.location}</p>
            <div>
              {dataCurrentApartment?.tags.map((tag, index) => (
                <button key={index}>{tag}</button>
              ))}
            </div>
          </div>
          {/* Hôte de l'appartement avec nom et étoiles de notation */}
          <div className="apartment_content_host">
            <div>
              <div className="apartment_content_host_name">
                <span>{name[0]}</span>
                <span>{name[1]}</span>
              </div>
              <img src={dataCurrentApartment?.host?.picture} alt="host of this apartment" />
            </div>
            {/* Étoiles de notation basées sur la note de l'appartement */}
            <div className="apartment_content_host_stars">
              {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;
                return <img key={index} src={ratingValue <= rating ? redStar : greyStar} alt="star" />;
              })}
            </div>
          </div>
        </div>
        {/* Section pour la description et les équipements de l'appartement */}
        <div className="apartment_collapse">
          <div className="apartment_collapse_item">
            {/* Composant Collapse pour la description de l'appartement */}
            <Collapse title={'Description'} content={description} />
          </div>
          <div className="apartment_collapse_item">
            {/* Composant Collapse pour les équipements de l'appartement */}
            <Collapse title={'Équipements'} content={equipments} />
          </div>
        </div>
      </main>
    </>
  );
};

// Exportation du composant principal (Apartment)
export default Apartment;
