export const DicasCard = () => {
  const dicas = [
    "Organize suas tarefas diárias para aumentar a produtividade.",
    "Reserve um tempo para revisar seus objetivos semanais.",
    "Mantenha um equilíbrio entre estudo e lazer.",
    "Use técnicas de memorização para facilitar o aprendizado.",
    "Participe de grupos de estudo para trocar conhecimentos.",
    "Faça pausas regulares para evitar a fadiga mental.",
    "Experimente diferentes métodos de estudo para descobrir o que funciona melhor para você.",
    "Mantenha um ambiente de estudo limpo e organizado.",
    "Use aplicativos de produtividade para gerenciar suas tarefas.",
    "Estabeleça metas diárias e semanais para manter o foco.",
    "Leia livros relacionados à sua área de estudo para ampliar seu conhecimento.",
    "Pratique exercícios físicos regularmente para manter a mente saudável.",
    "Desenvolva uma rotina de sono adequada para melhorar a concentração.",
    "Utilize técnicas de relaxamento, como meditação, para reduzir o estresse.",
    "Faça anotações à mão para melhorar a retenção de informações.",
    "Revise o material estudado no final do dia para reforçar o aprendizado.",
    "Use flashcards para revisar conceitos importantes.",
    "Tente ensinar o que aprendeu a alguém — isso ajuda a fixar o conhecimento.",
    "Estudo+ é muito mais do que uma biblioteca — é o teu assistente de estudos!",
    "📚 Estudar 25 minutos com 5 de pausa aumenta o foco! Tenta o método Pomodoro hoje.",
    "🧠 Ensina alguém algo que aprendeste hoje — ajuda a fixar o conteúdo!",
    "☀️ Começa o dia organizando as tuas tarefas. Clareza mental = produtividade.",
    "🎧 Ouve música instrumental enquanto estudas para evitar distrações com letras.",
    "🔄 Revê a matéria de ontem antes de começar a de hoje. Repetição é chave.",
    "💡 Sublinhar e fazer anotações melhora a retenção em 40%. Experimenta!",
    "📅 Planeia o que vais estudar amanhã ainda hoje à noite. Dorme com foco.",
    "🥗 Come algo leve antes de estudar — o cérebro não funciona bem com fome.",
    "📴 Desliga notificações durante os estudos. Teu futuro agradece.",
    "📖 Começa pelo conteúdo mais difícil. Teu cérebro está mais fresco no início.",
    "📝 Faz perguntas sobre o que aprendes. Questionar = entender de verdade.",
    "🧽 Organiza tua área de estudos. Espaço limpo, mente limpa.",
    "🌳 Faz pausas ao ar livre. O cérebro oxigenado pensa melhor.",
    "🎯 Define um objetivo para cada sessão de estudo. Clareza = direção.",
    "📷 Tira foto dos teus resumos. Estudar fora de casa fica mais fácil.",
    "⏳ Evita estudar mais de 2 horas seguidas. A produtividade despenca.",
    "🗣️ Lê em voz alta — ativa várias partes do cérebro ao mesmo tempo.",
    "✨ Usa cores nos teus resumos. O visual ajuda a lembrar mais rápido.",
    "💤 Dormir bem é mais eficaz do que virar noites. Memória precisa de descanso.",
    "🙏 Ora antes de estudar. Sabedoria vem de Deus também!",
    "🚫 Não compares teu ritmo com o dos outros. Foca na tua jornada.",
    "🔁 Revisa o conteúdo ao fim do dia. Ajuda o cérebro a consolidar.",
    "🖼️ Cria mapas mentais — visualiza conexões entre os temas.",
    "🥤 Bebe água! Cérebro hidratado aprende mais rápido.",
    "📆 Marca as datas de provas no calendário. Antecipação evita stress.",
    "🎥 Revisa com vídeos explicativos para reforçar o entendimento.",
    "🧩 Liga os estudos à vida real. Quanto mais sentido fizer, melhor aprendes.",
    "🚀 Pequenos avanços todos os dias = grandes resultados no futuro.",
    "👥 Estuda em grupo de vez em quando. Ensinar é uma forma poderosa de aprender.",
    "🤗 Celebra tuas pequenas vitórias. Estudar também é vencer!"
  ];

  const index = new Date().getDate() % dicas.length;
  const dica = dicas[index];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full border border-gray-200">
      <h2 className="text-xl font-semibold mb-3 text-gray-800">💡 Dica do Dia</h2>
      <p className="text-gray-700 leading-relaxed text-base">"{dica}"</p>
    </div>
  );
};
