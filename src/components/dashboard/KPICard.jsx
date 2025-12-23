import React from 'react';

const KPICard = ({ title, value, subtext, icon: Icon, trend }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-slate-500 text-sm font-medium uppercase tracking-wide">{title}</h3>
                    <p className="text-2xl font-bold text-slate-800 mt-1">{value}</p>
                </div>
                {Icon && <div className="p-2 bg-slate-50 rounded-lg text-primary"><Icon size={20} /></div>}
            </div>
            {subtext && (
                <div className="flex items-center gap-2 text-sm">
                    {trend === 'up' && <span className="text-emerald-600 font-medium">↑</span>}
                    {trend === 'down' && <span className="text-red-500 font-medium">↓</span>}
                    <span className="text-slate-400">{subtext}</span>
                </div>
            )}
        </div>
    );
};

export default KPICard;
