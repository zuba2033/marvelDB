import { useState, useCallback } from "react";

export const useHttp = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [process, setProcess] = useState('waiting');

    const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json' }) => {

        setLoading(true);
        setProcess('loading');

        try {
            const res = await fetch(url, {method, body, headers});
            if (!res.ok) {
                throw new Error(`Could not fetch ${url}, status: ${res.status}`); 
            }
            const data = await res.json();
            setLoading(false);
            return data;
        } catch(e) {
            setLoading(false);
            setProcess('error');
            setError(e.message);
            throw e;
        }

    }, [])

    const clearError = useCallback(() => {
        setError(null);
        setProcess('waiting');
    }, [])

    return {
        loading,
        error,
        request,
        clearError,
        process,
        setProcess
    }
}