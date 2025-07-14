import { DocumentsCard } from "./DocumentsCard";
import { EventsCard } from "./EventsCard";
import { Dominio } from "./Dominio";    
export const Aside = () => {
    const events = [
        {
          data: "2023-10-01",
          descricao: "Reunião de equipe",
      },
      {
        data: "2023-10-05",
        descricao: "Entrega de relatório",
      }
      ];
    return (
        <aside className="space-y-6 ">
            {/* Novos documentos */}
            <div>
                <DocumentsCard /></div>
            {/* Próximos eventos */}
            <div>
                <EventsCard eventos={events}/>
            </div>
            {/* Dominio*/}
         <div>
            <Dominio dominio="Escola"/>
         </div>
        </aside>
    )
}