import { Link } from "react-router-dom"

export function Contato(){
    return(
        <div>
            <h1>Página Contato!</h1>
            <h3>Contato: (xx) xxxx-xxxx</h3>
            <br/>

            <Link to="/">Voltar</Link>
        </div>
    )
}