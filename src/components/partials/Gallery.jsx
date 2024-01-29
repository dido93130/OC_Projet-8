import React, { useState, useEffect } from 'react';
import Card from '../partials/card';
import data from "../../data/logements.json";
import '../../sass/main.scss';


const Gallery = () => {

   const [apartment, setApartment] = useState([]);

  useEffect(() => {
    setApartment(data);
  }, []);

  return (
    <main className='home_gallery'>
      {apartment.map(apartment => (
        <Card
          key={apartment.id}
          id={apartment.id}
          title={apartment.title}
          cover={apartment.cover}
        />
      ))}
    </main>
  );
}

export default Gallery;