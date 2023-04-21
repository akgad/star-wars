import { Link } from 'react-router-dom';

import favoriteIcon from '@components/Favorite/img/favorite.svg'

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './Favorite.module.css';


const Favorite = () => {

    const favorite = useSelector(data => data.favoritesReducer)
    const [counter,setCounter] = useState(0)


    useEffect(() => {

        const count = Object.keys(favorite).length
        count.toString.length > 2 ? setCounter('...') : setCounter(count)

    })

    return (
        <>
            <div className={styles.container}>
                <Link to="/favorites">
                    <span className={styles.counter}>{counter}</span>
                    <img className={styles.favorite} src={favoriteIcon} alt="Favorites" />
                </Link>
            </div>
        </>
    )
}


export default Favorite;
