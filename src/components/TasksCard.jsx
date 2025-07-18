import { useState } from "react";

export default function TasksCard() {
  const tarefasIniciais = [
    { texto: "Estudar Matemática — exercícios da página 42", concluida: false },
    { texto: "Estudar TLP até não aguentar mais", concluida: false },
    { texto: "Terminar a pagina das disciplinas do Estudo+", concluida: false },
    { texto: "Ler 2 capítulos de Literatura", concluida: false },
    { texto: "Finalizar mini projeto de programação", concluida: false },
  ];

  const [tarefas, setTarefas] = useState(tarefasIniciais);

  const marcarComoConcluida = (index) => {
    const novasTarefas = [...tarefas];
    novasTarefas[index].concluida = !novasTarefas[index].concluida;
    setTarefas(novasTarefas);
  };

  return (
    <div className="bg-white rounded-2xl shadow p-6 w-full">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Tarefas</h2>
      <ul className="space-y-4">
        {tarefas.map((tarefa, i) => (
          <li
            key={i}
            className="flex items-start w-full transition-all duration-300 ease-in-out"
          >
            <input
              type="checkbox"
              style={{ accentColor: "#f26419" }}
              checked={tarefa.concluida}
              onChange={() => marcarComoConcluida(i)}
              className="mt-1 mr-3 w-5 h-5 rounded-full"
              aria-label={`Marcar tarefa "${tarefa.texto}" como concluída`}
            />
            <span
              className={`flex-1 text-gray-700 border rounded-lg p-3 transform transition-all duration-300 ease-in-out ${
                tarefa.concluida
                  ? "line-through text-gray-400 border-gray-300 bg-gray-100 scale-95"
                  : "border-gray-200 scale-100"
              }`}
            >
              {tarefa.texto}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
