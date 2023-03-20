import { useState, useEffect } from 'react';

export const useFetch = <T>(url: string) => {
    const [data, setData] = useState<T | null>(null);
    useEffect(() => {
        const asyncCall = async ()=>{

            let response = await fetch(url);
            const responseJSON: T = await response.json();
            setData(responseJSON);
        }
        asyncCall();
    }, [url])    
    return data;
}