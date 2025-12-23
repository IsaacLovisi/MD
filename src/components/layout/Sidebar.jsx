import React from 'react';
import { LayoutDashboard, FileSpreadsheet, TrendingDown, Settings } from 'lucide-react';

const Sidebar = ({ currentView, setCurrentView }) => {
    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'planning', label: 'Planejamento (Micro)', icon: FileSpreadsheet },
        { id: 'simulation', label: 'Simular Cenários', icon: TrendingDown },
        { id: 'settings', label: 'Configurações', icon: Settings },
    ];

    return (
        <div className="w-64 bg-primary text-white flex flex-col h-screen fixed left-0 top-0">
            <div className="p-6 border-b border-slate-600 text-center">
                <div className="bg-white text-primary px-4 py-2 rounded font-bold inline-block">
                    DEFE SA <span className="text-yellow-400">●</span>
                </div>
                <p className="text-xs mt-2 opacity-70"># CGGOV</p>
            </div>

            <nav className="flex-1 p-4">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = currentView === item.id;

                    return (
                        <div
                            key={item.id}
                            onClick={() => setCurrentView(item.id)}
                            className={`flex items-center gap-3 p-3 mb-2 rounded cursor-pointer transition-colors ${isActive ? 'bg-accent' : 'hover:bg-slate-700'
                                }`}
                        >
                            <Icon size={20} />
                            <span className="font-medium">{item.label}</span>
                        </div>
                    );
                })}
            </nav>

            <div className="p-4 text-xs text-center opacity-50">
                v1.0.0 Beta
            </div>
        </div>
    );
};

export default Sidebar;
