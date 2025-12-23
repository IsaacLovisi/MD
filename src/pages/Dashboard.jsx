import React from 'react';
import { Wallet, PieChart, TrendingUp, Activity } from 'lucide-react';
import KPICard from '../components/dashboard/KPICard';
import BudgetChart from '../components/dashboard/BudgetChart';
import AlertsList from '../components/dashboard/AlertsList';

const Dashboard = () => {
    return (
        <div className="space-y-6">
            {/* KPI Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <KPICard
                    title="Teto Disponível"
                    value="R$ 1.250.000,00"
                    icon={Wallet}
                    subtext="Anual 2025"
                />
                <KPICard
                    title="Total Planejado"
                    value="R$ 980.450,00"
                    icon={PieChart}
                    subtext="78% do Teto"
                />
                <KPICard
                    title="Saldo Atual"
                    value="R$ 269.550,00"
                    icon={TrendingUp}
                    subtext="Disponível para uso"
                    trend="up"
                />
                <KPICard
                    title="Vínculo PEO"
                    value="85%"
                    icon={Activity}
                    subtext="Alinhamento Estratégico"
                />
            </div>

            {/* Charts & Alerts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <BudgetChart />
                </div>
                <div>
                    <AlertsList />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
