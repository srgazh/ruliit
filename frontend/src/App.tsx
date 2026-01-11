import { useState } from 'react';
import {
  Terminal, ShieldAlert,
  Mail, Globe, CreditCard, Box, ShoppingCart, Zap
} from 'lucide-react';

export default function App() {
  const [status, setStatus] = useState("");

  const competencies = [
    {
      title: "Modern Frontend",
      subtitle: "The React Stack",
      icon: <Zap className="text-[#ff79c6]" size={32} />,
      desc: "Профессиональная разработка на React 18 и TypeScript. Создание сложных SPA/PWA, работа со стейт-менеджерами, хуками и оптимизация рендеринга. Использование TailwindCSS для чистой и быстрой верстки.",
      color: "border-[#ff79c6]/30 hover:border-[#ff79c6]/60"
    },
    {
      title: "Fintech & Payments",
      subtitle: "Secure Transactions",
      icon: <CreditCard className="text-[#50fa7b]" size={32} />,
      desc: "Интеграция ЮKassa, Stripe, PayPal. Настройка платежных шлюзов «под ключ» с полной безопасностью транзакций.",
      color: "border-[#50fa7b]/30 hover:border-[#50fa7b]/60"
    },
    {
      title: "Fullstack & DB Architect",
      subtitle: "High-load Systems",
      icon: <DatabaseIcon className="text-[#8be9fd]" />,
      desc: "Мощная связка бэкенда на Go (Golang) или Laravel с базами данных PostgreSQL и MySQL. Оптимизация High-load систем.",
      color: "border-[#8be9fd]/30 hover:border-[#8be9fd]/60"
    },
    {
      title: "Containerization",
      subtitle: "DevOps & Orchestration",
      icon: <Box className="text-[#bd93f9]" size={32} />,
      desc: "Управление инфраструктурой через Docker и Podman. Настройка систем оркестрации и деплой на Debian/Windows Server с обеспечением 100% аптайма.",
      color: "border-[#bd93f9]/30 hover:border-[#bd93f9]/60"
    },
    {
      title: "E-commerce Expert",
      subtitle: "Product Logic",
      icon: <ShoppingCart className="text-[#f1fa8c]" size={32} />,
      desc: "Работа с OpenCart, PrestaShop, Bitrix. Интеграция с 1С, управление огромными товарными каталогами и продуктовой логикой.",
      color: "border-[#f1fa8c]/30 hover:border-[#f1fa8c]/60"
    },
    {
      title: "Troubleshooting",
      subtitle: "Security & AI",
      icon: <ShieldAlert className="text-[#ffb86c]" size={32} />,
      desc: "Воскрешение сайтов после взломов, удаление вирусов, исправление 500-х ошибок и внедрение ИИ-агентов.",
      color: "border-[#ffb86c]/30 hover:border-[#ffb86c]/60"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f071a] text-[#e0def4] font-sans selection:bg-[#ff79c6]/30 overflow-x-hidden">
      {/* Психоделический фон */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#bd93f9] blur-[180px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#ff79c6] blur-[180px] rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-[#50fa7b] blur-[150px] rounded-full opacity-30 animate-bounce" style={{ animationDuration: '8s' }}></div>
      </div>

      {/* Зернистая текстура */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-16">

        {/* Header / Hero */}
        <header className="mb-32">
          <div className="inline-flex items-center gap-3 p-3 mb-8 bg-[#50fa7b]/10 border border-[#50fa7b]/20 text-[#50fa7b] rounded-2xl rotate-[-1deg] font-mono text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(80,250,123,0.1)]">
            <Terminal size={16} /> root@srgazh:~
          </div>

          <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
            <div>
              <h1 className="text-7xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-[0.85] uppercase">
                ЖАРОВ <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff79c6] via-[#bd93f9] to-[#8be9fd] animate-gradient-x">СЕРГЕЙ</span>
              </h1>
              <p className="font-mono text-[#6272a4] text-xl mb-6 tracking-[0.5em] uppercase pl-2">aka srgazh</p>

              <div className="space-y-6 max-w-2xl">
                <p className="text-2xl md:text-3xl font-bold text-[#bd93f9] leading-tight italic">
                  "Systems Architect & Fullstack Engineer | 25+ лет в IT"
                </p>
                <p className="text-lg text-[#94a3b8] leading-relaxed border-l-2 border-[#ff79c6]/30 pl-6">
                  От <span className="text-[#f1fa8c]">Novell NetWare</span> и <span className="text-[#8be9fd]">FreeBSD</span> конца 90-х до высокопроизводительных AI-решений сегодня.
                  Я создаю реактивные интерфейсы на React 18, внедряю ИИ и связываю «тяжелый» бэкенд со сложной инфраструктурой в единую отказоустойчивую экосистему.
                </p>
              </div>
            </div>

            <div className="hidden lg:block relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#ff79c6] to-[#bd93f9] rounded-[4rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative p-10 bg-[#282a36]/40 border border-[#6272a4]/30 rounded-[3rem] backdrop-blur-xl rotate-3 group-hover:rotate-0 transition-transform duration-500">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-[#ff5555] shadow-[0_0_10px_#ff5555]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#f1fa8c] shadow-[0_0_10px_#f1fa8c]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#50fa7b] shadow-[0_0_10px_#50fa7b]"></div>
                  </div>
                  <pre className="font-mono text-[10px] text-[#6272a4] leading-tight">
                    {`$ uptime
17:23:52 up 25 years, 
$ srgazh --expertise
[
  "Novell NetWare",
  "FreeBSD",
  "React 18",
  "GoLang",
  "AI-Agents",
  "High-Load"
]`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Секции компетенций */}
        <section className="mb-32">
          <h2 className="text-3xl font-black text-white mb-12 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-[#ff79c6]"></span>
            КЛЮЧЕВЫЕ КОМПЕТЕНЦИИ
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competencies.map((c, i) => (
              <div key={i} className={`p-8 bg-[#282a36]/30 border ${c.color} rounded-3xl backdrop-blur-md hover:-translate-y-2 transition-all duration-300 group`}>
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300 transform-gpu">
                  {c.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{c.title}</h3>
                <p className="text-xs font-mono text-[#6272a4] mb-4 uppercase tracking-tighter">{c.subtitle}</p>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Стек технологий */}
        <section className="mb-32 bg-gradient-to-br from-[#44475a]/10 to-transparent p-12 rounded-[4rem] border border-[#6272a4]/20 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 p-4 opacity-5 rotate-12">
            <Terminal size={200} />
          </div>
          <h3 className="text-2xl font-mono text-[#f1fa8c] mb-10 flex items-center gap-4">
            <Terminal size={32} /> stack_config.v3
          </h3>
          <div className="flex flex-wrap gap-5">
            {[
              "Debian", "FreeBSD", "Go (Golang)", "React 18", "TypeScript",
              "Laravel", "Docker", "Podman", "PostgreSQL", "MySQL",
              "WordPress", "OpenCart", "PrestaShop", "Caddy", "Bash", "PHP"
            ].map(skill => (
              <span key={skill} className="px-6 py-3 bg-[#1a0b2e]/80 border border-[#bd93f9]/20 rounded-2xl text-sm font-bold text-[#8be9fd] shadow-xl hover:border-[#ff79c6]/50 hover:text-white transition-all cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Связаться */}
        <section className="text-center py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ff79c6]/5 to-transparent pointer-events-none"></div>
          {!status ? (
            <div className="relative inline-block">
              <button
                onClick={() => {
                  const user = "srgazh";
                  const domain = "gmail.com";
                  window.location.href = `mailto:${user}@${domain}`;
                  setStatus("Ожидаю вашего письма!");
                }}
                className="relative z-10 px-16 py-8 bg-white text-[#0f071a] font-black uppercase tracking-[0.4em] rounded-full transition-all shadow-[0_0_50px_rgba(255,121,198,0.4)] hover:shadow-[0_0_80px_rgba(189,147,249,0.6)] hover:scale-105 active:scale-95 group overflow-hidden"
              >
                <span className="relative z-10">СВЯЗАТЬСЯ</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff79c6] to-[#bd93f9] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white group-hover:hidden"></div>
              </button>
            </div>
          ) : (
            <div className="p-10 bg-[#282a36] border-2 border-[#ff79c6] rounded-[3rem] inline-block backdrop-blur-2xl animate-in fade-in zoom-in duration-500 shadow-[0_0_60px_rgba(255,121,198,0.2)]">
              <p className="text-2xl font-black text-[#50fa7b] mb-4 tracking-tight uppercase">{status}</p>
              <div className="flex flex-col items-center gap-2">
                <p className="text-sm text-[#6272a4] font-mono tracking-widest">SRGAZH [at] GMAIL.COM</p>
                <div className="w-12 h-1 bg-[#ff79c6] rounded-full"></div>
              </div>
            </div>
          )}
        </section>
      </main>

      <footer className="py-24 text-center border-t border-[#6272a4]/10 bg-[#0f071a]">
        <div className="flex justify-center gap-12 mb-10">
          <a href="https://github.com/srgazh" target="_blank" rel="noreferrer" className="text-[#6272a4] hover:text-[#ff79c6] transition-all transform hover:scale-125"><Globe size={28} /></a>
          <button
            onClick={() => {
              const user = "srgazh";
              const domain = "gmail.com";
              window.location.href = `mailto:${user}@${domain}`;
            }}
            className="text-[#6272a4] hover:text-[#8be9fd] transition-all transform hover:scale-125"
          >
            <Mail size={28} />
          </button>
        </div>
        <p className="font-mono text-xs text-[#6272a4] uppercase tracking-[0.3em] opacity-50">
          &copy; 1999 - 2026 srgazh | RULIIT.RU | Administered on Debian Enterprise
        </p>
      </footer>

      <style>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 5s ease infinite;
        }
        .animate-spin-slow {
          animation: spin 6s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

function DatabaseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
    </svg>
  );
}
