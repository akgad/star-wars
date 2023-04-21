// import styles from './FavoritesPerson.module.css';
import { useSelector } from "react-redux";
import PeopleList from "@components/PeoplePage/PeopleList"
import { useState } from "react";
import { useEffect } from "react";

import styles from './FavoritesPerson.module.css';


const FavoritesPerson = () => {

    const [people,setPeople] =  useState([])

    const data = useSelector(data => data.favoritesReducer)

    useEffect(() => {
        const arr = Object.entries(data)

        const res = arr.map((item) => {
            return {
                id: item[0],
                ...item[1]
            }
        })

        setPeople(res)
    },[])
    

    return (
        <>
            <h1 className="header__text">FavoritesPerson</h1>
            {people.length ? <PeopleList people={people}/> : <p className={styles.comment}>No data</p>}
        </>
    )
}

export default FavoritesPerson;
