import { useEffect, useState } from "react";
import '../../sass/main.scss';
import { useLocation } from "react-router-dom"; // Importez useLocation depuis react-router-dom

const Banner = () => {
    const [aboutPage, setAboutPage] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/about') {
            setAboutPage(true);
        }
    }, [location.pathname]); // Ajoutez location.pathname comme dépendance à useEffect

    return (
        <section className={aboutPage ? 'banner_about' : 'banner'}>
            {!aboutPage && <p>Chez vous, partout et ailleurs</p>}
        </section>
    )
}

export default Banner;