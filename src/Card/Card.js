import { Link } from "react-router-dom"
import style from "./Card.module.css"

//console.log(movies.map(movie=>movie.posterUrl));

export default function Card({title, poster, year, id}){
    return(
        <div className={style.card}>
            <h3>{title}</h3>
            <Link to={`/detail/${id}`}>
                <img src={poster} alt={title} />
            </Link> 
            <h5>Release Date: {year} </h5>
        </div>
    )
}