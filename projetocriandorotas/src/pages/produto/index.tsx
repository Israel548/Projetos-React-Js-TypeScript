import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

export function Produto(){
    const { id } = useParams();
    
    return(
        <div>
            <h1>Página Produto! {id}</h1>
            <br/>

            <Link to="/">Voltar</Link>
        </div>
    )
}