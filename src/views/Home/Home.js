import Cards from "../../CardsContainer/Cards"
import style from "./Home.module.css"
import Detail from "../Detail/Detail"

export default function Home(){
    return(
        <div className={style.container}>
            <Cards />
            <Detail />
        </div>
    )
}