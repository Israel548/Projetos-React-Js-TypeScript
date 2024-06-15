import { useState, FormEvent } from 'react'
import './App.css'

interface infoProps{
  nome: string,
  idade: number
}


function App() {
  const [inputNome, setInputNome] = useState("")
  const [inputData, setInputData] = useState("")
  const [result, setResult] = useState<infoProps>()


  function calculoAno(event: FormEvent){
    event.preventDefault();
    let calculo = 2024 - JSON.parse(inputData);
    setResult({
      nome: inputNome,
      idade: calculo
    })
    setInputNome("")
    setInputData("")
  }

  return (
    <div className='container'>
      <h1 className='title'>Descubra sua idade</h1>
      <form action="" onSubmit={calculoAno}>
        <label>Digite seu nome?</label>
        <input 
          type="text" 
          alt='nome'
          placeholder='Digite seu nome'
          className='input'
          required
          value={inputNome}
          onChange={ (e) => setInputNome(e.target.value)}
        />
        <label>Digite o ano que nasceu?</label>
        <input 
          type="text" 
          alt='ano'
          placeholder='Digite o ano do nascimento'
          className='input'
          required
          value={inputData}
          onChange={ (e) => setInputData(e.target.value)}
        />
        <input className='button' type="submit" value="Descubrir idade" />
      </form>

      {result  && 
        <section>
          <h3>{result?.nome} você tem: {result?.idade} anos</h3>
        </section>
      }
      
    </div>
  )
}

export default App
