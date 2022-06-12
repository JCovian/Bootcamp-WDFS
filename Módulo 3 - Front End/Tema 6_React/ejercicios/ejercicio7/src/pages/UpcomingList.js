import { useContext } from "react";
import { GlobalContext } from "../App";
import Card from "../components/Card";

export default function UpcomingList() {
    const { movies } = useContext(GlobalContext);

  return (
    <div className='row'>
        
        {movies.map(movie => <Card movie={movie} key={movie.id}/>)}
    </div>
  )
}
