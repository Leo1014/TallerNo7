import Card from "../Card/Card";
import style from "./Cards.module.css"

const movies = require("../movies")



export default function Cards(){
    return(
        <div className={style.container}>
            <div className={style.cardGrid}>
                {movies.map(movie=>(
                    <Card
                        key = {movie.id}
                        id = {movie.id}
                        title = {movie.title}
                        poster = {movie.posterUrl}
                        year = {movie.year}
                    />
                ))}
            </div>
        </div>
    )
}
                 