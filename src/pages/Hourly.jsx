import React, { useState } from 'react';
import CreateHourlyModal from './CreateHourlyModal';

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
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
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

  const [show, isShown] = useState(false);

  const [hourlies, setHourlies] = useState([
    { subjectName: 'Math', time: '10:29' },
    { subjectName: 'Math', time: '10:29' },
  ]);
  const [subjectName, setSubjectName] = useState('');
  const [time, setTime] = useState('');

  const showModal = () => {
    isShown(true);
  };

  const closeModal = () => {
    isShown(false);
  };

  const saveInputs = () => {
    // Corrigido: Adiciona ao array, não substitui
    setHourlies([...hourlies, { subjectName, time }]);
    setSubjectName('');
    setTime('');
    isShown(false);
  };

  return (
    <article className="bg-white p-10 rounded-xl opacity-100">
      <div className="gap-10 mb-4">
        <h1 className="text-3xl font-bold mb-4">Hoje</h1>
        <p>
          {dateFormatted}, {weekday}
        </p>
      </div>

      {show && (
        <CreateHourlyModal
          onClose={closeModal}
          setSubjectName={setSubjectName}
          setTime={setTime}
          saveInputs={saveInputs}
          subjectName={subjectName}
          time={time}
        />
      )}

      <div className="flex row gap-7 justify-center align-middle flex-wrap">
        <div>
          <section className="w-90 pl-3 pr-3 pt-5 pb-5 bg-[#F3F4F4] rounded-[6px] text-lg">
            <p className="bg-[#F6AE2D] rounded-3xl font-medium p-1 text-center">
              Disciplinas
            </p>
            <div className="bg-white rounded-[6px] p-3 mt-4 cursor-pointer">
              <button onClick={showModal} type="button">
                <span className="underline font-medium">
                  + Adicionar Horário
                </span>
              </button>
            </div>
          </section>
        </div>

        <div>
          <section className="w-90 pl-3 pr-3 pt-5 pb-5 bg-[#F3F4F4] rounded-[6px] text-lg">
            <p className="bg-[#F6AE2D] rounded-3xl font-medium p-1 text-center">
              Disciplinas
            </p>
            {hourlies.map((hourly, i) => (
              <div key={i} className="bg-white rounded-[6px] p-3 mt-4">
                <h3 className="font-medium">{hourly.subjectName}</h3>
                <p>{hourly.time}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </article>
  );
}
