import { useNavigate } from "react-router-dom";

import iconGoBack from './img/back.svg'

import styles from './PersonLinkBack.module.css';

const PersonLinkBack = () => {
    const history = useNavigate()

    const handleGoBack = (e) => {
        e.preventDefault()
        history(-1)
    }

    return (
        <>
            <a
                href="#"
                onClick={handleGoBack}
                className={styles.link}
            >
                <img className={styles.link__img} src={iconGoBack} alt="Go back" />
                <span>Go back</span>
            </a>
        </>
    )
}



PersonLinkBack.propTypes = {
    // test: PropTypes.string
}
export default PersonLinkBack;
