import { BookOpen, X } from 'lucide-react';
import { useState } from 'react';
export default function Card() {
  const [visible, setVisible] = useState(true);

  function show() {
    if (visible) {
      setVisible(true);
    }

    setVisible(false);
  }
  return (
    <div>
      {visible && (
        <section className="max-w-md mx-auto mt-20 p-8 bg-white rounded-xl shadow-lg text-[#33658A] text-lg">
          <div className="flex justify-end cursor-pointer">
            <X
              className="text-red-500 w-5 h-5 hover:text-red-600 transition-colors duration-300"
              onClick={show}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="idis" className="block mb-2 font-medium">
              Disciplina
            </label>
            <input
              id="idis"
              type="text"
              placeholder="Por favor, insira o nome da disciplina"
              className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#33658A] focus:border-transparent"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="iname" className="block mb-2 font-medium">
              Horário
            </label>
            <input
              id="iname"
              type="time"
              lang="pt-BR"
              placeholder="Por favor, insira o seu nome"
              className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#33658A] focus:border-transparent"
            />
          </div>

          <button className="flex items-center gap-3 p-2 cursor-pointer w-full h-12 bg-[#F26419] text-white rounded-md hover:bg-[#C95417] transition-colors duration-300 font-semibold justify-center">
            <BookOpen className="w-5 h-5" />
            <span>Criar aula</span>
          </button>
        </section>
      )}
    </div>
  );
}
