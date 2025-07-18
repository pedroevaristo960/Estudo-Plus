import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
export default function Register() {
  const [username, setUsername] = useState();
  const [keep, setKeep] = useState(false);

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(username);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Erro ao copiar:', err);
    }
  };
  const selects = ['Masculino', 'Femenino', 'Generalizado'];
  const schools = [
    {
      educationLevel: 'Ensino Primário',
      schoolClasses: [
        '1ª Classe',
        '2ª Classe',
        '3ª Classe',
        '4ª Classe',
        '5ª Classe',
        '6ª Classe',
      ],
    },
    {
      educationLevel: 'Ensino Secundário - 1º Ciclo',
      schoolClasses: ['7ª Classe', '8ª Classe', '9ª Classe'],
    },
    {
      educationLevel: 'Ensino Secundário - 2º Ciclo',
      schoolClasses: ['10ª Classe', '11ª Classe', '12ª Classe', '13ª Classe'],
    },
    {
      educationLevel: 'Ensino Superior',
      schoolClasses: [
        '1º Ano Superior',
        '2º Ano Superior',
        '3º Ano Superior',
        '4º Ano Superior',
      ],
    },
  ];

  const generateUsername = (name, full) => {
    setKeep(true);
    setUsername(`${name.toLowerCase()}${full.toLowerCase()}`);
  };
  const generate = () => {
    generateUsername('Pedro', 'Evaristo');
  };

  return (
    <section className="max-w-4xl mx-auto m-20 p-10 bg-white rounded-md text-[#33658A] shadow-md">
      <h1 className="text-5xl font-bold text-center mb-10">ESTUDO+</h1>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="flex-1">
          <label htmlFor="firstName" className="block mb-2 font-semibold">
            Primeiro nome
          </label>
          <input
            type="text"
            id="firstName"
            placeholder="Por favor, insira o seu primeiro nome"
            className="w-full h-14 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#33658A]"
          />
        </div>

        <div className="flex-1">
          <label htmlFor="lastName" className="block mb-2 font-semibold">
            Último nome (opcional)
          </label>
          <input
            type="text"
            id="lastName"
            placeholder="Por favor, insira o seu último nome"
            className="w-full h-14 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#33658A]"
          />
        </div>
      </div>

      
      <div className="mb-8">
        <label htmlFor="username" className="block mb-2 font-semibold">
          Nome de utilizador
        </label>

        <div className="w-full h-12 px-3 py-2 border border-gray-300 rounded-md text-gray-600 flex items-center justify-between">
          {keep && <p className="truncate">{username}</p>}

          {keep && (
            <button
              onClick={handleCopy}
              className="ml-4 text-[#33658A] hover:text-[#2F4858] transition-colors duration-200"
              title="Copiar nome"
            >
              {copied ? (
                <Check size={20} className="text-green-600" />
              ) : (
                <Copy size={20} />
              )}
            </button>
          )}
        </div>

        {/* Feedback */}
        {copied && (
          <p className="text-sm text-green-600 mt-2 transition-opacity duration-300">
            Copiado com sucesso!
          </p>
        )}

        <p className="mt-4">
          <a
            href="#"
            className="underline text-[#2F4858] hover:text-[#33658A]"
            onClick={generate}
          >
            Gerar nome de utilizador
          </a>
        </p>
      </div>

      <div className="mb-8">
        <label htmlFor="gender" className="block mb-2 font-semibold">
          Gênero
        </label>
        <select
          id="gender"
          className="w-full h-12 p-3 border border-gray-300 rounded-md pl-5 focus:outline-none focus:ring-2 focus:ring-[#33658A]"
        >
          <option value="" hidden>
            Por favor, selecione o gênero
          </option>
          {selects.map((select) => (
            <option key={select} value={select}>
              {select}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-8">
        <label htmlFor="classLevel" className="block mb-2 font-semibold">
          Classe
        </label>
        <select
          id="classLevel"
          className="w-full h-12 p-3 border border-gray-300 rounded-md pl-5 focus:outline-none focus:ring-2 focus:ring-[#33658A]"
        >
          <option value="" hidden>
            Por favor, selecione a classe
          </option>
          {schools.map((school) => (
            <optgroup key={school.educationLevel} label={school.educationLevel}>
              {school.schoolClasses.map((classe) => (
                <option key={classe} value={classe}>
                  {classe}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="flex-1">
          <label htmlFor="password" className="block mb-2 font-semibold">
            Senha
          </label>
          <input
            type="password"
            id="password"
            placeholder="Por favor, insira a sua senha"
            className="w-full h-14 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#33658A]"
          />
        </div>

        <div className="flex-1">
          <label htmlFor="confirmPassword" className="block mb-2 font-semibold">
            Confirme a senha
          </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Por favor, confirme a sua senha"
            className="w-full h-14 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#33658A]"
          />
        </div>
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="w-full max-w-xs bg-[#2F4858] text-white p-4 rounded-md hover:bg-[#33658A]
          transition-colors duration-300 font-semibold cursor-pointer"
        >
          Entrar
        </button>
      </div>

      <p className="mt-6 text-center">
        Já tem conta?{' '}
        <a
          href="/login"
          className="underline font-semibold text-[#2F4858] hover:text-[#33658A]"
        >
          Entrar
        </a>
      </p>
    </section>
  );
}
