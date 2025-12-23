import React from 'react';
import { AlertTriangle, Info, CheckCircle } from 'lucide-react';

const alerts = [
    { id: 1, type: 'critical', message: 'Saldo crítico na ND 33.90.30 (Material de Consumo) - Restam apenas R$ 2.000,00' },
    { id: 2, type: 'warning', message: 'Necessidade "Aquisição de Servidores" aguardando aprovação do Comitê.' },
    { id: 3, type: 'success', message: 'Novo teto orçamentário aprovado para 2026.' },
];

const AlertsList = () => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-slate-800 mb-4">⚠️ Alertas Recentes</h3>
            <div className="space-y-3">
                {alerts.map((alert) => (
                    <div key={alert.id} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50">
                        {alert.type === 'critical' && <AlertTriangle className="text-red-500 shrink-0" size={20} />}
                        {alert.type === 'warning' && <Info className="text-amber-500 shrink-0" size={20} />}
                        {alert.type === 'success' && <CheckCircle className="text-emerald-500 shrink-0" size={20} />}
                        <p className="text-sm text-slate-700">{alert.message}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AlertsList;
