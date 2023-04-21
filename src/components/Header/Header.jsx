import { useEffect, useState } from 'react'; 
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEITRAL } from '@context/ThemeProvider';

import { NavLink } from 'react-router-dom'

import Favorite from '@components/Favorite'

import imgDroid from './img/droid.svg';
import imgLightsaber from './img/lightsaber.svg';
import imgSpaceStation from './img/space-station.svg';

import styles from './Header.module.css';


const Header = () => {

    const isTheme = useTheme()

    const [icon,setIcon] = useState(null)

    useEffect(() => {

        switch (isTheme.theme) {
            case THEME_NEITRAL: setIcon(imgDroid); break;
            case THEME_LIGHT: setIcon(imgLightsaber); break;
            case THEME_DARK: setIcon(imgSpaceStation); break;
        
            default: setIcon(imgSpaceStation); break;
        }

    },[isTheme.theme])

    return (
        <div className={styles.container}>

            <img className={styles.logo} src={icon} alt="Star Wars" />

            <ul className={styles.list__container}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/people?page=1" exact='false'>People</NavLink></li>
                <li><NavLink to="/not-found">Not Found</NavLink></li>
                <li><NavLink to="/search">Search</NavLink></li>
            </ul>

            <Favorite />
        </div>
    )
}


export default Header;
