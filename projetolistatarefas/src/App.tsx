import { useState } from "react"

function App(){

  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([
    'Estudar react com typescript',
    'Comprar pao meio dia',
    'Estudar ingles a noite'
  ])

  function handleRegister(){
    if(!input){
      alert("Preencha o nome da sua tarefa")
      return;
    }

    setTasks(tarefas => [...tarefas, input])
    setInput("")
  }

  function handlerExcluir(item: string){
    const removeTask = tasks.filter( task => task !== item)
    setTasks(removeTask)
  }

  return (
    <div>
      <h1>Lista de tarefas</h1>
      <hr/>

      <input
        placeholder="Digite o nome da tarefa..."
        value={input}
        onChange={ (e) => setInput(e.target.value)}
      />
      <button onClick={handleRegister}>Adicionar tarefa</button>
      <hr/>

      {tasks.map( (item, index) =>(
        <section key={item}>
          <span>{item}</span>
          <button onClick={ () => handlerExcluir(item)}>Excluir</button>
        </section>
      ))}
    </div>
  )
}

export default App
