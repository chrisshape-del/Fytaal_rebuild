import { useState, useEffect } from 'react';
import { Save, Eye, Loader2, Image as ImageIcon, Plus, Trash2, ChevronDown, ChevronRight } from 'lucide-react';
import MediaPicker from './MediaPicker';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

// Recursive Field Renderer
const FieldRenderer = ({ label, value, onChange, onMediaClick, level = 0, template }) => {
    const [expanded, setExpanded] = useState(true);

    // 1. Handle Objects (Nested Sections)
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        return (
            <div className={`mb-4 ${level > 0 ? 'ml-4 border-l-2 border-slate-100 pl-4' : ''}`}>
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="flex items-center gap-2 w-full text-left font-bold text-slate-700 hover:text-primary py-2 outline-none focus:text-primary"
                >
                    {expanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                    <span className="capitalize">{label.replace(/_/g, ' ')}</span>
                </button>

                {expanded && (
                    <div className="space-y-4 pt-2">
                        {Object.entries(value).map(([key, val]) => (
                            <FieldRenderer
                                key={key}
                                label={key}
                                value={val}
                                onChange={(newValue) => {
                                    onChange({ ...value, [key]: newValue });
                                }}
                                onMediaClick={onMediaClick}
                                level={level + 1}
                                template={template?.[key]}
                            />
                        ))}
                    </div>
                )}
            </div>
        );
    }

    // 2. Handle Arrays (Lists)
    if (Array.isArray(value)) {
        return (
            <div className={`mb-4 ${level > 0 ? 'ml-4 border-l-2 border-slate-100 pl-4' : ''}`}>
                <div className="flex items-center justify-between py-2">
                    <span className="font-bold text-slate-700 capitalize">{label.replace(/_/g, ' ')} ({value.length})</span>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                            // Clone the first item structure or create an empty object if empty
                            let newItem = {};
                            if (value.length > 0) {
                                newItem = JSON.parse(JSON.stringify(value[0]));
                            } else if (template && Array.isArray(template) && template.length > 0) {
                                newItem = JSON.parse(JSON.stringify(template[0]));
                            }

                            // Reset values in new item (keep keys)
                            const resetValues = (obj) => {
                                Object.keys(obj).forEach(k => {
                                    if (typeof obj[k] === 'string') obj[k] = "";
                                    else if (Array.isArray(obj[k])) obj[k] = []; // Reset arrays to empty
                                    else if (typeof obj[k] === 'object' && obj[k] !== null) resetValues(obj[k]);
                                });
                            };
                            resetValues(newItem);

                            onChange([...value, newItem]);
                        }}
                        className="h-8"
                        title="Item toevoegen"
                    >
                        <Plus className="w-4 h-4 mr-1" /> Toevoegen
                    </Button>
                </div>

                <div className="space-y-4">
                    {value.map((item, index) => (
                        <Card key={index} className="relative p-4 group">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => {
                                    const newArray = value.filter((_, i) => i !== index);
                                    onChange(newArray);
                                }}
                                className="absolute top-2 right-2 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8"
                                title="Verwijderen"
                            >
                                <Trash2 className="w-4 h-4" />
                            </Button>

                            <div className="pr-6">
                                <FieldRenderer
                                    label={`Item ${index + 1}`}
                                    value={item}
                                    onChange={(newValue) => {
                                        const newArray = [...value];
                                        newArray[index] = newValue;
                                        onChange(newArray);
                                    }}
                                    onMediaClick={onMediaClick}
                                    level={level + 1}
                                    template={template?.[0]}
                                />
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        );
    }

    // 3. Handle Strings (Text & Media)
    const isMedia = label.toLowerCase().includes('image') || label.toLowerCase().includes('video') || label.toLowerCase().includes('photo') || label.toLowerCase().includes('src');
    const isLongText = typeof value === 'string' && value.length > 60;

    return (
        <div className="mb-4">
            <Label className="block mb-2 capitalize text-slate-600">
                {label.replace(/([A-Z])/g, ' $1').trim()}
            </Label>

            {isMedia ? (
                <div className="space-y-3">
                    {value ? (
                        <div className="relative group w-full aspect-video bg-slate-100 rounded-lg overflow-hidden border border-slate-200">
                            {value.match(/\.(mp4|webm|mov)$/i) ? (
                                <video src={value} className="w-full h-full object-cover" muted loop playsInline />
                            ) : value.includes('youtube.com/embed') ? (
                                <iframe
                                    src={value}
                                    className="w-full h-full"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                    title="Video preview"
                                />
                            ) : (
                                <>
                                    <img
                                        src={value}
                                        alt="Preview"
                                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                                        onError={(e) => {
                                            // If the URL uses /api/media-proxy/, try direct path as fallback
                                            if (value.includes('/api/media-proxy/') && !e.target.dataset.triedFallback) {
                                                e.target.dataset.triedFallback = 'true';
                                                e.target.src = '/' + value.split('/api/media-proxy/')[1];
                                                return;
                                            }
                                            e.target.style.display = 'none';
                                            e.target.nextElementSibling.style.display = 'flex';
                                        }}
                                    />
                                    {/* Fallback for broken image */}
                                    <div className="hidden absolute inset-0 flex-col items-center justify-center bg-slate-100 text-slate-400">
                                        <ImageIcon className="w-12 h-12 opacity-20 mb-2" />
                                        <span className="text-xs font-medium">Preview niet beschikbaar</span>
                                        <span className="text-[10px] opacity-70 px-4 text-center mt-1 truncate w-full">{value}</span>
                                    </div>
                                </>
                            )}

                            {/* Overlay Actions */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                <Button
                                    variant="secondary"
                                    size="sm"
                                    onClick={() => onMediaClick(onChange)}
                                    className="gap-2"
                                >
                                    <ImageIcon className="w-4 h-4" /> Wijzigen
                                </Button>
                                <Button
                                    variant="destructive"
                                    size="sm"
                                    onClick={() => onChange('')}
                                    title="Verwijder media"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </Button>
                            </div>

                            {/* URL Badge */}
                            <div className="absolute bottom-2 left-2 max-w-[80%]">
                                <span className="bg-black/70 text-white text-[10px] px-2 py-1 rounded-full truncate block backdrop-blur-sm">
                                    {value.split('/').pop()}
                                </span>
                            </div>
                        </div>
                    ) : (
                        <Button
                            variant="outline"
                            className="w-full h-32 border-dashed border-2 flex flex-col gap-2 text-slate-400 hover:text-primary hover:border-primary hover:bg-primary/5 transition-all"
                            onClick={() => onMediaClick(onChange)}
                        >
                            <div className="p-3 bg-slate-100 rounded-full group-hover:bg-primary/10 transition-colors">
                                <ImageIcon className="w-6 h-6" />
                            </div>
                            <span className="font-medium">Media Selecteren</span>
                        </Button>
                    )}
                </div>
            ) : isLongText ? (
                <Textarea
                    value={value || ''}
                    onChange={(e) => onChange(e.target.value)}
                    rows={4}
                />
            ) : (
                <Input
                    type="text"
                    value={value || ''}
                    onChange={(e) => onChange(e.target.value)}
                />
            )}
        </div>
    );
};

export default function PageEditor({ pageId, initialStructure }) {
    console.log("PageEditor render. pageId:", pageId);
    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    // Media Picker State
    const [mediaPickerOpen, setMediaPickerOpen] = useState(false);
    const [activeMediaCallback, setActiveMediaCallback] = useState(null);

    useEffect(() => {
        fetchContent();
    }, [pageId]);

    // Deep Merge Utility
    const deepMerge = (target, source) => {
        const output = { ...target };
        if (isObject(target) && isObject(source)) {
            Object.keys(source).forEach(key => {
                if (isObject(source[key])) {
                    if (!(key in target)) {
                        Object.assign(output, { [key]: source[key] });
                    } else {
                        output[key] = deepMerge(target[key], source[key]);
                    }
                } else {
                    Object.assign(output, { [key]: source[key] });
                }
            });
        }
        return output;
    };

    const isObject = (item) => {
        return (item && typeof item === 'object' && !Array.isArray(item));
    }

    const fetchContent = async () => {
        if (!pageId) return;
        setLoading(true);
        try {
            console.log(`Fetching /api/content/${pageId}`);
            const res = await fetch(`/api/content/${pageId}`);

            let data = null;
            if (res.ok) {
                data = await res.json();
            }

            if (data) {
                // Deep merge DB data with initial structure
                // Priorities: DB data overwrites Initial Structure, but Initial Structure defaults are kept if missing in DB
                setContent(deepMerge(initialStructure, data));
            } else {
                // If no data in DB, use initial structure
                setContent(initialStructure);
            }
        } catch (err) {
            console.error("Failed to load content", err);
            setContent(initialStructure);
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async () => {
        setSaving(true);
        try {
            await fetch(`/api/content/${pageId}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(content)
            });
            alert("Succesvol opgeslagen!");
        } catch (err) {
            alert("Fout bij opslaan: " + err.message);
        } finally {
            setSaving(false);
        }
    };

    const handleMediaClick = (callback) => {
        setActiveMediaCallback(() => callback);
        setMediaPickerOpen(true);
    };

    const handleMediaSelect = (url) => {
        if (activeMediaCallback) {
            activeMediaCallback(url);
        }
        setMediaPickerOpen(false);
        setActiveMediaCallback(null);
    };

    if (loading) return <div className="flex items-center justify-center h-full"><Loader2 className="animate-spin text-primary" /></div>;

    return (
        <div className="max-w-4xl mx-auto pb-20">
            <div className="flex items-center justify-between mb-8 sticky top-0 bg-white/80 backdrop-blur-md p-4 rounded-xl z-40 border-b border-slate-100 shadow-sm">
                <h1 className="text-2xl font-bold text-slate-800 capitalize">Bewerken: {pageId}</h1>
                <div className="flex gap-3">
                    <Button variant="outline" className="gap-2">
                        <Eye className="w-4 h-4" /> Preview
                    </Button>
                    <Button
                        onClick={handleSave}
                        disabled={saving}
                        className="gap-2"
                    >
                        {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                        Opslaan
                    </Button>
                </div>
            </div>

            <Card className="p-6">
                {content ? (
                    Object.entries(content).map(([key, value]) => (
                        <FieldRenderer
                            key={key}
                            label={key}
                            value={value}
                            onChange={(newValue) => setContent(prev => ({ ...prev, [key]: newValue }))}
                            onMediaClick={handleMediaClick}
                            level={0}
                            template={initialStructure?.[key]}
                        />
                    ))
                ) : (
                    <div className="text-center py-12 text-slate-400">Geen content structuur gevonden.</div>
                )}
            </Card>

            {mediaPickerOpen && (
                <MediaPicker
                    onSelect={handleMediaSelect}
                    onClose={() => setMediaPickerOpen(false)}
                />
            )}
        </div>
    );
}
