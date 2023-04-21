import { Link } from 'react-router-dom'

import UiButtons from '@UI/UiButtons'

import styles from './PeopleNavigation.module.css';

const PeopleNavigation = ({ queryPage, next, previous }) => {

    return (
        <div className={styles.container}>
            <Link to={`/people/?page=${queryPage - 1}`} className={styles.link}>
                <UiButtons text='Previous' disabled={!previous} />
            </Link>
            <Link to={`/people/?page=${queryPage + 1}`} className={styles.link}>
                <UiButtons text='Next' disabled={!next} />
            </Link>
        </div>
    )
}


PeopleNavigation.propTypes = {

}
export default PeopleNavigation;
