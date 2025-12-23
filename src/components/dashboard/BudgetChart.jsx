import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
    { name: 'Jan', planejado: 4000, executado: 2400 },
    { name: 'Fev', planejado: 3000, executado: 1398 },
    { name: 'Mar', planejado: 2000, executado: 9800 },
    { name: 'Abr', planejado: 2780, executado: 3908 },
    { name: 'Mai', planejado: 1890, executado: 4800 },
    { name: 'Jun', planejado: 2390, executado: 3800 },
];

const BudgetChart = () => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 h-80">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Execução Orçamentária (2025)</h3>
            <ResponsiveContainer width="100%" height="85%">
                <BarChart
                    data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                    <Tooltip
                        cursor={{ fill: '#f8fafc' }}
                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    />
                    <Bar dataKey="planejado" fill="#cbd5e1" radius={[4, 4, 0, 0]} name="Planejado" />
                    <Bar dataKey="executado" fill="#27ae60" radius={[4, 4, 0, 0]} name="Executado" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BudgetChart;
