import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './SearchPageInfo.module.css';

const SearchPageInfo = ({people}) => {
    return (
        <>
            {people.length 
                ?   (
                        <ul className={styles.list__container}>
                            {people.map(({id,img,name}) => 
                                <li key={id} className={styles.list__item}>
                                    <Link to={`/people/${id}`}>
                                        <img src={img} alt={name} className={styles.person__photo}/>
                                        <div className={styles.person__name}>{name}</div>
                                    </Link>
                                </li>
                            )}
                        </ul>
                    )

                :   <h2 className={styles.perosn__comment}>No results</h2>
            }
        </>
    )
    
}



SearchPageInfo.propTypes = {
    people: PropTypes.array
}
export default SearchPageInfo;
