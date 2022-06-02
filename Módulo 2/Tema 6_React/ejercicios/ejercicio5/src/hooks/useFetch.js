import {useEffect} from 'react';

export default function useFetch(URL, setToDos){
    useEffect(() => {
    fetch(URL)
    .then(response => response.json())
    .then(data => setToDos(data.slice(0, 20)));    
    }, [])
}