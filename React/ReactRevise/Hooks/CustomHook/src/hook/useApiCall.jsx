
import { useState } from 'react'

function useApiCall() {
    const [data, setData] = useState()
    async function callCardApi(URL) {
        const res = await fetch(URL);
        const ans = await res.json()
        setData(ans);
        console.log("page1 api data", ans)
       
    }

    return { callCardApi,data }
}

export default useApiCall;