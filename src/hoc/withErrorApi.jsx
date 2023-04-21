import { useState } from "react"


const withErrorApi = View => {
    // return function(props) {
    return props => {
        const [errorApi, setErrorApi] = useState(false)
        return (
            <>
                {errorApi
                    ? <h1>Error ak!</h1>
                    : <>
                        <View
                            setErrorApi={setErrorApi}
                            {...props} />
                    </>
                }
            </>
        )
    }
}



export default withErrorApi

