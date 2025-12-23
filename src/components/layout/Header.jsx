import React from 'react';
import { User } from 'lucide-react';

const Header = ({ title }) => {
    return (
        <header className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-primary">{title}</h2>
            <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-lg shadow-sm">
                <div className="bg-slate-100 p-2 rounded-full">
                    <User size={20} className="text-primary" />
                </div>
                <div>
                    <p className="text-sm text-slate-500">Bem-vindo,</p>
                    <p className="font-bold text-primary leading-none">Isaac</p>
                </div>
            </div>
        </header>
    );
};

export default Header;
