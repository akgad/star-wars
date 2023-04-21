import { useLocation } from "react-router-dom"

export const useQueryParms = () => {
    return new URLSearchParams(useLocation().search)
}
