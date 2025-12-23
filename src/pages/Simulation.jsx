import React, { useState, useMemo } from 'react';
import { Save } from 'lucide-react';
import ScenarioControl from '../components/simulation/ScenarioControl';
import ImpactSummary from '../components/simulation/ImpactSummary';

const initialData = [
    { id: 1, description: 'Manutenção Predial MD', value: 450000, type: 'CUSTEIO' },
    { id: 2, description: 'Aquisição de Servidores', value: 120000, type: 'INVESTIMENTO' },
    { id: 3, description: 'Licenciamento Microsoft 365', value: 85000, type: 'CUSTEIO' },
    { id: 4, description: 'Capacitação em Power BI', value: 15000, type: 'CUSTEIO' },
];

const Simulation = () => {
    const [cutPercentage, setCutPercentage] = useState(10);

    const simulationResult = useMemo(() => {
        let totalSavings = 0;
        let affectedCount = 0;

        const simulatedItems = initialData.map(item => {
            if (item.type === 'CUSTEIO') {
                const reduction = item.value * (cutPercentage / 100);
                totalSavings += reduction;
                if (reduction > 0) affectedCount++;
                return { ...item, simulatedValue: item.value - reduction, isReduced: true };
            }
            return { ...item, simulatedValue: item.value, isReduced: false };
        });

        return { simulatedItems, totalSavings, affectedCount };
    }, [cutPercentage]);

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-3">
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                        Rascunho
                    </span>
                    <h3 className="font-bold text-slate-800">Cenário: Contingenciamento {cutPercentage}%</h3>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-slate-700 font-medium transition-colors">
                    <Save size={18} />
                    Salvar como Oficial
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1">
                    <ScenarioControl
                        cutPercentage={cutPercentage}
                        setCutPercentage={setCutPercentage}
                    />
                </div>
                <div className="lg:col-span-2 space-y-6">
                    <ImpactSummary
                        totalSavings={simulationResult.totalSavings}
                        affectedItemsCount={simulationResult.affectedCount}
                    />

                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                        <div className="p-4 border-b border-slate-100 font-bold text-slate-700">
                            Detalhamento do Impacto
                        </div>
                        <table className="w-full text-left">
                            <thead className="bg-slate-50 text-slate-500 text-xs uppercase">
                                <tr>
                                    <th className="p-4">Item</th>
                                    <th className="p-4">Valor Original</th>
                                    <th className="p-4">Valor Simulado</th>
                                    <th className="p-4">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {simulationResult.simulatedItems.map((item) => (
                                    <tr key={item.id} className="hover:bg-slate-50">
                                        <td className="p-4 font-medium text-slate-700">{item.description}</td>
                                        <td className="p-4 text-slate-500">
                                            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.value)}
                                        </td>
                                        <td className="p-4 font-bold text-slate-800">
                                            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.simulatedValue)}
                                        </td>
                                        <td className="p-4">
                                            {item.isReduced && cutPercentage > 0 ? (
                                                <span className="text-red-500 text-xs font-bold flex items-center gap-1">
                                                    ▼ -{cutPercentage}%
                                                </span>
                                            ) : (
                                                <span className="text-slate-400 text-xs font-bold">Mantido</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Simulation;
