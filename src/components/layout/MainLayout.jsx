import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const MainLayout = ({ children, currentView, setCurrentView, title }) => {
    return (
        <div className="flex min-h-screen bg-bg">
            <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
            <div className="flex-1 ml-64 p-8 overflow-y-auto">
                <Header title={title} />
                <main>
                    {children}
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
