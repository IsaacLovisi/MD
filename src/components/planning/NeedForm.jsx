import React, { useState } from 'react';
import { X } from 'lucide-react';

const NeedForm = ({ isOpen, onClose, onSave }) => {
    const [formData, setFormData] = useState({
        description: '',
        nd: '33.90.30',
        type: 'CUSTEIO',
        strategicLink: '',
        value: ''
    });

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ ...formData, value: Number(formData.value) });
        setFormData({ description: '', nd: '33.90.30', type: 'CUSTEIO', strategicLink: '', value: '' });
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-lg p-6 animate-in fade-in zoom-in duration-200">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-slate-800">Nova Necessidade</h3>
                    <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full text-slate-500">
                        <X size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Descrição</label>
                        <input
                            required
                            type="text"
                            className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                            placeholder="Ex: Manutenção Predial"
                            value={formData.description}
                            onChange={e => setFormData({ ...formData, description: e.target.value })}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">ND (Natureza)</label>
                            <select
                                className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-primary outline-none"
                                value={formData.nd}
                                onChange={e => setFormData({ ...formData, nd: e.target.value })}
                            >
                                <option value="33.90.30">33.90.30 - Material de Consumo</option>
                                <option value="33.90.39">33.90.39 - Serviços de Terceiros PJ</option>
                                <option value="44.90.52">44.90.52 - Equipamentos</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Tipo</label>
                            <select
                                className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-primary outline-none"
                                value={formData.type}
                                onChange={e => setFormData({ ...formData, type: e.target.value })}
                            >
                                <option value="CUSTEIO">CUSTEIO</option>
                                <option value="INVESTIMENTO">INVESTIMENTO</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Vínculo Estratégico</label>
                        <input
                            type="text"
                            className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-primary outline-none"
                            placeholder="Ex: PEO - Eixo 2"
                            value={formData.strategicLink}
                            onChange={e => setFormData({ ...formData, strategicLink: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Valor Anual (R$)</label>
                        <input
                            required
                            type="number"
                            className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-primary outline-none"
                            placeholder="0,00"
                            value={formData.value}
                            onChange={e => setFormData({ ...formData, value: e.target.value })}
                        />
                    </div>

                    <div className="flex justify-end gap-3 mt-6">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded font-medium"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-accent text-white rounded hover:bg-emerald-700 font-medium"
                        >
                            Salvar Necessidade
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NeedForm;
