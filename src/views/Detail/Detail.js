import style from "./Detail.module.css"
import { useParams } from "react-router-dom"

const movies = require("../../movies")


export default function Detail(){
    const { id } = useParams();
    //console.log(typeof id);
    const movie = movies.find(movie => movie.id === parseInt(id));
    

  // Verificar si la película existe
  if (!movie) {
    return <div>No se encontró la película.</div>;
  }
    
    return(
        <div className={style.container}>
          <div className={style.imageSection}>
            <h3>Title: {movie.title}</h3>
            <h5>id: {movie.id}</h5>
            <img src={movie.posterUrl} alt={movie.title} />
          </div>
          <div className={style.plot}>
            <p><b>Plot: </b></p>
            <p>{movie.plot} </p>
            <ul style={{ listStyleType: 'none', padding: 0 }}><h4>Genres:</h4> 
              {movie.genres.map((genre) => (
              <li key={genre}>📌{genre}</li>
              ))}
            </ul>
          </div>
          <div className={style.items}>
            <span>Actors: </span>
            <p>{movie.actors} </p>
            <span>Director: </span>
            <p>{movie.director} </p>
            <span>Year:</span>
            <p>{movie.year} </p>
            <span>Runtime</span>
            <p>{movie.runtime} </p>
          </div>
        </div>
    )
}