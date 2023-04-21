import { useEffect, useState } from 'react'
import PropTypes from 'prop-types';

import withErrorApi from '@hoc/withErrorApi'

import PeopleList from "@components/PeoplePage/PeopleList"
import PeopleNavigation from "@components/PeoplePage/PeopleNavigation"

import { getApiResource } from '@utils/network'
import { getPeopleId, getPeopleImg } from '@services/getPeopleData'
import { useQueryParms } from "@hooks/useQueryParms"

import { API_PEOPLE } from '@constants/swapi'

// import styles from './PeoplePage.module.css';



const PeoplePage = ({ setErrorApi }) => {

    const [people, setPeople] = useState(null)
    const [next, setNext] = useState(null)
    const [previous, setPrevious] = useState(null)

    const query = useQueryParms()
    const queryPage = Number(query.get('page'))

    const getResource = async (url) => {
        const res = await getApiResource(url)

        if (res) {

            const peopleList = res.results.map(({ name, url }) => {
                const id = getPeopleId(url)
                const img = getPeopleImg(id)

                return {
                    name, id, img
                }
            })

            setErrorApi(false)
            setPeople(peopleList)
            setPrevious(res.previous)
            setNext(res.next)
        } else {
            setErrorApi(true)
        }
    }

    useEffect(() => {
        getResource(API_PEOPLE + queryPage)
    }, [queryPage])



    return (
        <>
            <PeopleNavigation queryPage={queryPage} next={next} previous={previous} />
            {people && <PeopleList people={people} />}

            
        </>
    )
}

PeoplePage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(PeoplePage);
