import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import DisciplinaCard from "../components/DisciplinaCard";
import { Navigate } from "react-router-dom";

export default function Disciplinas() {
  const [disciplinas, setDisciplinas] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [disciplinaEdit, setDisciplinaEdit] = useState(null);

  // Campos do formulário
  const [nome, setNome] = useState("");
  const [cor, setCor] = useState("#33658A");
  const [professor, setProfessor] = useState("");
  const [diasDeAula, setDiasDeAula] = useState([]);
  const [inicio, setInicio] = useState("");
  const [fim, setFim] = useState("");
  const [descricao, setDescricao] = useState("");

  const diasSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

  useEffect(() => {
    const salvas = JSON.parse(localStorage.getItem("disciplinas") || "[]");
    setDisciplinas(salvas);
  }, []);

  const salvarLocal = (lista) => {
    setDisciplinas(lista);
    localStorage.setItem("disciplinas", JSON.stringify(lista));
  };

  const abrirModalNova = () => {
    setDisciplinaEdit(null);
    limparCampos();
    setShowModal(true);
  };

  const abrirModalEditar = (disciplina) => {
    setDisciplinaEdit(disciplina);
    setNome(disciplina.nome);
    setCor(disciplina.cor);
    setProfessor(disciplina.professor || "");
    setDiasDeAula(disciplina.diasDeAula || []);
    setInicio(disciplina.inicio || "");
    setFim(disciplina.fim || "");
    setDescricao(disciplina.descricao || "");
    setShowModal(true);
  };

  const limparCampos = () => {
    setNome("");
    setCor("#33658A");
    setProfessor("");
    setDiasDeAula([]);
    setInicio("");
    setFim("");
    setDescricao("");
  };

  const Salvar = () => {
    if (!nome.trim() || !diasDeAula.length || !inicio || !fim) return alert("Preencha os campos obrigatórios!");

    const nova = {
      id: disciplinaEdit?.id || Date.now(),
      nome,
      cor,
      professor,
      diasDeAula,
      inicio,
      fim,
      descricao,
    };

    const listaAtualizada = disciplinaEdit
      ? disciplinas.map((d) => (d.id === disciplinaEdit.id ? nova : d))
      : [...disciplinas, nova];

    salvarLocal(listaAtualizada);
    setShowModal(false);
    limparCampos();

    // POST ou PATCH /api/disciplinas
  };

  const Remover = (id) => {
    const confirm = window.confirm("Deseja remover esta disciplina?");
    if (!confirm) return;
    const filtradas = disciplinas.filter((d) => d.id !== id);
    salvarLocal(filtradas);

    // DELETE /api/disciplinas/:id
  };

  const toggleDia = (dia) => {
    if (diasDeAula.includes(dia)) {
      setDiasDeAula(diasDeAula.filter((d) => d !== dia));
    } else {
      setDiasDeAula([...diasDeAula, dia]);
    }
  };

  return (
    <section className="p-6 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-[#2F4858]">Minhas Disciplinas</h2>
        <button
          onClick={abrirModalNova}
          className="flex items-center gap-2 px-4 py-2 bg-[#33658A] text-white rounded hover:bg-[#2F4858] transition"
        >
          <Plus size={18} /> Adicionar
        </button>
      </div>

      {disciplinas.length === 0 ? (
        <p className="text-gray-600 text-center">Nenhuma disciplina adicionada ainda.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {disciplinas.map((d) => (
            <DisciplinaCard
              key={d.id}
              disciplina={d}
              onEditar={() => abrirModalEditar(d)}
              onRemover={() => Remover(d.id)}
            />
          ))}
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md w-full max-w-md shadow-md space-y-4">
            <h3 className="text-xl font-semibold text-[#2F4858]">
              {disciplinaEdit ? "Editar Disciplina" : "Nova Disciplina"}
            </h3>

            <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome da disciplina"
              className="w-full p-3 border border-gray-300 rounded" />

            <input value={professor} onChange={(e) => setProfessor(e.target.value)} placeholder="Nome do professor (opcional)"
              className="w-full p-3 border border-gray-300 rounded" />

            <div className="flex flex-wrap gap-2">
              {diasSemana.map((dia) => (
                <button key={dia}
                  onClick={() => toggleDia(dia)}
                  className={`px-3 py-1 rounded border ${diasDeAula.includes(dia) ? 'bg-[#2F4858] text-white' : 'bg-gray-100 text-gray-700'}`}>
                  {dia}
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              <input value={inicio} onChange={(e) => setInicio(e.target.value)} type="time"
                className="flex-1 p-2 border border-gray-300 rounded" />
              <input value={fim} onChange={(e) => setFim(e.target.value)} type="time"
                className="flex-1 p-2 border border-gray-300 rounded" />
            </div>

            <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)}
              placeholder="Notas ou descrição (opcional)"
              className="w-full p-3 border border-gray-300 rounded resize-none" rows={2} />

            <div className="flex justify-between items-center">
              <input type="color" value={cor} onChange={(e) => setCor(e.target.value)} />
              <div className="flex gap-3">
                <button onClick={() => setShowModal(false)} className="text-gray-600 bg-red">Cancelar</button>
                <button onClick={Salvar} className="bg-[#2F4858] text-white px-4 py-2 rounded hover:bg-[#33658A]">
                  {disciplinaEdit ? "Atualizar" : "Adicionar"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
