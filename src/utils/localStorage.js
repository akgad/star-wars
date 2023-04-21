export const getLocalItems = (key) => {
    const data = localStorage.getItem(key) 

    if(data != null) {
        return JSON.parse(data)
    }

    return {}
}

export const setLocalItems = (key, data) => {
    localStorage.setItem(key,JSON.stringify(data))
}