import { Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function DisciplinaCard({ disciplina, onEditar, onRemover }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/disciplinas/${disciplina.id}`)}
      className="rounded-lg p-4 shadow-md bg-white border-t-4 transition transform hover:scale-[1.02] hover:shadow-lg cursor-pointer relative group"
      style={{ borderTopColor: disciplina.cor }}
    >
      
      <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition">
        <button onClick={(e) => { e.stopPropagation(); onEditar(); }} title="Editar">
          <Pencil size={18} className="text-blue-600" />
        </button>
        <button onClick={(e) => { e.stopPropagation(); onRemover(); }} title="Remover">
          <Trash2 size={18} className="text-red-500" />
        </button>
      </div>

      <h4 className="font-bold text-lg text-[#2F4858]">{disciplina.nome}</h4>
      <p className="text-sm text-gray-600">
        {disciplina.professor && `Prof: ${disciplina.professor}`}<br />
        {disciplina.diasDeAula?.join(", ")} | {disciplina.inicio} - {disciplina.fim}
      </p>
      {disciplina.descricao && (
        <p className="mt-2 text-sm text-gray-500">{disciplina.descricao}</p>
      )}
    </div>
  );
}
