import axios from 'axios'
import { useState, useEffect } from 'react';

function customUseFetch(arg) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios.get(arg).then((res) => {
            setData(res.data);
        })
        .catch((err) => {
            setError(err);
        })
        .finally(() => {
            setLoading(false);
        })
    }, [arg])

    const refetch = () => {
         setLoading(true);
        axios.get(arg).then((res) => {
            setData(res.data);
        })
        .catch((err) => {
            setError(err);
        })
        .finally(() => {
            setLoading(false);
        })
    }



  return ([data, loading, error, refetch])
}

export default customUseFetch