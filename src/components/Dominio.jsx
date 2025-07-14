import { School } from "lucide-react";

export const Dominio = ({ dominio }) => {
  if (dominio === "Escola") {
    const schoolname = "ITEL";
    const className = "10º Ano - Turma A";

    return (
      <div>
        <h3 className="text-sm font-semibold text-gray-800 flex items-center gap-2">
          <School size={16} /> {dominio}
        </h3>
        <p className="text-sm text-gray-600">{schoolname}</p>
        <a href="#" className="text-blue-600 text-sm hover:underline">
          {className} ↗
        </a>
      </div>
    );
  } else if (dominio === "Universidade") {
    const name = "Universidade X";
    const curso = "Engenharia Informática";

    return (
      <div>
        <h3 className="text-sm font-semibold text-gray-800 flex items-center gap-2">
          <School size={16} /> {dominio}
        </h3>
        <p className="text-sm text-gray-600">{name}</p>
        <a href="#" className="text-blue-600 text-sm hover:underline">
          {curso} ↗
        </a>
      </div>
    );
  }

  return null;
};
