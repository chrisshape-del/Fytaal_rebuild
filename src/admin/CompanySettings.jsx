import { useState, useEffect } from 'react';
import { Save, Loader2 } from 'lucide-react';

export default function CompanySettings() {
    const [settings, setSettings] = useState({
        name: 'Fytaal',
        address: '',
        phone: '',
        email: '',
        kvk: '',
        btw: '',
        instagram: '',
        facebook: '',
        linkedin: ''
    });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        fetchSettings();
    }, []);

    const fetchSettings = async () => {
        try {
            const res = await fetch('/api/content/settings');
            const data = await res.json();
            if (data) setSettings(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async () => {
        setSaving(true);
        try {
            await fetch('/api/content/settings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(settings)
            });
            alert('Instellingen opgeslagen!');
        } catch (err) {
            alert('Fout bij opslaan');
        } finally {
            setSaving(false);
        }
    };

    const handleChange = (key, value) => {
        setSettings(prev => ({ ...prev, [key]: value }));
    };

    if (loading) return <div>Laden...</div>;

    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold text-slate-800 mb-8">Bedrijfsgegevens & Instellingen</h1>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 space-y-6">
                <h2 className="font-bold text-lg text-primary border-b border-slate-100 pb-2">Algemeen</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-600 mb-1">Bedrijfsnaam</label>
                        <input type="text" value={settings.name} onChange={e => handleChange('name', e.target.value)} className="w-full px-3 py-2 border rounded-lg" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-600 mb-1">Telefoon</label>
                        <input type="text" value={settings.phone} onChange={e => handleChange('phone', e.target.value)} className="w-full px-3 py-2 border rounded-lg" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-600 mb-1">Email</label>
                        <input type="email" value={settings.email} onChange={e => handleChange('email', e.target.value)} className="w-full px-3 py-2 border rounded-lg" />
                    </div>
                </div>

                <div className="pt-4">
                    <label className="block text-sm font-medium text-slate-600 mb-1">Adres</label>
                    <textarea value={settings.address} onChange={e => handleChange('address', e.target.value)} className="w-full px-3 py-2 border rounded-lg" rows={3} />
                </div>

                <h2 className="font-bold text-lg text-primary border-b border-slate-100 pb-2 pt-4">Zakelijk</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-600 mb-1">KVK Nummer</label>
                        <input type="text" value={settings.kvk} onChange={e => handleChange('kvk', e.target.value)} className="w-full px-3 py-2 border rounded-lg" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-600 mb-1">BTW Nummer</label>
                        <input type="text" value={settings.btw} onChange={e => handleChange('btw', e.target.value)} className="w-full px-3 py-2 border rounded-lg" />
                    </div>
                </div>

                <h2 className="font-bold text-lg text-primary border-b border-slate-100 pb-2 pt-4">Social Media</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-600 mb-1">Instagram URL</label>
                        <input type="text" value={settings.instagram} onChange={e => handleChange('instagram', e.target.value)} className="w-full px-3 py-2 border rounded-lg" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-600 mb-1">Facebook URL</label>
                        <input type="text" value={settings.facebook} onChange={e => handleChange('facebook', e.target.value)} className="w-full px-3 py-2 border rounded-lg" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-600 mb-1">LinkedIn URL</label>
                        <input type="text" value={settings.linkedin} onChange={e => handleChange('linkedin', e.target.value)} className="w-full px-3 py-2 border rounded-lg" />
                    </div>
                </div>

                <div className="pt-6">
                    <button
                        onClick={handleSave}
                        disabled={saving}
                        className="w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-primary/90 flex items-center justify-center gap-2"
                    >
                        {saving && <Loader2 className="animate-spin w-5 h-5" />}
                        Opslaan
                    </button>
                </div>
            </div>
        </div>
    );
}
