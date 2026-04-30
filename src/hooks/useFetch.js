import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    async function getData() {
        setLoading(true)

        try {
            let res = await fetch(url)
            let json = await res.json()
            setData(json)
        } catch (error) {
            setData([])
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getData()
    }, [url])

    return { data, loading }

}
