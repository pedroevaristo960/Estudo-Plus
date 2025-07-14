import { Mic } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="flex items-center justify-between gap-4 w-300 h-100 ">
      <input
        type="text"
        placeholder="Pesquisar"
        className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="text-gray-600 hover:text-blue-600">
        <Mic size={20} />
      </button>
    </div>
  );
};
