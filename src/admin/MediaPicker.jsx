import { useState, useEffect } from 'react';
import { X, Upload, Check, Video } from 'lucide-react';

export default function MediaPicker({ onSelect, onClose }) {
    const [activeTab, setActiveTab] = useState('library'); // 'library' or 'upload'
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [externalUrl, setExternalUrl] = useState('');

    useEffect(() => {
        fetchMedia();
    }, []);

    const fetchMedia = async () => {
        try {
            const res = await fetch('/api/media');
            const data = await res.json();
            setFiles(data || []);
        } catch (err) {
            console.error("Failed to load media", err);
        } finally {
            setLoading(false);
        }
    };

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setUploading(true);
        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await fetch('/api/media', {
                method: 'POST',
                body: formData
            });
            const data = await res.json();
            // Add new file to list and select it
            setFiles(prev => [{ key: data.key, uploaded: new Date().toISOString() }, ...prev]);
            setActiveTab('library');
        } catch (err) {
            alert("Upload mislukt");
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[80vh] flex flex-col shadow-2xl">
                <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                    <div className="flex gap-4">
                        <button
                            onClick={() => setActiveTab('library')}
                            className={`text-sm font-bold pb-1 ${activeTab === 'library' ? 'text-primary border-b-2 border-primary' : 'text-slate-400'}`}
                        >
                            Bibliotheek
                        </button>
                        <button
                            onClick={() => setActiveTab('upload')}
                            className={`text-sm font-bold pb-1 ${activeTab === 'upload' ? 'text-primary border-b-2 border-primary' : 'text-slate-400'}`}
                        >
                            Uploaden
                        </button>
                        <button
                            onClick={() => setActiveTab('external')}
                            className={`text-sm font-bold pb-1 ${activeTab === 'external' ? 'text-primary border-b-2 border-primary' : 'text-slate-400'}`}
                        >
                            Externe URL
                        </button>
                    </div>
                    <button onClick={onClose}><X className="w-5 h-5 text-slate-400 hover:text-slate-600" /></button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 bg-slate-50">
                    {activeTab === 'library' && (
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {loading ? <p>Laden...</p> : files.map((file) => (
                                <div
                                    key={file.key}
                                    onClick={() => onSelect(`/api/media-proxy/${file.key}`)}
                                    className="aspect-square bg-slate-200 rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-primary relative group"
                                >
                                    {/* Basic check for image extension, otherwise show icon */}
                                    {file.key.match(/\.(jpg|jpeg|png|webp|gif)$/i) ? (
                                        <img src={`/api/media-proxy/${file.key}`} alt={file.key} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="flex items-center justify-center h-full text-slate-400">
                                            <Video className="w-8 h-8" />
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                                    <p className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-[10px] p-1 truncate">{file.key}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'upload' && (
                        <div className="flex items-center justify-center h-64 border-2 border-dashed border-slate-300 rounded-xl">
                            <label className="cursor-pointer flex flex-col items-center gap-2 text-slate-500 hover:text-primary transition-colors">
                                <Upload className="w-8 h-8" />
                                <span className="font-medium">Klik om te uploaden</span>
                                <input type="file" className="hidden" onChange={handleFileUpload} disabled={uploading} />
                            </label>
                            {uploading && <p className="ml-4">Bezig...</p>}
                        </div>
                    )}

                    {activeTab === 'external' && (
                        <div className="p-4">
                            <label className="block text-sm font-medium text-slate-700 mb-2">Video / Afbeelding URL</label>
                            <input
                                type="text"
                                value={externalUrl}
                                onChange={(e) => setExternalUrl(e.target.value)}
                                placeholder="https://youtube.com/..."
                                className="w-full px-4 py-2 rounded-lg border border-slate-200 mb-4"
                            />
                            <button
                                onClick={() => onSelect(externalUrl)}
                                className="bg-primary text-white px-6 py-2 rounded-lg font-bold"
                            >
                                Gebruiken
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
