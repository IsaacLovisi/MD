import React from 'react';
import { Scissors, RefreshCw } from 'lucide-react';

const ScenarioControl = ({ cutPercentage, setCutPercentage }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-amber-50 rounded-lg text-amber-600">
                    <Scissors size={24} />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-slate-800">Parâmetros de Corte</h3>
                    <p className="text-sm text-slate-500">Ajuste o percentual de contingenciamento linear.</p>
                </div>
            </div>

            <div className="mb-8">
                <div className="flex justify-between mb-2">
                    <label className="font-medium text-slate-700">Corte em Custeio (%)</label>
                    <span className="font-bold text-amber-600">{cutPercentage}%</span>
                </div>
                <input
                    type="range"
                    min="0"
                    max="50"
                    step="1"
                    value={cutPercentage}
                    onChange={(e) => setCutPercentage(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-1">
                    <span>0%</span>
                    <span>25%</span>
                    <span>50%</span>
                </div>
            </div>

            <button
                onClick={() => setCutPercentage(0)}
                className="w-full flex items-center justify-center gap-2 py-2 border border-slate-300 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors"
            >
                <RefreshCw size={16} />
                Resetar Parâmetros
            </button>
        </div>
    );
};

export default ScenarioControl;
