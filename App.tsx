import React, { useState } from 'react';
import { 
  Music, Terminal, ShieldAlert, Cpu, 
  MessageSquare, Send, Zap, Globe, Github 
} from 'lucide-react';

export default function AcidJazzPortfolio() {
  const [status, setStatus] = useState("");

  // Простая защита от ботов: Honeypot (скрытое поле)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    if (formData.get("website")) { // Если бот заполнил скрытое поле
      console.log("Bot detected");
      return;
    }
    // Здесь будет логика отправки на твой Go-бэкенд
    setStatus("Сообщение отправлено в ритме джаза!");
  };

  return (
    <div className="min-h-screen bg-[#1a0b2e] text-[#e0def4] font-sans selection:bg-[#ff79c6]/30">
      {/* Психоделический фон-градиент */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#bd93f9] blur-[150px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#ff79c6] blur-[150px] rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        
        {/* Header */}
        <header className="mb-20 text-center md:text-left">
          <div className="inline-block p-2 mb-4 bg-[#50fa7b]/10 border border-[#50fa7b]/20 text-[#50fa7b] rounded-lg rotate-[-2deg]">
            <Music className="inline mr-2" size={20} /> srgazh_groove_v1.0
          </div>
          <h1 className="text-6xl font-black text-white mb-4 tracking-tighter">
            Жаров Сергей <br/>
            <span className="text-[#ffb86c]">Алексеевич</span>
          </h1>
          <p className="text-2xl font-medium text-[#bd93f9] italic">
            "Отказоустойчивость в стиле Acid Jazz"
          </p>
        </header>

        {/* Главные компетенции */}
        <section className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="p-8 bg-[#282a36]/50 border-l-4 border-[#ff79c6] rounded-r-xl backdrop-blur-sm">
            <Cpu className="text-[#ff79c6] mb-4" size={32} />
            <h2 className="text-2xl font-bold text-white mb-4">AI & Bots</h2>
            <p className="text-slate-400 leading-relaxed">
              Создаю умных ботов с глубокой интеграцией **AI-агентов**. 
              Автоматизация, которая не просто работает, а "чувствует" контекст.
            </p>
          </div>

          <div className="p-8 bg-[#282a36]/50 border-l-4 border-[#50fa7b] rounded-r-xl backdrop-blur-sm">
            <ShieldAlert className="text-[#50fa7b] mb-4" size={32} />
            <h2 className="text-2xl font-bold text-white mb-4">High Load Security</h2>
            <p className="text-slate-400 leading-relaxed">
              Безопасность при экстремальных нагрузках. Люблю **Debian**, 
              настраиваю системы, которые невозможно уронить.
            </p>
          </div>
        </section>

        {/* Стек (Acid Style) */}
        <section className="mb-20 bg-[#44475a]/20 p-8 rounded-3xl border border-[#6272a4]/30">
          <h3 className="text-xl font-mono text-[#8be9fd] mb-6 flex items-center gap-2">
            <Terminal size={20} /> system_capabilities.sh
          </h3>
          <div className="flex flex-wrap gap-3">
            {["Debian", "Go", "PHP", "React 18", "Caddy", "SQLite3", "JWT", "AI Integration"].map(skill => (
              <span key={skill} className="px-4 py-2 bg-[#6272a4]/20 border border-[#6272a4]/50 rounded-full text-sm font-bold text-[#f1fa8c]">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Форма обратной связи */}
        <section id="contact" className="max-w-xl mx-auto bg-[#282a36] p-8 rounded-2xl shadow-2xl border border-[#ff79c6]/20">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <MessageSquare className="text-[#ff79c6]" /> Drop a Line
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Honeypot field (hidden from users) */}
            <input type="text" name="website" style={{display: 'none'}} tabIndex={-1} autoComplete="off" />
            
            <div>
              <label className="block text-xs font-bold uppercase text-[#6272a4] mb-2">Ваше Имя / Ник</label>
              <input type="text" required className="w-full bg-[#44475a] border-none rounded-lg p-3 text-white focus:ring-2 focus:ring-[#bd93f9]" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-[#6272a4] mb-2">Суть задачи</label>
              <textarea required rows={4} className="w-full bg-[#44475a] border-none rounded-lg p-3 text-white focus:ring-2 focus:ring-[#bd93f9]"></textarea>
            </div>
            <button type="submit" className="w-full py-4 bg-[#ff79c6] hover:bg-[#bd93f9] text-[#282a36] font-black uppercase tracking-widest rounded-lg transition-all flex items-center justify-center gap-2">
              <Send size={18} /> Отправить в эфир
            </button>
            {status && <p className="text-center text-[#50fa7b] font-mono text-sm mt-4">{status}</p>}
          </form>
        </section>

      </main>

      <footer className="py-12 text-center text-[#6272a4] font-mono text-sm">
        &copy; {new Date().getFullYear()} srgazh | ruliit.ru | Powered by Debian
      </footer>
    </div>
  );
}
