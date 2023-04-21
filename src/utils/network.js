export const getApiResource = async (url) => {
    
    try {
        const res = await fetch(url)

        if (!res.ok) {
            console.error(res.status)
            return false
        }

        return await res.json()
    } catch (error) {
        console.error('Could not fetch ak:', error)
        return false
    }




}



// (async () => {
    
// })()