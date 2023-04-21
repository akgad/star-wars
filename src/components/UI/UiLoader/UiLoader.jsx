import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';


import loaderBlack from './img/loader-black.svg'
import loaderWhite from './img/loader-white.svg'
import loaderBlue from './img/loader-blue.svg'

import cn from 'classnames'
import styles from './UiLoader.module.css';


const UiLoader = ({
        theme='blue',
        isShadow=true,
        classes
    }) => {

    const [iconTheme,setIconTheme] = useState(null)

    useEffect(() => {
        switch(theme) {
            case 'black': setIconTheme(loaderBlack); break;
            case 'white': setIconTheme(loaderWhite); break;
            case 'blue': setIconTheme(loaderBlue); break;
            default: setIconTheme(loaderWhite)
        }
    },[])

    return (
        <img 
            className={cn(styles.loader, isShadow && styles.shadow, classes)}
            src={iconTheme} 
            alt="Loader" 
        />
    )
}


UiLoader.propTypes = {
    theme: PropTypes.string,
    isShadow: PropTypes.bool,
    classes: PropTypes.string,
}

export default UiLoader;
