const TOKEN = 'api_key=639aedfe66e97e69e9980bccc7348b8a';
const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const SPANISH = 'es-ES';

const UPCOMING_URL = `${BASE_URL}upcoming?${TOKEN}&language=${SPANISH}`;
const IMAGE_URL = 'https://image.tmdb.org/t/p/original/';
const DUMMY_IMAGE_URL = 'https://via.placeholder.com/500x281?text=No+Image+Found';

export {
    UPCOMING_URL,
    IMAGE_URL,
    DUMMY_IMAGE_URL
};