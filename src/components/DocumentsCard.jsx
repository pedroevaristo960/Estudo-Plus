import { FileText } from "lucide-react";

export const DocumentsCard = () => {
  const documents = [
    { id: 1, title: "Regulamentos internos da escola", date: "2023-10-01" },
    { id: 2, title: "Convocatória para a reunião dos pais", date: "2023-10-05" },
    { id: 3, title: "Trabalho de Matemática", date: "2023-10-10" },
  ];

  return (
    <div className="p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-3">
        <FileText size={18} /> Novos Documentos
      </h2>
      <ul className="space-y-2">
        {documents.map((doc) => (
          <li
            key={doc.id}
            className="flex justify-between items-center p-3 bg-gray-50 rounded-md text-sm "
          >
            <span>{doc.title}</span>
            <span className="text-gray-500">
              {new Date(doc.date).toLocaleDateString("pt-AO")}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
