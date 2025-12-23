import { useState } from 'react';
import MainLayout from './components/layout/MainLayout';
import Dashboard from './pages/Dashboard';
import Planning from './pages/Planning';
import Simulation from './pages/Simulation';
import Settings from './pages/Settings';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'planning':
        return <Planning />;
      case 'simulation':
        return <Simulation />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  const getTitle = () => {
    switch (currentView) {
      case 'dashboard': return 'Gestão Orçamentária Estratégica';
      case 'planning': return 'Planejamento de Necessidades (Micro)';
      case 'simulation': return 'Simulação de Cenários';
      case 'settings': return 'Configurações do Sistema';
      default: return 'Portal CGGOV';
    }
  };

  return (
    <MainLayout
      currentView={currentView}
      setCurrentView={setCurrentView}
      title={getTitle()}
    >
      {renderView()}
    </MainLayout>
  );
}

export default App;
