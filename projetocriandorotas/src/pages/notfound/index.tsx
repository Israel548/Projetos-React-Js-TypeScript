import { Link } from "react-router-dom"

export function NotFound(){
    return(
        <div>
            <h1>Ops essa página nao exite!!</h1>
            <br/>

            <Link to="/">Acessar página home</Link>
        </div>
    )
}