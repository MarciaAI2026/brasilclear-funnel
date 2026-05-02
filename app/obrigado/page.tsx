'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { trackEvent } from '../../lib/ab-test';
import { 
  CheckCircle, 
  MessageCircle, 
  ArrowRight, 
  Clock, 
  Mail,
  Sparkles,
  Calendar,
  Phone
} from 'lucide-react';

export default function ThankYouPage() {
  const searchParams = useSearchParams();
  const variant = searchParams.get('variant') as 'A' | 'B' || 'A';
  const [countdown, setCountdown] = useState(24 * 60 * 60);

  const WHATSAPP_NUMBER = "5511999999999";
  const WHATSAPP_MESSAGE = encodeURIComponent(
    "Olá! Acabei de me inscrever no site BrasilClear para a sessão introdutória gratuita de Dianética. Gostaria de agendar meu horário."
  );
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  useEffect(() => {
    trackEvent('thankyou_page_view', variant);
    
    const timer = setInterval(() => {
      setCountdown(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    
    return () => clearInterval(timer);
  }, [variant]);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      <header className="bg-white border-b border-gray-100 py-4">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Brasil Clear" className="h-20 w-auto" />
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">✓</div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Inscrição Confirmada!</h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Parabéns! Você deu o primeiro passo para transformar sua vida. 
            Em breve entraremos em contato para agendar sua sessão introdutória gratuita.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="text-2xl">📅</span> O Que Acontece Agora
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-green-600">1</div>
              <div>
                <h3 className="font-semibold text-gray-900">Confirmação por E-mail</h3>
                <p className="text-gray-600 text-sm">Você receberá um e-mail de confirmação em até 5 minutos. Verifique sua caixa de entrada e spam.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-green-600">2</div>
              <div>
                <h3 className="font-semibold text-gray-900">Contato Personalizado</h3>
                <p className="text-gray-600 text-sm">Nossa equipe entrará em contato em até 24 horas para apresentar opções de horário e local.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-green-600">3</div>
              <div>
                <h3 className="font-semibold text-gray-900">Sua Sessão Gratuita</h3>
                <p className="text-gray-600 text-sm">30 minutos ou mais dedicados exclusivamente a você, com explicação completa do processo e demonstração prática.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl p-6 mb-8 text-center text-white">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-xl">⏱️</span>
            <span className="font-semibold text-green-400">Tempo Estimado para Contato</span>
          </div>
          <p className="text-4xl font-mono font-bold mb-2">{formatTime(countdown)}</p>
          <p className="text-gray-400 text-sm">Nossa equipe trabalha de segunda a sábado, das 9h às 18h</p>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl p-8 text-center text-white shadow-xl shadow-green-500/20 mb-8">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">💬</div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Quer Agilizar o Processo?</h2>
          <p className="text-green-100 mb-6 max-w-lg mx-auto">
            Fale diretamente conosco pelo WhatsApp e agende sua sessão introdutória 
            gratuita de Dianética em poucos minutos. Nossa equipe responde rapidamente!
          </p>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('whatsapp_click', variant)}
            className="inline-flex items-center gap-3 bg-white text-green-700 font-bold px-8 py-4 rounded-xl text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
          >
            <span className="text-2xl">💬</span>
            <span className="whitespace-nowrap">Falar no WhatsApp Agora</span>
            <span>→</span>
          </a>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-green-100">
            <span className="flex items-center gap-1">📱 Resposta em minutos</span>
            <span className="flex items-center gap-1">✓ Atendimento humano</span>
            <span className="flex items-center gap-1">✨ Sem robôs</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl">📧</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Não recebeu o e-mail?</h3>
              <p className="text-gray-600 text-sm mb-3">
                Verifique sua pasta de spam/lixo eletrônico. Se não encontrar, use o WhatsApp acima.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-sm mb-4">Conhece alguém que também pode se beneficiar?</p>
          <button 
            onClick={() => {
              if (typeof window !== 'undefined') {
                navigator.clipboard.writeText(window.location.origin);
                trackEvent('share_copy_link', variant);
              }
            }}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            📋 Copiar Link do Site
          </button>
        </div>
      </div>

      <footer className="bg-white border-t border-gray-100 py-8 mt-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-6">
            <img src="/logo.png" alt="Brasil Clear" className="h-32 w-auto mx-auto" />
          </div>
          <p className="text-sm text-gray-500">© 2025 Brasil Clear — Dianética no Brasil</p>
          <p className="text-xs text-gray-400 mt-1">Sua privacidade é nossa prioridade.</p>
        </div>
      </footer>
    </div>
  );
}
