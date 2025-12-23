import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';

const NeedsTable = ({ needs, onDelete }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-slate-50 border-b border-slate-100">
                        <th className="p-4 font-semibold text-slate-600">Descrição da Necessidade</th>
                        <th className="p-4 font-semibold text-slate-600">ND (Lista Força)</th>
                        <th className="p-4 font-semibold text-slate-600">Tipo</th>
                        <th className="p-4 font-semibold text-slate-600">Vínculo Estratégico</th>
                        <th className="p-4 font-semibold text-slate-600">Valor PLOA (Anual)</th>
                        <th className="p-4 font-semibold text-slate-600 text-right">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {needs.map((need) => (
                        <tr key={need.id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                            <td className="p-4 text-slate-800 font-medium">{need.description}</td>
                            <td className="p-4 text-slate-600 font-mono text-sm">{need.nd}</td>
                            <td className="p-4">
                                <span className={`px-2 py-1 rounded text-xs font-bold ${need.type === 'CUSTEIO' ? 'bg-blue-50 text-blue-600' : 'bg-emerald-50 text-emerald-600'
                                    }`}>
                                    {need.type}
                                </span>
                            </td>
                            <td className="p-4 text-slate-600 text-sm">{need.strategicLink}</td>
                            <td className="p-4 text-slate-800 font-bold">
                                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(need.value)}
                            </td>
                            <td className="p-4 text-right">
                                <div className="flex justify-end gap-2">
                                    <button className="p-2 hover:bg-slate-200 rounded text-slate-500 transition-colors">
                                        <Edit2 size={16} />
                                    </button>
                                    <button
                                        onClick={() => onDelete(need.id)}
                                        className="p-2 hover:bg-red-50 rounded text-red-500 transition-colors"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {needs.length === 0 && (
                <div className="p-8 text-center text-slate-400">
                    Nenhuma necessidade cadastrada.
                </div>
            )}
        </div>
    );
};

export default NeedsTable;
