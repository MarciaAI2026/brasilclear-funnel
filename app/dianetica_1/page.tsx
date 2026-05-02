'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { saveSubscriber } from '../../lib/email-storage'
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

export default function Dianetica1Page() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    
    setIsSubmitting(true);
    
    setTimeout(() => {
      saveSubscriber(email, 'A');
      setShowSuccess(true);
      setTimeout(() => router.push('/obrigado?variant=A'), 1500);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative text-white overflow-hidden" style={{background: 'linear-gradient(135deg, #051420 0%, #142839 50%, #051420 100%)'}}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-8">
              <img src="/logo.png" alt="Brasil Clear" className="h-28 w-auto" />
            </div>
            <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-green-500/30">
              <Sparkles className="w-4 h-4" />
              Sessão Introdutória 100% Gratuita
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Você sente que há algo
              <span className="block text-green-400">bloqueando seu potencial?</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              Milhares de pessoas descobriram uma forma natural e eficaz de superar limites, 
              eliminar emoções negativas e desbloquear o verdadeiro poder da mente — 
              <span className="text-white font-semibold"> sua experiência, sem julgamentos.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#inscricao" className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 sm:px-8 py-4 rounded-xl text-base sm:text-lg transition-all hover:scale-105 shadow-lg shadow-green-500/25 whitespace-nowrap">
                <span className="whitespace-nowrap">Quero Minha Sessão Gratuita</span>
                <ArrowRight className="w-5 h-5 flex-shrink-0" />
              </a>
              <a href="#como-funciona" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 sm:px-8 py-4 rounded-xl text-base sm:text-lg transition-all border border-white/20 whitespace-nowrap">
                <span className="whitespace-nowrap">Como Funciona</span>
                <ChevronDown className="w-5 h-5 flex-shrink-0" />
              </a>
            </div>
            <div className="mt-12 flex items-center gap-6 text-sm text-gray-400 flex-wrap">
              <span className="flex items-center gap-2">🛡️ Sem compromisso</span>
              <span className="flex items-center gap-2">⏱️ 30 minutos ou mais</span>
              <span className="flex items-center gap-2">👥 +2.000 atendidos</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Você já tentou de tudo, mas nada parece funcionar de verdade?
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Preocupações persistentes, falta de foco, relacionamentos complicados, 
            sensação de estar "travado" — esses são sinais de que algo na mente 
            precisa de atenção. E não é sua culpa.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">🧠</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mente Ansiosa</h3>
              <p className="text-gray-600">Pensamentos que não param, dificuldade para dormir, preocupações constantes.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Falta de Foco</h3>
              <p className="text-gray-600">Procrastinação, dificuldade para terminar projetos, sensação de estagnação.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">❤️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Relacionamentos</h3>
              <p className="text-gray-600">Conflitos repetidos, dificuldade para se conectar, isolamento emocional.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section id="como-funciona" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                ⚡ O Poder
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Dianética: O Poder da Mente Sobre o Corpo
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Criada por L. Ron Hubbard e reconhecida mundialmente como o livro mais vendido 
                sobre a mente humana de todos os tempos, a Dianética oferece uma abordagem 
                prática e natural para entender e melhorar o funcionamento da mente.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Através da <strong>Audição</strong> — uma sessão terapêutica guiada — você 
                revisita eventos do passado de forma consciente, liberando o poder limitante 
                dessas experiências e recuperando sua clareza mental natural.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Processo 100% natural, sem substâncias externas</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Processo natural baseado na própria inteligência</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Resultados perceptíveis desde a primeira sessão</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Aumento de autoconfiança e autoconsciência</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-3xl border border-green-100">
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-2xl">⭐</div>
                    <div>
                      <p className="font-bold text-gray-900">Livro #1 em Bestsellers</p>
                      <p className="text-sm text-gray-500">The New York Times, Publishers Weekly, LA Times</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Vendas mundiais</span>
                      <span className="font-bold text-gray-900">+22 milhões</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width:'95%'}}></div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Idiomas disponíveis</span>
                      <span className="font-bold text-gray-900">+50</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div className="bg-teal-500 h-2 rounded-full" style={{width:'80%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 text-white" style={{backgroundColor: '#051420'}}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">O Que Nossos Visitantes Dizem</h2>
            <p className="text-gray-400 text-lg">Histórias reais de transformação pessoal</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <div className="flex gap-1 mb-4 text-yellow-400 text-lg">★★★★★</div>
              <p className="text-gray-300 mb-6 italic leading-relaxed">"Conversando com a minha manicure, ela me falou que havia descoberto algo incrível. Desde então obtive muitas melhoras, tomando consciência das coisas ao meu redor, superando momentos difíceis e reorganizando minha vida."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">M</div>
                <div><p className="font-semibold">Mariana S.</p><p className="text-sm text-gray-400">Empresária</p></div>
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <div className="flex gap-1 mb-4 text-yellow-400 text-lg">★★★★★</div>
              <p className="text-gray-300 mb-6 italic leading-relaxed">"Com Dianética eu fiquei muito mais habilidoso, conseguindo ter vários negócios e fontes de renda. Vivia preso no meu trabalho, e após as sessões as coisas começaram a dar certo."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">R</div>
                <div><p className="font-semibold">Ricardo M.</p><p className="text-sm text-gray-400">Empreendedor</p></div>
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <div className="flex gap-1 mb-4 text-yellow-400 text-lg">★★★★★</div>
              <p className="text-gray-300 mb-6 italic leading-relaxed">"A Dianética é concreta, não fica no abstrato. Basta treinar e vem de uma forma tão natural. Quebramos todos nossos tabus e nos permitimos evoluir."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">F</div>
                <div><p className="font-semibold">Fernanda L.</p><p className="text-sm text-gray-400">Professora</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-20 bg-green-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">O Que Você Recebe na Sessão Introdutória</h2>
          <p className="text-lg text-gray-600 mb-12">Uma experiência completa de 30 minutos ou mais, sem custo e sem compromisso</p>
          <div className="grid sm:grid-cols-2 gap-6 text-left">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-green-100 flex items-start gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 text-green-600 text-lg">✓</div>
              <div><h3 className="font-bold text-gray-900 mb-1">Avaliação Personalizada</h3><p className="text-gray-600 text-sm">Identificamos juntos os pontos que mais precisam de atenção na sua vida.</p></div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-green-100 flex items-start gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 text-green-600 text-lg">✓</div>
              <div><h3 className="font-bold text-gray-900 mb-1">Explicação do Processo</h3><p className="text-gray-600 text-sm">Você entende exatamente como a Dianética funciona e por que é eficaz.</p></div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-green-100 flex items-start gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 text-green-600 text-lg">✓</div>
              <div><h3 className="font-bold text-gray-900 mb-1">Demonstração Prática</h3><p className="text-gray-600 text-sm">Uma breve sessão demonstrativa para você sentir os resultados na pele.</p></div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-green-100 flex items-start gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 text-green-600 text-lg">✓</div>
              <div><h3 className="font-bold text-gray-900 mb-1">Plano de Ação</h3><p className="text-gray-600 text-sm">Receba orientações personalizadas sobre os próximos passos do seu desenvolvimento.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / EMAIL FORM */}
      <section id="inscricao" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
            <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-300 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-red-500/30">
              <Clock className="w-4 h-4" />
              Vagas Limitadas — Agende Agora
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sua Sessão Introdutória Gratuita Espera</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
              Preencha seu e-mail abaixo e entraremos em contato para agendar 
              sua sessão no horário mais conveniente para você.
            </p>
            {showSuccess ? (
              <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-6">
                <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-3" />
                <p className="text-xl font-bold text-green-300">Inscrição Confirmada!</p>
                <p className="text-gray-300">Redirecionando...</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3 items-stretch">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Digite seu melhor e-mail"
                    className="flex-1 px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 sm:px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-green-500/25 whitespace-nowrap flex-shrink-0"
                  >
                    <span className="whitespace-nowrap">{isSubmitting ? 'Enviando...' : 'Quero Agendar'}</span>
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  🔒 Seus dados estão 100% seguros. Nunca enviamos spam.
                </p>
              </form>
            )}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2">🛡️ Privacidade garantida</span>
              <span className="flex items-center gap-2">⏱️ Resposta em até 24h</span>
              <span className="flex items-center gap-2">💬 Suporte via WhatsApp</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-gray-400 py-12 border-t border-gray-800" style={{backgroundColor: '#051420'}}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <img src="/logo.png" alt="Brasil Clear" className="h-32 w-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-3 text-sm uppercase tracking-wider">Aviso Legal</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-3">
                O Brasil Clear atua exclusivamente como plataforma digital de conteúdo e promoção de atividades de desenvolvimento pessoal. Não realiza diretamente a prestação de serviços presenciais no Brasil. Os serviços são oferecidos por organizações independentes de Dianética, com atuação própria e responsabilidade legal individual.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                <strong className="text-gray-400">Organizações no Brasil:</strong><br/>
                Dianética ABC (Santo André)<br/>
                Associação Brasileira de Dianética (Zona Sul – Mirandópolis)<br/>
                Dianética São Paulo (Zona Leste – São Paulo)
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-3 text-sm uppercase tracking-wider">Isenção de Responsabilidade</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-3">
                O conteúdo disponibilizado neste site tem caráter exclusivamente educativo, informativo e promocional. O Brasil Clear não realiza diagnósticos, tratamentos médicos ou psicológicos, nem substitui a orientação de profissionais qualificados da área da saúde. Nenhuma informação apresentada neste site deve ser interpretada como promessa de cura, tratamento ou garantia de resultados específicos. Os resultados podem variar de pessoa para pessoa.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed mb-3">
                <strong className="text-gray-400">Privacidade e Cookies (LGPD):</strong> Este site utiliza apenas armazenamento local (localStorage) para lembrar suas preferências de navegação. Não utilizamos cookies de rastreamento. Seus dados pessoais são tratados conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                <strong className="text-gray-400">Direitos Autorais:</strong> © 2026 Brasil Clear. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
