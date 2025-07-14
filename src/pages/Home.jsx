import {SearchBar} from "../components/SearchBar";
import { Saudação } from "../components/Saudacao";
import { Photo } from "../utils/Photo";
import { Aside } from "../components/Aside";

const Home = () => {
  

  const tarefas = [];
  

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 ">
    <div className="space-y-6">
      {/* Saudação */}
      <div className="flex items-center gap-2">
       <Photo/> <Saudação />
      </div>

      {/* Barra de pesquisa */}
      <div className="bg-gray-100 border rounded-md shadow-sm px-4 py-3">
        <SearchBar />
      </div>

      {/* Pendências + Informações */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
        {/* Pendências */}
        <div className="lg:col-span-2">
          <div className="bg-white border p-4 rounded shadow-sm italic text-gray-600">
            {tarefas.length === 0
              ? "Você não tem pendências."
              : tarefas.map((t, i) => (
                  <p key={i} className="text-sm">{t}</p>
                ))}
          </div>
        </div>

        {/* Lado direito com infos */}
        
      </div>
    </div>
    <div>
      <Aside/>
    </div>

    </div>
  );
};

export default Home;
