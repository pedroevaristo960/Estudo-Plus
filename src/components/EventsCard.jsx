import { Calendar } from "lucide-react";

export const EventsCard = ({ eventos }) => {
  return (
    <div className="p-6  rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Calendar size={18} /> Próximos Eventos
      </h3>
      <ul className="space-y-3 text-sm">
        {eventos.map((evento, i) => (
          <li key={i} className="bg-gray-50 p-3 rounded-md">
            <p className="text-gray-500">
              {evento.data
                ? new Date(evento.data).toLocaleDateString("pt-AO")
                : "Sem Data"}
            </p>
            <p className="text-gray-800">
              {evento.descricao || "Sem Descrição"}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
