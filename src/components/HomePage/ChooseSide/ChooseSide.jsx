
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEITRAL } from '@context/ThemeProvider';

import cn from 'classnames'

import imgDarkSide from './img/dark-side.jpg'
import imgLightSide from './img/light-side.jpg'
import imgFalcon from './img/falcon.jpg'

import styles from './ChooseSide.module.css';

const ChooseSide = () => {
    const isTheme = useTheme()

    const arr = [
        { theme: THEME_LIGHT,text: 'Light side', img: imgLightSide, classes: styles.item__light },
        { theme: THEME_DARK,text: 'Dark side', img: imgDarkSide, classes: styles.item__dark },
        { theme: THEME_NEITRAL,text: 'Falcon side', img: imgFalcon, classes: styles.item__neitral },
    ]
    
    const ChooseSideItem = ({img,theme,text,classes}) => (
        <div className={cn(styles.item, classes)} onClick={() => isTheme.changeTheme(theme)}>
            <span className={styles.item__header}>{text}</span>
            <img className={styles.item__img} src={img} alt={text} />
        </div>
    )

    return (
        <>
            {/* <ChooseSideItem theme={THEME_LIGHT} text={'Light side'} img={imgLightSide}/>
            <ChooseSideItem theme={THEME_DARK} text={'Dark side'} img={imgDarkSide}/>
            <ChooseSideItem theme={THEME_NEITRAL} text={'Falcon side'} img={imgFalcon}/> */}
            <div className={styles.container}>
                {arr.map(({theme,text,img,classes}) => {
                    return <ChooseSideItem key={text} theme={theme} text={text} img={img} classes={classes}/>
                })}
            </div>
            
        </>
    )
}



ChooseSide.propTypes = {
    // test: PropTypes.string
}
export default ChooseSide;
