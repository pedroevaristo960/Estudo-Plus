import React from 'react';

const WEEKDAYS = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
];

function formatDate(date) {
  // Adiciona zero à esquerda para dias e meses menores que 10
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() retorna 0-11
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

function getWeekday(date) {
  return WEEKDAYS[date.getDay()] || 'Dia de semana inválido!';
}

export default function Hourly() {
  const currentDate = new Date();
  const dateFormatted = formatDate(currentDate);
  const weekday = getWeekday(currentDate);

  const hourlies = [
    {
      title: 'Nome da Disciplina',
      hour: 'Lorem ipsum dolor sit amet, molestias.',
    },
    {
      title: 'Nome da Disciplina',
      hour: 'Lorem ipsum dolor sit amet, molestias.',
    },
    {
      title: 'Nome da Disciplina',
      hour: 'Lorem ipsum dolor sit amet, molestias.',
    },
  ];

  return (
    <article className="bg-white p-10 rounded-xl">
      <div className="gap-10 mb-4">
        <h1 className="text-3xl font-bold mb-4">Hoje</h1>
        <p>
          {dateFormatted}, {weekday}
        </p>
      </div>

      <div className="flex row gap-7 justify-center align-middle flex-wrap">
        <section className="w-90 pl-3 pr-3 pt-5 pb-5 bg-[#F3F4F4] rounded-[6px] text-lg">
          <p className="bg-[#F6AE2D] rounded-3xl font-medium p-1 text-center">
            Disciplinas
          </p>

          {hourlies.map((hourly, i) => (
            <div key={i} className="bg-white rounded-[6px] p-3 mt-4">
              <h3 className="font-medium">{hourly.title}</h3>
              <p>{hourly.hour}</p>
            </div>
          ))}

          <div className="bg-white rounded-[6px] p-3 mt-4 cursor-pointer">
            <button>
              <a href="#" className="underline font-medium">
                + Adicionar Horário
              </a>
            </button>
          </div>
        </section>

          <section>
            <div className="w-90 pl-3 pr-3 pt-5 pb-5 bg-[#F3F4F4] rounded-[6px] text-lg">
              <p className="bg-[#F6AE2D] rounded-3xl font-medium p-1 text-center">
                Horário
              </p>
              {hourlies.map((hourly, i) => (
                <div key={i} className="bg-white rounded-[6px] p-3 mt-4">
                  <h3 className="font-medium">{hourly.title}</h3>
                  <p>{hourly.hour}</p>
                </div>
              ))}
            </div>
          </section>
      </div>
    </article>
  );
}
