import { useState,useEffect } from 'react';
import { makeConcurrentRequeat } from '@services/getPeopleData'


import styles from './PersonFilms.module.css';

const PersonFilms = ({ personFilms }) => {

    const [personMovie, setPersonMovie] = useState([])

    useEffect(() => {

        (async () => {
            const res = await makeConcurrentRequeat(personFilms)
            setPersonMovie(res)
        })()
    },[])

    return (
            <div className={styles.wrapper}>
                <ul className={styles.list__container}>
                    {personMovie
                        .sort((a, z) => a.episode_id - z.episode_id)
                        .map(({ title, episode_id }) =>
                            <li className={styles.list__item} key={episode_id}>
                                <span className={styles.item__episide}>Episode {episode_id}</span>
                                <span className={styles.item__colon}> : </span>
                                <span className={styles.item__title}>{title}</span>
                            </li>
                        )
                    }
                </ul>
            </div>
    )
}

// PersonFilms.propTypes = {
//     test: PropTypes.string
// }

export default PersonFilms;