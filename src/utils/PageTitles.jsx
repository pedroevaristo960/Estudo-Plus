export const PageTitles = {
  "/": "Visão Geral",
  "/horario": "Horário de aulas",
  "/biblioteca": "Biblioteca",
  "/aula": "Aulas",
    "/disciplinas": "Disciplinas",
    "/tarefas": "Tarefas",
    "/notas": "Notas e Anotações",
    "/provas": "Provas",
    "/nerdola": "Nerdola - Assistente Virtual"
};
export const getPageTitle = (path) => {
  return PageTitles[path] || "Estudo+";
};