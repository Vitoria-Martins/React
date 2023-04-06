//REACT HOOKS

import React, { useState, useEffect, useMemo, useCallback } from "react";

function App() {
  //[parametros] ([é o valor padrao])
  const [tarefas, setTarefas] = useState([
    "pagar conta de luz",
    "Estudar react hooks",
  ]);

  const [input, setInput] = useState("");

  //qnd 2-fica vazio automatic realiza a 1-funcao
  useEffect(() => {
    const tarefasStorage = localStorage.getItem("tarefas");

    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage));
    }
  }, []);

  // 1-funcao, 2-state que ele monitora
  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);
  //sempre q a 2-tarefa for alterado vai chamar a 1-funcao

  // 1- retorna a funcao 2-[segundo parametro e array recebe todos os hoocks ultilizados]
  const handleAdd = useCallback(() => {
    setTarefas([...tarefas, input]);
    setInput("");
  }, [input, tarefas]);

  const totalTarefas = useMemo(() => tarefas.length, [tarefas]);

  // nome da state, nome que vai ser alterado = ('valor padrao')
  const [nome, setNome] = useState("Vitoria");

  //[1-onde tem o nome da tarefa, 2- onde vai ser chamado]

  return (
    <div>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa}>{tarefa} </li>
        ))}
      </ul>
      <br />
      <strong> Voce tem {totalTarefas} tarefas!</strong> <br />
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="button"
        onClick={handleAdd}>
        Adicionar
      </button>
      <h1>{nome}</h1>
    </div> //h1 chama a state
  );
}

export default App;
