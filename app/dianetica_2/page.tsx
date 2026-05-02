'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { saveSubscriber } from '../../lib/email-storage';
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Shield, 
  Clock, 
  Zap,
  Users,
  MessageCircle,
  ChevronDown,
  Sparkles,
  Heart,
  Brain,
  Target
} from 'lucide-react';

// ─── VARIANT B: LOGIC / DATA-DRIVEN ───
function VariantB() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setIsSubmitting(true);
    trackEvent('subscribe_attempt', 'B', { email });

    setTimeout(() => {
      saveSubscriber(email, 'B');
      trackEvent('subscribe_success', 'B', { email });
      setShowSuccess(true);
      setTimeout(() => router.push('/obrigado?variant=B'), 1500);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
                <Star className="w-4 h-4" />
                #1 Bestseller Mundial Sobre a Mente
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                A Abordagem da Mente que Já Transformou
                <span className="text-brand-600"> 22 Milhões de Vidas</span>
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Baseada no livro mais vendido sobre a mente humana de todos os tempos, 
                a Dianética oferece uma metodologia comprovada para superar barreiras mentais, 
                aumentar a inteligência emocional e recuperar o controle da própria vida.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">
                  <CheckCircle className="w-5 h-5 text-brand-500" />
                  <span className="text-sm font-medium text-gray-700">Sem Medicamentos</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">
                  <CheckCircle className="w-5 h-5 text-brand-500" />
                  <span className="text-sm font-medium text-gray-700">Base Científica</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">
                  <CheckCircle className="w-5 h-5 text-brand-500" />
                  <span className="text-sm font-medium text-gray-700">Resultados Imediatos</span>
                </div>
              </div>

              <a href="#inscricao-b" className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold px-6 sm:px-8 py-4 rounded-xl text-base sm:text-lg transition-all shadow-lg shadow-brand-500/20 whitespace-nowrap">
                <span className="whitespace-nowrap">Agendar Sessão Gratuita</span>
                <ArrowRight className="w-5 h-5 flex-shrink-0" />
              </a>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-brand-50 via-white to-teal-50 p-8 rounded-3xl border border-brand-100">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 text-center">
                    <p className="text-3xl font-bold text-brand-600">22M+</p>
                    <p className="text-sm text-gray-500 mt-1">Livros Vendidos</p>
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 text-center">
                    <p className="text-3xl font-bold text-teal-600">50+</p>
                    <p className="text-sm text-gray-500 mt-1">Idiomas</p>
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 text-center">
                    <p className="text-3xl font-bold text-purple-600">#1</p>
                    <p className="text-sm text-gray-500 mt-1">NYT Bestseller</p>
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 text-center">
                    <p className="text-3xl font-bold text-orange-600">70+</p>
                    <p className="text-sm text-gray-500 mt-1">Anos de História</p>
                  </div>
                </div>
                <div className="mt-4 bg-gray-900 text-white p-4 rounded-xl text-center">
                  <p className="text-sm font-medium">Reconhecido por:</p>
                  <p className="text-xs text-gray-400 mt-1">The New York Times · Publishers Weekly · Los Angeles Times</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como a Dianética Funciona em 3 Passos
            </h2>
            <p className="text-lg text-gray-600">Um processo estruturado, natural e eficaz</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                step: '01', 
                title: 'Identificação', 
                desc: 'Através da Audição, identificamos eventos passados que estão criando reações negativas no presente. Esses são os "pontos de carga" da mente.' 
              },
              { 
                step: '02', 
                title: 'Revisitação Consciente', 
                desc: 'Você revisita esses eventos de forma consciente e segura, reduzindo o impacto emocional e liberando a energia mental presa.' 
              },
              { 
                step: '03', 
                title: 'Resultados Naturais', 
                desc: 'Com a carga mental liberada, sua mente retorna ao estado natural de clareza, foco e bem-estar — sem intervenções externas.' 
              },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full">
                  <span className="text-5xl font-black text-brand-100">{item.step}</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-brand-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Benefícios Comprovados pelos Praticantes
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Brain, title: 'Clareza Mental', desc: 'Eliminação da "neblina mental" e pensamentos confusos.' },
              { icon: Target, title: 'Foco Absoluto', desc: 'Capacidade de concentrar-se em tarefas por mais tempo.' },
              { icon: Heart, title: 'Relacionamentos', desc: 'Melhora significativa na comunicação e empatia.' },
              { icon: Zap, title: 'Produtividade', desc: 'Mais energia para realizar projetos e metas.' },
              { icon: Shield, title: 'Resiliência', desc: 'Maior capacidade de lidar com adversidades.' },
              { icon: Star, title: 'Autoconfiança', desc: 'Recuperação da certeza nas próprias decisões.' },
              { icon: Clock, title: 'Sem Procrastinação', desc: 'Ação imediata sem a paralisia da indecisão.' },
              { icon: Users, title: 'Liderança', desc: 'Melhor capacidade de influenciar positivamente.' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-brand-200 hover:shadow-md transition-all">
                <item.icon className="w-8 h-8 text-brand-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF / STATS */}
      <section className="py-20 text-white" style={{backgroundColor: "#051420"}}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Resultados que Falam por Si
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                A Dianética não é uma promessa vazia. É uma metodologia com mais de 70 anos 
                de aplicação prática, com resultados mensuráveis em milhões de pessoas ao redor do mundo.
              </p>

              <div className="space-y-6">
                {[
                  { label: 'Aumento de autoconfiança relatado', value: 94 },
                  { label: 'Maior equilíbrio pessoal', value: 89 },
                  { label: 'Maior tranquilidade persistente', value: 87 },
                  { label: 'Melhora em relacionamentos', value: 82 },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{stat.label}</span>
                      <span className="font-bold text-brand-400">{stat.value}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-brand-500 to-teal-400 h-3 rounded-full transition-all duration-1000"
                        style={{width: `${stat.value}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-xl font-bold mb-6">Depoimentos Verificados</h3>
              <div className="space-y-6">
                {[
                  { name: 'Carlos Eduardo', text: 'Depois de anos buscando diferentes abordagens, em 3 sessões de Dianética senti uma diferença que nunca imaginei possível.', rating: 5 },
                  { name: 'Patrícia M.', text: 'Minha produtividade no trabalho aumentou 300%. Consigo finalizar projetos que antes deixava para depois há meses.', rating: 5 },
                  { name: 'João Paulo', text: 'Relacionamento com minha família mudou completamente. Parei de reagir com raiva e comecei a realmente ouvir.', rating: 5 },
                ].map((t, i) => (
                  <div key={i} className="border-b border-gray-700 last:border-0 pb-4 last:pb-0">
                    <div className="flex gap-1 mb-2">
                      {Array.from({length: t.rating}).map((_, s) => (
                        <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-300 text-sm mb-2">"{t.text}"</p>
                    <p className="text-brand-400 text-sm font-semibold">— {t.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Perguntas Frequentes
          </h2>

          <div className="space-y-4">
            {[
              { q: 'A sessão introdutória realmente é gratuita?', a: 'Sim, 100% gratuita e sem compromisso. Não pedimos cartão de crédito e você não tem obrigação de continuar.' },
              { q: 'Preciso ter lido o livro antes?', a: 'Não. A sessão introdutória é justamente para apresentar os conceitos de forma prática, antes mesmo de qualquer estudo teórico.' },
              { q: 'É seguro? Funciona mesmo?', a: 'A Dianética é um processo natural que utiliza apenas a comunicação e a própria inteligência da pessoa. Não envolve medicamentos, hipnose ou procedimentos invasivos.' },
              { q: 'Quanto tempo dura a sessão?', a: 'A sessão introdutória tem duração de aproximadamente 30 minutos, incluindo a explicação do processo e a demonstração prática.' },
              { q: 'Onde acontecem as sessões?', a: 'Temos auditores em São Paulo e Santo André, no Estado de São Paulo. Também temos centros parceiros em diversos países para quem reside fora do Brasil. Todas as sessões são realizadas presencialmente, para garantir a melhor observação do processo e resultados mais efetivos. Após a inscrição, entraremos em contato para indicar o local mais próximo de você.' },
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="inscricao-b" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-brand-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl shadow-brand-500/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comece Sua Transformação Hoje
            </h2>
            <p className="text-brand-100 text-lg mb-8 max-w-xl mx-auto">
              Preencha seu e-mail e receba em até 24h o contato para agendar 
              sua sessão introdutória gratuita de Dianética.
            </p>

            {showSuccess ? (
              <div className="bg-white/20 rounded-xl p-6 animate-fade-in">
                <CheckCircle className="w-12 h-12 text-white mx-auto mb-3" />
                <p className="text-xl font-bold">Inscrição Confirmada!</p>
                <p className="text-brand-100">Redirecionando...</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3 items-stretch">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu@email.com"
                    className="flex-1 px-5 py-4 rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gray-900 hover:bg-gray-800 text-white font-bold px-6 sm:px-8 py-4 rounded-xl transition-all disabled:opacity-50 whitespace-nowrap flex-shrink-0"
                  >
                    <span className="whitespace-nowrap">{isSubmitting ? 'Enviando...' : 'Agendar Agora'}</span>
                  </button>
                </div>
                <p className="text-xs text-brand-200 mt-4">
                  Seus dados estão protegidos. Leia nossa política de privacidade.
                </p>
              </form>
            )}

            <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
              <div className="bg-white/10 rounded-lg p-3">
                <p className="font-bold text-lg">30min</p>
                <p className="text-brand-200 text-xs">Duração</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <p className="font-bold text-lg">R$ 0</p>
                <p className="text-brand-200 text-xs">Custo</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <p className="font-bold text-lg">100%</p>
                <p className="text-brand-200 text-xs">Natural</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm">
            © 2025 Brasil Clear — Dianética no Brasil. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function Dianetica2Page() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setIsSubmitting(true);

    setTimeout(() => {
      saveSubscriber(email, 'B');
      setShowSuccess(true);
      setTimeout(() => router.push('/obrigado?variant=B'), 1500);
    }, 800);
  };

  return <VariantB />;
}
