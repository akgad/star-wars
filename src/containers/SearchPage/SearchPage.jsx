import { useState,useEffect, useCallback } from 'react'
import { debounce } from 'lodash'

import { getApiResource } from '@utils/network'
import { getPeopleId,getPeopleImg } from '@services/getPeopleData'
import { API_SEARCH } from '@constants/swapi'

import SearchPageInfo from '@components/SearchPage/SearchPageInfo'
import UiInput from '@components/UI/UiInput'

import withErrorApi from '@hoc/withErrorApi'



import styles from './SearchPage.module.css';

const SearchPage = ({setErrorApi}) => {

    const [inputValue,setInputValue] = useState('')
    const [people,setPeople] = useState([])

    const getApiResoursePeople = async (person) => {

        const res = await getApiResource(API_SEARCH + person)
        if (res) {
            const peopleList = res.results.map(({name,url}) => {
                const id = getPeopleId(url)
                const img = getPeopleImg(id)

                return {
                    id,
                    img,
                    name
                }
            })
            setErrorApi(false)
            setPeople(peopleList)
        } else {
            setErrorApi(true)
        }

    }

    const debounceGetResource =  useCallback (
            debounce(value => getApiResoursePeople(value),300),
            []
    )

    const handleInputValue = (value) => {
        setInputValue(value)
        debounceGetResource(value)
    }

    useEffect(() => {
        getApiResoursePeople('')
    },[])

    return (
        <>
            <h1 className='header__text'>Search</h1>
            <UiInput
                value={inputValue}
                placeholder='Input a character'
                handleInputValue={handleInputValue}
                classes={styles.search__input}
            />
            
            <SearchPageInfo people={people}/>
        </>
    )
}



SearchPage.propTypes = {
    // test: PropTypes.string
}
export default withErrorApi(SearchPage);
