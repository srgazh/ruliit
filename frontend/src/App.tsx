import React, { useState } from 'react';
import { 
  Music, Terminal, ShieldAlert, Cpu, 
  Send, Github, Mail, Server
} from 'lucide-react';

export default function App() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // Защита Honeypot
    if (formData.get("website")) return;

    setStatus("Отправка в ритме джаза...");
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        setStatus("Сообщение успешно доставлено!");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("Ошибка связи с бэкендом.");
      }
    } catch (error) {
      setStatus("Ошибка: проверьте соединение.");
    }
  };

  return (
    <div className="min-h-screen bg-[#1a0b2e] text-[#e0def4] font-sans selection:bg-[#ff79c6]/30 overflow-x-hidden">
      {/* Психоделический фон */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#bd93f9] blur-[150px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#ff79c6] blur-[150px] rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-12">
        
        {/* Header */}
        <header className="mb-24 text-center md:text-left">
          <div className="inline-block p-2 mb-6 bg-[#50fa7b]/10 border border-[#50fa7b]/20 text-[#50fa7b] rounded-lg rotate-[-2deg] font-mono text-sm">
            <Music className="inline mr-2" size={18} /> srgazh_groove_v2.0
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-none">
            ЖАРОВ СЕРГЕЙ <br/>
            <span className="text-[#ffb86c]">АЛЕКСЕЕВИЧ</span>
          </h1>
          <p className="text-2xl md:text-3xl font-medium text-[#bd93f9] italic tracking-tight">
            "Отказоустойчивость, Debian и AI-агенты"
          </p>
        </header>

        {/* Секции компетенций */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          <div className="p-8 bg-[#282a36]/40 border border-[#6272a4]/30 rounded-2xl backdrop-blur-md hover:border-[#ff79c6]/50 transition-all group">
            <Cpu className="text-[#ff79c6] mb-6 group-hover:scale-110 transition-transform" size={40} />
            <h2 className="text-2xl font-bold text-white mb-4">AI & Bots</h2>
            <p className="text-[#94a3b8] text-sm leading-relaxed">Интеграция с ИИ-агентами, создание умных ботов и автоматизация сложных процессов.</p>
          </div>

          <div className="p-8 bg-[#282a36]/40 border border-[#6272a4]/30 rounded-2xl backdrop-blur-md hover:border-[#50fa7b]/50 transition-all group">
            <ShieldAlert className="text-[#50fa7b] mb-6 group-hover:scale-110 transition-transform" size={40} />
            <h2 className="text-2xl font-bold text-white mb-4">Troubleshooting</h2>
            <p className="text-[#94a3b8] text-sm leading-relaxed">Воскрешение упавших сайтов, устранение 500 ошибок и чистка от вирусов.</p>
          </div>

          <div className="p-8 bg-[#282a36]/40 border border-[#6272a4]/30 rounded-2xl backdrop-blur-md hover:border-[#8be9fd]/50 transition-all group">
            <Server className="text-[#8be9fd] mb-6 group-hover:scale-110 transition-transform" size={40} />
            <h2 className="text-2xl font-bold text-white mb-4">DevOps</h2>
            <p className="text-[#94a3b8] text-sm leading-relaxed">Развертывание на Debian, настройка Caddy и обеспечение 100% аптайма при любых нагрузках.</p>
          </div>
        </div>

        {/* Стек технологий */}
        <section className="mb-24 bg-[#44475a]/10 p-10 rounded-[3rem] border border-[#6272a4]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5 rotate-12">
            <Terminal size={120} />
          </div>
          <h3 className="text-xl font-mono text-[#f1fa8c] mb-8 flex items-center gap-3">
            <Terminal size={24} /> stack_config.yaml
          </h3>
          <div className="flex flex-wrap gap-4">
            {["Debian", "Go (Golang)", "React 18", "TypeScript", "Caddy", "SQLite3", "Bash", "PHP", "TailwindCSS"].map(skill => (
              <span key={skill} className="px-5 py-2 bg-[#1a0b2e] border border-[#bd93f9]/30 rounded-xl text-sm font-bold text-[#8be9fd] shadow-lg">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Форма обратной связи */}
        <section className="max-w-2xl mx-auto bg-[#282a36] p-10 rounded-3xl shadow-2xl border-t-4 border-[#ff79c6]">
          <h2 className="text-4xl font-black text-white mb-8">СВЯЗАТЬСЯ</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="text" name="website" className="hidden" tabIndex={-1} />
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase text-[#6272a4] mb-2 tracking-widest">Имя</label>
                <input name="name" type="text" required className="w-full bg-[#1a0b2e] border border-[#44475a] rounded-xl p-4 text-white focus:ring-2 focus:ring-[#ff79c6] outline-none transition-all" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-[#6272a4] mb-2 tracking-widest">Email / TG</label>
                <input name="contact" type="text" required className="w-full bg-[#1a0b2e] border border-[#44475a] rounded-xl p-4 text-white focus:ring-2 focus:ring-[#ff79c6] outline-none transition-all" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-[#6272a4] mb-2 tracking-widest">Описание задачи</label>
              <textarea name="message" required rows={4} className="w-full bg-[#1a0b2e] border border-[#44475a] rounded-xl p-4 text-white focus:ring-2 focus:ring-[#ff79c6] outline-none transition-all"></textarea>
            </div>
            <button type="submit" className="w-full py-5 bg-[#ff79c6] hover:bg-[#bd93f9] text-[#282a36] font-black uppercase tracking-[0.2em] rounded-xl transition-all flex items-center justify-center gap-3 group">
              <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> 
              ОТПРАВИТЬ В ЭФИР
            </button>
            {status && <p className="text-center text-[#50fa7b] font-mono animate-bounce">{status}</p>}
          </form>
        </section>
      </main>

      <footer className="py-20 text-center border-t border-[#6272a4]/10 mt-20">
        <div className="flex justify-center gap-8 mb-6 text-[#6272a4]">
           <a href="https://github.com/srgazh" className="hover:text-[#ff79c6] transition-colors"><Github /></a>
           <a href="mailto:srgazh@ruliit.ru" className="hover:text-[#8be9fd] transition-colors"><Mail /></a>
        </div>
        <p className="font-mono text-sm text-[#6272a4]">
          &copy; 2026 srgazh | ruliit.ru | Administered on Debian
        </p>
      </footer>
    </div>
  );
}
