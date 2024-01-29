import React from 'react';
import '../../sass/main.scss';
import { Link } from 'react-router-dom';

export default function Card({id, title, cover}) {

	return (
		<Link to={`/apartment/${id}`} className="gallery_card">
			<img src={cover} alt={title} />
			<h3>{title}</h3>	
		</Link>
	)
}