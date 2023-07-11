//import { useState } from "react"
import style from "./Login.module.css"

const users = require("../../users")
console.log(users);


const handleSubmit = (e)=>{
    e.preventDefault();
}

export default function Login(){
    // const[user, setUser] = useState("");
    // const[password, setPassword] = useState("");

    return(
        <div className={style.container}> 
            <div className={style.login}>
                <p>Login</p>
                <form onSubmit={handleSubmit} className={style.form}>
                    <div>
                        {/* <label>User</label> */}
                        <input type="text" placeholder="user" />
                    </div>
                        <input type="text" placeholder="password" />
                        <div className={style.send}>
                        <input type="submit" value="Send" />
                    </div>
                </form>
            </div>
        </div>
       
    )

}