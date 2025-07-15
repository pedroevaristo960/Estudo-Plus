import { Mic } from "lucide-react";
import { useState } from "react";

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [history, setHistory] = useState([]);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      setHistory([searchTerm, ...history.slice(0, 4)]); // mantém até 5 itens
      // Aqui vai se adicionar lógica de busca real futuramente
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center overflow-hidden">
        <input
          type="text"
          value={searchTerm}
          placeholder="Pesquisar..."
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow text-sm outline-none placeholder-gray-400 color-gray-400 px-2 text-xl"
        />
        <button
          className="px-3 text-gray-600 hover:text-blue-600"
          onClick={() => {
            handleSearch();
            // lógica futura de voz
          }}
        >
          <Mic size={20} />
        </button>
      </div>

      {/* Histórico (simples) */}
      {history.length > 0 && (
        <div className="mt-2 border-t pt-2">
          <p className="text-xs text-gray-500 mb-1">Pesquisas recentes:</p>
          <ul className="space-y-1">
            {history.map((item, i) => (
              <li
                key={i}
                className="text-sm text-blue-700 cursor-pointer hover:underline"
                onClick={() => setSearchTerm(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
