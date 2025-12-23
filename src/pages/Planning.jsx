import React, { useState } from 'react';
import { Plus, Filter } from 'lucide-react';
import NeedsTable from '../components/planning/NeedsTable';
import NeedForm from '../components/planning/NeedForm';

const initialNeeds = [
    { id: 1, description: 'Manutenção Predial MD', nd: '33.90.39', type: 'CUSTEIO', strategicLink: 'PEO - Eixo 2', value: 450000 },
    { id: 2, description: 'Aquisição de Servidores', nd: '44.90.52', type: 'INVESTIMENTO', strategicLink: 'PDTI - Ação 4', value: 120000 },
    { id: 3, description: 'Licenciamento Microsoft 365', nd: '33.90.40', type: 'CUSTEIO', strategicLink: 'PETI - TI Ativa', value: 85000 },
    { id: 4, description: 'Capacitação em Power BI', nd: '33.90.39', type: 'CUSTEIO', strategicLink: 'PDP - 2025', value: 15000 },
];

const Planning = () => {
    const [needs, setNeeds] = useState(initialNeeds);
    const [isFormOpen, setIsFormOpen] = useState(false);

    const handleAddNeed = (newNeed) => {
        setNeeds([...needs, { ...newNeed, id: Date.now() }]);
    };

    const handleDeleteNeed = (id) => {
        setNeeds(needs.filter(n => n.id !== id));
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h3 className="text-2xl font-bold text-slate-800">Necessidades Cadastradas</h3>
                    <p className="text-slate-500">Gerencie as demandas detalhadas de cada setor.</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg text-slate-600 hover:bg-slate-50 font-medium transition-colors">
                        <Filter size={20} />
                        Filtrar
                    </button>
                    <button
                        onClick={() => setIsFormOpen(true)}
                        className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-emerald-700 font-medium transition-colors shadow-sm"
                    >
                        <Plus size={20} />
                        Nova Necessidade
                    </button>
                </div>
            </div>

            <NeedsTable needs={needs} onDelete={handleDeleteNeed} />

            <NeedForm
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                onSave={handleAddNeed}
            />
        </div>
    );
};

export default Planning;
