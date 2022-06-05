import { useEffect } from 'react';

function useFetch(URL, setToDos, limit){
    useEffect(() => {
    fetch(URL)
    .then(response => response.json())
    .then(data => setToDos(limit ? data.slice(0, limit) : data));    
    }, [])
}

export { useFetch };