'use client';

import { useEffect, useState } from 'react';
import { getAnalytics } from '../../lib/ab-test';
import { getSubscribers, exportSubscribersCSV } from '../../lib/email-storage';
import { BarChart3, Users, Eye, MousePointer, Download, Trash2 } from 'lucide-react';

export default function AnalyticsPage() {
  const [mounted, setMounted] = useState(false);
  const [analytics, setAnalytics] = useState<any[]>([]);
  const [subscribers, setSubscribers] = useState<any[]>([]);

  useEffect(() => {
    setMounted(true);
    setAnalytics(getAnalytics());
    setSubscribers(getSubscribers());
  }, []);

  if (!mounted) return <div className="min-h-screen bg-gray-50" />;

  const pageViewsA = analytics.filter(e => e.event === 'page_view' && e.variant === 'A').length;
  const pageViewsB = analytics.filter(e => e.event === 'page_view' && e.variant === 'B').length;
  const subsA = subscribers.filter(s => s.variant === 'A').length;
  const subsB = subscribers.filter(s => s.variant === 'B').length;
  const convA = pageViewsA > 0 ? ((subsA / pageViewsA) * 100).toFixed(1) : '0';
  const convB = pageViewsB > 0 ? ((subsB / pageViewsB) * 100).toFixed(1) : '0';

  const handleExport = () => {
    const csv = exportSubscribersCSV();
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `brasilclear-leads-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const handleClear = () => {
    if (confirm('Tem certeza que deseja limpar todos os dados?')) {
      localStorage.removeItem('brasilclear_events');
      localStorage.removeItem('brasilclear_subscribers');
      setAnalytics([]);
      setSubscribers([]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <BarChart3 className="w-8 h-8 text-green-600" />
              Dashboard A/B Test — BrasilClear
            </h1>
            <p className="text-gray-500 mt-1">Acompanhe o desempenho das variantes em tempo real</p>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={handleExport}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              <Download className="w-4 h-4" />
              Exportar CSV
            </button>
            <button 
              onClick={handleClear}
              className="flex items-center gap-2 bg-red-100 hover:bg-red-200 text-red-700 px-4 py-2 rounded-lg font-medium transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              Limpar Dados
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <Eye className="w-5 h-5 text-blue-500" />
              <span className="text-sm text-gray-500 font-medium">Page Views Total</span>
            </div>
            <p className="text-3xl font-bold text-gray-900">{pageViewsA + pageViewsB}</p>
            <p className="text-xs text-gray-400 mt-1">A: {pageViewsA} | B: {pageViewsB}</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-5 h-5 text-green-500" />
              <span className="text-sm text-gray-500 font-medium">Inscrições</span>
            </div>
            <p className="text-3xl font-bold text-gray-900">{subsA + subsB}</p>
            <p className="text-xs text-gray-400 mt-1">A: {subsA} | B: {subsB}</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <MousePointer className="w-5 h-5 text-purple-500" />
              <span className="text-sm text-gray-500 font-medium">Conv. Var. A</span>
            </div>
            <p className="text-3xl font-bold text-gray-900">{convA}%</p>
            <p className="text-xs text-gray-400 mt-1">{subsA} inscritos / {pageViewsA} views</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <MousePointer className="w-5 h-5 text-teal-500" />
              <span className="text-sm text-gray-500 font-medium">Conv. Var. B</span>
            </div>
            <p className="text-3xl font-bold text-gray-900">{convB}%</p>
            <p className="text-xs text-gray-400 mt-1">{subsB} inscritos / {pageViewsB} views</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-lg font-bold text-gray-900">Comparação de Variantes</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Metrica</th>
                  <th className="text-center px-6 py-3 text-sm font-semibold text-purple-600">Variante A (Emocional)</th>
                  <th className="text-center px-6
