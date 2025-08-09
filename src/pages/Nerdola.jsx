import React, { useEffect, useRef, useState } from 'react';
import { Bot, SendHorizonal } from 'lucide-react';

const demoContent = (variant) => ({
  user: null,
  bot: null,
  suggestions: [
    'Faça um resumo da minha última aula de matemática.',
    'Atualize! Serei um trabalho solicitado, sobre o ambiente e quero que tome 5-pág.',
    'Preciso que envie caras consagradas de estudos para minha próxima prova.',
  ],
  inputPlaceholder: 'Pergunte tudo sobre a sua vida acadêmica...',
});

export default function Nerdola({ variant = 1 }) {
  const { user, bot, inputPlaceholder, suggestions } = demoContent(variant);
  const [value, setValue] = useState('');
  const [messages, setMessages] = useState([]);
  const [sent, isSent] = useState(false);
  const messagesEndRef = useRef(null);

  const getSuggestion = (suggestion) => {
    setValue(suggestion);
  };

  // Corrigido: método sendMessage agora adiciona a mensagem ao array de messages corretamente
  const sendMessage = () => {
    if (value && value.trim() !== '') {
      isSent(true);
      setMessages((prev) => [...prev, { sender: 'user', text: value }]);
      setValue('');
    }
  };

  // Scroll automático para o fim após nova mensagem
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center font-inter">
      <div className="flex flex-col items-center w-full max-w-3xl mx-auto pb-40">
        {!sent && (
          <div className="flex flex-col items-center gap-2 mt-6 mb-7 select-none">
            <div className="flex items-center justify-center w-16 h-16 bg-[#ececf0] rounded-full shadow-sm">
              <Bot className="text-[#28293e] w-9 h-9" />
            </div>
            <div className="text-2xl font-bold text-[#28293e] opacity-80 mt-2">
              Em que posso ajudar?
            </div>
          </div>
        )}
        {!sent && (
          <div className="w-full max-w-2xl flex flex-col gap-4 mx-auto">
            {user && (
              <div className="flex flex-row items-end gap-4">
                <div className="bg-transparent text-[#28293e] font-medium text-sm border-none mb-1 ml-2">
                  <span className="text-xs text-[#868ca7] font-normal tracking-wide">
                    ME
                  </span>
                  <br />
                  {user}
                </div>
              </div>
            )}
            {bot && (
              <div className="flex flex-row items-end gap-4">
                <div className="bg-white/75 rounded-xl px-6 py-4 text-sm text-[#28293e] font-normal shadow-[0_2px_14px_0_rgba(67,78,99,0.06)] max-w-lg mb-1">
                  <span className="text-xs text-[#868ca7] font-normal tracking-wide">
                    OUR AI
                  </span>
                  <br />
                  {bot}
                </div>
              </div>
            )}
            {suggestions && (
              <div className="flex flex-col items-start mb-5 ml-2 w-full max-w-2xl">
                <div className="text-xs text-[#868ca7] mb-2">
                  Sugestões de perguntas:
                </div>
                <div className="flex flex-row gap-3 flex-wrap">
                  {suggestions.map((s, idx) => (
                    <div
                      key={idx}
                      className="bg-white/85 rounded-lg px-4 py-2 text-sm text-[#28293e] shadow-[0_2px_10px_0_rgba(67,78,99,0.05)] font-normal mb-1 cursor-pointer select-none"
                      onClick={() => getSuggestion(s)}
                    >
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
        {messages.length > 0 && (
          <div className="w-full max-w-2xl flex flex-col gap-3 mx-auto mt-2">
            {messages.map((msg, idx) =>
              msg.sender === 'user' ? (
                <div key={idx} className="flex flex-row items-start">
                  <div>
                    <div className="bg-white rounded-md px-4 py-2 shadow max-w-xs text-sm mb-1">
                      <span className="block text-[11px] text-[#868ca7] font-medium mb-1">
                        ME
                      </span>
                      <span className="whitespace-pre-line text-[#28293e]">
                        {msg.text}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div key={idx} className="flex flex-row items-start">
                  <div>
                    <div className="bg-white/80 rounded-md px-4 py-2 shadow max-w-xs text-sm mb-1">
                      <span className="block text-[11px] text-[#868ca7] font-medium mb-1">
                        NERDOLA
                      </span>
                      <span className="whitespace-pre-line text-[#28293e]">
                        {msg.text}
                      </span>
                    </div>
                  </div>
                </div>
              )
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
        <div className="h-28"></div>
      </div>
      <form
        className="fixed bottom-10 flex justify-center px-4 w-125 z-50"
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}
      >
        <div className="flex items-center max-w-2xl bg-[#EDF1FF] rounded-2xl w-full shadow-[0_2px_6px_0_rgba(67,78,99,0.07)] px-5 py-3 border">
          <textarea
            className="flex-1 border-none outline-none bg-transparent text-base text-black font-inter transition-all duration-200 focus:bg-[#EDF1FF] resize-none leading-relaxed break-words overflow-hidden min-h-[60px] max-h-[300px] py-2"
            placeholder={inputPlaceholder}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
          />
          <button
            type="submit"
            className="border-none bg-none cursor-pointer pl-3 outline-none flex items-center text-[#456288] text-2xl"
            tabIndex={-1}
          >
            <SendHorizonal size={24} />
          </button>
        </div>
      </form>
      <div className=" text-xs text-[#456288] py-2 fixed bottom-0 left-0 right-0 text-center bg-white/80 z-40 border-t border-[#e2e8f0]">
        <p>O NERDOLA pode conter erros. Verifique informações importantes.</p>
      </div>
    </div>
  );
}
