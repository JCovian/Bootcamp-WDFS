import { IMAGE_URL, DUMMY_IMAGE_URL } from "../settings";

export default function Card({movie}) {

    const src = movie.backdrop_path ? IMAGE_URL + movie.backdrop_path : DUMMY_IMAGE_URL;  
    const imgStyle = {width: '18rem'};

    return (
        <div className="card flex-grow-1 m-3 shadow-sm">
            <img src={src} className="card-img-top" alt="Imágen película" style={imgStyle} />
            <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <p className="card-text">{movie.overview}</p>
            <a href="#" class="btn btn-primary">Más Info</a>
        </div>
    </div>
    )
}
