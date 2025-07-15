import { SearchBar } from "../components/SearchBar";
import  Saudação  from "../components/Saudacao";
import { Photo } from "../utils/Photo";
import { Aside } from "../components/Aside";
import { Search } from "lucide-react";

const Home = () => {
  const tarefas = [];

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6">
      {/* Coluna principal */}
      <section className="space-y-6 flex flex-col lg:flex-1 w-full max-w-4xl mx-auto">
        {/* Saudação */}
        <header className="flex items-center justify-center gap-3">
          <Photo className={`w-10 h-10 shrink-0`}/>
          <Saudação username="Erasmo Veloso"/>
        </header>
  
        <div className="rounded-lg overflow-hidden border border-gray-300 bg-gray-100">
  {/* Barra de Pesquisa */}
  <div className="flex items-center gap-2 p-4 bg-gray-200">
    <Search className="text-gray-600" size={20} />
    <SearchBar />
  </div>
  <hr className="border-t border-gray-300" />
  
  <div className="p-4 bg-gray-100 text-sm text-gray-700">
    <div className="list-disc pl-5 flex gap-7">
      <span>Meu Perfil</span>
      <span>Disciplinas</span>
    </div>
  </div>
</div>

        {/* Tarefas Pendentes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
          <div className="lg:col-span-2 mt-5">
            <div className="border-b p-4 rounded italic text-gray-600">
              {tarefas.length === 0 ? (
                "Você não tem pendências."
              ) : (
                tarefas.map((t, i) => (
                  <p key={i} className="text-sm">
                    {t}
                  </p>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Aside lateral */}
      <aside className="w-full lg:max-w-sm">
        <Aside />
      </aside>
    </div>
  );
};

export default Home;
