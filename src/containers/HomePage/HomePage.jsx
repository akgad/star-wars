import { useState,useEffect } from 'react';

import ChooseSide from '@components/HomePage/ChooseSide';



import '../../index.css';
import styles from './HomePage.module.css';

const HomePage = () => {


    return (
        <>
            <h1 className={'header__text'}>HomePage</h1>
            <ChooseSide/>
        </>
    )
}


export default HomePage;
