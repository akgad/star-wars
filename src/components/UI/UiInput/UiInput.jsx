import PropTypes from 'prop-types';
import cn from 'classnames'

import iconCancel from './img/cancel.svg'

import '../index.css'
import styles from './UiInput.module.css';

const UiInput = ({value,handleInputValue,placeholder,classes}) => (
        <div className={cn(styles.container, classes)}>
            
            <input 
                type="text" 
                value={value} 
                onChange={(e) => handleInputValue(e.target.value)}
                placeholder={placeholder}
                className={styles.input} 
            />

                <img 
                    onClick={() => value && handleInputValue('')}
                    src={iconCancel}
                    alt="Clear"
                    className={cn(styles.clear, !value && styles.clear_disabled)}
            />

        </div>
)

UiInput.propTypes = {
    value: PropTypes.string,
    handleInputChange: PropTypes.func,
    placeholder: PropTypes.string,
    classes: PropTypes.string,
}

export default UiInput;
