import React from 'react';
import { TrendingDown, AlertCircle } from 'lucide-react';

const ImpactSummary = ({ totalSavings, affectedItemsCount }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-l-4 border-emerald-500">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-sm font-medium text-slate-500 uppercase">Economia Gerada</p>
                        <h3 className="text-3xl font-bold text-emerald-600 mt-1">
                            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalSavings)}
                        </h3>
                    </div>
                    <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                        <TrendingDown size={24} />
                    </div>
                </div>
                <p className="text-sm text-slate-400 mt-2">Valor recuperado para o saldo.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-l-4 border-amber-500">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-sm font-medium text-slate-500 uppercase">Itens Impactados</p>
                        <h3 className="text-3xl font-bold text-amber-600 mt-1">
                            {affectedItemsCount}
                        </h3>
                    </div>
                    <div className="p-2 bg-amber-50 rounded-lg text-amber-600">
                        <AlertCircle size={24} />
                    </div>
                </div>
                <p className="text-sm text-slate-400 mt-2">Necessidades que sofreram redução.</p>
            </div>
        </div>
    );
};

export default ImpactSummary;
