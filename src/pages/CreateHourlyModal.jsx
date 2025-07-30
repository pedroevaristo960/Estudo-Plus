import { useState } from 'react';

export default function CreateHourlyModal({
  onClose,
  setSubjectName,
  setTime,
  saveInputs,
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg px-8 py-6 w-full max-w-md relative">
        <button
          className="absolute top-4 right-4 text-red-500 text-2xl font-bold focus:outline-none cursor-pointer"
          onClick={onClose}
          aria-label="Fechar"
        >
          ×
        </button>
        <h2 className="text-xl font-semibold mb-4">Disciplina</h2>
        <input
          type="text"
          placeholder="Por favor, o sumário da aula"
          className="w-full mb-5 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          onChange={(e) => setSubjectName(e.target.value)}
        />
        <h2 className="text-xl font-semibold mb-4">Horário</h2>
        <input
          type="time"
          placeholder="Por favor, o sumário da aula"
          className="w-full mb-6 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          onChange={(e) => setTime(e.target.value)}
        />
        <button
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg py-3 flex items-center justify-center gap-2 transition  cursor-pointer"
          onClick={saveInputs}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <rect
              x="3"
              y="11"
              width="18"
              height="2"
              rx="1"
              fill="currentColor"
            />
            <rect
              x="11"
              y="3"
              width="2"
              height="18"
              rx="1"
              fill="currentColor"
            />
          </svg>
          Criar aula
        </button>
      </div>
    </div>
  );
}
