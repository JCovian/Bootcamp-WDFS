import { useEffect } from 'react';

function useFetch (URL, setMovies, pages, setPages) {
    useEffect(() => {
      fetch(URL + "&page=" + pages.current)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results);
        if (pages.current !== Number(data.page) || pages.total === undefined) {
          setPages(prevPages => { return { ...prevPages, total: data.total_pages } });
        }
      });
    }, [pages])   
}

export { useFetch };