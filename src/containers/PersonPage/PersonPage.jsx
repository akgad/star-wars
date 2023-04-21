import React,{ useEffect, useState,Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import PersonPhoto from '@components/PersonPage/PersonPhoto'
import PersonInfo from '@components/PersonPage/PersonInfo'
import PersonLinkBack from '@components/PersonPage/PersonLinkBack'

import UiLoader from '@UI/UiLoader'

import { getApiResource } from '@utils/network'
import { getPeopleImg } from '@services/getPeopleData'

import { API_PERSON } from '@constants/swapi'

import styles from './PersonPage.module.css';

const PersonFilms = React.lazy(() => import('@components/PersonPage/PersonFilms'))


const PersonPage = () => {

    const [personId, setPersonId] = useState(null)
    const [personInfo, setPersonInfo] = useState(null)
    const [personName, setPersonName] = useState(null)
    const [personPhoto, setPersonPhoto] = useState(null)
    const [personFilms, setPersonFilms] = useState(null)
    const [personFavorite, setPersonFavorite] = useState(false)

    const { id } = useParams()

    const favorite = useSelector(data => data.favoritesReducer)


    useEffect(() => {


        (async () => {
            const data = await getApiResource(`${API_PERSON}/${id}/`)
            
            favorite[id] ? setPersonFavorite(true) : setPersonFavorite(false) 

            if (data) {
                setPersonInfo([
                    { title: 'Height', data: data.height },
                    { title: 'Mass', data: data.mass },
                    { title: 'Hair Color', data: data.hair_color },
                    { title: 'Skin Color', data: data.skin_color },
                    { title: 'Eye Color', data: data.eye_color },
                    { title: 'Birth Year', data: data.birth_year },
                    { title: 'Gender', data: data.gender },
                ])

                setPersonName(data.name)
                setPersonPhoto(getPeopleImg(id))
                setPersonId(id)
                data.films.length && setPersonFilms(data.films)

            }

        })()

    }, [id])

    return (
        <>
            <div><PersonLinkBack /></div>

            <div className={styles.wrapper}>
                <span className={styles.person__name}>{personName}</span>

                <div className={styles.container}>
                    <PersonPhoto
                        personId={personId}
                        personPhoto={personPhoto}
                        personName={personName}
                        personFavorite={personFavorite}
                        setPersonFavorite={setPersonFavorite}
                    />

                    {personInfo && <PersonInfo personInfo={personInfo} />}
                    {personFilms && 
                    <Suspense fallback={<UiLoader/>}>
                        <PersonFilms personFilms={personFilms} />
                    </Suspense>}
                </div>


            </div>
        </>
    )
}



PersonPage.propTypes = {
    // test: PropTypes.string
}
export default PersonPage
