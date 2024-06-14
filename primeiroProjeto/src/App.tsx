
import { useState } from 'react'

interface InfoAlunoProps{
  nome: string;
  idade: string;
}

export default function App(){
  const [input, setInput] = useState("");
  const [idade, setIdade] = useState("");
 
  const [infoAluno, setInfoAluno] = useState<InfoAlunoProps>()

  const [contador, setcontador] = useState(0)
  
  function adicionar(){
    setcontador(valorAtual => valorAtual +1);
  }

  function subtrair(){
    if(contador === 0){
      return;
    }
    setcontador(valorAtual => valorAtual -1);
  }

  function mostrarAluno(){
    
    setInfoAluno(
      {
        nome: input,
        idade: idade,
      }
    )
  }

  return(
    <div>
      <h1>Conhecendo useState</h1>
      
      <input 
        placeholder='Digite o nome'
        value={input}
        onChange={ (e) => setInput(e.target.value)}
      />

      <br/>

      <input 
        placeholder='Digite sua idade'
        value={idade}
        onChange={ (e) => setIdade(e.target.value)}
      />

      <br/>
      
      <button onClick={mostrarAluno}>Mostrar Aluno</button>
      <hr/>
      <h3>Bem Vindo: {infoAluno?.nome}</h3>    
      <h3>Idade: {infoAluno?.idade}</h3>

      <hr/>
      <br/>
      <h1>Contador com userState</h1>

      <button onClick={adicionar}>+</button> {contador} <button onClick={subtrair}>-</button>

    </div>
  )
}
