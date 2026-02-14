import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Lock, CheckCircle } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card';

export default function ChangePassword() {
    const [passwords, setPasswords] = useState({ new: '', confirm: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleChange = async (e) => {
        e.preventDefault();
        setError('');

        if (passwords.new.length < 8) {
            setError('Wachtwoord moet minimaal 8 tekens lang zijn');
            return;
        }

        if (passwords.new !== passwords.confirm) {
            setError('Wachtwoorden komen niet overeen');
            return;
        }

        setLoading(true);

        try {
            const res = await fetch('/api/adminAuth', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    action: 'changePassword',
                    newPassword: passwords.new
                })
            });

            const data = await res.json();

            if (res.ok && data.success) {
                setSuccess(true);
                setTimeout(() => {
                    navigate('/admin');
                }, 2000);
            } else {
                setError(data.error || 'Wachtwoord wijzigen mislukt');
            }
        } catch (err) {
            setError('Er ging iets mis');
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
                <Card className="w-full max-w-md text-center p-6 shadow-xl border-green-100">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle size={32} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">Wachtwoord gewijzigd!</h2>
                    <p className="text-slate-500">Je wordt doorgestuurd naar het dashboard...</p>
                </Card>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
            <Card className="w-full max-w-md shadow-xl border-slate-100">
                <CardHeader className="space-y-1 text-center">
                    <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                            <Lock size={24} />
                        </div>
                    </div>
                    <CardTitle className="text-2xl font-bold">Wachtwoord veranderen</CardTitle>
                    <CardDescription>Stel een nieuw veilig wachtwoord in.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleChange} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="new-password">Nieuw wachtwoord</Label>
                            <div className="relative">
                                <Input
                                    id="new-password"
                                    type={showPassword ? "text" : "password"}
                                    value={passwords.new}
                                    onChange={(e) => setPasswords({ ...passwords, new: e.target.value })}
                                    className="pr-10"
                                    placeholder="••••••••"
                                    required
                                    minLength={8}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="confirm-password">Bevestig wachtwoord</Label>
                            <Input
                                id="confirm-password"
                                type={showPassword ? "text" : "password"}
                                value={passwords.confirm}
                                onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
                                placeholder="••••••••"
                                required
                                minLength={8}
                            />
                        </div>

                        {error && <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg font-medium border border-red-100">{error}</div>}

                        <Button
                            type="submit"
                            disabled={loading}
                            className="w-full font-bold shadow-lg shadow-primary/20"
                        >
                            {loading ? 'Bezig...' : 'Wachtwoord Instellen'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
