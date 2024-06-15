import { useState } from 'react'
import './App.css'

import logoimg from './assets/logo.png'

function App() {
  const [textoFrase, setTextoFrase] = useState("")
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)

  const allfrases = [
    {
      id: 1,
      nome: "Motivação",
      frases: [
        "A cada passo que damos, estamos construindo o futuro.",
        "Não desista, porque o sucesso está apenas no outro lado da falha.",
        "Acredite em si mesmo e você poderá fazer qualquer coisa.",
        "O sucesso não é final, o fracasso não é fatal: é o tentar que conta.",
        "A vida é uma jornada, não um destino. Aproveite cada momento.",
        "O mais importante é começar. O resto virá com o tempo.",
        "A cada novo dia, renove sua determinação e sua fé em si mesmo.",
        "Não permita que o medo de ser vulnerável impeça você de ser incrível.",
        "A força da vontade pode fazer maravilhas. Mantenha-se forte.",
        "Você tem mais poder do que imagina. Use-o para criar seu próprio destino."
      ]
    },
    {
      id: 2,
      nome: "Bom dia",
      frases: [
        "Que o sol do seu sorriso ilumine o caminho do seu dia.",
        "Bom dia! Que cada momento seja uma nova oportunidade de sucesso.",
        "Que a alegria do amanhecer seja a luz que guia seus passos.",
        "Bom dia! Que a força da sua vontade seja maior do que qualquer obstáculo.",
        "Que o novo dia traga novas possibilidades e novos sonhos para realizar.",
        "Bom dia! Que cada respiração seja uma nova chance de viver plenamente.",
        "Que o calor do sol aqueça seu coração e sua alma.",
        "Bom dia! Que a beleza da vida seja revelada em cada momento.",
        "Que a esperança seja a chama que nunca se apaga em seu coração.",
        "Bom dia! Que cada novo dia seja uma página em branco para escrever sua história."
      ]
    }
  ]

function handleSwithCategory(index: number){
  setCategoriaSelecionada(index)
}

function gerarFrases(){
  let numeroAleatorio = Math.floor(Math.random() * allfrases[categoriaSelecionada].frases.length)
  setTextoFrase(`" ${allfrases[categoriaSelecionada].frases[numeroAleatorio]} "`)

}

  return (
    <div className='container'>
      <img
        alt='Logo frases'
        src={logoimg}
        className='logo'
      />
      <h2 className='title'>Categorias</h2>
      <section className='category-area'>
        {allfrases.map( (item, index) => (
          <button 
            key={item.id} 
            className='category-button'
            style={{
              borderWidth: item.nome === allfrases[categoriaSelecionada].nome ? 2 : 0,
              borderColor: "#1fa4db"
            }}
            onClick={() => handleSwithCategory(index)}
            >  
              {item.nome}
          </button>
        ))}
      </section>

      <button className='button-frase' onClick={gerarFrases}>Gerar frase</button>
      
      {textoFrase !== '' &&
          <p className='textoFrase'>
            {textoFrase}
          </p>
      }

    </div>
     
  )
}

export default App
