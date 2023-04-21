import cn from 'classnames'

import '../index.css'
import styles from './UiButtons.module.css';

const UiButtons = ({ text, disabled, theme = 'dark', classes }) => {
    return (
        <button className={cn(styles.button, styles[theme], classes)} disabled={disabled}>{text}</button>
    )
}


// UiButtons.propTypes = {
//     test: PropTypes.string
// }

export default UiButtons;
