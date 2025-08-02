import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'

function formatarDataHora(data) {
  const dias = [
    'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira',
    'Quinta-feira', 'Sexta-feira', 'Sábado'
  ];
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = data.getFullYear();
  const diaSemana = dias[data.getDay()];
  const hora = String(data.getHours()).padStart(2, '0');
  const minuto = String(data.getMinutes()).padStart(2, '0');
  return `${dia}/${mes}/${ano}, ${diaSemana}, ${hora}:${minuto}`;
}

// Componente para cada disciplina
const DisciplinaCard = ({ nome, horario, provided, snapshot }) => (
  <div
    ref={provided?.innerRef}
    {...provided?.draggableProps}
    {...provided?.dragHandleProps}
    className={`bg-[#f7f7f7] rounded-lg p-4 mb-3 shadow cursor-grab ${
      snapshot?.isDragging ? 'ring-2 ring-[#F6AE2D]' : ''
    }`}
  >
    <div className="font-bold text-[#33658A]">{nome}</div>
    <div className="text-xs text-gray-600">{horario}</div>
  </div>
);

const disciplinasCatalogo = [
  { id: "1", nome: "Matemática", horario: "Seg, Ter: 9h-10h, 10h-11h" },
  { id: "2", nome: "Física", horario: "Seg, Ter: 11h-12h, 12h-13h" },
  { id: "5", nome: "Química", horario: "Ter: 9h-10h, 10h-11h" },
  { id: "6", nome: "Biologia", horario: "Ter: 11h-12h, 12h-13h" }
];

const initialSchedule = {
  "Segunda-feira": [
    { id: "1", nome: "Matemática", horario: "Seg, Ter: 9h-10h, 10h-11h" },
  ],
  "Terça-feira": [
    { id: "5", nome: "Química", horario: "Ter: 9h-10h, 10h-11h" },
  ]
};

const Schedule = () => {
  const agora = new Date();
  const dataFormatada = formatarDataHora(agora);
  const [schedule, setSchedule] = useState(initialSchedule);

  function onDragEnd(result) {
    const { source, destination, draggableId } = result;
    if (!destination) return;

    // Arrastando do catálogo para um dia
    if (source.droppableId === "Disciplinas" && destination.droppableId !== "Disciplinas") {
      const disciplina = disciplinasCatalogo.find(d => d.id === draggableId);
      // Evita duplicatas no mesmo dia
      if (schedule[destination.droppableId]?.some(d => d.id === disciplina.id)) {
        alert("Esta disciplina já está neste dia!");
        return;
      }
      setSchedule({
        ...schedule,
        [destination.droppableId]: [
          ...(schedule[destination.droppableId] || []),
          disciplina
        ]
      });
      return;
    }

    // Arrastando entre dias
    if (source.droppableId !== "Disciplinas" && destination.droppableId !== "Disciplinas") {
      const sourceItems = Array.from(schedule[source.droppableId]);
      const destItems = Array.from(schedule[destination.droppableId] || []);
      const [removed] = sourceItems.splice(source.index, 1);

      // Evita duplicatas no destino
      if (destItems.some(d => d.id === removed.id)) {
        alert("Esta disciplina já está neste dia!");
        return;
      }

      destItems.splice(destination.index, 0, removed);

      setSchedule({
        ...schedule,
        [source.droppableId]: sourceItems,
        [destination.droppableId]: destItems
      });
    }
  }

  return (
    <div className="min-h-screen">
      <h1 className="text-[#33658A] text-4xl font-bold mb-6">Horário de aulas</h1>
      <div className="bg-white rounded-xl shadow-md p-8 max-w-6xl">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-[#33658A] mb-1">Hoje</h2>
          <p className="text-sm text-gray-500 mb-1">{dataFormatada}</p>
          <p className="text-gray-700">Prepare-se, amanhã terá química e física e dt.</p>
        </div>
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="grid grid-cols-3 gap-4">
            {/* Catálogo de disciplinas */}
            <Droppable droppableId="Disciplinas" isDropDisabled>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="col-span-1 min-h-[120px]"
                >
                  <div className="mb-3">
                    <span className="bg-[#F6AE2D] text-white px-3 py-1 rounded font-semibold text-sm">Disciplinas</span>
                  </div>
                  {disciplinasCatalogo.map((disciplina, i) => (
                    <Draggable key={disciplina.id} draggableId={disciplina.id} index={i}>
                      {(provided, snapshot) => (
                        <DisciplinaCard
                          nome={disciplina.nome}
                          horario={disciplina.horario}
                          provided={provided}
                          snapshot={snapshot}
                        />
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            {/* Colunas dos dias */}
            {Object.keys(schedule).map((key) => (
              <Droppable droppableId={key} key={key}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="col-span-1 min-h-[120px]"
                  >
                    <div className="mb-3">
                      <span className="bg-[#F6AE2D] text-white px-3 py-1 rounded font-semibold text-sm">{key}</span>
                    </div>
                    {(schedule[key] || []).map((disciplina, i) => (
                      <Draggable key={disciplina.id} draggableId={disciplina.id} index={i}>
                        {(provided, snapshot) => (
                          <DisciplinaCard
                            nome={disciplina.nome}
                            horario={disciplina.horario}
                            provided={provided}
                            snapshot={snapshot}
                          />
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            ))}
          </div>
        </DragDropContext>
      </div>
    </div>
  )
}

export default Schedule
