import styles from './PersonPhoto.module.css';

import { useDispatch } from 'react-redux';
import { setPersonToFavorite,removePersonFromFavorite } from '@store/actions/favoritesActions'

import favoriteFill from './img/favorite-fill.svg' 
import favorite from './img/favorite.svg' 

const PersonPhoto = ({ personId,personPhoto, personName,personFavorite,setPersonFavorite }) => {

    const dispatch = useDispatch()

    const dispactchFavoritePerson = () => {
        if(personFavorite) {
            dispatch(removePersonFromFavorite(personId))
            setPersonFavorite(false)
        } else {
            dispatch(setPersonToFavorite({
                [personId]: {
                    name: personName,
                    img: personPhoto
                },
            }))
            setPersonFavorite(true)
        }
    }

    return (
        <>

            <div className={styles.container}>
                <img className={styles.photo} src={personPhoto} alt={personName} />
                <img className={styles.favotite} onClick={dispactchFavoritePerson} src={personFavorite ? favoriteFill : favorite} alt="" />
            </div>

        </>
    )
}



PersonPhoto.propTypes = {
    // test: PropTypes.string
}
export default PersonPhoto;
